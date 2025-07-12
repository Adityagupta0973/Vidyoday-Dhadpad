import React, { useState, useRef } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';

const chats = [
  {
    name: 'Dr. Meera',
    role: 'Teacher',
    lastMessage: 'Please review the session notes.',
    time: '10:30 AM'
  },
  {
    name: 'Mr. Vikram Singh',
    role: 'Teacher',
    lastMessage: 'Class rescheduled to Friday.',
    time: 'Yesterday'
  },
  {
    name: 'Priya Sharma',
    role: 'Coordinator',
    lastMessage: 'Don\'t forget the team meeting.',
    time: '2 days ago'
  }
];

const MessagesPage: React.FC = () => {
  const userName = localStorage.getItem('userName') || 'Priya';

  // Chatbox state
  const [messages, setMessages] = useState<{ type: 'text' | 'image' | 'file', content: string, time: string }[]>([]);
  const [input, setInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (input.trim() !== '') {
      setMessages([
        ...messages,
        { type: 'text', content: input, time: new Date().toLocaleTimeString() }
      ]);
      setInput('');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const isImage = file.type.startsWith('image/');
        setMessages([
          ...messages,
          {
            type: isImage ? 'image' : 'file',
            content: isImage ? (reader.result as string) : file.name,
            time: new Date().toLocaleTimeString()
          }
        ]);
      };
      if (file.type.startsWith('image/')) {
        reader.readAsDataURL(file);
      } else {
        reader.readAsArrayBuffer(file); // just to trigger onload
      }
    }
  };

  return (
    <DashboardLayout role="coordinator" userName={userName}>
      <div className="p-6 flex flex-col h-[80vh]">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Messages</h1>
        <div className="space-y-4 flex-1 overflow-y-auto mb-4">
          {chats.map((chat, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-lg shadow border hover:bg-blue-50 transition">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">
                    {chat.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">{chat.name} <span className="text-xs text-gray-500">({chat.role})</span></p>
                  <p className="text-sm text-gray-600 truncate max-w-xs">{chat.lastMessage}</p>
                </div>
              </div>
              <span className="text-xs text-gray-400">{chat.time}</span>
            </div>
          ))}
          {/* Render sent messages */}
          {messages.map((msg, idx) => (
            <div key={idx} className="flex justify-end">
              <div className="max-w-xs bg-blue-100 rounded-lg p-2 mb-2">
                {msg.type === 'text' && <span className="text-gray-800">{msg.content}</span>}
                {msg.type === 'image' && (
                  <img src={msg.content} alt="sent" className="max-h-32 rounded" />
                )}
                {msg.type === 'file' && (
                  <span className="text-gray-800">File: {msg.content}</span>
                )}
                <div className="text-xs text-gray-400 text-right">{msg.time}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Multimedia Chatbox */}
        <div className="flex items-center space-x-2 border-t pt-2">
          <input
            type="text"
            className="flex-1 border rounded px-3 py-2"
            placeholder="Type a message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
          />
          <button
            className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleSend}
          >
            Send
          </button>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
            accept="image/*,.pdf,.doc,.docx,.txt"
          />
          <button
            className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => fileInputRef.current?.click()}
            title="Attach file or image"
          >
            📎
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MessagesPage;
