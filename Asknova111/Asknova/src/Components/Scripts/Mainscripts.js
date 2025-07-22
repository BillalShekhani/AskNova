// Chats Data
export const chats = [
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisc',
    model: 'GPT 4',
    messages: 12,
    time: '1 min ago'
  },
  {
    title: 'Duis aute irure dolor in reprehenderit',
    model: 'Llama 2',
    messages: 9,
    time: '3 min ago'
  },
  {
    title: 'Purus in massa tempor nec faucibus nisi pretium fus',
    model: 'Mistral 7B',
    messages: 8,
    time: '5 min ago'
  }
];

// Search Chats
export function searchChats(query, chatList) {
  if (!query) return chatList;
  return chatList.filter(chat => 
    chat.title.toLowerCase().includes(query.toLowerCase())
  );
}

// Sort Chats by messages count (descending)
export function sortChatsByMessages(chatList) {
  return [...chatList].sort((a, b) => b.messages - a.messages);
}

// Add New Chat
export function addNewChat(chatList, newChat) {
  return [
    ...chatList,
    {
      ...newChat,
      messages: 0,
      time: 'Just now'
    }
  ];
}
