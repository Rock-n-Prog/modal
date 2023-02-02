import * as React from 'react';

// TODO: Move this in types?
type BaseModalProps = Readonly<{
  onSubmit?: () => unknown;
  onCancel?: () => unknown;
}>;

// TODO: Move this in types?
type BaseContainerProps = Readonly<{
  children: readonly (React.ReactNode | Element)[];
}>;

// TODO: Move this in types?
type ModalProviderConfig<TModalProps extends BaseModalProps, TContainerProps extends BaseContainerProps, TBackdropProps> = Readonly<{
  Modal: React.FC<TModalProps>;
  Container: React.FC<TContainerProps>;
  Backdrop: React.FC<TBackdropProps>;
}>

type ModalProviderProps<TModalProps extends BaseModalProps, TContainerProps extends BaseContainerProps, TBackdropProps> = Readonly<{
  config: ModalProviderConfig<TModalProps, TContainerProps, TBackdropProps>;
}>

function ModalProvider<TModalProps extends BaseModalProps, TContainerProps extends BaseContainerProps, TBackdropProps>({ children, config }: React.PropsWithChildren<ModalProviderProps<TModalProps, TContainerProps, TBackdropProps>>) {
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
    <ModalContext.Provider value={{ showModal, hideModal }}>
      <config.Container>
        {children}
        {request && (
            <>
              <config.Backdrop />
              <config.Modal {...request} onSubmit={handleSubmit} onCancel={handleCancel} />
            </>
        )}
      </config.Container>
    </ModalContext.Provider>
  );
}

// TODO: Find a way to correctly pass generic types
const ModalContext = React.createContext<Readonly<{
  showModal: <TModalProps extends BaseModalProps> (request: TModalProps) => void;
  hideModal: () => void;
}>>({ showModal: () => void 0, hideModal: () => void 0 });

export { ModalProvider, ModalContext };
