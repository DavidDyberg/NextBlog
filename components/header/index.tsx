import * as Styles from '@/components/header/Styles.header'
import { Button } from '@/styles/button'
import Link from 'next/link'

const Header = () => {
    return (
        <Styles.Header>
            <Styles.Logo href='/'>NextBlog</Styles.Logo>
            <Link href='/login'>
                <Button $primary>Login</Button>
            </Link>
        </Styles.Header>
    )
}

export default Header