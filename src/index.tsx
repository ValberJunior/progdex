import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from 'routes';
import { RecoilRoot } from 'recoil';
import "normalize.css";
import "theme.scss";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RecoilRoot>
    <AppRouter />
  </RecoilRoot>
);

