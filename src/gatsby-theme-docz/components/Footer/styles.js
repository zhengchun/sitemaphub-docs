import * as mixins from 'gatsby-theme-docz/src/utils/mixins'

export const footer = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 40,
    py: 24,
    fontSize: 1,
    borderTop: '1px solid #eaeaea',
    color: 'gray'
}

export const editButton = {
    ...mixins.centerAlign,
    textDecoration: 'none',
    color: 'primary',
}