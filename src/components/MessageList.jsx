import React from 'react';
import MessageItem from '../components/MessageItem'

const MessageList = ({ messages, owner }) => {
  
  return (
    <div className="chatApp__convTimeline">
      {messages.slice(0).reverse().map((messageItem) => (
        <MessageItem
          key={messageItem.id}
          owner={owner}
          sender={messageItem.sender}
          senderAvatar={messageItem.senderAvatar}
          message={messageItem.message}
        />
      ))}
    </div>
  );
};

export default MessageList;
