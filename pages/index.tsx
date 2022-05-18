import type { NextPage } from 'next'
import { useSession, signIn, signOut } from 'next-auth/react'

const Home: NextPage = () => {
  const { data: session } = useSession()
  console.log('session: ', session)
  if (session) {
    return (
      <>
        Signed in as {session.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export default Home
