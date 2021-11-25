import { useState } from "react/cjs/react.development"
import axios from "axios";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 
            "Project-ID": "48bc119a-a53e-495a-b433-74a52acc6c48",
            "User-Name": username,
            "User-Secret": password
        }

        try {
            await axios.get(
                'https://api.chatengine.io/chats', { headers: authObject}
                )

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            console.log('error: ', error);
            setError('Either your username or password is incorrect. Please try again')
            setTimeout(() => setError(''), 3000)
        }
    }

    return (
    <>
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Charlie's Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="username" property="required"/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="password" property="required"/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>login</span>
                        </button>
                    </div>
                    <div className="error">{error}</div>
                </form>
            </div>
            <a href="mailto:charliepayne1101@gmail.com" target="_blank" rel="noreferrer">
                <img src="https://cdn.icon-icons.com/icons2/2751/PNG/512/email_icon_176156.png" alt="email_icon" className="emailIcon"/>
            </a>
        </div>
    </>
    )
}

export default LoginForm;