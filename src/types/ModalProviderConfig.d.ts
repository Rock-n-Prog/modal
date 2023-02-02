import * as React from 'react';
import type { BaseModalProps } from './BaseModalProps';

type ModalProviderConfig<TModalProps extends BaseModalProps> = Readonly<{
  Modal: React.FC<TModalProps>;
  Container: React.FC<React.PropsWithChildren>;
  Backdrop: React.FC;
}>;

export type { ModalProviderConfig };
