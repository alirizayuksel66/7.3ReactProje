import { useAuth } from "../../context/AuthContext"
import { useNavigate, useLocation } from "react-router-dom"
import { Helmet } from "react-helmet";


export default function Login() {
    
    const navigate = useNavigate()
    const location = useLocation()
    const { setUser } = useAuth()
    console.log(location)
    const loginHandle = () => {
        setUser({
            id: 1,
            usename: 'Ali Rıza Yüksel'
        })
        navigate(location?.return_url || '/',{
            replace: true,
            state: {
                name: 'Ali Rıza Yüksel'
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            Login Page <br></br>
            <button onClick={loginHandle}>Giriş Yap</button>
        </div>
    )
}