import * as React from "react";
import * as ReactDOM from "react-dom";


function ChatApplication() {
    return <>
        <header>
            <h1>Chat App</h1>
        </header>
        <main>
            <div id="chatLog"></div>
        </main>
        <footer>
            <form>
                <input type='text' autoFocus={true} />
                <button>Submit</button>
            </form>
        </footer>

        </>;
}

ReactDOM.render(<ChatApplication/>, document.getElementById("app"));