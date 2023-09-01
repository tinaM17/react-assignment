import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import LoginPage from './LoginPage/LoginPage'

function App() {
  /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

  return (
    <>
      <LoginPage />
    </>
  )
}

export default App
