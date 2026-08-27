import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/icons.ts', 'src/index.ts', 'src/SolarIcons.ts'],

  dts: true,
  unbundle: true,
  exports: true,
  shims: true,
  minify: true,
  sourcemap: true,
  treeshake: true,
  platform: 'node',
  deps: {
    neverBundle: ['@react-native-vector-icons/fontello'],
  },
  loader: {
    '.ttf': 'asset',
  },
})
