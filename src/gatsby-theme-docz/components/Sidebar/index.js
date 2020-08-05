/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React, { useState, useRef } from 'react'
import { Global } from '@emotion/core'
import { jsx, Box } from 'theme-ui'
import { useMenus, useCurrentDoc, useConfig } from 'docz'
import { NavLink } from 'gatsby-theme-docz/src/components/NavLink'
import { NavGroup } from 'gatsby-theme-docz/src/components/NavGroup'
import { LanguageSelector } from '../LanguageSelector'
import { getLang } from '../utils'

import * as styles from './styles'

export const Sidebar = React.forwardRef((props, ref) => {
  const { base } = useConfig()
  const currentDoc = useCurrentDoc()
  const currentDocRef = useRef()
  const [lang, setLang] = useState(getLang(currentDoc.filepath))

  const filter = (menu) => {
    if (!menu.route || lang === getLang(menu.filepath)) {
      return true
    }
    return false
  }

  const menus = useMenus({
    filter: filter
  })

  const changeLange = (lang) => {
    setLang(lang)
    if (lang == "en-us") {
      window.location = `${base}`
     } else {
       window.location = `${base}${lang}`
     }
  }

  return (
    <>
      <Box onClick={props.onClick} sx={styles.overlay(props)}>
        {props.open && <Global styles={styles.global} />}
      </Box>
      <Box ref={ref} sx={styles.wrapper(props)} data-testid="sidebar">
        {menus &&
          menus.map(menu => {
            if (!menu.route)
              return <NavGroup key={menu.id} item={menu} sidebarRef={ref} filter={filter} />
            if (menu.route === currentDoc.route) {
              return (
                <NavLink key={menu.id} item={menu} ref={currentDocRef}>
                  {menu.name}
                </NavLink>
              )
            }
            return (
              <NavLink key={menu.id} item={menu}>
                {menu.name}
              </NavLink>
            )
          })}
        <LanguageSelector
          lang={lang}
          onChange={(lang) => changeLange(lang)}
        />
      </Box>
    </>
  )
})
