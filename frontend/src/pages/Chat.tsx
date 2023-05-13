import io from "socket.io-client";
import {useState} from 'react'
import {ChatPopup} from './ChatPopup'
import './chat.css'

  
export const Chat = ()=>{

    const [username,setUsername] = useState<string>("")
    const [roomId,setRoomId] = useState<string>("")
    const [showChat, setShowChat] = useState<boolean>(false);
    

    const socket = io("http://localhost:8000");



    const joinRoom = ()=>{
        
        if(username!=="" && roomId!==""){
            socket.emit("join_room",roomId)
            setShowChat(true)
        }
    }

    


    return (

        <div className="App">
            <div className="joinChatContainer">
                <h3>FITNESS CLUB</h3>
                <input
                    type="text"
                    placeholder="Username..."
                    onChange={(event) => {
                    setUsername(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Room ID"
                    onChange={(e)=>setRoomId(e.target.value)}
                />
                <button onClick={joinRoom}>Join A Room</button>
            </div>

            <ChatPopup username={username} roomId={roomId} socket={socket} />
    
        </div>

    )
}