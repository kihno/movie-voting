import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "./utils/config"

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        //login
        try {
            await auth.register({ email, password })
        } catch (error) {
            alert('error logging in')
            console.error(error)
            return
        }

        navigate('/')
    }

    return (
        <div>
          <h1>Signup</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Signup</button>
          </form>
        </div>
      )
}

export default Signup