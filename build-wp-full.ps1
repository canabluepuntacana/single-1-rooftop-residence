# Builds wordpress-full.html: wordpress.html + all display images as base64 data URIs
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$base = 'https://canabluepuntacana.github.io/single-1-rooftop-residence'
$html = [IO.File]::ReadAllText((Join-Path $root 'wordpress.html'))
$q = [char]39
$html = $html.Replace($q + 'assets/', $q + $base + '/assets/')
$html = $html.Replace('"assets/', '"' + $base + '/assets/')
$map = @{
  "$base/assets/img/espacio-Foto-Real-01.webp" = 'assets\img\espacio-Foto-Real-01.webp|image/webp'
  "$base/assets/img/cocina-Foto-Real-01.webp" = 'assets\img\cocina-Foto-Real-01.webp|image/webp'
  "$base/assets/img/cocina-Foto-Real-02.webp" = 'assets\img\cocina-Foto-Real-02.webp|image/webp'
  "$base/assets/img/desayunador-Foto-Real.webp" = 'assets\img\desayunador-Foto-Real.webp|image/webp'
  "$base/assets/img/habitacion-Foto-Real-01.webp" = 'assets\img\habitacion-Foto-Real-01.webp|image/webp'
  "$base/assets/img/habitacion-Foto-Real-02.webp" = 'assets\img\habitacion-Foto-Real-02.webp|image/webp'
  "$base/assets/img/logo.png" = 'assets\img\logo.png|image/png'
  "$base/assets/img/logo.webp" = 'assets\img\logo.webp|image/webp'
  "$base/assets/img/favicon.png" = 'assets\img\favicon.png|image/png'
  "$base/agent/MG_2039-Edit-700x700.jpg" = 'agent\MG_2039-Edit-700x700.jpg|image/jpeg'
  "$base/assets/img/agent-pamela.webp" = 'assets\img\agent-pamela.webp|image/webp'
}
foreach ($k in $map.Keys) {
  $rel, $mime = $map[$k] -split '\|'
  $b64 = [Convert]::ToBase64String([IO.File]::ReadAllBytes((Join-Path $root $rel)))
  $html = $html.Replace($k, 'data:' + $mime + ';base64,' + $b64)
}
[IO.File]::WriteAllText((Join-Path $root 'wordpress-full.html'), $html, (New-Object Text.UTF8Encoding $false))
Write-Host 'wordpress-full.html built.'
