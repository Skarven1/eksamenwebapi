import * as React from "react";
import * as ReactDOM from "react-dom";
import {useState} from "react";


function ChatApplication() {
    const [chatLog, setChatlog] = useState([]);
    const [message, setMessage] = useState("")

    function handleSubmitChatMessage(e) {
        e.preventDefault();
        setChatlog([...chatLog, message]);
    }


    return <>
        <header>
            <h1>Chat App</h1>
        </header>
        <main>
            <div id="chatLog">
                {chatLog.map((message) => (
                    <div>{message}</div>
                ))}
            </div>
        </main>
        <footer>
            <form onSubmit={handleSubmitChatMessage}>
                <input type='text' autoFocus={true} />
                <button>Submit</button>
            </form>
        </footer>

        </>;
}

ReactDOM.render(<ChatApplication/>, document.getElementById("app"));