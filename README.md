# @vedla/expo-solar-icons

Solar icons for React Native and Expo projects.

This package provides a simple, Expo-friendly icon set built from the Solar icon library, using the same API style as @expo/vector-icons.


# Documentation

- Comming Soon

# Installation

### Add the package to your dependencies

From GitHub (recommended for now)
```
npm install github:vedla/expo-solar-icons#v1.0.0
```
Or using yarn
```
yarn add github:vedla/expo-solar-icons#v1.0.0
```

# Usage

``` tsx
import { SolarIcon } from '@vedla/expo-solar-icons';

export default function Example() {
  return <SolarIcon name="home" size={24} color="black" />;
}
```

# Props

| Prop  |   Type    |    Description     |  Default  |
| :---: | :-------: | :----------------: | :-------: |
| name  |  string   |     Icon name      |     -     |
| size  |  number   |     Icon size      |  ``24``   |
| color |  string   |    Icon colour     | `inherit` |
| style | TextStyle | Additional styling |     -     |

# Requirements
  - Expo SDK 54+
  - React 19+
  - React Native 0.83+

# Future Improvements
  - SVG-based icons (tree-shakable, smaller bundle)
  - npm publishing
  - Interactive demo and documentation

# Author

Vedla Creative
code@vedla.ca