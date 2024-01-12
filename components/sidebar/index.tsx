import * as Styles from '@/components/sidebar/Styles.sidebar'
import Link from 'next/link'

const SideBar = () => {
    return (
        <Styles.SidebarContainer>
            <Link href="/">
              <Styles.SidebarItem $primary>Blog</Styles.SidebarItem>
            </Link>
            <Link href="/about">
              <Styles.SidebarItem $primary>About</Styles.SidebarItem>
            </Link>
            <Link href="/create-post">
              <Styles.SidebarItem $primary>Create Post</Styles.SidebarItem>
            </Link>
            <Link href="/login">
              <Styles.SidebarItem $primary>Login</Styles.SidebarItem>
            </Link>
        </Styles.SidebarContainer>
    )
}

export default SideBar