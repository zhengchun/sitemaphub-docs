import { wrapper as defaultWrapper, innerContainer as defaultInnerContainer } from 'gatsby-theme-docz/src/components/Header/styles'
import { media } from 'gatsby-theme-docz/src/theme/breakpoints'
import * as mixins from 'gatsby-theme-docz/src/utils/mixins'
export * from 'gatsby-theme-docz/src/components/Header/styles'

export const wrapper = {
    ...defaultWrapper,
    borderBottom: 0,
}

export const innerContainer = {
    ...defaultInnerContainer,
    height: 64,
    borderBottom:"1px solid #eee"
}

export const navList = {
    display: 'flex',
    justifyContent: 'flex-end',
    flex: 'auto',

    [media.mobile]: {
        display: 'none',
    }
}


export const navItem = {
    display: 'flex',
    ml: 4,
    flexWrap: 'nowrap',
    alignItems: 'center',
    alignSelf: 'stretch',
}

export const navLink = {
    color: 'text',
    textDecoration: 'none',
    fontSize:'14px',
    ':hover': {
        color: 'link'
    }
}

export const navCollapse = {
    display: 'none',
    justifyContent: 'flex-end',
    flex: 'auto',
    [media.mobile]: {
        display: 'flex'
    }
}

export const menuButton = {
    ...mixins.ghostButton,
    ...mixins.centerAlign,
    height: 24,
    width: 24,
    borderRadius: 'radius',
    transition: 'background-color .2s ease',
}

export const menuIcon = ({ open }) => ({
    ...mixins.centerAlign,
    width: '100%',
    height: '100%',
    flexDirection: 'column-reverse',

    '&::before,&::after': {
        content: `''`,
        display: 'block',
        height: '1px',
        width: '22px',
        backgroundColor: '#1b1f23',
        transition: 'transform .15s ease',
    },
    '&::before': {
        transform: open ? 'translateY(-1px) rotate(45deg)' : 'translateY(4px) rotate(0)',
    },
    '&::after': {
        transform: open ? 'translateY(0) rotate(-45deg)' : 'translateY(-4px) rotate(0)',
    }
})
