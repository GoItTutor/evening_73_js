'use strict';

const messagesWrapperEl = document.querySelector('.js-messages-wrapper');

const handleMessagesClick = ({ target }) => {
  if (target.nodeName !== 'BUTTON') {
    return;
  }

  const messageEl = target.closest('.message');

  messageEl.remove();
};

messagesWrapperEl.addEventListener('click', handleMessagesClick);
