# X-Theme
**Experimental** way to better deal with theming with React and styled components.

## Install it
`yarn add xtheme`

## Use it
```typescript jsx
import { createVariableSet, createGlobalTheme } from 'xtheme'

// Create types for the variable sets
// that you might have on your theme
type IColors = 'primaryDark' | 'primary' | 'primaryLight'
type IFontFamilies = 'sansSerif' | 'serif'
type IFontSize = 'XS' | 'S' | 'M' | 'L' | 'XL'

// Create the shape or your theme
const globalTheme = {
  color: createVariableSet<IColors>(),
  fontFamily: createVariableSet<IFontFamilies>(),
  fontSize: createVariableSet<IFontSize>(),
}

// Create a global theme component 
// by defining the values for the theme variables
const AppGlobalTheme = createGlobalTheme([
  // Colors
  [globalTheme.color.primaryLight, '#27a0ff'],
  [globalTheme.color.primary, '#0088ee'],
  [globalTheme.color.primaryDark, '#0061ac'],

  // Font families
  [globalTheme.fontFamily.sansSerif, 'helvetica, roboto, arial, sans-serif'],
  [globalTheme.fontFamily.serif, 'times new roman'],

  // Font sizes
  [globalTheme.fontSize.XS, units.px(11)],
  [globalTheme.fontSize.S, units.px(13)],
  [globalTheme.fontSize.M, units.px(16)],
  [globalTheme.fontSize.L, units.px(19)],
  [globalTheme.fontSize.XL, units.px(23)],
])

// Create a styled component and use the theme variables
const Title = styled.h1`
  font-family: ${globalTheme.fontFamily.serif};
  font-size: ${globalTheme.fontSize.XL};
`

const App = () => {
  return (
    <div>
      <AppGlobalTheme />
      ...
      <div>
        <Title>Hello world!</Title>
        ...
      </div>      
    </div>
  )
}
```



## License
MIT License
