'use client'

import {Message, Props} from "../model/models";
import {PaperAirplaneIcon} from "@heroicons/react/20/solid";
import {FormEvent, useState} from "react";
import {useSession} from "next-auth/react";
import {addDoc, collection, serverTimestamp} from "@firebase/firestore";
import {db} from "../firebase";
import axios from "axios";
import toast from "react-hot-toast";

function ChatInput({id}: Props) {
    const {data: session} = useSession();
    const [prompt, setPrompt] = useState("");

    const model = "text-davinci-003";
    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!prompt) return;

      const notification = toast.loading("ChatGPT is thinking...");

      const input = prompt.trim();
      setPrompt("");

      const message: Message = {
          text: input,
          createdAt: serverTimestamp(),
          user: {
              _id: session?.user?.email,
              name: session?.user?.name,
              avatar: session?.user?.image
          }
      }

        try {
            await addDoc(collection(db, "users", session?.user?.email as string, "chats", id, "messages"), message)
                .catch(err => {
                    toast.error(`Something goes wrong with ${err.message}`, {
                        id: notification
                    })
                });
      }
      catch (err: any) {
          toast.error(`Something goes wrong with ${err.message}`, {
              id: notification
          })
      }

       await axios.post("/api/askQuestion", {
            prompt: input, id, model, session
        })
            .then(() => {
                toast.success("ChatGPT has responded", {
                    id: notification
                })
            })
            .catch(err => {
                toast.error(`Something goes wrong with ${err.message}`, {
                    id: notification
                })
            })
    }

    return (
        <div className=" bg-gray-700/50 text-gray-300 text-sm rounded-md">
            <form onSubmit={sendMessage}
                className="flex p-5 space-x-5 flex-1">
                <input
                    className="focus:outline-none bg-transparent
                    flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
                    value={prompt}
                    disabled={!session}
                    onChange={(e) => setPrompt(e.target.value)}
                    type={"text"}
                    placeholder="Ask ChatGPT something..."/>
                <button
                    disabled={!prompt || !session}
                    className="hover:opacity-50 py-2 px-4 bg-[#11A37F] font-bold rounded
                     disabled:cursor-not-allowed disabled:bg-gray-300 disabled:opacity-100"
                    type={"submit"}>
                    <PaperAirplaneIcon className="h-4 w-4 -rotate-45 text-white"/>
                </button>
            </form>
            <div>
                {/*    model selection*/}
            </div>
        </div>
    );
}

export default ChatInput;