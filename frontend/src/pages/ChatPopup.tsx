import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import './chat.css'



interface MyComponentProps {
    username: string;
    roomId : string;
    socket: Socket;
}

interface messageInterface {
    room:string,
    author:string,
    message:string,
    time:string 
}


export const ChatPopup = (props: MyComponentProps)=>{

    const [currentMessage,setCurrentMessage] = useState<string>("")
    const [messageList,setMessageList] = useState<messageInterface[]>([])



    const sendMessage = async ()=>{
        let messageData = {
            room:props.roomId,
            author : props.username,
            message : currentMessage,
            time : new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()
        }

        props.socket.emit("send_message",messageData)
    }

    useEffect(()=>{
        props.socket.on("receive_message",(data)=>{
            setMessageList((list) => [...list, data]);
        })
    },[props.socket])

    
    return (
        <div className='chat-window' >
            <div className='chat-header' >
                <p>NUTRI FITNESS CLUB!</p>
            </div>
            <div className='chat-body' >
                {
                    messageList.map((el)=>{
                        return (
                            <div className='message' id={props.username==el.author?"you":"other"} >
                                <div>
                                    <div className='message-content' >
                                        <p>{el.message}</p>
                                    </div>
                                    <div className='message-meta' >
                                        <p style={{marginRight:'6px'}} >{el.time}  </p>
                                        <p style={{fontWeight:'700'}} >{el.author}</p>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='chat-footer' >
                <input type='text' style={{border:'3px solid yellow'}} placeholder='hey...' onChange={(e)=>setCurrentMessage(e.target.value)} />
                <button  style={{color:'white',backgroundColor:'green' , fontSize:'15px'}} onClick={sendMessage} >Send</button>
            </div>
        </div>
    )
}