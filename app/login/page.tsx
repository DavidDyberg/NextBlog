import * as Styles from '@/app/create-post/Styles.createPost'
import { Button } from '@/styles/button'

export default function Login() {
    return(
        <div>
            <Styles.Title>Login</Styles.Title>
      <Styles.Form>
        <Styles.Input type="email" placeholder="Email" required />
        <Styles.Input type="text" placeholder="Username" required />
        <Styles.Input type="password" placeholder="Password" required />
        <Button type="submit">Login</Button>
      </Styles.Form>
      </div>
    
    )
}