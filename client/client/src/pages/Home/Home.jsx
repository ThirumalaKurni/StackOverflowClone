import React from "react";
import '../../App.css'
import LeftSidebar from "../../component/LeftSidebar/LeftSidebar";
import RightSidebar from "../../component/RightSidebar/RightSidebar";
import HomeMainbar from "../../component/HomeMainbar/HomeMainbar";
import messageicon from "../../assets/vector-message-icon.jpg";
import { useState } from "react";

const Home = () => {
    const [chatbot,setChatbot] = useState(false);
    return(
        <div className="home-container-1">
            <LeftSidebar />
            <div className="home-container-2">
                <HomeMainbar />
                <RightSidebar />
                <button style = {{border :"none" , background : 'none' }} className="messageIcon"  onClick={() => {setChatbot(!chatbot)}}>

                <img src={messageicon} alt="chatbot" width = "40"  />
                </button>

                {

                chatbot && (
                    <iframe
                        allow="microphone;"
                        title="This is a unique title"
                        width="350"
                        height="430"
                        src="https://console.dialogflow.com/api-client/demo/embedded/c0e53787-74ed-4451-893d-82f6bc9bfeaa">
                    </iframe>
                )
                }
                
            </div>

        </div>
    )
}

export default Home;