import createIconSetFromFontello from '@react-native-vector-icons/fontello'

import fontelloConfig from './solar-icons/config.json'
import fontSource from './solar-icons/font/solar-icons.ttf'

const SolarIcons = createIconSetFromFontello(
  fontelloConfig as Parameters<typeof createIconSetFromFontello>[0],
  {
    fontSource,
  }
)

export default SolarIcons
