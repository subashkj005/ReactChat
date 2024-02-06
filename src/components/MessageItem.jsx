import React from 'react';

const MessageItem = ({ owner, sender, senderAvatar, message }) => {
  const messagePosition = owner === sender ? 'chatApp__convMessageItem--right' : 'chatApp__convMessageItem--left';

  return (
    <div className={`chatApp__convMessageItem ${messagePosition} clearfix`}>
      <img src={senderAvatar} alt={sender} className="chatApp__convMessageAvatar" />
      <div className="chatApp__convMessageValue" dangerouslySetInnerHTML={{ __html: message }} />
    </div>
  );
};

export default MessageItem;
