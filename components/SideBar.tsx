'use client';

import {ChatRow, NewChat} from "./index";
import {useSession, signOut} from "next-auth/react";
import {UserIcon} from "@heroicons/react/20/solid";
import {useCollection} from "react-firebase-hooks/firestore";
import {collection, orderBy, query} from "@firebase/firestore";
import {db} from "../firebase";

function SideBar() {
    const AUTHENTICATED = "authenticated";
    const { status, data: session } = useSession();
    const [ chats, loading, error ] = useCollection(
        session && query(collection(db, "users", session?.user?.email as string, "chats"), orderBy("createdAt", "asc"))
    );

    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div>
                    <NewChat/>
                    <div>
                        { status === AUTHENTICATED && chats?.docs
                            && chats.docs.map(chat => <ChatRow key={chat.id} id={chat.id}/>)}
                    </div>
                </div>
            </div>
            { status === AUTHENTICATED &&  session.user && session.user.image ? (
                <img src={session.user.image}
                     onClick={() => signOut()}
                className="h-12 w-12 hover:opacity-50 rounded-full cursor-pointer" alt={session.user?.name} />
            ) : (
                <UserIcon onClick={() => signOut()}
                className="h-12 w-12 hover:opacity-50 rounded-full cursor-pointer" />
            ) }
        </div>
    );
}

export default SideBar;