// import React, { useEffect } from 'react';
// import {useState} from 'react'
// import { Socket } from 'socket.io-client';



// interface MyComponentProps {
//   username: string;
//   roomId : string;
//   socket: Socket;

// }
// export const ChatBox = (props: MyComponentProps)=>{

//     const [message,setMessage] = useState<string>("")

//     const sendMessage = async ()=>{
        
//         if(message !== ''){

//             const messageData = {
//                 roomId : props.roomId,
//                 author : props.username,
//                 message : message,
//                 time : new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()

//             }
//             await props.socket.emit("send_message",messageData)
//         }
//         setMessage("")
//     }


//     useEffect(()=>{
//         props.socket.on("recieve_message",(data)=>{
//             console.log("message",data)
//         })
//     },[props.socket])

//     return (
//         <div className='chat-window' >
//             <div className='chatheader' >
//                 Live Chat
//             </div>
                
//             <div className='chatbody' ></div>
//             <div className='chatfooter'>
//                 <input type='text' placeholder='Hey...' onChange={(e)=>setMessage(e.target.value)} />
//                 <button onClick={sendMessage} >send</button>
//             </div>
//         </div>
//     )
// }