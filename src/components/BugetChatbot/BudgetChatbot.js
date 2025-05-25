import React, { useState } from 'react';
import './BudgetChatbot.scss';
import CustomButton from '../CustomButton'; // ose ku e ke ti
import { FormattedMessage } from "react-intl";

const BudgetChatbot = () => {
  

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const API_KEY = '///';
  const MODEL = 'deepseek/deepseek-r1:free';

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: MODEL,
          messages: updatedMessages,
        }),
      });

      if (!response.ok) throw new Error('Kërkesa dështoi');

      const data = await response.json();

      const botMessage = data.choices?.[0]?.message || {
        role: 'assistant',
        content: 'Nuk mora përgjigje. Provo prapë!',
      };

      setMessages([...updatedMessages, botMessage]);
    } catch (error) {
      setMessages([
        ...updatedMessages,
        { role: 'assistant', content: 'Gabim gjatë marrjes së përgjigjes. Provo prapë më vonë.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="chatbot-container">
      <h2>Asistenti për Buxhetin Studentor</h2>
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.role}`}>
            <span>{msg.content}</span>
          </div>
        ))}
        {loading && (
          <div className="message assistant">
            <span>Duke u përgjigjur...</span>
          </div>
        )}
      </div>

      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Shkruaj p.sh. 'Kam harxhu 5€ në fast food sot'"
        />
        <CustomButton onClick={sendMessage} disabled={loading}>
          <FormattedMessage id="budget.buttonText" defaultMessage="Dergo" />
        </CustomButton>
      </div>
    </div>
  );
};

export default BudgetChatbot;




