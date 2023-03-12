'use client'

import {Props} from "../model/models";
import {useSession} from "next-auth/react";
import {useCollection} from "react-firebase-hooks/firestore";
import {collection, orderBy, query} from "@firebase/firestore";
import {db} from "../firebase";
import {Message} from "./index";
import {ArrowDownIcon} from "@heroicons/react/20/solid";

function ChatScreen({id}: Props) {
    const {data: session} = useSession();
    const [messages] = useCollection(session &&
        query(collection(db, "users", session.user?.email as string, "chats", id, "messages"),
            orderBy("createdAt", "asc"))
    );
    return (
        <div className="flex-1 overflow-y-scroll">
            {
                messages?.empty && (
                    <>
                        <p className="pt-10 text-center text-white">
                            Type a prompt in below to get start
                        </p>
                        <ArrowDownIcon className="h-8 w-8 mx-auto mt-5 text-white animate-bounce"/>
                    </>
                )
            }
            {
                messages && messages.docs.length &&
                messages.docs.map(message => <Message messageId={message.id} message={message.data()}/>)
            }
        </div>
    );
}

export default ChatScreen;