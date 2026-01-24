const input = document.getElementById("messageInput");
const messages = document.getElementById("messages");

let chats = {
  Ali: [],
  Ahmed: [],
  Muhammad: []
};

let currentUser = "Ali";

function sendMessage() {
  const text = input.value.trim();
  if (text === "") return;

  chats[currentUser].push({ text, type: "sent" });
  input.value = "";
  renderChat();

  setTimeout(() => {
    chats[currentUser].push({ text: "Auto reply 🙂", type: "received" });
    renderChat();
  }, 1000);
}

function renderChat() {
  messages.innerHTML = "";

  chats[currentUser].forEach(msg => {
    const div = document.createElement("div");
    div.className = "message " + msg.type;
    div.innerText = msg.text;
    messages.appendChild(div);
  });

  messages.scrollTop = messages.scrollHeight;
}

function openChat(name) {
  currentUser = name;
  document.getElementById("chat-name").innerText = name;
  renderChat();
}
<script src="script.js"></script>
</body>
</html>
