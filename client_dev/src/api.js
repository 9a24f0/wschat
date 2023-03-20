export const socket = new WebSocket('ws://localhost:3000')

socket.onopen = () => {
  socket.send("hello Server!")
}

socket.onmessage = (event) => {
  socket.send(event.data);
}