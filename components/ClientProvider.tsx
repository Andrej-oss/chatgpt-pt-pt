'use client'

import {Toaster} from "react-hot-toast";

function ClientProvider() {
    return (
        <>
            <Toaster position={"top-right"} reverseOrder={true} />
        </>
    );
}

export default ClientProvider;