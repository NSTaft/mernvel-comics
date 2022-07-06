import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

function AuthPage({ setUser }) {
  return (
    <main>
      <h1>MERNvel Comics</h1>
      <h2>Sign Up Now!
      <SignUpForm setUser={setUser} />
      </h2>
      <h2> Login Now!
        <LoginForm setUser={setUser} />
      </h2>
    </main>
  );
}

export default AuthPage