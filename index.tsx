import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ChatPage from './pages/ChatPage';
import AuthPage from './pages/AuthPage';
import ConsolePage from './pages/ConsolePage';
import { LanguageProvider } from './utils/i18n';
import TentacleCursor from './components/ui/TentacleCursor';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <HashRouter>
        <TentacleCursor />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/console" element={<ConsolePage />} />
        </Routes>
      </HashRouter>
    </LanguageProvider>
  </React.StrictMode>
);