# Builds the two single-file WordPress versions from the live source files.
#   wordpress.html      -> CSS + JS inline, images with absolute URLs
#   wordpress-full.html -> same, plus every image embedded as base64
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$base = 'https://canabluepuntacana.github.io/single-1-rooftop-residence'
$utf8 = New-Object Text.UTF8Encoding $false

# ---------- stage 1: inline CSS + JS, absolute asset URLs ----------
$html = [IO.File]::ReadAllText((Join-Path $root 'index.html'))
$css  = [IO.File]::ReadAllText((Join-Path $root 'styles.css'))
$js   = [IO.File]::ReadAllText((Join-Path $root 'app.js'))

$html = [regex]::Replace($html, '<link rel="stylesheet" href="styles[^"]*\.css">', { param($m) "<style>`n$css`n</style>" })
$html = [regex]::Replace($html, '<script src="app[^"]*\.js" defer></script>', { param($m) "<script>`n$js`n</script>" })
$html = $html -replace '(src|href|srcset)="assets/', ('$1="' + $base + '/assets/')
$html = $html -replace '(src|href|srcset)="agent/', ('$1="' + $base + '/agent/')
$html = $html -replace 'href="site\.webmanifest"', ('href="' + $base + '/site.webmanifest"')
[IO.File]::WriteAllText((Join-Path $root 'wordpress.html'), $html, $utf8)
Write-Host 'wordpress.html built.'

# ---------- stage 2: embed every displayed image as base64 ----------
$full = $html
$q = [char]39
$full = $full.Replace($q + 'assets/', $q + $base + '/assets/')
$full = $full.Replace('"assets/', '"' + $base + '/assets/')

$map = @{
  "$base/assets/img/espacio-Foto-Real-01.webp"   = 'assets\img\espacio-Foto-Real-01.webp|image/webp'
  "$base/assets/img/cocina-Foto-Real-01.webp"    = 'assets\img\cocina-Foto-Real-01.webp|image/webp'
  "$base/assets/img/cocina-Foto-Real-02.webp"    = 'assets\img\cocina-Foto-Real-02.webp|image/webp'
  "$base/assets/img/desayunador-Foto-Real.webp"  = 'assets\img\desayunador-Foto-Real.webp|image/webp'
  "$base/assets/img/habitacion-Foto-Real-01.webp"= 'assets\img\habitacion-Foto-Real-01.webp|image/webp'
  "$base/assets/img/habitacion-Foto-Real-02.webp"= 'assets\img\habitacion-Foto-Real-02.webp|image/webp'
  "$base/assets/img/logo.png"                    = 'assets\img\logo.png|image/png'
  "$base/assets/img/logo.webp"                   = 'assets\img\logo.webp|image/webp'
  "$base/assets/img/favicon.png"                 = 'assets\img\favicon.png|image/png'
  "$base/agent/MG_2039-Edit-700x700.jpg"         = 'agent\MG_2039-Edit-700x700.jpg|image/jpeg'
  "$base/assets/img/agent-pamela.webp"           = 'assets\img\agent-pamela.webp|image/webp'
}
foreach ($k in $map.Keys) {
  $rel, $mime = $map[$k] -split '\|'
  $b64 = [Convert]::ToBase64String([IO.File]::ReadAllBytes((Join-Path $root $rel)))
  $full = $full.Replace($k, 'data:' + $mime + ';base64,' + $b64)
}
[IO.File]::WriteAllText((Join-Path $root 'wordpress-full.html'), $full, $utf8)
Write-Host 'wordpress-full.html built.'
