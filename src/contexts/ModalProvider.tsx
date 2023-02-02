import * as React from 'react';
import type {BaseModalProps} from "../types/BaseModalProps";
import type {ModalProviderConfig} from "../types/ModalProviderConfig";

type ModalProviderProps<TModalProps extends BaseModalProps> = Readonly<{
  config: ModalProviderConfig<TModalProps>;
}>

function ModalProvider<TModalProps extends BaseModalProps>({ children, config }: React.PropsWithChildren<ModalProviderProps<TModalProps>>) {
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
