import {FieldValue} from "@firebase/firestore";

export type Props = {
    id: string
}

export type Message = {
    text: string,
    createdAt: FieldValue,
    user: {
        _id?: string | null,
        name?: string | null,
        avatar?: string | null
    }
}