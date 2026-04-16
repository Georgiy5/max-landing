import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './index.css';
import { maxTheme } from './styles/theme.ts';
import { Router } from './router/Router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={maxTheme} defaultColorScheme="light">
      <Notifications position="top-right" />
      <Router/>
    </MantineProvider>
  </StrictMode>
);