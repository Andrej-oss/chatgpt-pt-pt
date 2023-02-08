import '../styles/globals.css'
import {Login, SessionProvider, SideBar} from "../components/index";
import {getServerSession} from "next-auth";
import { authOption } from "../pages/api/auth/[...nextauth]";

export default async function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const  serverSession = await getServerSession(authOption);
    return (
        <html>
        <head/>
        <body>
        <SessionProvider session={serverSession}>
            {
                !serverSession ?
                    <Login /> :
                    (
                        <div className="flex">
                            <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                                <SideBar/>
                            </div>
                            <div className="bg-[#343541] flex-1">
                                {children}
                            </div>
                        </div>
                    )
            }
        </SessionProvider>
        </body>
        </html>
    )
}
