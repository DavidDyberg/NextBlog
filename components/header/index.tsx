import * as Styles from '@/components/header/Styles.header'
import { Button } from '@/styles/button'

const Header = () => {
    return (
        <Styles.Header>
            <Styles.Title>NextBlog</Styles.Title>
            <Button $primary>Login</Button>
        </Styles.Header>
    )
}

export default Header