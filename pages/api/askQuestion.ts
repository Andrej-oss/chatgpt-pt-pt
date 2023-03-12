// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import queryApi from "../../lib/queryApi";
import {Message} from "../../model/models";
import admin from "firebase-admin";
import {adminDb} from "../../firebaseAdmin";

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
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: "ChatGPT" + model,
            name: "ChatGPT",
            avatar: "https://links.papareact.com/89k"
        }
    };

    await adminDb.collection("users").doc(session.user.email)
        .collection("chats").doc(id)
        .collection("messages").add(message);

    res.status(200).json({answer: message.text})
}
