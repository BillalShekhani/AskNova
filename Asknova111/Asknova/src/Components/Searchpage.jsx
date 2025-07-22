import React from 'react';
import './Search.css';
import './Scripts/Search';

const SearchPage = () => {
  return (
    <div className="searchpage-container">
      <div className="chat-area">
        <div className="chat-header"></div>

        <div className="chat-message user">
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="chat-message ai">
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="actions">
            <button>👍</button>
            <button>👎</button>
            <button>↗ Share</button>
          </div>
        </div>

        <div className="chat-message user">
          <audio controls>
            <source src="#" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        <div className="chat-message ai">
          <p>Here are some options:</p>
          <ul>
            <li>Option 1: Lorem ipsum dolor sit amet</li>
            <li>Option 2: Duis aute irure dolor in reprehenderit</li>
            <li>Option 3: Excepteur sint occaecat cupidatat non proident</li>
            <li>Option 4: Curabitur pretium tincidunt lacus</li>
          </ul>
        </div>

        <div className="chat-input">
          <input type="text" placeholder="How can I help you?" />
          <button>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
