import * as React from 'react';
import {ModalContext} from "../contexts/ModalProvider";

function useModalContext() {
  return React.useContext(ModalContext);
}

export { useModalContext };