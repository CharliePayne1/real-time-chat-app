import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed"
import LoginForm from "./components/LoginForm";
import "./App.css"

const App = () => {

    const logout = () => {
        console.log('removing username')
        localStorage.removeItem('username');
        window.location.reload();
    }

    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="48bc119a-a53e-495a-b433-74a52acc6c48"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatFeedProps) => <ChatFeed {...chatFeedProps} logout={logout}/>}
        />
    )
}

export default App