const { spawnSync } = require('child_process')
const fs = require('fs')
const path = require('path')

// On Windows, executables like `tsc` and `jest` are `.cmd` batch files and cannot be
// spawned directly — they require shell: true to resolve. On Unix, shell: true is
// unnecessary.
function spawnSyncWithAutoShell(command, args, options) {
  return spawnSync(command, args, { ...options, shell: process.platform === 'win32' })
}

function copyPackageAssets() {
  const assets = [
    ['src/solar-icons/config.json', 'dist/solar-icons/config.json'],
    ['src/solar-icons/font/solar-icons.ttf', 'dist/solar-icons/font/solar-icons.ttf'],
  ]

  for (const [source, destination] of assets) {
    const sourcePath = path.join(process.cwd(), source)
    const destinationPath = path.join(process.cwd(), destination)
    fs.mkdirSync(path.dirname(destinationPath), { recursive: true })
    fs.copyFileSync(sourcePath, destinationPath)
  }
}

module.exports = { copyPackageAssets, spawnSyncWithAutoShell }
