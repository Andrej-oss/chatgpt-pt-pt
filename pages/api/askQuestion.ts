// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import queryApi from "../../lib/queryApi";
import {Message} from "../../model/models";
import {serverTimestamp} from "@firebase/firestore";

type Data = {
    answer: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { prompt, id, model, session } = req.body;

    if (!prompt) {
        res.status(400).json({answer: "Please provide a prompt"});
        return;
    }

    if (!id) {
        res.status(400).json({answer: "Please provide a valid chat id"});
        return;
    }

    const response = await queryApi(prompt, id, model);

    const message: Message = {
        text: response || "ChatGPT was not available to find an answer for that",
        createdAt: serverTimestamp(),
        user: {
            _id: session.user.email,
            name: session.user.name,
            avatar: session.user.avatar
        }
    }

    res.status(200).json({answer: JSON.stringify(message)})
}
