document.addEventListener("DOMContentLoaded", function() {
    const chatMessages = document.getElementById("chatMessages");
    const sendBtn = document.getElementById("sendBtn");
    const messageInput = document.getElementById("messageInput");

    // Special replies with flexible keyword matching
    const specialReplies = [
    { keywords: ["hi", "hello", "hii"], reply: "Hi 👋 How are you?" },
    { keywords: ["bye", "goodbye", "see you"], reply: "Bye 👋 Have a great day!" },
    { keywords: ["name"], reply: "I am ChatBot 🤖" },
    { keywords: ["tell me about yourself", "about yourself"], reply: "I am a friendly chatbot here to answer your technical questions and chat with you!" },
    { keywords: ["ok", "okay", "sure"], reply: "👍 Ok!" }  // ← added this line
];
    // 100+ technical questions and answers
    const qaList = {
        "what is html": "HTML is used to structure web pages.",
        "what is css": "CSS styles web pages.",
        "what is javascript": "JavaScript makes web pages interactive.",
        "what is dom": "DOM represents HTML structure as objects.",
        "what is api": "API allows communication between systems.",
        "what is http": "HTTP transfers web data.",
        "what is https": "HTTPS is secure HTTP.",
        "what is git": "Git is a version control system.",
        "what is github": "GitHub is a platform to host repositories.",
        "what is sql": "SQL is a database query language.",
        "what is database": "A database stores organized data.",
        "what is oop": "OOP stands for object-oriented programming.",
        "what is inheritance": "Inheritance allows a class to inherit properties.",
        "what is polymorphism": "Methods behave differently depending on context.",
        "what is encapsulation": "Encapsulation hides internal data.",
        "what is abstraction": "Abstraction hides implementation details.",
        "what is recursion": "Recursion is when a function calls itself.",
        "what is stack": "Stack is a LIFO data structure.",
        "what is queue": "Queue is a FIFO data structure.",
        "what is algorithm": "Algorithm is a step-by-step solution.",
        "what is time complexity": "Time complexity measures execution time.",
        "what is space complexity": "Space complexity measures memory usage.",
        "what is big-o": "Big-O describes algorithm efficiency.",
        "what is cloud computing": "Cloud computing provides services over the internet.",
        "what is ai": "AI stands for Artificial Intelligence.",
        "what is machine learning": "Machine learning allows systems to learn from data.",
        "what is deep learning": "Deep learning is a subset of ML using neural networks.",
        "what is cybersecurity": "Cybersecurity protects systems and data.",
        "what is firewall": "A firewall is a network security system.",
        "what is ip address": "IP address identifies a device on a network.",
        "what is dns": "DNS converts domain names to IP addresses.",
        "what is server": "Server provides services to clients.",
        "what is client": "Client requests services from a server.",
        "what is frontend": "Frontend is the user interface part of an app.",
        "what is backend": "Backend is the server-side logic of an app.",
        "what is json": "JSON is a lightweight data exchange format.",
        "what is ajax": "AJAX updates content without page reload.",
        "what is react": "React is a JavaScript UI library.",
        "what is node.js": "Node.js is a JavaScript runtime environment.",
        "what is mongodb": "MongoDB is a NoSQL database.",
        "what is mysql": "MySQL is a relational database.",
        "what is docker": "Docker is a container platform.",
        "what is devops": "DevOps combines development and operations.",
        "what is ui": "UI stands for User Interface.",
        "what is ux": "UX stands for User Experience.",
        "what is bootstrap": "Bootstrap is a CSS framework for responsive design.",
        "what is jquery": "jQuery is a JavaScript library.",
        "what is typescript": "TypeScript is a typed superset of JavaScript.",
        "what is vscode": "VSCode is a popular code editor.",
        "what is npm": "npm is a package manager for JavaScript.",
        "what is yarn": "Yarn is a package manager alternative to npm.",
        "what is sass": "Sass is a CSS preprocessor.",
        "what is responsive design": "Responsive design adapts layout to screen size.",
        "what is rest api": "REST API is a web service following REST principles.",
        "what is oauth": "OAuth is an authorization framework.",
        "what is ssl": "SSL secures data transmission over the internet.",
        "what is tls": "TLS is an updated version of SSL.",
        "what is iot": "IoT is the Internet of Things.",
        "what is blockchain": "Blockchain is a decentralized ledger.",
        "what is bitcoin": "Bitcoin is a cryptocurrency.",
        "what is ethereum": "Ethereum is a blockchain platform with smart contracts.",
        "what is smart contract": "Smart contracts are self-executing code on blockchain.",
        "what is nft": "NFT is a unique digital asset.",
        "what is api key": "API key is a token for authentication.",
        "what is encryption": "Encryption converts data to secure format.",
        "what is hashing": "Hashing converts data into a fixed length value.",
        "what is vpn": "VPN is a virtual private network.",
        "what is cache": "Cache stores data temporarily for faster access.",
        "what is cdn": "CDN is a content delivery network.",
        "what is version control": "Version control tracks code changes.",
        "what is agile": "Agile is a software development methodology.",
        "what is scrum": "Scrum is an agile framework.",
        "what is kanban": "Kanban is a workflow management method.",
        "what is test driven development": "TDD writes tests before code.",
        "what is continuous integration": "CI automatically builds and tests code.",
        "what is continuous deployment": "CD automatically deploys code.",
        "what is microservices": "Microservices are small independent services.",
        "what is monolithic": "Monolithic is a single large application.",
        "what is spa": "SPA is a single page application.",
        "what is mpa": "MPA is a multi-page application."
    };

    // Function to add messages to chat
    function addMessage(text, type) {
        const div = document.createElement("div");
        div.classList.add("message", type);
        div.textContent = text;
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Send user message
    function sendMessage() {
        const userText = messageInput.value.trim();
        if (!userText) return;

        addMessage(userText, "question");
        messageInput.value = "";

        setTimeout(() => {
            botReply(userText);
        }, 500);
    }

    // Bot reply function
    function botReply(text) {
        const lowerText = text.trim().toLowerCase();

        // Check special replies first
        for (const entry of specialReplies) {
            for (const kw of entry.keywords) {
                if (lowerText.includes(kw)) {
                    addMessage(entry.reply, "answer");
                    return;
                }
            }
        }

        // Check technical questions
        if (qaList[lowerText]) {
            addMessage(qaList[lowerText], "answer");
        } else {
            addMessage("I don't know 🤔", "answer");
        }
    }

    // Event listeners
    sendBtn.addEventListener("click", sendMessage);
    messageInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") sendMessage();
    });
});
