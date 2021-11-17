import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed"
import "./App.css"

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="48bc119a-a53e-495a-b433-74a52acc6c48"
            userName="charlie"
            userSecret="123123"
            renderChatFeed={(chatFeedProps) => <ChatFeed {...chatFeedProps} />}
        />
    )
}

export default App