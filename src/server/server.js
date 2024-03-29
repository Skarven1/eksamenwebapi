const express = require("express");
const path = require("path");
const ws = require("ws");

const app = express();
app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));

const wsServer = new ws.Server({noServer: true});
const sockets = []
wsServer.on("connection", (socket) => {
    sockets.push(socket)
    socket.on("message", (message) => {
        for (const socket of sockets) {
            socket.send("From server:" + message);
        }
    });
});


const server = app.listen(3000, () => {
    console.log(`Started on port http://localhost:${server.address().port}`);
    server.on("upgrade", (req, res, head) =>{
        wsServer.handleUpgrade(req, res, head, socket => {
            wsServer.emit("connection", socket, req);
        });
    });
});