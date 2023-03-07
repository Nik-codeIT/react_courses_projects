import { useState } from 'react'

const Login = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
  })

  const onHandleSubmit = (event) => {
    event.preventDefault()

    console.log(data)
    alert(JSON.stringify(data))
  }

  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value })
  }
  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={onHandleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(ev) => handleInputChange(ev, 'username')}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(ev) => {
              handleInputChange(ev, 'password')
            }}
          />
        </label>
        <button>Login</button>
      </form>
    </>
  )
}

export default Login
