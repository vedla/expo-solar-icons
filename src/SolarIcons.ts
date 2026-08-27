import { createIconSet } from '@react-native-vector-icons/common'

import fontelloConfig from './solar-icons/config.json'
import fontSource from './solar-icons/font/solar-icons.ttf'

const glyphMap = Object.fromEntries(fontelloConfig.glyphs.map(({ css, code }) => [css, code]))

const SolarIcons = createIconSet(glyphMap, {
  postScriptName: fontelloConfig.name,
  fontFileName: 'solar-icons.ttf',
  fontSource,
})

export default SolarIcons
