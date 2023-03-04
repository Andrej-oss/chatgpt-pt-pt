import {ChatInput, ChatScreen} from "../../../components/index";
import {Props} from "../../../model/models";

function  ChatPage({ id }: Props) {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <ChatScreen id={id} />
            <ChatInput id={id}/>
        </div>
    );
}

export default ChatPage;