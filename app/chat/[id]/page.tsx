import {ChatInput, ChatScreen} from "../../../components/index";
type Props = {
    params: {
        id: string
    }
}
function  ChatPage({ params: { id } }: Props) {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <ChatScreen id={id} />
            <ChatInput id={id}/>
        </div>
    );
}

export default ChatPage;