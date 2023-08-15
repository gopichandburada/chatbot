import IncomingChatBox from "../IncomingChatBox/IncomingChatBox";
import OutgoingChatbox from "../OutgoingChatBox/OutgoingChatbox";

const ChatBox = ()=>{
    return (
        <ul className="chatbox">
                <IncomingChatBox/>
                <OutgoingChatbox/>
        </ul>

    )
}
export default ChatBox;