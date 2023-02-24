# @rock-n-prog/react-modal

# **Know that this project doesn't work at all at the moment, I'm still learning to develop a React package. This is my first npm package, plz don't hate <3**

Headless UI for modal tooling using React

## Features

- Super simple modal handling
- 100% headless, you define your own styles
- Insanely lightweight
- Handy createModalUtils function to handle type inference

## Usage

First, install the package:

```bash
pnpm install @rock-n-prog/react-modal
```

Then, create a file to define your context provider and hook (like `src/utils/modals.ts`):

```ts
import { createModalUtils } from '@rock-n-prog/react-modal';

// Import your own component definitions
import { Modal } from '../components/Modal';
import { Container } from '../components/Container';
import { Backdrop } from '../components/Backdrop';

const config = {
  Modal,
  Container,
  Backdrop,
};

const { ModalProvider, useModalContext } = createModalUtils({ config });

export { ModalProvider, useModalContext };
```

You can now use modals as you wish!

```tsx
// App.tsx

import * as React from 'react';
import { ModalProvider } from './utils/modals';
import { ShowModalButton } from './components/ShowModalButton';
import './App.css';

function App() {
  return (
    <ModalProvider>
      <ShowModalButton />
    </ModalProvider>
  );
}

export { App };
```

```tsx
// ShowModalButton.tsx

import * as React from 'react';
import { useModalContext } from '../utils/modals';

function ShowModalButton() {
  const { showModal } = useModalContext();

  function onClick() {
    showModal({
      onSubmit: () => console.log('Submit!'),
      onCancel: () => console.log('Cancel!'),
      children: <span>Some modal content</span>,
    });
  }

  return <button onClick={onClick}>Show modal</button>;
}

export { ShowModalButton };
```

## Examples

- [Style tags](examples/style-tags)
- [SCSS Modules](examples/scss-modules)
- [styled-components](examples/styled-components)
