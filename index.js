
import { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState([
    { author: "Tea", text: "Boa sorte hoje ❤️" },
    { author: "Felix", text: "Volto às 18h. Sdds já." }
  ]);
  const [newMsg, setNewMsg] = useState("");

  const sendMessage = () => {
    if (!newMsg.trim()) return;
    setMessages([...messages, { author: "Felix", text: newMsg }]);
    setNewMsg("");
  };

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Nosso Cantinho 💌</h1>
      <div>
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <strong>{msg.author}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <textarea
        placeholder="Deixe um recado fofo 💬"
        value={newMsg}
        onChange={(e) => setNewMsg(e.target.value)}
        style={{ width: "100%", marginTop: 10 }}
      />
      <button onClick={sendMessage} style={{ marginTop: 10 }}>Enviar</button>
    </div>
  );
}
