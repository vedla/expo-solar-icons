#!/usr/bin/env node
const { copyPackageAssets, spawnSyncWithAutoShell } = require('./util')
const fs = require('fs')
const path = require('path')

const SUBTARGETS = ['plugin', 'cli', 'utils', 'scripts']
const args = process.argv.slice(2)
const target = args[0]

// TypeScript copies imported JSON files, but not Metro assets such as font files.
// Copy both runtime assets explicitly so watch and one-off builds behave the same.
copyPackageAssets()

let tscArgs
if (SUBTARGETS.includes(target)) {
  const targetDir = path.join(process.cwd(), target)
  if (!fs.existsSync(path.join(targetDir, 'tsconfig.json'))) {
    console.log(`tsconfig.json not found in ${target}, skipping build for ${target}`)
    process.exit(0)
  }
  tscArgs = ['--build', targetDir, ...args.slice(1)]
} else {
  tscArgs = [...args]
}

if (
  process.stdout.isTTY &&
  !process.env.CI &&
  !process.env.EXPO_NONINTERACTIVE &&
  !tscArgs.includes('--watch')
) {
  tscArgs.push('--watch')
}

const result = spawnSyncWithAutoShell('tsc', tscArgs, { stdio: 'inherit' })
process.exit(result.status ?? 0)
