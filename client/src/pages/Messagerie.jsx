import React, { useState } from 'react';
import '../css/Messagerie.css';

const Messagerie = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [message, setMessage] = useState('');

  const contacts = [
    { id: 1, name: 'Alice Smith', avatar: '👩‍🦰', lastMessage: 'Hey, how are you?' },
    { id: 2, name: 'Bob Johnson', avatar: '👨‍🦱', lastMessage: 'Can we meet tomorrow?' },
    { id: 3, name: 'Carol White', avatar: '👩‍🦳', lastMessage: 'I sent you the file.' },
    { id: 4, name: 'Dave Brown', avatar: '🧔', lastMessage: 'Lunch at 1 PM?' },
    { id: 5, name: 'Eve Davis', avatar: '👩‍🦲', lastMessage: 'Great job on the project!' }
  ];

  const messages = [
    { id: 1, contactId: 1, text: 'Hey! How was your weekend?', sent: false },
    { id: 2, contactId: 1, text: 'It was great! I went hiking. You?', sent: true },
    { id: 3, contactId: 1, text: 'Just relaxed at home.', sent: false },
    { id: 4, contactId: 1, text: 'Sounds nice. We should hike together sometime!', sent: true }
  ];

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && selectedContact) {
      console.log(`Sending message to ${selectedContact.name}: ${message}`);
      setMessage('');
    }
  };

  return (
    <div className="content-container">
    <div className="chat-app">
      <main className="chat-main">
        {selectedContact ? (
          <>
            <header className="chat-header">
              <div className="contact-avatar">{selectedContact.avatar}</div>
              <h2>{selectedContact.name}</h2>
            </header>
            <div className="message-list">
              {messages
                .filter(msg => msg.contactId === selectedContact.id)
                .map(msg => (
                  <div key={msg.id} className={`message ${msg.sent ? 'sent' : 'received'}`}>
                    {msg.text}
                  </div>
                ))}
            </div>
            <form className="message-input" onSubmit={handleSendMessage}>
              <input 
                type="text" 
                placeholder="Type a message..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </>
        ) : (
          <div className="no-chat-selected">
            <p>Select a chat to start messaging</p>
          </div>
        )}
      </main>
      <aside className="sidebar">
        <header className="sidebar-header">
          <h2>Chats</h2>
        </header>
        <div className="contact-list">
          {contacts.map(contact => (
            <div 
              key={contact.id} 
              className={`contact-item ${selectedContact && contact.id === selectedContact.id ? 'selected' : ''}`}
              onClick={() => handleContactClick(contact)}
            >
              <div className="contact-avatar">{contact.avatar}</div>
              <div className="contact-info">
                <h3 className="contact-name">{contact.name}</h3>
                <p className="contact-lastMessage">{contact.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
    </div>
  );
};

export default Messagerie;