import io from "socket.io-client";
import { useEffect, useState } from "react";
const socket = io.connect("http://localhost:5000/");

function ForumPage() {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState([]);
  function handleSubmit() {
    socket.emit("send_message", { message });
    setMessage("");
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived((state) => [...state, data.message]);
    });
  }, []);
  return (
    <div>
      <input
        placeholder={message}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSubmit}>Send Message !</button>
      {messageReceived.map((i) => (
        <p key={i}>{i}</p>
      ))}
    </div>
  );
}

export default ForumPage;
