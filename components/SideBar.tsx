import {NewChat} from "./index";

function SideBar(props) {
    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div>
                    <NewChat/>
                    <div>
                        {/*    MAP through the Chatrows*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;