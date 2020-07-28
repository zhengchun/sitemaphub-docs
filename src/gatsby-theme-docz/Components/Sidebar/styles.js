import { wrapper as defaultWrapper, overlay as defaultOverlay } from 'gatsby-theme-docz/src/components/Sidebar/styles'
import { media } from 'gatsby-theme-docz/src/theme/breakpoints'

export const HEADER_HEIGHT = 65

export const overlay = ({ open }) => ({
    ...defaultOverlay({ open }),
    top: HEADER_HEIGHT,
})

export const wrapper = ({ open }) => ({
    ...defaultWrapper({ open }),
    borderRight: 0,
    [media.tablet]: {
        zIndex: 9999,
        display: 'block',
        position: 'fixed',
        top: HEADER_HEIGHT,
        left: 0,
        bottom: 0,
        width: 256,
        px: 4,
        bg: 'background',
        transition: 'transform .2s ease-out',
        transform: open ? 'translateX(0)' : 'translateX(-100%)',
    }
})

export * from 'gatsby-theme-docz/src/components/Sidebar/styles'
