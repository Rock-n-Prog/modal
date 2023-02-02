import type { BaseModalProps } from "../types/BaseModalProps";
import {createModalContext} from "../contexts/ModalContext";
import {ModalProviderConfig} from "../types/ModalProviderConfig";
import {createModalProvider} from "../providers/ModalProvider";
import {createUseModalContext} from "../hooks/useModalContext";

type CreateModalUtilsParams<TModalProps extends BaseModalProps> = {
  readonly config: ModalProviderConfig<TModalProps>;
};

function createModalUtils<TModalProps extends BaseModalProps>({ config }: CreateModalUtilsParams<TModalProps>) {
  const ModalContext = createModalContext<TModalProps>();
  const ModalProvider = createModalProvider({ config, Context: ModalContext });
  const useModalContext = createUseModalContext(ModalContext);

  return {
    ModalProvider,
    useModalContext,
  };
}

export { createModalUtils };