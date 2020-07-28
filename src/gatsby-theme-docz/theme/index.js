import baseTheme from 'gatsby-theme-docz/src/theme/index'
import githubTheme from 'typography-theme-github'
import { merge } from 'lodash/fp'
import { toTheme } from '@theme-ui/typography'
export * from 'gatsby-theme-docz/src/theme/styles'

const defaultTheme = merge(baseTheme, toTheme(githubTheme))

export default merge(defaultTheme, {
  colors: {
    text: '#000',
    muted: '#586069',
    header: {
      bg: 'white',
    }
  },
})