import * as React from 'react';

function Container({ children }: React.PropsWithChildren) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      {children}
    </div>
  );
}

export { Container };
