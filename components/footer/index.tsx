import * as Styles from '@/components/footer/Styles.footer'
import { Copyright } from 'lucide-react';

const Footer = () => {
    return (
        <Styles.Footer>
            <Styles.CopyrightText>
                <Copyright size={16} /> 2024 | David Dyberg
            </Styles.CopyrightText>
        </Styles.Footer>
    )
}

export default Footer