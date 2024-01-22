import * as Styles from '@/components/sidebar/Styles.sidebar'
import Link from 'next/link'

const SideBar = () => {
    return (
        <Styles.SidebarContainer>
            <Link href="/">
              <Styles.SidebarItem>Home</Styles.SidebarItem>
            </Link>
            <Link href="/blog">
              <Styles.SidebarItem>Blog</Styles.SidebarItem>
            </Link>
            <Link href="/create-post">
              <Styles.SidebarItem>Create Post</Styles.SidebarItem>
            </Link>
            <Link href="/login">
              <Styles.SidebarItem>Login</Styles.SidebarItem>
            </Link>
        </Styles.SidebarContainer>
    )
}

export default SideBar