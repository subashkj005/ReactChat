import React, { useState, useEffect } from 'react';
import Title from '../components/Title'
import MessageList from '../components/MessageList'
import TypingIndicator from '../components/TypingIndicator'
import InputMessage from '../components/InputMessage'

const ChatBox = () => {

  let owner = 'Shun'
  let ownerAvatar = 'https://i.pravatar.cc/150?img=32'

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Shun',
      senderAvatar: 'https://i.pravatar.cc/150?img=32',
      message: 'Hello 👋'
    },
    {
      id: 2,
      sender: 'Gabe',
      senderAvatar: 'https://i.pravatar.cc/150?img=56',
      message: 'Hey!'
    },
    {
      id: 3,
      sender: 'Gabe',
      senderAvatar: 'https://i.pravatar.cc/150?img=56',
      message: 'How are you?'
    },
    {
      id: 4,
      sender: 'Shun',
      senderAvatar: 'https://i.pravatar.cc/150?img=32',
      message: 'Great! It\'s been a while... 🙃'
    },
    {
      id: 5,
      sender: 'Gabe',
      senderAvatar: 'https://i.pravatar.cc/150?img=56',
      message: 'How are you?'
    },
    {
      id: 6,
      sender: 'Shun',
      senderAvatar: 'https://i.pravatar.cc/150?img=32',
      message: 'Great! It\'s been a while... 🙃'
    },
    {
      id: 7,
      sender: 'Gabe',
      senderAvatar: 'https://i.pravatar.cc/150?img=56',
      message: 'How are you?'
    },
    {
      id: 8,
      sender: 'Shun',
      senderAvatar: 'https://i.pravatar.cc/150?img=32',
      message: 'Great! It\'s been a while... 🙃'
    },
    {
      id: 9,
      sender: 'Gabe',
      senderAvatar: 'https://i.pravatar.cc/150?img=56',
      message: 'Indeed.... We\'re gonna have to fix that. 🌮🍻'
    }
  ]);

  const detectURL = (message) => {
    const urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return message.replace(urlRegex, (urlMatch) => {
      return '<a href="' + urlMatch + '">' + urlMatch + '</a>';
    });
  };
  

  const [isTyping, setIsTyping] = useState({});

  const sendMessage = (sender, senderAvatar, message) => {
    setTimeout(() => {
      let messageFormat = message
      let newMessageItem = {
        id: messages.length + 1,
        sender: sender,
        senderAvatar: senderAvatar,
        message: messageFormat
      };
      setMessages([...messages, newMessageItem]);
      resetTyping(sender);
    }, 400);
  };

  const typing = (writer) => {
    if (!isTyping[writer]) {
      setIsTyping({ ...isTyping, [writer]: true });
    }
  };

  const resetTyping = (writer) => {
    setIsTyping({ ...isTyping, [writer]: false });
  };




  const [isLoading, setIsLoading] = useState(false);

  const sendMessageLoading = (sender, senderAvatar, message) => {
    setIsLoading(true);
    sendMessage(sender, senderAvatar, message);

    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  };

  return (
    <div className="chatApp__conv">
      <MessageList owner={owner} messages={messages} />
      <div className="chatApp__convSendMessage clearfix">
        <TypingIndicator owner={owner} isTyping={isTyping} />
        <InputMessage
          isLoading={isLoading}
          owner={owner}
          ownerAvatar={ownerAvatar}
          sendMessage={sendMessage}
          sendMessageLoading={sendMessageLoading}
          typing={typing}
          resetTyping={resetTyping}
        />
      </div>
    </div>
  );
};

export default ChatBox;
