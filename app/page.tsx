import { SunIcon } from "@heroicons/react/24/solid";
import { BoltIcon, ExclamationTriangleIcon } from "@heroicons/react/20/solid";

function HomePage(props) {
    return (
        <div className="flex flex-col text-white justify-center h-screen items-center px-2">
            <h1 className="text-5xl font-bold mb-40">ChatGPTPTPT</h1>
            <div className="flex space-x-10">
                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        <h2>Examples</h2>
                        <SunIcon className="h-8 w-8 text-blue-100" />
                    </div>
                    <div className="space-y-2">
                        <p className="info-text">"Explain something to me"</p>
                        <p className="info-text">"What is the difference between cat and dog?"</p>
                        <p className="info-text">"What is the color of the sun?"</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        <h2>Capabilities</h2>
                        <BoltIcon className="h-8 w-8 text-blue-100" />
                    </div>
                    <div className="space-y-2">
                        <p className="info-text">Change the ChatGPT model to use</p>
                        <p className="info-text">Messages are stored in a FireBase's Firestore</p>
                        <p className="info-text">Hot Toast Notifications when ChatGPT is thinking</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        <h2>Limitations</h2>
                        <ExclamationTriangleIcon className="h-8 w-8 text-blue-100" />
                    </div>
                    <div className="space-y-2">
                        <p className="info-text">May occasionally generate incorrect information  </p>
                        <p className="info-text">May occasionally produce harmful instructions or biased content </p>
                        <p className="info-text">Limited knowledge of World and event after 2021</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;