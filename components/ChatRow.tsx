'use client'

import {ChatBubbleLeftIcon, TrashIcon} from "@heroicons/react/20/solid";
import {usePathname, useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import {useState, useEffect} from "react";
import {useCollection} from "react-firebase-hooks/firestore";
import {query, collection, orderBy, deleteDoc, doc} from "@firebase/firestore";
import {db} from "../firebase";

type Props = {
    id: string;
}

function ChatRow({ id }: Props) {
    const router = useRouter();
    const pathname = usePathname();
    const { data: session } = useSession();
    const [active, setActive] = useState(false);
    const [messages] = useCollection( session && query(
        collection(db, "users", session?.user?.email as string, "chats", id, "messages"),
        orderBy("createdAt", "asc")
    ));
    useEffect(() => {
        if (!pathname) return;

        setActive(pathname?.includes(id));
    }, [pathname])

    const deleteChat = async () => {
        await deleteDoc(doc(db, "users", session?.user?.email as string, "chats", id));
        router.replace("/");
    }

    return (
        <div onClick={() => router.push(`/chat/${id}`)} className={`chat-row justify-center ${active && 'bg-gray-700/50'}`}>
            <ChatBubbleLeftIcon className="h-5 w-5"/>
            <p className="flex-1 hidden md:inline-flex truncare">
                {messages?.docs[messages?.docs.length - 2]?.data()?.text.toString() || "New Chat"}
            </p>
            <TrashIcon className="h-5 w-5 text-gray-700 hover:text-red-500" onClick={deleteChat}/>
        </div>
    );
}

export default ChatRow;