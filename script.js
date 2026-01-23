let chats = {
  Ali: [],
  Ahmed: [],
  Muhammad: []
};

let currentUser = "Ali";
const sendBtn = document.querySelector("button");
const input = document.querySelector("input");
const messages = document.querySelector(".messages");

sendBtn.addEventListener("click", sendMessage);

function sendMessage() {
  const text = input.value.trim();

  if (text === "") return;

  const msg = document.createElement("div");
  msg.classList.add("message", "sent");
  msg.innerText = text;

  messages.appendChild(msg);
  input.value = "";

  messages.scrollTop = messages.scrollHeight;
}
function autoReply() {
  const reply = document.createElement("div");
  reply.classList.add("message", "received");
  reply.innerText = "Okay 🙂";

  messages.appendChild(reply);
  messages.scrollTop = messages.scrollHeight;
}
function sendMessage() {
  const text = input.value.trim();
  if (text === "") return;

  chats[currentUser].push({ text, type: "sent" });
  input.value = "";

  renderChat();

  setTimeout(() => {
    chats[currentUser].push({ text: "Okay 🙂", type: "received" });
    renderChat();
  }, 1000);
}
function renderChat() {
  messages.innerHTML = "";

  chats[currentUser].forEach(msg => {
    const div = document.createElement("div");
    div.classList.add("message", msg.type);
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

