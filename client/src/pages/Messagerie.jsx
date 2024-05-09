import React, { useState } from 'react';

const Messagerie = () => {
    const [contacts, setContacts] = useState([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" }
    ]);
    const [activeChat, setActiveChat] = useState(contacts[0]);
    const [messages, setMessages] = useState({
        1: [{ id: 1, text: "Hello!", sender: "Alice" }],
        2: [{ id: 1, text: "Hi, how are you?", sender: "Bob" }],
        3: []
    });
    const [newMessage, setNewMessage] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;
        const nextId = messages[activeChat.id].length + 1;
        const message = { id: nextId, text: newMessage, sender: "You" };
        const updatedMessages = { ...messages, [activeChat.id]: [...messages[activeChat.id], message] };
        setMessages(updatedMessages);
        setNewMessage('');
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="list-group">
                        {contacts.map(contact => (
                            <button
                                key={contact.id}
                                type="button"
                                className={`list-group-item list-group-item-action ${activeChat.id === contact.id ? "active" : ""}`}
                                onClick={() => setActiveChat(contact)}
                            >
                                {contact.name}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card-header">Chat with {activeChat.name}</div>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                {messages[activeChat.id].map(message => (
                                    <li key={message.id} className={message.sender === "You" ? "text-end" : ""}>
                                        <strong>{message.sender}: </strong>{message.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-footer">
                            <form onSubmit={sendMessage} className="d-flex">
                                <input
                                    type="text"
                                    className="form-control me-2"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    placeholder="Type a message..."
                                />
                                <button type="submit" className="btn btn-primary">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messagerie;
