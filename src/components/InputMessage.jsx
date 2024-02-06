import React from 'react';

const InputMessage = ({ owner, ownerAvatar, sendMessageLoading, typing, resetTyping, isLoading }) => {
  const handleSendMessage = (event) => {
    event.preventDefault();
    const message = event.target.message.value.trim();
    if (message) {
      sendMessageLoading(owner, ownerAvatar, message);
      event.target.message.value = '';
    }
  };

  const handleTyping = (event) => {
    const message = event.target.value.trim();
    if (message) {
      typing(owner);
    } else {
      resetTyping(owner);
    }
  };

  const loadingClass = isLoading ? 'chatApp__convButton--loading' : '';

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
      <button type="submit" className={`chatApp__convButton ${loadingClass}`}>
        <i className="fa-regular fa-paper-plane send_icon" style={{ color: '#ffffff' }}></i>
      </button>
    </form>
  );
};

export default InputMessage;
