const socket = new WebSocket("ws://localhost:8000");

function sendMessage(e) {
  e.preventDefault();
  const input = document.querySelector("input"); 
  if (input.value) {
    socket.send(input.value);
    input.value = "";
  }
}

document.querySelector("form").addEventListener("submit", sendMessage);

socket.addEventListener("message", ({ data }) => {
  const li = document.createElement("li");
  li.textContent = data;
  document.querySelector("ul").appendChild(li);
});
