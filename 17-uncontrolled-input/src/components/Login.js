const Login = () => {
  const onHandleSubmit = (event) => {
    event.preventDefault()
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    console.log(data)
    alert(JSON.stringify(data))
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={onHandleSubmit}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button>Login</button>
      </form>
    </>
  )
}

export default Login
