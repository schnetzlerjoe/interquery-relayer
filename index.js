import WebSocket from 'ws';

const ws = new WebSocket('ws://rpc.cosmos.network/websocket');

ws.on('open', function open() {
  ws.send('something');
});

ws.on('message', function message(data) {
  console.log('received: %s', data);
});