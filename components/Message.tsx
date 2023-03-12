'use client'

import {DocumentData} from "@firebase/firestore";

type Props = {
    messageId: string,
    message: DocumentData
}

function Message({messageId, message}: Props) {
    const isChatGPT = message.user.name === "ChatGPT";

    return (
        <div className={`py-5 ${isChatGPT && "bg-[#434654]"}`}>
            <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
                <img className="h-8 w-8 rounded-full" src={message.user.avatar} alt={message.user.name}/>
                <p className="pt-1 text-small text-white">
                    {message.text}
                </p>
            </div>
        </div>
    );
}

export default Message;