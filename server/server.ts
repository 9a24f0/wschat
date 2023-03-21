import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';

const app = express();

interface Message {
  content: string,
  sender: string,
  senderProfileImgUrl: string
}

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {
  ws.on('message', (message: string) => {
    wss.clients.forEach(client => {
      client.send(message);
    })
  });

  //send immediatly a feedback to the incoming connection    
  ws.send('Hi there, I am a WebSocket server');
});

//start our server
server.listen(3000, () => {
  console.log(`Server started :)`);
});
