import * as React from "react";
import * as ReactDOM from "react-dom";


function ChatApplication() {
    return <>
        <header>Chat App</header>
        <main>
            <div id="chatLog"></div>
            <footer>
                <form><input type='text' />
                    <button>Submit</button>
                </form>
            </footer>
        </main>
        </>;
}

ReactDOM.render(<ChatApplication/>, document.getElementById("app"));