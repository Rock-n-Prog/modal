import type { BaseModalProps } from '../../../../src/types/BaseModalProps';

// TODO: Review import

type Props = BaseModalProps;

// TODO: Stylize modal
function Modal({ children, onSubmit, onCancel }: Props) {
  return (
    <div>
      {children}
      <div>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
}

export { Modal };
