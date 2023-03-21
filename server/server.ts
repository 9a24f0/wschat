import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';

const app = express();

const server = http.createServer(app);

app.get(`/:channel`, (req, res) => {

  /* Upon enter channel, upgrade the connection to ws */
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws: WebSocket) => {
    ws.on('message', (message: string) => {

      /* Broadcasting to clients */
      wss.clients.forEach(client => {
        client.send(message);
      })
    });
  });
})

server.listen(3000, () => {
  console.log(`Server started :)`);
});
