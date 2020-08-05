import * as mixins from 'gatsby-theme-docz/src/utils/mixins'

export const wrapper = {
    marginTop: 64,

}


export const select = {
    display: 'inline-flex',
    height: 32,
    width: '50%',
    minWidth: 105,
    position: 'relative',
    border: '1px solid #eaeaea',
    fontSize: 12,
    textTransform: 'uppercase',
    borderRadius: 'radius',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    transition: 'border 0.2s,background 0.2s,color 0.2s ease-out, box-shadow 0.2s ease',

    ':hover': {
        borderColor: '#ddd',
        'svg': {
            stroke: '#000',
        }
    },
}

export const selectInput = {
    height: '100%',
    border: 'none',

    lineHeight: 22,
    fontSize: '12px',
    mr: -20,
    width: 'calc(100% + 20px)',
    padding: '0 20px 0 10px',
    textTransform: 'none',

    ':focus': {
        outline: 'none',
    }
}


export const selectInputArrow = {
    ...mixins.centerAlign,
    borderLeft: 'none',
    background: '#fff',
    width: 25,
    height: '100%',
    position: 'absolute',
    right: 0,
    pointerEvents: 'none',
    transition: 'border 0.2s',

    '&>svg': {
        stroke: '#999',
        transition: 'stroke 0.2s ease',
        strokeWidth: 0.1,
    }
}
