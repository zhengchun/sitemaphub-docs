/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useConfig, useCurrentDoc } from 'docz'
import * as styles from './styles'

export const Footer = () => {
    const {
        themeConfig: { showMarkdownEditButton },
    } = useConfig()
    const { edit = true, ...doc } = useCurrentDoc()
    return (
        <footer sx={styles.footer}>
            <span>Last Edited on {new Date(doc["date"]).toDateString()}</span>
            {showMarkdownEditButton && edit && doc.link && (
                <a sx={styles.editButton} href={doc.link} rel="noopener noreferrer">Edit This Page on GitHub</a>
            )}
        </footer>
    )
}