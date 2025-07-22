import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Mainpage.css';
import './Scripts/Mainscripts';

const initialChats = [
  { title: 'Lorem ipsum dolor sit amet consectetur adipisc', model: 'GPT 4', messages: 12, time: '1 min ago' },
  { title: 'Duis aute irure dolor in reprehenderit', model: 'Llama 2', messages: 9, time: '3 min ago' },
  { title: 'Purus in massa tempor nec faucibus nisi pretium fus', model: 'Mistral 7B', messages: 8, time: '5 min ago' }
];

const Mainpage = () => {
  const [chats, setChats] = useState(initialChats);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();  // 👈 router navigation

  const filteredChats = chats.filter(chat =>
    chat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSort = () => {
    const sorted = [...chats].sort((a, b) => b.messages - a.messages);
    setChats(sorted);
  };

  const handleAddChat = () => {
    navigate('/newchat');  // 👈 Direct newchat page pe le jayega
  };

  return (
    <div className="main-container">
      <aside className="sidebar">
        <div className="profile-section">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjTz56xEcbbh2GqSFsayx5-pQvZeTCm-8ng&s" alt="Profile" className="profile-pic"/>
          <h3>Ask-Nova</h3>
        </div>

        <input type="text" placeholder="Search for chats..." className="search-input"/>

        <nav className="menu">
          <button>Chats</button>
          <button>Library</button>
          <button>Apps</button>
        </nav>

        <button className="new-chat-btn" onClick={handleAddChat}>+ Start new chat</button>
      </aside>

      <main className="chat-section">
        <header className="chat-header">
          <input
            type="text"
            placeholder="Search for chats..."
            className="chat-search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="new-chat-top-btn" onClick={handleAddChat}>+ New chat</button>
        </header>

        <section className="welcome-box">
          <h2>Welcome back, Mauro</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed.</p>
          <button>How can I help you?</button>
        </section>

        <section className="chat-list">
          <div className="chat-list-header">
            <h3>Chats ({filteredChats.length})</h3>
            <div className="filter-options">
              <input
                type="text"
                placeholder="Search for chats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button onClick={handleSort}>🗂 Sort by</button>
            </div>
          </div>

          <ul>
            {filteredChats.map((chat, index) => (
              <li key={index} className="chat-item">
                <span>{chat.title}</span>
                <span>{chat.model}</span>
                <span>{chat.messages}</span>
                <span>{chat.time}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Mainpage;
