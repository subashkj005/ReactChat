import React from 'react';

const InputMessage = ({ owner, ownerAvatar, sendMessageLoading, typing, resetTyping, isLoading }) => {
  const handleSendMessage = (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    if (message.length > 0) {
      sendMessageLoading(owner, ownerAvatar, message);
      event.target.message.value = '';
    }
  };

  const handleTyping = (event) => {
    const message = event.target.value;
    if (message.length > 0) {
      typing(owner);
    } else {
      resetTyping(owner);
    }
  };

  const loadingClass = isLoading ? 'chatApp__convButton--loading' : '';
  const sendButtonIcon = <i className="material-icons">send</i>;

  return (
    <form onSubmit={handleSendMessage}>
      <input type="hidden" name="owner" value={owner} />
      <input type="hidden" name="ownerAvatar" value={ownerAvatar} />
      <input
        type="text"
        name="message"
        className="chatApp__convInput"
        placeholder="Text message"
        tabIndex="0"
        onKeyDown={handleTyping}
        onKeyUp={handleTyping}
      />
      <div className={`chatApp__convButton ${loadingClass}`} onClick={handleSendMessage}>
        {sendButtonIcon}
      </div>
    </form>
  );
};

export default InputMessage;
