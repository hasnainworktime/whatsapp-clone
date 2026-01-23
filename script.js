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
