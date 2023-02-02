import * as React from 'react';
import { useModalContext } from '../utils/modals';

// TODO: Stylize button
function ShowModalButton() {
  const { showModal } = useModalContext();

  function onClick() {
    showModal({
      onSubmit: () => console.log('Submit!'),
      onCancel: () => console.log('Cancel!'),
      children: <span>Some modal content</span>,
    });
  }

  return <button onClick={onClick}>Show modal</button>;
}

export { ShowModalButton };
