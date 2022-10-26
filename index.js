const messages = ["You are worthy of love.", "You are not your mistakes.", "Every failure is an opportunity to grow.",
"Remember how far you've come.", "You are stronger than you think"]



/*var messageInput = document.getElementById('messageinput');
var newMessage = document.createTextNode(message);
console.log(newMessage)
messageInput = messageInput.append(newMessage);*/

//let textBox = document.getElementById('messageinput');
const newMessage = () => {
    let message = messages[Math.floor(Math.random()*messages.length)]
    document.getElementById('messageinput').innerHTML = message;
};