const btn = document.getElementById("btn");
const input = document.querySelector(".input input");
const messageBox = document.querySelector(".messageBox");
const lastMsg = document.querySelector(".messageBox:last-child");
btn.onclick = sendMessage;

let userInfo = {
 name: "Franco",
 img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKtyMo8fZ29CFGWsGivAst5Fd7aLOcxHJSA&usqp=CAU",
};

function addMessage() {
 messageBox.innerHTML += `<div class="msg">
      <div class="propic">
       <img
        src=${userInfo.img}

       />
      </div>
      <div class="msg_content">
       <h5>${userInfo.name}</h5>
       <p>${input.value}
       </p>
      </div>
     </div>`;
 input.value = "";
 messageBox.lastElementChild.scrollIntoView();
 input.focus();
}
function sendMessage() {
 if (input.value) {
  addMessage();
 } else {
  return;
 }
}
input.onkeyup = function (ivent) {
 if (ivent.key === "Enter" && input.value != "") {
  addMessage();
 }
};
