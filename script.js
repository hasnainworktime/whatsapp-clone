let currentChat = "Muhammad";

let chats = {
  Muhammad: [],
  Ali: [],
  Ahmed: []
};

function openChat(name) {
  currentChat = name;

  document.getElementById("chatName").innerText = name;

  let messagesDiv = document.getElementById("messages");
  messagesDiv.innerHTML = "";

  chats[name].forEach(msg => {
    addMessage(msg.text, msg.type);
  });
}

function sendMessage() {
  let input = document.getElementById("messageInput");
  let text = input.value.trim();
  if (text === "") return;

  chats[currentChat].push({ text, type: "sent" });
  addMessage(text, "sent");

  input.value = "";

  // Auto reply
  setTimeout(() => {
    let reply = "Auto reply 🙂";
    chats[currentChat].push({ text: reply, type: "received" });
    addMessage(reply, "received");
  }, 1000);
}

function addMessage(text, type) {
  let messagesDiv = document.getElementById("messages");
  let msg = document.createElement("div");
  msg.className = `message ${type}`;
  msg.innerText = text;
  messagesDiv.appendChild(msg);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
