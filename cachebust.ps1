# Cache-busting for static hosting (GitHub Pages has no custom headers).
# Copies styles.css / app.js to content-hashed filenames (styles.HASH.css)
# and updates index.html references, so browsers NEVER reuse old CSS/JS.
# Run before every push:  powershell -ExecutionPolicy Bypass -File .\cachebust.ps1
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root

function Update-Asset($base, $ext) {
  $src = Join-Path $root "$base.$ext"
  if (!(Test-Path $src)) { Write-Host "Missing $src"; return }
  $hash = (Get-FileHash $src -Algorithm MD5).Hash.Substring(0, 8).ToLower()
  $new = "$base.$hash.$ext"
  Get-ChildItem -Path $root -Filter "$base.*.$ext" |
    Where-Object { $_.Name -ne "$base.$ext" -and $_.Name -ne $new } |
    Remove-Item -Force
  Copy-Item $src (Join-Path $root $new) -Force
  $index = Join-Path $root 'index.html'
  $html = [IO.File]::ReadAllText($index)
  $pat = [regex]::Escape($base) + '(\.[0-9a-f]{8})?\.' + [regex]::Escape($ext) + '(\?v=[0-9]+)?'
  $html = [regex]::Replace($html, $pat, $new)
  [IO.File]::WriteAllText($index, $html)
  Write-Host "$base.$ext -> $new"
}

Update-Asset 'styles' 'css'
Update-Asset 'app' 'js'
Write-Host 'OK - commit and push to publish with fresh cache.'
