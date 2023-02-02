import * as React from 'react';

type BaseModalProps = Readonly<
  React.PropsWithChildren<{
    onSubmit?: () => unknown;
    onCancel?: () => unknown;
  }>
>;

export type { BaseModalProps };
