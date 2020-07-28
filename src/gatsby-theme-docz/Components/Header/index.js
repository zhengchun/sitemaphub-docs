/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Logo } from 'gatsby-theme-docz/src/components/Logo'
import { Github } from 'gatsby-theme-docz/src/components/Icons'
import * as styles from './styles'

export const Header = props => {
    const { onOpen } = props
    return (
        <div sx={styles.wrapper} data-testid="header">
            <Flex sx={styles.innerContainer}>
                <Logo />
                <div sx={styles.navList}>
                    <div sx={styles.navItem}><a sx={styles.navLink} href="https://sitemaphub.com/">SitemapHub</a></div>
                    <div sx={styles.navItem}><a sx={styles.navLink} href="https://sitemaphub.com/contact">Feedback</a></div>
                    <div sx={styles.navItem}><a sx={styles.navLink} href="https://github.com/sitemaphub/"><Github size={13} /> github</a></div>
                </div>
                <div sx={styles.navCollapse}>
                    <button sx={styles.menuButton} onClick={onOpen}>
                        <span sx={styles.menuIcon(props)}></span>
                    </button>
                </div>
            </Flex>
        </div>
    )
}
