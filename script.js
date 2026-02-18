const sendBtn = document.getElementById("sendBtn");
const input = document.getElementById("messageInput");
const chatBody = document.getElementById("chatBody");

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        sendMessage();
    }
});

function sendMessage(){

    const message = input.value.trim();
    if(message === "") return;

    addMessage(message, "user");
    input.value = "";

    setTimeout(() => {
        const reply = generateReply(message);
        addMessage(reply, "bot");
    }, 600);
}

function addMessage(text, sender){

    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.textContent = text;

    chatBody.appendChild(msg);

    chatBody.scrollTop = chatBody.scrollHeight;
}

function generateReply(userMessage){

    const msg = userMessage.toLowerCase();

    if(msg.includes("hello") || msg.includes("hi")){
        return "Hello 😊 How can I help you?";
    }

    if(msg.includes("how are you")){
        return "I'm doing great! Thanks for asking 👍";
    }

    if(msg.includes("your name")){
        return "I'm Smart Chat Bot 🤖";
    }

    if(msg.includes("html")){
        return "HTML is used to structure web pages.";
    }

    if(msg.includes("css")){
        return "CSS is used to style web pages.";
    }

    if(msg.includes("javascript")){
        return "JavaScript makes web pages interactive.";
    }

    if(msg.includes("bye")){
        return "Goodbye 👋 Have a nice day!";
    }

    return "Sorry, I don't understand that yet.";
}