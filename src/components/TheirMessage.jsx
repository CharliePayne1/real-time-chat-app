const TheirMessage = ({lastMessage, message}) => {
    const isFirstMessageByUSer = !lastMessage || lastMessage.sender.user !== message.sender.username
    console.log('their message', message)
    return (
        <div className="message-row">
            {isFirstMessageByUSer && (
            <div
                className="message-avatar"
                style={{backgroundImage: `url(${message?.sender?.avatar})`}}>

            </div>)}
            { message?.attachments?.length > 0 ? 
                ( <img src={message.attachments[0].file} 
                        alt="message_image"
                        className="message-image"
                        style={{ marginLeft: isFirstMessageByUSer ? '4px' : '48px' }}/>
                ) 
                : <div style={{ float: "left", backgroundColor: '#8e8e93' }}>
                    {message.text} 
                </div>
            }
        </div>
    )
}

export default TheirMessage