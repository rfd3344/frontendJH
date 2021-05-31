import React from 'react';
import InputForm from './InputForm';
import MessagesPanel from './MessagesPanel';

export default function WebsocketEcho() {
  return (
    <section>
      <h1> Websocket Echo test</h1>
      <InputForm />
      <MessagesPanel />
    </section>
  );
}
