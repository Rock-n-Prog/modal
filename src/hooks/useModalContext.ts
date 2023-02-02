import * as React from 'react';
import type {ModalContextProps} from "../contexts/ModalContext";
import type {BaseModalProps} from "../types/BaseModalProps";

function createUseModalContext<TModalProps extends BaseModalProps>(Context: React.Context<ModalContextProps<TModalProps>>) {
  function useModalContext() {
    return React.useContext(Context);
  }

  return useModalContext;
}

export { createUseModalContext };