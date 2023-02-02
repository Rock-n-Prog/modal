import * as React from 'react';
import type { BaseModalProps } from '../types/BaseModalProps';
import type { ModalProviderConfig } from '../types/ModalProviderConfig';
import type { ModalContextProps } from '../contexts/ModalContext';

type ModalProviderProps<TModalProps extends BaseModalProps> = Readonly<{
  config: ModalProviderConfig<TModalProps>;
  Context: React.Context<ModalContextProps<TModalProps>>;
}>;

function ModalProvider<TModalProps extends BaseModalProps>({
  children,
  config,
  Context,
}: React.PropsWithChildren<ModalProviderProps<TModalProps>>) {
  const [request, setRequest] = React.useState<TModalProps | null>(null);

  function showModal(request: TModalProps) {
    setRequest(request);
  }

  function hideModal() {
    setRequest(null);
  }

  function handleSubmit() {
    request?.onSubmit?.();
    hideModal();
  }

  function handleCancel() {
    request?.onCancel?.();
    hideModal();
  }

  return (
    <Context.Provider value={{ showModal, hideModal }}>
      <config.Container>
        {children}
        {request && (
          <>
            <config.Backdrop />
            <config.Modal {...request} onSubmit={handleSubmit} onCancel={handleCancel} />
          </>
        )}
      </config.Container>
    </Context.Provider>
  );
}

function createModalProvider<TModalProps extends BaseModalProps>({ config, Context }: ModalProviderProps<TModalProps>) {
  return ({ children }: React.PropsWithChildren) => (
    <ModalProvider config={config} Context={Context}>
      {children}
    </ModalProvider>
  );
}

export { createModalProvider };
