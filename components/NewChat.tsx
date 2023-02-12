'use client'

import {UserPlusIcon} from "@heroicons/react/20/solid";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import {addDoc, serverTimestamp, collection} from "@firebase/firestore";
import {db} from "../firebase";

const NewChat = (props) => {
    const router = useRouter();
    const { data: session } = useSession();
    const createNewChat = async () => {
        const doc = await addDoc(collection(db, "users", session?.user?.email as string, "chats"), {
            messages: [],
            userId: session?.user?.email as string,
            createdAt: serverTimestamp()
        });
        router.push(`/chat/${doc.id}`);
    }
    return (
        <div className="border-gray-700 border chat-row" onClick={createNewChat}>
            <UserPlusIcon className="h-4 w-4"/>
            <p>
                New Chat
            </p>
        </div>
    );
}

export default NewChat;