import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Terminal, Cpu, User, MoreHorizontal, Settings, Plus, MessageSquare, ArrowLeft, Copy, Check, Trash2, Menu, X, Paperclip, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useLanguage } from '../utils/i18n';

interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

// 🧬 Genera un ID de sesión único y persistente para este navegador.
// Esto permite que la memoria de OctoArch mantenga el contexto entre mensajes.
const getOrCreateSessionId = (): string => {
  const STORAGE_KEY = 'octoarch_chat_session_id';
  let sessionId = localStorage.getItem(STORAGE_KEY);
  if (!sessionId) {
    sessionId = `web_chat_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    localStorage.setItem(STORAGE_KEY, sessionId);
  }
  return sessionId;
};

// 📎 Convierte un archivo a Base64 para enviarlo al backend
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

const ChatPage: React.FC = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'system',
      content: t.chat.welcome,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const sessionIdRef = useRef<string>(getOrCreateSessionId());

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCopy = (id: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearChat = () => {
    // Generar nueva sesión al limpiar el chat para resetear la memoria
    const STORAGE_KEY = 'octoarch_chat_session_id';
    const newSessionId = `web_chat_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    localStorage.setItem(STORAGE_KEY, newSessionId);
    sessionIdRef.current = newSessionId;

    setMessages([{
      id: Date.now().toString(),
      role: 'system',
      content: t.chat.chat_cleared,
      timestamp: new Date()
    }]);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    // Auto-focus input on mount
    inputRef.current?.focus();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setAttachedFiles(prev => [...prev, ...newFiles]);
      
      // Add a system message to acknowledge the attachment
      const fileNames = newFiles.map(f => f.name).join(', ');
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'system',
        content: t.chat.attached_msg.replace('{0}', fileNames),
        timestamp: new Date()
      }]);
      
      // Reset input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleSend = useCallback(async () => {
    if ((!input.trim() && attachedFiles.length === 0) || isTyping) return;

    const currentInput = input;
    const currentFiles = [...attachedFiles];

    const newUserMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: currentInput + (currentFiles.length > 0 ? `\n\n📎 [${currentFiles.length} archivo(s) adjunto(s): ${currentFiles.map(f => f.name).join(', ')}]` : ''),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInput('');
    setAttachedFiles([]);
    setIsTyping(true);

    // Reset textarea height
    const textarea = document.getElementById('chat-input');
    if (textarea) {
      textarea.style.height = 'auto';
    }

    // 🚀 CONEXIÓN REAL AL BACKEND DE OCTOARCH
    try {
      // Preparar el body para el endpoint POST /api/chat
      const body: Record<string, any> = {
        text: currentInput,
        sessionId: sessionIdRef.current,
        clientId: sessionIdRef.current,
      };

      // 📎 Si hay archivos adjuntos, convertir el primero a Base64
      // El backend espera 'imageBase64' con formato data:mimetype;base64,...
      if (currentFiles.length > 0) {
        const base64Data = await fileToBase64(currentFiles[0]);
        body.imageBase64 = base64Data;
      }

      // 🌐 Llamada al Gateway Omnicanal de OctoArch
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`Error del servidor: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      if (data.success && data.response) {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.response,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
      } else {
        throw new Error(data.error || 'Respuesta inválida del servidor');
      }

    } catch (error: any) {
      console.error('❌ Error conectando con OctoArch:', error);
      
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'system',
        content: `⚠️ No se pudo conectar con el núcleo de OctoArch. ${error.message || 'Verifica que el servidor esté activo.'}`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  }, [input, attachedFiles, isTyping]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex h-screen w-full bg-background text-foreground font-sans overflow-hidden selection:bg-primary selection:text-primary-foreground">
      
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-secondary text-secondary-foreground border-r border-border flex flex-col transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 border-b border-secondary-foreground/10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-secondary-foreground font-bold text-lg tracking-tight">
            <img src="https://iili.io/q4wto4p.md.png" alt="INVODEX Logo" className="h-6 w-auto object-contain brightness-0 invert" />
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleClearChat} className="text-secondary-foreground/70 hover:text-destructive transition-colors p-1.5 rounded-md hover:bg-secondary-foreground/10" title={t.chat.clear_chat}>
              <Trash2 className="w-4 h-4" />
            </button>
            <button className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors p-1.5 rounded-md hover:bg-secondary-foreground/10" title={t.chat.new_session}>
              <Plus className="w-4 h-4" />
            </button>
            <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-secondary-foreground/70 hover:text-secondary-foreground transition-colors p-1.5 rounded-md hover:bg-secondary-foreground/10">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-3 space-y-4">
          <div>
            <div className="text-xs font-semibold text-secondary-foreground/50 px-2 py-2 uppercase tracking-wider">{t.console?.menu || 'Main Menu'}</div>
            <Link to="/console" className="w-full text-left px-3 py-2 rounded-md hover:bg-secondary-foreground/10 text-sm text-secondary-foreground/70 hover:text-secondary-foreground flex items-center gap-2 transition-colors">
              <Terminal className="w-4 h-4" />
              <span className="truncate">{t.console?.title || 'Agent Console'}</span>
            </Link>
            <Link to="/chat" className="w-full text-left px-3 py-2 rounded-md bg-secondary-foreground/10 text-sm text-secondary-foreground flex items-center gap-2 transition-colors mt-1">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="truncate">{t.chat.active_session || 'ERP Chat'}</span>
            </Link>
          </div>

          <div>
            <div className="text-xs font-semibold text-secondary-foreground/50 px-2 py-2 uppercase tracking-wider">{t.chat.recent_chats}</div>
            <button className="w-full text-left px-3 py-2 rounded-md bg-secondary-foreground/10 text-sm text-secondary-foreground flex items-center gap-2 transition-colors">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="truncate">Invoice Processing</span>
            </button>
            <button className="w-full text-left px-3 py-2 rounded-md hover:bg-secondary-foreground/10 text-sm text-secondary-foreground/70 hover:text-secondary-foreground flex items-center gap-2 transition-colors">
              <MessageSquare className="w-4 h-4" />
              <span className="truncate">ERP Sync Status</span>
            </button>
            <button className="w-full text-left px-3 py-2 rounded-md hover:bg-secondary-foreground/10 text-sm text-secondary-foreground/70 hover:text-secondary-foreground flex items-center gap-2 transition-colors">
              <MessageSquare className="w-4 h-4" />
              <span className="truncate">Vendor Inquiry</span>
            </button>
          </div>
        </div>

        <div className="p-4 border-t border-secondary-foreground/10 space-y-4">
          <button className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors w-full p-2 rounded-md hover:bg-secondary-foreground/10">
            <Settings className="w-4 h-4" />
            <span>{t.chat.settings}</span>
          </button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative w-full bg-background">
        {/* Header */}
        <header className="h-14 border-b border-border flex items-center justify-between px-4 md:px-6 bg-card sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsSidebarOpen(true)} className="md:hidden text-muted-foreground hover:text-foreground p-1.5 -ml-2 rounded-md hover:bg-muted">
              <Menu className="w-5 h-5" />
            </button>
            <span className="font-medium text-sm text-foreground hidden sm:inline">{t.chat.active_session}</span>
          </div>
          <Link 
            to="/" 
            className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted px-3 py-1.5 rounded-md"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            {t.chat.return_home}
          </Link>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 scroll-smooth">
          <div className="max-w-4xl mx-auto space-y-6">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`group flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role !== 'user' && (
                    <div className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 ${msg.role === 'system' ? 'bg-muted text-muted-foreground' : 'bg-primary/10 text-primary'}`}>
                      {msg.role === 'system' ? <Terminal className="w-4 h-4" /> : <Cpu className="w-4 h-4" />}
                    </div>
                  )}
                  
                  <div className={`relative max-w-[80%] rounded-xl p-4 ${
                    msg.role === 'user' 
                      ? 'bg-primary/15 text-foreground border border-primary/20' 
                      : msg.role === 'system'
                        ? 'bg-muted/50 border border-border text-foreground/70 text-sm'
                        : 'bg-card border border-border text-foreground shadow-sm'
                  }`}>
                    {msg.role === 'assistant' || msg.role === 'system' ? (
                      <div className="text-sm leading-relaxed whitespace-pre-wrap prose prose-sm prose-invert max-w-none prose-p:text-foreground prose-strong:text-foreground prose-headings:text-foreground prose-a:text-accent prose-code:text-accent prose-pre:bg-muted prose-pre:text-foreground">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {msg.content}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      <div className="text-sm leading-relaxed whitespace-pre-wrap">
                        {msg.content}
                      </div>
                    )}

                    {/* Copy Button (appears on hover) */}
                    <button
                      onClick={() => handleCopy(msg.id, msg.content)}
                      className={`absolute top-2 ${msg.role === 'user' ? '-left-10' : '-right-10'} p-1.5 rounded-md bg-muted text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:text-foreground`}
                      title="Copy message"
                    >
                      {copiedId === msg.id ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {msg.role === 'user' && (
                    <div className="w-8 h-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-4 justify-start"
              >
                <div className="w-8 h-8 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="bg-card border border-border rounded-xl p-4 flex items-center gap-2 shadow-sm">
                  <div className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 md:p-6 bg-background border-t border-border">
          <div className="max-w-4xl mx-auto relative group">
            <textarea
              id="chat-input"
              ref={inputRef}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                e.target.style.height = 'auto';
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
              onKeyDown={handleKeyDown}
              placeholder={t.chat.placeholder}
              className="w-full bg-card border border-border rounded-xl py-3 pl-4 pr-40 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none shadow-sm"
              rows={1}
              style={{ minHeight: '48px', maxHeight: '200px', overflowY: 'auto' }}
            />
            
            <div className="absolute right-2 bottom-2 flex items-center gap-2">
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                multiple 
                accept=".pdf,.png,.jpg,.jpeg,.csv,.xlsx,.docx,.txt,.json"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium text-accent hover:bg-accent/10 transition-colors border border-accent/20"
                title={t.chat.upload_invoice}
              >
                <Paperclip className="w-4 h-4" />
                <span className="hidden sm:inline">{t.chat.upload_invoice}</span>
              </button>
              <button
                onClick={handleSend}
                disabled={(!input.trim() && attachedFiles.length === 0) || isTyping}
                className="p-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
          {attachedFiles.length > 0 && (
            <div className="max-w-4xl mx-auto mt-3 flex flex-wrap gap-2">
              {attachedFiles.map((file, index) => (
                <div key={index} className="flex items-center gap-2 bg-muted border border-border rounded-md px-3 py-1.5 text-xs text-foreground">
                  <FileText className="w-3 h-3 text-muted-foreground" />
                  <span className="truncate max-w-[150px]">{file.name}</span>
                  <button 
                    onClick={() => setAttachedFiles(prev => prev.filter((_, i) => i !== index))}
                    className="hover:text-destructive transition-colors ml-1"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
          <div className="text-center mt-3 text-xs text-muted-foreground">
            {t.chat.disclaimer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
