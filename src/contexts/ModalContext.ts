import * as React from 'react';
import type { BaseModalProps } from '../types/BaseModalProps';

type ModalContextProps<TModalProps extends BaseModalProps> = Readonly<{
  showModal: (request: TModalProps) => void;
  hideModal: () => void;
}>;

function createModalContext<TModalProps extends BaseModalProps>() {
  return React.createContext<ModalContextProps<TModalProps>>({
    showModal: () => void 0,
    hideModal: () => void 0,
  });
}

export type { ModalContextProps };
export { createModalContext };
