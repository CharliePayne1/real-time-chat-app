const MyMessage = ({message}) => {
    if (message?.attachments?.length) {
        return (
            <img src={message.attachments[0].file} 
            alt="message_image"
            className="message-image"
            style={{ float: "right" }}/>
        )
    }
    return (
        <div 
            dangerouslySetInnerHTML={{__html: message.text}}
            className="message"
            style={{ float: "right", marginRight: "18px", background: "white", backgroundColor: '#5fc9f8' }}>
        </div>
    )
}

export default MyMessage