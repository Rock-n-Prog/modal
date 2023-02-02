import type { BaseModalProps } from '../../../../src/types/BaseModalProps';

// TODO: Review import

type Props = BaseModalProps;

function Modal({ children, onSubmit, onCancel }: Props) {
  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 2,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
    >
      {children}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          marginLeft: 'auto',
        }}
      >
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
}

export { Modal };
