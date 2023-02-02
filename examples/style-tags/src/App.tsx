import * as React from 'react';
import { ModalProvider } from './utils/modals';
import { ShowModalButton } from './components/ShowModalButton';
import './App.css';

function App() {
  return (
    <ModalProvider>
      <ShowModalButton />
    </ModalProvider>
  );
}

export { App };
