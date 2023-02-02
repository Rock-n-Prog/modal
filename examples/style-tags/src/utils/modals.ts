import { createModalUtils } from '../../../../src';
import { Modal } from '../components/Modal';
import { Container } from '../components/Container';
import { Backdrop } from '../components/Backdrop';

// TODO: Review import

const config = {
  Modal,
  Container,
  Backdrop,
};

const { ModalProvider, useModalContext } = createModalUtils({ config });

export { ModalProvider, useModalContext };
