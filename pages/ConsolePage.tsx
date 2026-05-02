import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, QrCode, Server, Shield, MessageSquare, ArrowLeft, Menu, X, Settings, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../utils/i18n';

const ConsolePage: React.FC = () => {
  const { t } = useLanguage();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [agentStatus, setAgentStatus] = useState<'booting' | 'online' | 'offline'>('booting');
  const [logs, setLogs] = useState<string[]>([]);
  const [qrCodeReady, setQrCodeReady] = useState(false);
  const [qrAscii, setQrAscii] = useState<string | null>(null);
  
  // Ref para hacer auto-scroll en la terminal
  const logsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 🌐 MAGIA SAAS: Nos conectamos automáticamente al mismo host y puerto que sirve la página.
    // Esto hace que funcione perfecto en localhost:18789 y en tu URL de Railway sin cambiar nada.
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}`;
    
    let ws: WebSocket;

    const connectWebSocket = () => {
      ws = new WebSocket(wsUrl);

      ws.onopen = () => {
        setAgentStatus('online');
        setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] 🟢 Conexión a la Terminal Maestra de OctoArch establecida.`]);
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          
          // 📝 Manejamos los logs estructurados que vienen de logger.ts
          if (data.level && data.message) {
            const time = data.time || new Date().toLocaleTimeString();
            const logLine = `[${time}] [${data.level}] ${data.message}`;
            
            // 🕵️‍♂️ DETECTOR DE QR: Si el log tiene los bloques de ASCII, lo mandamos a la pantalla del QR
            if (data.message.includes('▄▄▄') || data.message.includes('███')) {
              setQrAscii(data.message);
              setQrCodeReady(true);
            } else {
              // Si es un log normal, lo metemos en la terminal (máximo 500 líneas para no crashear la RAM del navegador)
              setLogs(prev => [...prev, logLine].slice(-500));
            }
          } 
          // 🤖 Manejamos respuestas directas de la IA (Si se envían por este túnel)
          else if (data.type === 'response') {
            setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] [IA] ${data.content}`].slice(-500));
          }
        } catch (e) {
          // Si llega algo que no es JSON, lo imprimimos crudo
          setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${event.data}`].slice(-500));
        }
      };

      ws.onclose = () => {
        setAgentStatus('offline');
        setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] 🔴 Conexión perdida con el núcleo. Reintentando en 3s...`]);
        // Auto-reconexión si el servidor se reinicia
        setTimeout(connectWebSocket, 3000);
      };
      
      ws.onerror = () => {
        setAgentStatus('offline');
      };
    };

    // Iniciamos la conexión
    connectWebSocket();

    // Limpieza al desmontar el componente
    return () => {
      if (ws) ws.close();
    };
  }, []);

  // Efecto para hacer auto-scroll siempre que lleguen nuevos logs
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div className="flex h-screen w-full bg-background text-foreground font-sans overflow-hidden selection:bg-primary selection:text-primary-foreground">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-secondary text-secondary-foreground border-r border-border flex flex-col transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 border-b border-secondary-foreground/10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-secondary-foreground font-bold text-lg tracking-tight">
            <Server className="w-6 h-6 text-primary" />
            <span>OctoArch Core</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-secondary-foreground/70 hover:text-secondary-foreground transition-colors p-1.5 rounded-md hover:bg-secondary-foreground/10">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-3 space-y-4">
          <div>
            <div className="text-xs font-semibold text-secondary-foreground/50 px-2 py-2 uppercase tracking-wider">{t.console?.menu || 'Main Menu'}</div>
            <Link to="/console" className="w-full text-left px-3 py-2 rounded-md bg-secondary-foreground/10 text-sm text-secondary-foreground flex items-center gap-2 transition-colors">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="truncate">{t.console?.title || 'Agent Console'}</span>
            </Link>
            <Link to="/" className="w-full text-left px-3 py-2 rounded-md hover:bg-secondary-foreground/10 text-sm text-secondary-foreground/70 hover:text-secondary-foreground flex items-center gap-2 transition-colors mt-1">
              <MessageSquare className="w-4 h-4" />
              <span className="truncate">{t.chat?.active_session || 'ERP Chat'}</span>
            </Link>
          </div>
        </div>

        <div className="p-4 border-t border-secondary-foreground/10 space-y-4">
          <button className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors w-full p-2 rounded-md hover:bg-secondary-foreground/10">
            <Settings className="w-4 h-4" />
            <span>{t.chat?.settings || 'Settings'}</span>
          </button>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col relative w-full bg-background overflow-y-auto">
        {/* Header */}
        <header className="h-14 border-b border-border flex items-center justify-between px-4 md:px-6 bg-card sticky top-0 z-10 shrink-0">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsSidebarOpen(true)} className="md:hidden text-muted-foreground hover:text-foreground p-1.5 -ml-2 rounded-md hover:bg-muted">
              <Menu className="w-5 h-5" />
            </button>
            <span className="font-medium text-sm text-foreground hidden sm:inline">{t.console?.title || 'Agent Console'}</span>
            <div className="flex items-center gap-2 ml-4 px-2 py-1 rounded-full bg-muted border border-border text-xs font-medium">
              <div className={`w-2 h-2 rounded-full ${agentStatus === 'online' ? 'bg-green-500' : agentStatus === 'booting' ? 'bg-yellow-500 animate-pulse' : 'bg-red-500'}`} />
              {agentStatus === 'online' ? (t.console?.status_online || 'Online') : agentStatus === 'booting' ? (t.console?.status_booting || 'Connecting...') : (t.console?.status_offline || 'Offline')}
            </div>
          </div>
          <Link 
            to="/" 
            className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted px-3 py-1.5 rounded-md"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            {t.chat?.return_home || 'Return Home'}
          </Link>
        </header>

        {/* Content */}
        <div className="p-4 md:p-8 max-w-6xl mx-auto w-full space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Terminal Logs */}
            <div className="lg:col-span-2 flex flex-col bg-card border border-border rounded-xl overflow-hidden shadow-sm h-[500px]">
              <div className="h-10 bg-muted border-b border-border flex items-center px-4 gap-2 shrink-0">
                <Terminal className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground">{t.console?.logs_title || 'System Logs (Live)'}</span>
              </div>
              <div className="flex-1 p-4 overflow-y-auto font-mono text-xs sm:text-sm bg-[#0a0a0a] text-green-400 space-y-1">
                {logs.map((log, index) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    key={index}
                    className="whitespace-pre-wrap break-words"
                  >
                    {log}
                  </motion.div>
                ))}
                {agentStatus === 'booting' && (
                  <motion.div 
                    animate={{ opacity: [1, 0] }} 
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 h-4 bg-green-400 ml-1 align-middle"
                  />
                )}
                {/* Ancla invisible para el auto-scroll */}
                <div ref={logsEndRef} />
              </div>
            </div>

            {/* WhatsApp QR Code */}
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm flex flex-col h-[500px]">
              <div className="h-10 bg-muted border-b border-border flex items-center px-4 gap-2 shrink-0">
                <Smartphone className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground">{t.console?.qr_title || 'WhatsApp Gateway'}</span>
              </div>
              <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <QrCode className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{t.console?.qr_title || 'WhatsApp Gateway'}</h3>
                  <p className="text-sm text-muted-foreground">
                    {qrCodeReady ? 'Escanea este código con tu celular para vincular el agente.' : 'Esperando generación del código desde el servidor...'}
                  </p>
                </div>

                <div className="w-56 h-56 bg-white rounded-xl flex items-center justify-center border border-border relative overflow-hidden">
                  {!qrCodeReady ? (
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      <span className="text-xs text-muted-foreground font-medium">{t.console?.waiting_qr || 'Conectando motor...'}</span>
                    </div>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-full h-full flex items-center justify-center relative p-2"
                    >
                      {/* Aquí inyectamos el ASCII puro. 'leading-none' asegura que los bloques formen un cuadrado perfecto */}
                      {qrAscii && (
                        <pre className="text-[5px] sm:text-[6px] leading-[1] font-mono text-black text-center">
                          {qrAscii}
                        </pre>
                      )}
                      
                      {/* Scanning animation overlay */}
                      <motion.div 
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-0.5 bg-primary/80 shadow-[0_0_8px_2px_rgba(var(--primary),0.5)] z-10"
                      />
                    </motion.div>
                  )}
                </div>

                {qrCodeReady && (
                  <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>{t.console?.secure_conn || 'Conexión End-to-End Segura'}</span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsolePage;