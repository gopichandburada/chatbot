import logo from './logo.svg';
import './App.css';
import Header from './Components/HeaderComponent/Header.js';
import ChatBox from './Components/ChatBox/ChatBox.js';

function App() {
  function handleCheck() {
    // Get the user's input text from the textarea
    var userInput = document.getElementById("textinput").value;

    if (userInput.trim() !== "") {
        // Create a new list item element for the outgoing chat message
        var chatbox = document.querySelector(".chatbox");
        var chatOutgoing = document.createElement("li");
        chatOutgoing.className = "chat outgoing";
        // Create a paragraph element to hold the user's message
        var messagePara = document.createElement("p");
        messagePara.textContent = userInput;
        // Append the paragraph element to the outgoing chat list item
        chatOutgoing.appendChild(messagePara);

        // Append the outgoing chat list item to the chatbox
        chatbox.appendChild(chatOutgoing);

        // Clear the textarea after sending the message
        document.getElementById("textinput").value = "";
    }
}
  return (
    <div className="App">
      <>
      <div className="min">
        <div className="chatbot">
            <Header />
            <ChatBox />
            <div className="chat-input">
                <textarea id="textinput" placeholder="Enter a message....."></textarea>
                <span id="send-btn" className="material-symbols-outlined" onclick={handleCheck}>send</span>
            </div>
        </div>
    </div>
    </>
    </div>
  );
}

export default App;
