import { link as defaultLink } from 'gatsby-theme-docz/src/components/NavLink/styles'
export * from 'gatsby-theme-docz/src/components/NavLink/styles'

export const link = {
    ...defaultLink,
    ':hover': {
        color: 'sidebar.navLinkActive',
    },
    '&.active':{
        color: 'sidebar.navLinkActive',
    }
}