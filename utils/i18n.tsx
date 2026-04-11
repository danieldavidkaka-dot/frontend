import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es' | 'de' | 'zh' | 'jp' | 'fr' | 'it' | 'pt';

interface Translations {
  nav: {
    capabilities: string;
    architecture: string;
    use_cases: string;
    benchmarks: string;
    testimonials: string;
    terminal: string;
    access: string;
    api_key: string;
    login: string;
    signup: string;
  };
  hero: {
    badge: string;
    title_start: string;
    title_highlight: string;
    title_end?: string;
    description: string;
    button_trial: string;
    button_chat_erp: string;
    check_no_card: string;
    check_trial: string;
    check_cancel: string;
    mockup_title: string;
    mockup_desc: string;
  };
  quickstart: {
    title: string;
    subtitle: string;
  };
  capabilities: {
    label: string;
    title_core: string;
    title_suffix: string;
    modules_loaded: string;
    status: string;
    items: Array<{ title: string; desc: string }>;
  };
  architecture: {
    label: string;
    title_swarm: string;
    title_intelligence: string;
    description: string;
    layer1_title: string;
    layer1: string;
    layer2_title: string;
    layer2: string;
    layer3_title: string;
    layer3: string;
  };
  benchmarks: {
    title: string;
    subtitle: string;
    metric: string;
    chart_title: string;
    commands: { cmd: string; desc: string }[];
  };
  useCases: {
    label: string;
    title_real: string;
    title_apps: string;
    items: { title: string; description: string; tags: string[] }[];
  };
  testimonials: {
    label: string;
    title_trusted: string;
    title_leaders: string;
    items: { quote: string; author: string; role: string; rating: number; highlight: boolean }[];
  };
  terminal: {
    title: string;
    subtitle: string;
    init: string;
    secure: string;
    help_prompt: string;
    cmd_help: string;
    cmd_deploy_init: string;
    cmd_deploy_alloc: string;
    cmd_deploy_success: string;
    cmd_status_nominal: string;
    cmd_status_stats: string;
    cmd_audit_scan: string;
    cmd_audit_clean: string;
    cmd_whoami: string;
    cmd_error_sudo: string;
    cmd_not_found: string;
    help_text: string;
    status_text: string;
    whoami_text: string;
    ls_text: string;
    matrix_text: string;
    neofetch_text: string;
    not_found: string;
    processing: string;
    awaiting: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    plan_dev: string;
    plan_startup: string;
    plan_enterprise: string;
    cta_start: string;
    cta_deploy: string;
    cta_contact: string;
  };
  auth: {
    login_title: string;
    signup_title: string;
    login_subtitle: string;
    signup_subtitle: string;
    login_action: string;
    signup_action: string;
    email_label: string;
    email_placeholder: string;
    password_label: string;
    password_placeholder: string;
    remember_me: string;
    forgot_password: string;
    login_button: string;
    signup_button: string;
    or_continue: string;
  };
  chat: {
    welcome: string;
    clear_chat: string;
    new_session: string;
    recent_chats: string;
    settings: string;
    active_session: string;
    return_home: string;
    placeholder: string;
    upload_invoice: string;
    disclaimer: string;
    processing_msg: string;
    attached_msg: string;
    chat_cleared: string;
  };
  console?: {
    menu: string;
    title: string;
    status_online: string;
    status_booting: string;
    status_offline: string;
    logs_title: string;
    qr_title: string;
    qr_desc: string;
    waiting_qr: string;
    secure_conn: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: { capabilities: 'Key Features', architecture: 'Initialization', use_cases: 'Use Cases', benchmarks: 'Commands', testimonials: 'Testimonials', terminal: 'Workspace', access: 'Deploy', api_key: 'API_KEY', login: 'Log in', signup: 'Sign up' },
    hero: { 
      badge: 'Enterprise Cognitive Runtime',
      title_start: 'Automate your ERP with ',
      title_highlight: 'Intelligent Agents',
      description: 'INVODEX seamlessly integrates with your existing ERP systems to automate data entry, invoice processing, and complex workflows using advanced AI.',
      button_trial: 'Start Free Trial',
      button_chat_erp: 'Open ERP Chat',
      check_no_card: 'No credit card required',
      check_trial: '14-day free trial',
      check_cancel: 'Cancel anytime',
      mockup_title: 'INVODEX Workspace',
      mockup_desc: 'Your intelligent command center for ERP automation and data processing.'
    },
    quickstart: { title: 'Deployment', subtitle: 'Spin up the INVODEX environment with strict clean architecture and RBAC.' },

    capabilities: { label: 'SWARM_INTELLIGENCE', title_core: 'Key', title_suffix: 'Features', modules_loaded: 'SYSTEMS: NOMINAL', status: 'RBAC: SECURE', items: [
      { title: 'B2B White-Labeling & Multi-Tenant Architecture', desc: 'Native Multi-Tenant isolation guarantees that corporate data and chat histories are strictly segregated per Client ID.' },
      { title: 'Provider-Agnostic Cognitive Core', desc: 'Adaptable to enterprise needs with support for multiple AI models including Gemini, GPT-4o, Claude 3.5, and more.' },
      { title: 'AIEOS Digital DNA', desc: 'Alters the agent\'s behavior and vocabulary in real-time based on strict corporate policies and JSON contracts.' },
      { title: 'Natural Language Gateway', desc: 'Extracts core intent from communications and maps it seamlessly to the correct corporate workflows.' },
      { title: 'Zero-Trust Architecture (RBAC)', desc: 'Strict role-based access controls and policy enforcement to guarantee the security of corporate data.' },
      { title: 'Swarm Intelligence', desc: 'Deploys sub-agents in isolated environments to execute tasks in parallel safely and efficiently.' },
      { title: 'Advanced Omnichannel Processing', desc: 'Native audio transcription and link purification to process information from multiple sources efficiently.' }
    ] },
    architecture: { label: '// Omnichannel Architecture', title_swarm: 'V5.0', title_intelligence: 'Architecture', description: '> INVODEX dynamically injects its own TypeScript code into its neural network at runtime, morphs its personality based on mathematical DNA files, and defends its corporate identity under a strict "Titanium Cage" security model.', layer1_title: 'Input Layer', layer1: 'Omnichannel Gateways: WhatsApp, Telegram, and HTTP/WS API act as the sensory inputs.', layer2_title: 'Processing Core', layer2: 'Cognitive Runtime: Provider-Agnostic Orchestrator processes intents using AIEOS Digital DNA.', layer3_title: 'Execution Layer', layer3: 'Execution & Swarm: Spawns Sub-Agents, executes MCP tools, and manages servers autonomously.' },
    benchmarks: { 
      title: 'Commands and Syntax', 
      subtitle: '// Omnichannel Module', 
      metric: 'Compliance Rate', 
      chart_title: 'Security Audit',
      commands: [
        { cmd: "Send an image/document", desc: "Omnichannel Gateway: The system automatically parses the document via WhatsApp/Telegram." },
        { cmd: "!status", desc: "Diagnostic: Returns the Swarm Intelligence and MCP server status." },
        { cmd: "invo cfo [task]", desc: "Chief Financial Officer Mode (Strict, analytical, terminal tools blocked via Titanium Cage)." },
        { cmd: "invo cmo [task]", desc: "Chief Marketing Officer Mode (Creative, persuasive AIEOS DNA)." },
        { cmd: "invo dev [task]", desc: "Developer Mode (Access to MCP, shell commands, local files, and Dynamic Code Injection)." },
        { cmd: "invo research [task]", desc: "Researcher Mode (Access to web inspection and synthesis)." },
        { cmd: "invo chat [task]", desc: "Safe Conversational Mode (All system-modifying tools blocked)." }
      ]
    },
    useCases: {
      label: 'APPLIED INTELLIGENCE',
      title_real: 'Real-World',
      title_apps: 'Applications',
      items: [
        { title: "Omnichannel Document Processing", description: "INVODEX monitors WhatsApp and Telegram gateways, extracts document data using vision models, validates it against corporate records, and automatically posts the entries.", tags: ["Omnichannel", "Automation", "Vision AI"] },
        { title: "Autonomous Swarm Forging", description: "When complex tasks arise, INVODEX spawns sub-agents in isolated sandboxes, runs tsc for validation, and promotes code via Hot-Swap without restarting.", tags: ["Swarm Intelligence", "Self-Healing", "Dynamic Code"] },
        { title: "Provider-Agnostic Orchestration", description: "Seamlessly swap the cognitive core globally via a single .env variable. Supports Gemini, GPT-4o, Claude 3.5, DeepSeek, Grok 2, and Qwen 2.5 for optimal cost-performance.", tags: ["LLM Routing", "Cost Optimization", "Agnostic"] },
        { title: "Titanium Cage Security", description: "Zero-Trust Architecture (PBAC) reads allowed_tools directly from AIEOS JSON DNA. Kernel Override mechanism purges conflicting past personas to defend corporate identity.", tags: ["Cybersecurity", "Zero-Trust", "AIEOS"] }
      ]
    },
    testimonials: {
      label: 'CLIENT SUCCESS',
      title_trusted: 'Trusted by',
      title_leaders: 'Industry Leaders',
      items: [
        { quote: "INVODEX's B2B White-Labeling allowed us to deploy a fully branded cognitive agent to our clients in days. The Multi-Tenant Memory isolation in Supabase ensures absolute data privacy.", author: "Sarah Jenkins", role: "CTO, TechFlow Solutions", rating: 5, highlight: true },
        { quote: "The Swarm Intelligence is mind-blowing. When a complex task fails, INVODEX spawns a sub-agent, writes a patch, runs tsc, and hot-swaps the code without restarting.", author: "David Chen", role: "Lead Architect, Nexus Systems", rating: 5, highlight: false },
        { quote: "Provider-Agnostic Orchestration changed everything. We swap between Gemini, Claude, and DeepSeek via a single .env variable, optimizing our costs by 60%.", author: "Elena Rodriguez", role: "VP of Engineering, GlobalReach", rating: 5, highlight: false }
      ]
    },
    terminal: { 
      title: 'Agent Workspace', 
      subtitle: 'Real-time view of the agent\'s reasoning, RBAC enforcement, and execution loop.',
      init: 'INVODEX Agent initialized in secure environment.',
      secure: 'Multi-channel gateway mounted. Network access restricted.',
      help_prompt: 'Awaiting task assignment... try: "process document" or "invo cfo budget"',
      cmd_help: 'Assign a task to begin autonomous execution.',
      cmd_deploy_init: '<thought> Received document via Telegram Gateway. Validating AIEOS schema... </thought>',
      cmd_deploy_alloc: '<action> execute_mcp("process_document", extracted_json) </action>',
      cmd_deploy_success: '<observation> Document processed and backed up to Corporate ERP </observation>',
      cmd_status_nominal: 'AGENT STATUS: IDLE',
      cmd_status_stats: 'CONTEXT: 128K | TOOLS: 15 | MEM: 1.2GB',
      cmd_audit_scan: '<thought> Role CFO assumed. Analyzing budget... I need to check local files. </thought>',
      cmd_audit_clean: '<action> executeCommand("ls -la") </action>',
      cmd_whoami: 'invo-agent@enterprise-env',
      cmd_error_sudo: '<error> RBAC BLOCK: Role "CFO" cannot execute terminal commands. </error>',
      cmd_not_found: 'Task received. Routing to appropriate handler...',
      help_text: 'Available commands:\n- process document: Execute document processing workflow\n- invo cfo budget: Run financial audit\n- invo dev logs: View system logs\n- status: Check system status\n- whoami: Display current user\n- date: Show system time\n- ls: List directory contents\n- matrix: Enter the matrix\n- neofetch: System information\n- clear: Clear terminal',
      status_text: 'System Status: OPTIMAL\nCPU: 12%\nMemory: 4.2GB / 16GB\nNetwork: 14ms latency\nActive Agents: 8',
      whoami_text: 'invo-admin (UID: 0, GID: 0)\nRoles: [SUPERUSER, DEV, CFO]',
      ls_text: 'drwxr-xr-x  agents/\ndrwxr-xr-x  config/\ndrwxr-xr-x  logs/\n-rw-r--r--  invo.config.json\n-rwxr-xr-x  start.sh',
      matrix_text: 'Wake up, Neo...\nThe Matrix has you...\nFollow the white rabbit.\n\nKnock, knock, Neo.',
      neofetch_text: '\n       .---.        invo-admin@invodex\n      /     \\       -------------------\n     | () () |      OS: INVODEX OS v5.0 (Corporate Edition)\n      \\  ^  /       Kernel: 6.1.0-invo-amd64\n       |||||        Uptime: 42 days, 13 hours, 37 mins\n       |||||        Packages: 1337 (dpkg)\n                    Shell: zsh 5.9\n                    Terminal: InvoTerm\n                    CPU: Quantum Neural Processor @ 8.4GHz\n                    Memory: 4200MiB / 16384MiB\n         ',
      not_found: 'Command not found: {cmd}. Type \'help\' for a list of commands.',
      processing: 'REASONING LOOP ACTIVE...',
      awaiting: 'AWAITING INSTRUCTION'
    },
    pricing: { title: 'Usage', subtitle: '// Compute & Token Costs', plan_dev: 'Local LLM', plan_startup: 'Cloud API', plan_enterprise: 'Dedicated', cta_start: 'Start Agent', cta_deploy: 'View Repo', cta_contact: 'Sponsor' },
    auth: {
      login_title: 'Sign in to your account',
      signup_title: 'Create your account',
      login_subtitle: 'Or ',
      signup_subtitle: 'Already have an account? ',
      login_action: 'start your 14-day free trial',
      signup_action: 'sign in here',
      email_label: 'Email address',
      email_placeholder: 'you@company.com',
      password_label: 'Password',
      password_placeholder: '••••••••',
      remember_me: 'Remember me',
      forgot_password: 'Forgot your password?',
      login_button: 'Sign in',
      signup_button: 'Create account',
      or_continue: 'Or continue with'
    },
    chat: {
      welcome: 'Welcome to INVODEX. How can I help you automate your ERP workflows today?',
      clear_chat: 'Clear Chat',
      new_session: 'New Session',
      recent_chats: 'Recent Chats',
      settings: 'Settings',
      active_session: 'Active Session',
      return_home: 'Return to Home',
      placeholder: 'Message INVODEX...',
      upload_invoice: 'Upload Invoice',
      disclaimer: 'INVODEX can make mistakes. Consider verifying important information.',
      processing_msg: 'I have received your request: "{0}".\n\nI am processing this information and will update the ERP system accordingly. Please let me know if you need anything else.',
      attached_msg: 'Attached file(s): {0}. Ready for processing.',
      chat_cleared: 'Chat cleared. How can I help you today?'
    },
    console: {
      menu: 'Main Menu',
      title: 'Agent Console',
      status_online: 'Online',
      status_booting: 'Booting...',
      status_offline: 'Offline',
      logs_title: 'System Logs',
      qr_title: 'WhatsApp Gateway',
      qr_desc: 'Scan this QR code with your WhatsApp app to connect the agent.',
      waiting_qr: 'Generating QR code...',
      secure_conn: 'End-to-end encrypted'
    }
  },
  es: {
    nav: { capabilities: 'Capacidades', architecture: 'Arquitectura', use_cases: 'Casos de Uso', benchmarks: 'Comandos', testimonials: 'Testimonios', terminal: 'Workspace', access: 'Desplegar', api_key: 'API_KEY', login: 'Iniciar sesión', signup: 'Registrarse' },
    hero: { 
      badge: 'Entorno de Ejecución Cognitivo Empresarial',
      title_start: 'Automatiza tu ERP con ',
      title_highlight: 'Agentes Inteligentes',
      description: 'INVODEX se integra perfectamente con tus sistemas ERP existentes para automatizar la entrada de datos, el procesamiento de facturas y flujos de trabajo complejos utilizando IA avanzada.',
      button_trial: 'Iniciar Prueba Gratuita',
      button_chat_erp: 'Abrir Chat ERP',
      check_no_card: 'Sin tarjeta de crédito',
      check_trial: 'Prueba gratuita de 14 días',
      check_cancel: 'Cancela en cualquier momento',
      mockup_title: 'Espacio de Trabajo INVODEX',
      mockup_desc: 'Tu centro de mando inteligente para la automatización de ERP y procesamiento de datos.'
    },
    quickstart: { title: 'Despliegue', subtitle: 'Inicia el entorno INVODEX con arquitectura limpia estricta y RBAC.' },

    capabilities: { label: 'CAPACIDADES', title_core: 'Capacidades', title_suffix: 'Principales', modules_loaded: 'SISTEMAS: NOMINAL', status: 'RBAC: SEGURO', items: [
      { title: 'Marca Blanca B2B y Arquitectura Multi-Inquilino', desc: 'Aislamiento nativo multi-inquilino que garantiza que los historiales y datos corporativos estén estrictamente segregados por ID de cliente.' },
      { title: 'Núcleo Cognitivo Agnóstico', desc: 'Soporte para múltiples modelos de IA (Gemini, GPT-4o, Claude 3.5) adaptable a las necesidades de la empresa.' },
      { title: 'ADN Digital AIEOS', desc: 'Adapta el comportamiento y vocabulario del agente en tiempo real basándose en políticas corporativas estrictas.' },
      { title: 'Puerta de Enlace de Lenguaje Natural', desc: 'Extrae la intención principal de las comunicaciones y la mapea a los flujos de trabajo corporativos correspondientes.' },
      { title: 'Arquitectura Zero-Trust (RBAC)', desc: 'Controles de acceso estrictos basados en roles y políticas para garantizar la seguridad de los datos corporativos.' },
      { title: 'Inteligencia de Enjambre', desc: 'Despliega sub-agentes en entornos aislados para ejecutar tareas en paralelo de forma segura y eficiente.' },
      { title: 'Procesamiento Omnicanal Avanzado', desc: 'Transcripción de audio nativa y purificación de enlaces para procesar información de múltiples fuentes de manera eficiente.' }
    ] },
    architecture: { label: '// Arquitectura Omnicanal', title_swarm: 'V5.0', title_intelligence: 'Arquitectura', description: '> INVODEX inyecta dinámicamente su propio código TypeScript en su red neuronal en tiempo de ejecución, transforma su personalidad basándose en archivos de ADN matemático y defiende su identidad corporativa bajo un estricto modelo de seguridad "Titanium Cage".', layer1_title: 'Capa de Entrada', layer1: 'Gateways Omnicanal: WhatsApp, Telegram y API HTTP/WS actúan como entradas sensoriales.', layer2_title: 'Núcleo de Procesamiento', layer2: 'Runtime Cognitivo: El Orquestador Agnóstico de Proveedores procesa intenciones usando ADN Digital AIEOS.', layer3_title: 'Capa de Ejecución', layer3: 'Ejecución y Enjambre: Genera Sub-Agentes, ejecuta herramientas MCP y gestiona servidores de forma autónoma.' },
    benchmarks: { 
      title: 'Comandos Omnicanal y Perfiles', 
      subtitle: '// Interactúe con INVODEX utilizando los siguientes prefijos para activar perfiles comerciales específicos', 
      metric: 'Tasa de Cumplimiento', 
      chart_title: 'Auditoría de Seguridad',
      commands: [
        { cmd: "Enviar una imagen/documento", desc: "Gateway Omnicanal: El sistema analiza automáticamente el documento a través de WhatsApp/Telegram." },
        { cmd: "!status", desc: "Diagnóstico: Devuelve el estado de la Inteligencia de Enjambre y del servidor MCP." },
        { cmd: "invo cfo [tarea]", desc: "Modo Director Financiero (Estricto, analítico, herramientas de terminal bloqueadas vía Titanium Cage)." },
        { cmd: "invo cmo [tarea]", desc: "Modo Director de Marketing (Creativo, persuasivo ADN AIEOS)." },
        { cmd: "invo dev [tarea]", desc: "Modo Desarrollador (Acceso a MCP, comandos de shell, archivos locales e Inyección Dinámica de Código)." },
        { cmd: "invo research [tarea]", desc: "Modo Investigador (Acceso a inspección web y síntesis)." },
        { cmd: "invo chat [tarea]", desc: "Modo Conversacional Seguro (Todas las herramientas que modifican el sistema están bloqueadas)." }
      ]
    },
    useCases: {
      label: 'INTELIGENCIA APLICADA',
      title_real: 'Aplicaciones del',
      title_apps: 'Mundo Real',
      items: [
        { title: "Procesamiento de Documentos Omnicanal", description: "INVODEX monitoriza las puertas de enlace de WhatsApp y Telegram, extrae datos de documentos utilizando modelos de visión, los valida frente a registros corporativos y publica las entradas automáticamente.", tags: ["Omnicanal", "Automatización", "IA de Visión"] },
        { title: "Forja Autónoma de Enjambres", description: "Cuando surgen tareas complejas, INVODEX genera sub-agentes en sandboxes aislados, ejecuta tsc para validación y promueve el código mediante Hot-Swap sin reiniciar.", tags: ["Inteligencia de Enjambre", "Auto-recuperación", "Código Dinámico"] },
        { title: "Orquestación Agnóstica de Proveedores", description: "Intercambie sin problemas el núcleo cognitivo globalmente a través de una sola variable .env. Soporta Gemini, GPT-4o, Claude 3.5, DeepSeek, Grok 2 y Qwen 2.5 para una relación costo-rendimiento óptima.", tags: ["Enrutamiento LLM", "Optimización de Costos", "Agnóstico"] },
        { title: "Seguridad Titanium Cage", description: "La Arquitectura Zero-Trust (PBAC) lee allowed_tools directamente del ADN JSON de AIEOS. El mecanismo de Anulación del Núcleo purga perfiles pasados conflictivos para defender la identidad corporativa.", tags: ["Ciberseguridad", "Zero-Trust", "AIEOS"] }
      ]
    },
    testimonials: {
      label: 'ÉXITO DEL CLIENTE',
      title_trusted: 'Con la confianza de',
      title_leaders: 'Líderes de la Industria',
      items: [
        { quote: "La Marca Blanca B2B de INVODEX nos permitió desplegar un agente cognitivo totalmente personalizado para nuestros clientes en días. El aislamiento de Memoria Multi-Inquilino en Supabase garantiza la privacidad absoluta de los datos.", author: "Sarah Jenkins", role: "CTO, TechFlow Solutions", rating: 5, highlight: true },
        { quote: "La Inteligencia de Enjambre es alucinante. Cuando una tarea compleja falla, INVODEX genera un sub-agente, escribe un parche, ejecuta tsc y hace un hot-swap del código sin reiniciar.", author: "David Chen", role: "Arquitecto Principal, Nexus Systems", rating: 5, highlight: false },
        { quote: "La Orquestación Agnóstica de Proveedores lo cambió todo. Cambiamos entre Gemini, Claude y DeepSeek a través de una sola variable .env, optimizando nuestros costos en un 60%.", author: "Elena Rodriguez", role: "VP de Ingeniería, GlobalReach", rating: 5, highlight: false }
      ]
    },
    terminal: { 
      title: 'Workspace del Agente', 
      subtitle: 'Vista en tiempo real del razonamiento del agente, aplicación de RBAC y bucle de ejecución.',
      init: 'Agente INVODEX inicializado en entorno seguro.',
      secure: 'Gateway multicanal montado. Acceso a red restringido.',
      help_prompt: 'Esperando asignación de tarea... intenta: "procesar documento" o "invo cfo presupuesto"',
      cmd_help: 'Asigna una tarea para comenzar la ejecución autónoma.',
      cmd_deploy_init: '<thought> Documento recibido vía Telegram Gateway. Validando esquema AIEOS... </thought>',
      cmd_deploy_alloc: '<action> execute_mcp("process_document", extracted_json) </action>',
      cmd_deploy_success: '<observation> Documento procesado y respaldado en ERP Corporativo </observation>',
      cmd_status_nominal: 'ESTADO DEL AGENTE: INACTIVO',
      cmd_status_stats: 'CONTEXTO: 128K | HERRAMIENTAS: 15 | MEM: 1.2GB',
      cmd_audit_scan: '<thought> Rol CFO asumido. Analizando presupuesto... Necesito revisar archivos locales. </thought>',
      cmd_audit_clean: '<action> executeCommand("ls -la") </action>',
      cmd_whoami: 'invo-agent@enterprise-env',
      cmd_error_sudo: '<error> BLOQUEO RBAC: El rol "CFO" no puede ejecutar comandos de terminal. </error>',
      cmd_not_found: 'Tarea recibida. Enrutando al manejador apropiado...',
      help_text: 'Comandos disponibles:\n- process document: Ejecutar flujo de procesamiento de documentos\n- invo cfo budget: Ejecutar auditoría financiera\n- invo dev logs: Ver registros del sistema\n- status: Comprobar estado del sistema\n- whoami: Mostrar usuario actual\n- date: Mostrar hora del sistema\n- ls: Listar contenido del directorio\n- matrix: Entrar en matrix\n- neofetch: Información del sistema\n- clear: Limpiar terminal',
      status_text: 'Estado del Sistema: ÓPTIMO\nCPU: 12%\nMemoria: 4.2GB / 16GB\nRed: 14ms latencia\nAgentes Activos: 8',
      whoami_text: 'invo-admin (UID: 0, GID: 0)\nRoles: [SUPERUSER, DEV, CFO]',
      ls_text: 'drwxr-xr-x  agents/\ndrwxr-xr-x  config/\ndrwxr-xr-x  logs/\n-rw-r--r--  invo.config.json\n-rwxr-xr-x  start.sh',
      matrix_text: 'Despierta, Neo...\nMatrix te tiene...\nSigue al conejo blanco.\n\nToc, toc, Neo.',
      neofetch_text: '\n       .---.        invo-admin@invodex\n      /     \\       -------------------\n     | () () |      SO: INVODEX OS v5.0 (Edición Corporativa)\n      \\  ^  /       Kernel: 6.1.0-invo-amd64\n       |||||        Tiempo activo: 42 días, 13 horas, 37 mins\n       |||||        Paquetes: 1337 (dpkg)\n                    Shell: zsh 5.9\n                    Terminal: InvoTerm\n                    CPU: Procesador Neuronal Cuántico @ 8.4GHz\n                    Memoria: 4200MiB / 16384MiB\n         ',
      not_found: 'Comando no encontrado: {cmd}. Escriba \'help\' para ver la lista de comandos.',
      processing: 'BUCLE DE RAZONAMIENTO ACTIVO...',
      awaiting: 'ESPERANDO INSTRUCCIÓN'
    },
    pricing: { title: 'Uso', subtitle: '// Costos de Cómputo y Tokens', plan_dev: 'LLM Local', plan_startup: 'API Cloud', plan_enterprise: 'Dedicado', cta_start: 'Iniciar Agente', cta_deploy: 'Ver Repo', cta_contact: 'Patrocinar' },
    auth: {
      login_title: 'Inicia sesión en tu cuenta',
      signup_title: 'Crea tu cuenta',
      login_subtitle: 'O ',
      signup_subtitle: '¿Ya tienes una cuenta? ',
      login_action: 'comienza tu prueba gratuita de 14 días',
      signup_action: 'inicia sesión aquí',
      email_label: 'Correo electrónico',
      email_placeholder: 'tu@empresa.com',
      password_label: 'Contraseña',
      password_placeholder: '••••••••',
      remember_me: 'Recordarme',
      forgot_password: '¿Olvidaste tu contraseña?',
      login_button: 'Iniciar sesión',
      signup_button: 'Crear cuenta',
      or_continue: 'O continuar con'
    },
    chat: {
      welcome: 'Bienvenido a INVODEX. ¿Cómo puedo ayudarte a automatizar tus flujos de trabajo ERP hoy?',
      clear_chat: 'Limpiar Chat',
      new_session: 'Nueva Sesión',
      recent_chats: 'Chats Recientes',
      settings: 'Configuración',
      active_session: 'Sesión Activa',
      return_home: 'Volver al Inicio',
      placeholder: 'Mensaje a INVODEX...',
      upload_invoice: 'Subir Factura',
      disclaimer: 'INVODEX puede cometer errores. Considera verificar la información importante.',
      processing_msg: 'He recibido tu solicitud: "{0}".\n\nEstoy procesando esta información y actualizaré el sistema ERP en consecuencia. Por favor, avísame si necesitas algo más.',
      attached_msg: 'Archivo(s) adjunto(s): {0}. Listo para procesar.',
      chat_cleared: 'Chat limpiado. ¿Cómo puedo ayudarte hoy?'
    },
    console: {
      menu: 'Menú Principal',
      title: 'Consola del Agente',
      status_online: 'En Línea',
      status_booting: 'Iniciando...',
      status_offline: 'Desconectado',
      logs_title: 'Registros del Sistema',
      qr_title: 'Puerta de Enlace WhatsApp',
      qr_desc: 'Escanea este código QR con tu aplicación de WhatsApp para conectar el agente.',
      waiting_qr: 'Generando código QR...',
      secure_conn: 'Cifrado de extremo a extremo'
    }
  },
  // Other languages kept generic but aligned with the new structure for consistency
  de: {
    nav: { capabilities: 'Werkzeuge', architecture: 'Kognitiver Kern', use_cases: 'Anwendungsfälle', benchmarks: 'Latenz', testimonials: 'Erfahrungsberichte', terminal: 'Konsole', access: 'Zugang', api_key: 'GEMINI_KEY', login: 'Anmelden', signup: 'Registrieren' },
    hero: { 
      badge: 'Enterprise Cognitive Runtime',
      title_start: 'Automatisieren Sie Ihr ERP mit ',
      title_highlight: 'Intelligenten Agenten',
      description: 'INVODEX integriert sich nahtlos in Ihre bestehenden ERP-Systeme, um Dateneingabe, Rechnungsverarbeitung und komplexe Workflows mit fortschrittlicher KI zu automatisieren.',
      button_trial: 'Kostenlose Testversion starten',
      button_chat_erp: 'ERP-Chat öffnen',
      check_no_card: 'Keine Kreditkarte erforderlich',
      check_trial: '14 Tage kostenlos testen',
      check_cancel: 'Jederzeit kündbar',
      mockup_title: 'INVODEX Arbeitsbereich',
      mockup_desc: 'Ihre intelligente Kommandozentrale für ERP-Automatisierung und Datenverarbeitung.'
    },
    quickstart: { title: 'Injektion', subtitle: 'Bereitstellung auf lokaler Maschine. Benötigt Node.js und Gemini API Key.' },

    capabilities: { label: 'AGENT_FÄHIGKEITEN', title_core: 'Core', title_suffix: 'Toolchain', modules_loaded: 'TOOLS: 6/6', status: 'RBAC: AKTIV', items: [
      { title: 'B2B White-Labeling & Multi-Tenant-Architektur', desc: 'Native Multi-Tenant-Isolierung garantiert, dass Unternehmensdaten und Chat-Verläufe streng nach Client-ID getrennt sind.' },
      { title: 'Anbieterunabhängiger Kognitiver Kern', desc: 'Anpassbar an Unternehmensanforderungen mit Unterstützung für mehrere KI-Modelle, einschließlich Gemini, GPT-4o, Claude 3.5 und mehr.' },
      { title: 'AIEOS Digitale DNA', desc: 'Ändert das Verhalten und Vokabular des Agenten in Echtzeit basierend auf strengen Unternehmensrichtlinien und JSON-Verträgen.' },
      { title: 'Natural Language Gateway', desc: 'Extrahiert die Kernabsicht aus der Kommunikation und ordnet sie nahtlos den richtigen Unternehmensabläufen zu.' },
      { title: 'Zero-Trust-Architektur (RBAC)', desc: 'Strenge rollenbasierte Zugriffskontrollen und Richtliniendurchsetzung zur Gewährleistung der Sicherheit von Unternehmensdaten.' },
      { title: 'Schwarmintelligenz', desc: 'Stellt Sub-Agenten in isolierten Umgebungen bereit, um Aufgaben sicher und effizient parallel auszuführen.' },
      { title: 'Erweiterte Omnichannel-Verarbeitung', desc: 'Native Audiotranskription und Link-Bereinigung, um Informationen aus mehreren Quellen effizient zu verarbeiten.' }
    ] },
    architecture: { label: '// Omnichannel-Architektur', title_swarm: 'V5.0', title_intelligence: 'Architektur', description: '> INVODEX injiziert zur Laufzeit dynamisch seinen eigenen TypeScript-Code in sein neuronales Netzwerk, morpht seine Persönlichkeit basierend auf mathematischen DNA-Dateien und verteidigt seine Unternehmensidentität unter einem strengen "Titanium Cage"-Sicherheitsmodell.', layer1_title: 'Eingabeschicht', layer1: 'Omnichannel-Gateways: WhatsApp, Telegram und HTTP/WS-API fungieren als sensorische Eingaben.', layer2_title: 'Verarbeitungskern', layer2: 'Kognitive Laufzeitumgebung: Der anbieterunabhängige Orchestrator verarbeitet Absichten mithilfe von AIEOS Digital DNA.', layer3_title: 'Ausführungsschicht', layer3: 'Ausführung & Schwarm: Spawnt Sub-Agenten, führt MCP-Tools aus und verwaltet Server autonom.' },
    benchmarks: { 
      title: 'Anti-Halluzination', 
      subtitle: '// Modell: Gemini 2.5 Flash', 
      metric: 'Erfolgsrate', 
      chart_title: 'Abschlussrate',
      commands: [
        { cmd: "Bild/Dokument senden", desc: "Omnichannel-Gateway: Das System analysiert das Dokument automatisch über WhatsApp/Telegram." },
        { cmd: "!status", desc: "Diagnose: Gibt den Status der Schwarmintelligenz und des MCP-Servers zurück." },
        { cmd: "invo cfo [aufgabe]", desc: "CFO-Modus (Streng, analytisch, Terminal-Tools über Titanium Cage blockiert)." },
        { cmd: "invo cmo [aufgabe]", desc: "CMO-Modus (Kreative, überzeugende AIEOS-DNA)." },
        { cmd: "invo dev [aufgabe]", desc: "Entwicklermodus (Zugriff auf MCP, Shell-Befehle, lokale Dateien und dynamische Code-Injektion)." },
        { cmd: "invo research [aufgabe]", desc: "Forschermodus (Zugriff auf Web-Inspektion und Synthese)." },
        { cmd: "invo chat [aufgabe]", desc: "Sicherer Konversationsmodus (Alle systemverändernden Tools blockiert)." }
      ]
    },
    useCases: {
      label: 'ANGEWANDTE INTELLIGENZ',
      title_real: 'Praxisnahe',
      title_apps: 'Anwendungen',
      items: [
        { title: "Omnichannel-Dokumentenverarbeitung", description: "INVODEX überwacht WhatsApp- und Telegram-Gateways, extrahiert Dokumentendaten mithilfe von Vision-Modellen, validiert sie anhand von Unternehmensdatensätzen und bucht die Einträge automatisch.", tags: ["Omnichannel", "Automatisierung", "Vision AI"] },
        { title: "Autonomes Schwarm-Schmieden", description: "Wenn komplexe Aufgaben anstehen, spawnt INVODEX Sub-Agenten in isolierten Sandboxes, führt tsc zur Validierung aus und fördert Code über Hot-Swap ohne Neustart.", tags: ["Schwarmintelligenz", "Selbstheilung", "Dynamischer Code"] },
        { title: "Anbieterunabhängige Orchestrierung", description: "Tauschen Sie den kognitiven Kern global nahtlos über eine einzige .env-Variable aus. Unterstützt Gemini, GPT-4o, Claude 3.5, DeepSeek, Grok 2 und Qwen 2.5 für ein optimales Preis-Leistungs-Verhältnis.", tags: ["LLM-Routing", "Kostenoptimierung", "Agnostisch"] },
        { title: "Titanium Cage Sicherheit", description: "Zero-Trust-Architektur (PBAC) liest allowed_tools direkt aus der AIEOS-JSON-DNA. Der Kernel-Override-Mechanismus bereinigt widersprüchliche vergangene Personas, um die Unternehmensidentität zu verteidigen.", tags: ["Cybersicherheit", "Zero-Trust", "AIEOS"] }
      ]
    },
    testimonials: {
      label: 'KUNDENERFOLG',
      title_trusted: 'Vertraut von',
      title_leaders: 'Branchenführern',
      items: [
        { quote: "Das B2B-White-Labeling von INVODEX ermöglichte es uns, innerhalb von Tagen einen vollständig gebrandeten kognitiven Agenten für unsere Kunden bereitzustellen. Die mandantenfähige Speicherisolierung in Supabase gewährleistet absoluten Datenschutz.", author: "Sarah Jenkins", role: "CTO, TechFlow Solutions", rating: 5, highlight: true },
        { quote: "Die Schwarmintelligenz ist atemberaubend. Wenn eine komplexe Aufgabe fehlschlägt, spawnt INVODEX einen Sub-Agenten, schreibt einen Patch, führt tsc aus und tauscht den Code im laufenden Betrieb ohne Neustart aus.", author: "David Chen", role: "Leitender Architekt, Nexus Systems", rating: 5, highlight: false },
        { quote: "Die anbieterunabhängige Orchestrierung hat alles verändert. Wir wechseln über eine einzige .env-Variable zwischen Gemini, Claude und DeepSeek und optimieren unsere Kosten um 60 %.", author: "Elena Rodriguez", role: "VP of Engineering, GlobalReach", rating: 5, highlight: false }
      ]
    },
    terminal: { 
      title: 'INVODEX Konsole', 
      subtitle: 'Lokale Autonome Ausführungsumgebung',
      init: 'INVODEX Engine v5.0.0 initialisiert',
      secure: 'Verbunden mit WhatsApp Gateway',
      help_prompt: 'Warte auf Absichten... [dev, research, chat]',
      cmd_help: 'Router Aktiv: invo [ROLLE] [BEFEHL]',
      cmd_deploy_init: 'Analysiere Absicht: ROLLE=DEV',
      cmd_deploy_alloc: 'Führe ShellTool aus...',
      cmd_deploy_success: 'Paket installiert.',
      cmd_status_nominal: 'STATUS: NOMINAL',
      cmd_status_stats: 'TOKENS: 450/s',
      cmd_audit_scan: 'Prüfe RBAC...',
      cmd_audit_clean: 'Zugriff gewährt.',
      cmd_whoami: 'invo-agent@local',
      cmd_error_sudo: 'RBAC BLOCK: Zugriff verweigert.',
      cmd_not_found: 'Befehl nicht gefunden',
      help_text: 'Verfügbare Befehle:\n- process document: Dokumentenverarbeitungs-Workflow ausführen\n- invo cfo budget: Finanzprüfung durchführen\n- invo dev logs: Systemprotokolle anzeigen\n- status: Systemstatus prüfen\n- whoami: Aktuellen Benutzer anzeigen\n- date: Systemzeit anzeigen\n- ls: Verzeichnisinhalt auflisten\n- matrix: Betritt die Matrix\n- neofetch: Systeminformationen\n- clear: Terminal leeren',
      status_text: 'Systemstatus: OPTIMAL\nCPU: 12%\nSpeicher: 4.2GB / 16GB\nNetzwerk: 14ms Latenz\nAktive Agenten: 8',
      whoami_text: 'invo-admin (UID: 0, GID: 0)\nRollen: [SUPERUSER, DEV, CFO]',
      ls_text: 'drwxr-xr-x  agents/\ndrwxr-xr-x  config/\ndrwxr-xr-x  logs/\n-rw-r--r--  invo.config.json\n-rwxr-xr-x  start.sh',
      matrix_text: 'Wach auf, Neo...\nDie Matrix hat dich...\nFolge dem weißen Kaninchen.\n\nKlopf, klopf, Neo.',
      neofetch_text: '\n       .---.        invo-admin@invodex\n      /     \\       -------------------\n     | () () |      OS: INVODEX OS v5.0 (Corporate Edition)\n      \\  ^  /       Kernel: 6.1.0-invo-amd64\n       |||||        Betriebszeit: 42 Tage, 13 Stunden, 37 Min\n       |||||        Pakete: 1337 (dpkg)\n                    Shell: zsh 5.9\n                    Terminal: InvoTerm\n                    CPU: Quanten-Neuralprozessor @ 8.4GHz\n                    Speicher: 4200MiB / 16384MiB\n         ',
      not_found: 'Befehl nicht gefunden: {cmd}. Geben Sie \'help\' für eine Liste der Befehle ein.',
      processing: 'REASONING-SCHLEIFE AKTIV...',
      awaiting: 'WARTE AUF ANWEISUNG'
    },
    pricing: { title: 'Bereitstellung', subtitle: '// Open Source', plan_dev: 'Lokal', plan_startup: 'Cloud', plan_enterprise: 'Cluster', cta_start: 'CLI Installieren', cta_deploy: 'Docker Pull', cta_contact: 'Kontakt' },
    auth: {
      login_title: 'Melden Sie sich an',
      signup_title: 'Erstellen Sie Ihr Konto',
      login_subtitle: 'Oder ',
      signup_subtitle: 'Haben Sie bereits ein Konto? ',
      login_action: 'starten Sie Ihre 14-tägige kostenlose Testversion',
      signup_action: 'hier anmelden',
      email_label: 'E-Mail-Adresse',
      email_placeholder: 'sie@unternehmen.com',
      password_label: 'Passwort',
      password_placeholder: '••••••••',
      remember_me: 'Angemeldet bleiben',
      forgot_password: 'Passwort vergessen?',
      login_button: 'Anmelden',
      signup_button: 'Konto erstellen',
      or_continue: 'Oder weiter mit'
    },
    chat: {
      welcome: 'Willkommen bei INVODEX. Wie kann ich Ihnen heute bei der Automatisierung Ihrer ERP-Workflows helfen?',
      clear_chat: 'Chat leeren',
      new_session: 'Neue Sitzung',
      recent_chats: 'Letzte Chats',
      settings: 'Einstellungen',
      active_session: 'Aktive Sitzung',
      return_home: 'Zurück zur Startseite',
      placeholder: 'Nachricht an INVODEX...',
      upload_invoice: 'Rechnung hochladen',
      disclaimer: 'INVODEX kann Fehler machen. Bitte überprüfen Sie wichtige Informationen.',
      processing_msg: 'Ich habe Ihre Anfrage erhalten: "{0}".\n\nIch verarbeite diese Informationen und werde das ERP-System entsprechend aktualisieren. Bitte lassen Sie mich wissen, wenn Sie noch etwas benötigen.',
      attached_msg: 'Angehängte Datei(en): {0}. Bereit zur Verarbeitung.',
      chat_cleared: 'Chat geleert. Wie kann ich Ihnen heute helfen?'
    }
  },
  zh: {
    nav: { capabilities: '工具链', architecture: '认知核心', use_cases: '用例', benchmarks: '延迟', testimonials: '客户评价', terminal: '控制台', access: '访问', api_key: 'GEMINI密钥', login: '登录', signup: '注册' },
    hero: { 
      badge: '企业认知运行时',
      title_start: '使用',
      title_highlight: '智能代理',
      title_end: '自动化您的 ERP',
      description: 'INVODEX 与您现有的 ERP 系统无缝集成，使用高级 AI 自动化数据输入、发票处理和复杂的工作流程。',
      button_trial: '开始免费试用',
      button_chat_erp: '打开 ERP 聊天',
      check_no_card: '无需信用卡',
      check_trial: '14 天免费试用',
      check_cancel: '随时取消',
      mockup_title: 'INVODEX 工作区',
      mockup_desc: '您的 ERP 自动化和数据处理智能指挥中心。'
    },
    quickstart: { title: '注入', subtitle: '在本地机器上部署 INVODEX 代理。需要 Node.js 和有效的 Gemini API 密钥。' },

    capabilities: { label: '代理能力', title_core: '核心', title_suffix: '工具链', modules_loaded: '工具挂载: 6/6', status: 'RBAC: 激活', items: [
      { title: 'B2B 白标和多租户架构', desc: '原生多租户隔离保证企业数据和聊天记录严格按客户 ID 隔离。' },
      { title: '与提供商无关的认知核心', desc: '支持多种 AI 模型（包括 Gemini、GPT-4o、Claude 3.5 等），可适应企业需求。' },
      { title: 'AIEOS 数字 DNA', desc: '根据严格的企业政策和 JSON 合同实时改变代理的行为和词汇。' },
      { title: '自然语言网关', desc: '从通信中提取核心意图，并将其无缝映射到正确的企业工作流程。' },
      { title: '零信任架构 (RBAC)', desc: '严格的基于角色的访问控制和策略执行，以保证企业数据的安全。' },
      { title: '群体智能', desc: '在隔离环境中部署子代理，以安全高效地并行执行任务。' },
      { title: '高级全渠道处理', desc: '原生音频转录和链接净化，可高效处理来自多个来源的信息。' }
    ] },
    architecture: { label: '// 全渠道架构', title_swarm: 'V5.0', title_intelligence: '架构', description: '> INVODEX 在运行时动态地将其自己的 TypeScript 代码注入其神经网络，根据数学 DNA 文件改变其个性，并在严格的“钛笼”安全模型下捍卫其企业身份。', layer1_title: '输入层', layer1: '全渠道网关：WhatsApp、Telegram 和 HTTP/WS API 充当感官输入。', layer2_title: '处理核心', layer2: '认知运行时：与提供商无关的编排器使用 AIEOS 数字 DNA 处理意图。', layer3_title: '执行层', layer3: '执行与群体：生成子代理，执行 MCP 工具，并自主管理服务器。' },
    benchmarks: { 
      title: '反幻觉指标', 
      subtitle: '// 模型: Gemini 2.5 Flash (隐身模式)', 
      metric: '成功率', 
      chart_title: '任务完成率',
      commands: [
        { cmd: "发送图像/文档", desc: "全渠道网关：系统通过 WhatsApp/Telegram 自动解析文档。" },
        { cmd: "!status", desc: "诊断：返回群体智能和 MCP 服务器状态。" },
        { cmd: "invo cfo [任务]", desc: "首席财务官模式（严格、分析型，终端工具通过钛笼被阻止）。" },
        { cmd: "invo cmo [任务]", desc: "首席营销官模式（具有创造力、说服力的 AIEOS DNA）。" },
        { cmd: "invo dev [任务]", desc: "开发者模式（访问 MCP、shell 命令、本地文件和动态代码注入）。" },
        { cmd: "invo research [任务]", desc: "研究员模式（访问 Web 检查和综合）。" },
        { cmd: "invo chat [任务]", desc: "安全对话模式（所有修改系统的工具都被阻止）。" }
      ]
    },
    useCases: {
      label: '应用智能',
      title_real: '现实世界',
      title_apps: '应用',
      items: [
        { title: "全渠道文档处理", description: "INVODEX 监控 WhatsApp 和 Telegram 网关，使用视觉模型提取文档数据，根据公司记录进行验证，并自动发布条目。", tags: ["全渠道", "自动化", "视觉 AI"] },
        { title: "自主群体锻造", description: "当出现复杂任务时，INVODEX 会在隔离的沙箱中生成子代理，运行 tsc 进行验证，并通过热插拔提升代码而无需重启。", tags: ["群体智能", "自我修复", "动态代码"] },
        { title: "与提供商无关的编排", description: "通过单个 .env 变量在全球范围内无缝交换认知核心。支持 Gemini、GPT-4o、Claude 3.5、DeepSeek、Grok 2 和 Qwen 2.5，以获得最佳性价比。", tags: ["LLM 路由", "成本优化", "不可知论"] },
        { title: "钛笼安全", description: "零信任架构 (PBAC) 直接从 AIEOS JSON DNA 读取 allowed_tools。内核覆盖机制清除冲突的过去角色，以捍卫企业身份。", tags: ["网络安全", "零信任", "AIEOS"] }
      ]
    },
    testimonials: {
      label: '客户成功',
      title_trusted: '受到',
      title_leaders: '行业领导者信任',
      items: [
        { quote: "INVODEX 的 B2B 白标功能使我们能够在几天内为客户部署完全品牌化的认知代理。Supabase 中的多租户内存隔离确保了绝对的数据隐私。", author: "Sarah Jenkins", role: "CTO, TechFlow Solutions", rating: 5, highlight: true },
        { quote: "群体智能令人惊叹。当复杂任务失败时，INVODEX 会生成一个子代理，编写补丁，运行 tsc，并在不重启的情况下热插拔代码。", author: "David Chen", role: "首席架构师, Nexus Systems", rating: 5, highlight: false },
        { quote: "与提供商无关的编排改变了一切。我们通过单个 .env 变量在 Gemini、Claude 和 DeepSeek 之间切换，将成本优化了 60%。", author: "Elena Rodriguez", role: "工程副总裁, GlobalReach", rating: 5, highlight: false }
      ]
    },
    terminal: { 
      title: 'INVODEX 控制台', 
      subtitle: '本地自主执行环境',
      init: 'INVODEX 引擎 v5.0.0 已初始化',
      secure: '已通过 WebSocket 连接到 WhatsApp 网关',
      help_prompt: '监听意图... [dev, research, chat]',
      cmd_help: '意图路由器激活: invo [角色] [指令]',
      cmd_deploy_init: '解析意图: 角色=DEV (完全访问)',
      cmd_deploy_alloc: '执行 ShellTool: npm install express...',
      cmd_deploy_success: '包已安装。FileTool: package.json 已更新',
      cmd_status_nominal: '认知循环: 稳定',
      cmd_status_stats: 'TOKENS: 450/s | 延迟: 120ms | 内存: 400MB',
      cmd_audit_scan: '验证 RBAC 权限...',
      cmd_audit_clean: 'ROOT 角色写入权限已授予',
      cmd_whoami: 'invo-agent@local-server',
      cmd_error_sudo: 'RBAC 拦截: 角色 "research" 无法执行 Shell 命令。',
      cmd_not_found: '无法识别意图',
      help_text: '可用命令：\n- process document: 执行文档处理工作流\n- invo cfo budget: 运行财务审计\n- invo dev logs: 查看系统日志\n- status: 检查系统状态\n- whoami: 显示当前用户\n- date: 显示系统时间\n- ls: 列出目录内容\n- matrix: 进入矩阵\n- neofetch: 系统信息\n- clear: 清除终端',
      status_text: '系统状态：最佳\nCPU：12%\n内存：4.2GB / 16GB\n网络：14ms 延迟\n活动代理：8',
      whoami_text: 'invo-admin (UID: 0, GID: 0)\n角色: [SUPERUSER, DEV, CFO]',
      ls_text: 'drwxr-xr-x  agents/\ndrwxr-xr-x  config/\ndrwxr-xr-x  logs/\n-rw-r--r--  invo.config.json\n-rwxr-xr-x  start.sh',
      matrix_text: '醒醒，尼奥...\n矩阵已经控制了你...\n跟着白兔走。\n\n咚咚，尼奥。',
      neofetch_text: '\n       .---.        invo-admin@invodex\n      /     \\       -------------------\n     | () () |      OS: INVODEX OS v5.0 (企业版)\n      \\  ^  /       内核: 6.1.0-invo-amd64\n       |||||        运行时间: 42 天, 13 小时, 37 分钟\n       |||||        软件包: 1337 (dpkg)\n                    Shell: zsh 5.9\n                    终端: InvoTerm\n                    CPU: 量子神经处理器 @ 8.4GHz\n                    内存: 4200MiB / 16384MiB\n         ',
      not_found: '找不到命令：{cmd}。输入 \'help\' 获取命令列表。',
      processing: '推理循环活动中...',
      awaiting: '等待指令'
    },
    pricing: { title: '部署', subtitle: '// 开源 & 自托管', plan_dev: '本地', plan_startup: '云 VPS', plan_enterprise: '集群', cta_start: '安装 CLI', cta_deploy: 'Docker 拉取', cta_contact: '企业支持' },
    auth: {
      login_title: '登录您的帐户',
      signup_title: '创建您的帐户',
      login_subtitle: '或者 ',
      signup_subtitle: '已经有帐户了？ ',
      login_action: '开始您的 14 天免费试用',
      signup_action: '在此登录',
      email_label: '电子邮件地址',
      email_placeholder: 'you@company.com',
      password_label: '密码',
      password_placeholder: '••••••••',
      remember_me: '记住我',
      forgot_password: '忘记密码？',
      login_button: '登录',
      signup_button: '创建帐户',
      or_continue: '或继续使用'
    },
    chat: {
      welcome: '欢迎来到 INVODEX。今天我能如何帮助您自动化 ERP 工作流程？',
      clear_chat: '清除聊天',
      new_session: '新会话',
      recent_chats: '最近的聊天',
      settings: '设置',
      active_session: '活动会话',
      return_home: '返回首页',
      placeholder: '向 INVODEX 发送消息...',
      upload_invoice: '上传发票',
      disclaimer: 'INVODEX 可能会犯错。请考虑验证重要信息。',
      processing_msg: '我已收到您的请求：“{0}”。\n\n我正在处理此信息，并将相应地更新 ERP 系统。如果您还需要其他帮助，请告诉我。',
      attached_msg: '附件：{0}。准备处理。',
      chat_cleared: '聊天已清除。今天我能如何帮助您？'
    }
  },
  jp: {
    nav: { capabilities: 'ツールチェーン', architecture: '認知コア', use_cases: 'ユースケース', benchmarks: 'レイテンシ', testimonials: 'お客様の声', terminal: 'コンソール', access: 'アクセス', api_key: 'GEMINIキー', login: 'ログイン', signup: 'サインアップ' },
    hero: { 
      badge: 'エンタープライズコグニティブランタイム',
      title_start: '',
      title_highlight: 'インテリジェントエージェント',
      title_end: 'でERPを自動化',
      description: 'INVODEXは既存のERPシステムとシームレスに統合し、高度なAIを使用してデータ入力、請求書処理、複雑なワークフローを自動化します。',
      button_trial: '無料トライアルを開始',
      button_chat_erp: 'ERPチャットを開く',
      check_no_card: 'クレジットカード不要',
      check_trial: '14日間の無料トライアル',
      check_cancel: 'いつでもキャンセル可能',
      mockup_title: 'INVODEX ワークスペース',
      mockup_desc: 'ERP自動化とデータ処理のためのインテリジェントなコマンドセンター。'
    },
    quickstart: { title: 'インジェクション', subtitle: 'INVODEXエージェントをローカルマシンに展開します。Node.jsと有効なGemini APIキーが必要です。' },

    capabilities: { label: 'エージェント機能', title_core: 'コア', title_suffix: 'ツールチェーン', modules_loaded: 'ツールマウント: 6/6', status: 'RBAC: アクティブ', items: [
      { title: 'B2Bホワイトラベルとマルチテナントアーキテクチャ', desc: 'ネイティブのマルチテナント分離により、企業データとチャット履歴がクライアントIDごとに厳密に分離されることが保証されます。' },
      { title: 'プロバイダーに依存しない認知コア', desc: 'Gemini、GPT-4o、Claude 3.5などの複数のAIモデルをサポートし、企業のニーズに適応できます。' },
      { title: 'AIEOSデジタルDNA', desc: '厳格な企業ポリシーとJSON契約に基づいて、エージェントの動作と語彙をリアルタイムで変更します。' },
      { title: '自然言語ゲートウェイ', desc: 'コミュニケーションからコアインテントを抽出し、適切な企業ワークフローにシームレスにマッピングします。' },
      { title: 'ゼロトラストアーキテクチャ (RBAC)', desc: '企業データのセキュリティを保証するための厳格なロールベースのアクセス制御とポリシーの適用。' },
      { title: 'スウォームインテリジェンス', desc: '隔離された環境にサブエージェントを展開し、タスクを安全かつ効率的に並行して実行します。' },
      { title: '高度なオムニチャネル処理', desc: '複数のソースからの情報を効率的に処理するためのネイティブ音声文字起こしとリンク浄化。' }
    ] },
    architecture: { label: '// オムニチャネルアーキテクチャ', title_swarm: 'V5.0', title_intelligence: 'アーキテクチャ', description: '> INVODEXは、実行時に独自のTypeScriptコードをニューラルネットワークに動的に注入し、数学的なDNAファイルに基づいてその個性を変化させ、厳密な「Titanium Cage」セキュリティモデルの下で企業アイデンティティを防御します。', layer1_title: '入力層', layer1: 'オムニチャネルゲートウェイ：WhatsApp、Telegram、およびHTTP/WS APIが感覚入力として機能します。', layer2_title: '処理コア', layer2: 'コグニティブランタイム：プロバイダーに依存しないオーケストレーターが、AIEOSデジタルDNAを使用してインテントを処理します。', layer3_title: '実行層', layer3: '実行とスウォーム：サブエージェントを生成し、MCPツールを実行し、サーバーを自律的に管理します。' },
    benchmarks: { 
      title: '反幻覚メトリクス', 
      subtitle: '// モデル: Gemini 2.5 Flash (ステルスモード)', 
      metric: '成功率', 
      chart_title: 'タスク完了率',
      commands: [
        { cmd: "画像/ドキュメントを送信", desc: "オムニチャネルゲートウェイ：システムはWhatsApp/Telegram経由でドキュメントを自動的に解析します。" },
        { cmd: "!status", desc: "診断：スウォームインテリジェンスとMCPサーバーのステータスを返します。" },
        { cmd: "invo cfo [タスク]", desc: "CFOモード（厳格、分析的、Titanium Cage経由でターミナルツールがブロックされます）。" },
        { cmd: "invo cmo [タスク]", desc: "CMOモード（創造的、説得力のあるAIEOS DNA）。" },
        { cmd: "invo dev [タスク]", desc: "開発者モード（MCP、シェルコマンド、ローカルファイル、動的コードインジェクションへのアクセス）。" },
        { cmd: "invo research [タスク]", desc: "リサーチャーモード（Web検査と合成へのアクセス）。" },
        { cmd: "invo chat [タスク]", desc: "安全な会話モード（システムを変更するすべてのツールがブロックされます）。" }
      ]
    },
    useCases: {
      label: '応用インテリジェンス',
      title_real: '現実世界の',
      title_apps: 'アプリケーション',
      items: [
        { title: "オムニチャネルドキュメント処理", description: "INVODEXはWhatsAppとTelegramのゲートウェイを監視し、ビジョンモデルを使用してドキュメントデータを抽出し、企業レコードと照合して検証し、エントリを自動的に投稿します。", tags: ["オムニチャネル", "自動化", "ビジョンAI"] },
        { title: "自律型スウォームフォージング", description: "複雑なタスクが発生した場合、INVODEXは隔離されたサンドボックスにサブエージェントを生成し、検証のためにtscを実行し、再起動せずにホットスワップを介してコードをプロモートします。", tags: ["スウォームインテリジェンス", "自己修復", "動的コード"] },
        { title: "プロバイダーに依存しないオーケストレーション", description: "単一の.env変数を介して、グローバルにコグニティブコアをシームレスに交換します。最適なコストパフォーマンスのために、Gemini、GPT-4o、Claude 3.5、DeepSeek、Grok 2、およびQwen 2.5をサポートします。", tags: ["LLMルーティング", "コスト最適化", "不可知論"] },
        { title: "Titanium Cageセキュリティ", description: "ゼロトラストアーキテクチャ（PBAC）は、AIEOS JSON DNAから直接allowed_toolsを読み取ります。カーネルオーバーライドメカニズムは、競合する過去のペルソナをパージして企業アイデンティティを防御します。", tags: ["サイバーセキュリティ", "ゼロトラスト", "AIEOS"] }
      ]
    },
    testimonials: {
      label: 'クライアントの成功',
      title_trusted: '信頼される',
      title_leaders: '業界のリーダー',
      items: [
        { quote: "INVODEXのB2Bホワイトラベルにより、数日で完全にブランド化されたコグニティブエージェントをクライアントに展開できました。Supabaseのマルチテナントメモリ分離により、絶対的なデータプライバシーが保証されます。", author: "Sarah Jenkins", role: "CTO, TechFlow Solutions", rating: 5, highlight: true },
        { quote: "スウォームインテリジェンスは驚くべきものです。複雑なタスクが失敗すると、INVODEXはサブエージェントを生成し、パッチを作成し、tscを実行し、再起動せずにコードをホットスワップします。", author: "David Chen", role: "リードアーキテクト, Nexus Systems", rating: 5, highlight: false },
        { quote: "プロバイダーに依存しないオーケストレーションはすべてを変えました。単一の.env変数を介してGemini、Claude、DeepSeekを切り替え、コストを60％最適化します。", author: "Elena Rodriguez", role: "エンジニアリング担当VP, GlobalReach", rating: 5, highlight: false }
      ]
    },
    terminal: { 
      title: 'INVODEX コンソール', 
      subtitle: 'ローカル自律実行環境',
      init: 'INVODEX エンジン v5.0.0 初期化完了',
      secure: 'WhatsApp ゲートウェイに WebSocket 経由で接続',
      help_prompt: 'インテント待機中... [dev, research, chat]',
      cmd_help: 'インテントルーターアクティブ: invo [役割] [指示]',
      cmd_deploy_init: 'インテント解析: ROLE=DEV (完全アクセス)',
      cmd_deploy_alloc: 'ShellTool実行: npm install express...',
      cmd_deploy_success: 'パッケージインストール完了。FileTool: package.json 更新',
      cmd_status_nominal: '認知ループ: 安定',
      cmd_status_stats: 'トークン: 450/s | レイテンシ: 120ms | メモリ: 400MB',
      cmd_audit_scan: 'RBAC権限を確認中...',
      cmd_audit_clean: '役割: ROOT に書き込みアクセスを許可',
      cmd_whoami: 'invo-agent@local-server',
      cmd_error_sudo: 'RBAC ブロック: 役割 "research" はシェルコマンドを実行できません。',
      cmd_not_found: 'インテントが認識されません',
      help_text: '利用可能なコマンド：\n- process document: ドキュメント処理ワークフローを実行\n- invo cfo budget: 財務監査を実行\n- invo dev logs: システムログを表示\n- status: システムステータスを確認\n- whoami: 現在のユーザーを表示\n- date: システム時間を表示\n- ls: ディレクトリの内容を一覧表示\n- matrix: マトリックスに入る\n- neofetch: システム情報\n- clear: ターミナルをクリア',
      status_text: 'システムステータス：最適\nCPU：12％\nメモリ：4.2GB / 16GB\nネットワーク：14msのレイテンシ\nアクティブなエージェント：8',
      whoami_text: 'invo-admin (UID: 0, GID: 0)\nロール: [SUPERUSER, DEV, CFO]',
      ls_text: 'drwxr-xr-x  agents/\ndrwxr-xr-x  config/\ndrwxr-xr-x  logs/\n-rw-r--r--  invo.config.json\n-rwxr-xr-x  start.sh',
      matrix_text: '起きろ、ネオ...\nマトリックスが君を捕らえている...\n白ウサギを追え。\n\nコンコン、ネオ。',
      neofetch_text: '\n       .---.        invo-admin@invodex\n      /     \\       -------------------\n     | () () |      OS: INVODEX OS v5.0 (コーポレートエディション)\n      \\  ^  /       カーネル: 6.1.0-invo-amd64\n       |||||        稼働時間: 42日, 13時間, 37分\n       |||||        パッケージ: 1337 (dpkg)\n                    シェル: zsh 5.9\n                    ターミナル: InvoTerm\n                    CPU: 量子ニューラルプロセッサ @ 8.4GHz\n                    メモリ: 4200MiB / 16384MiB\n         ',
      not_found: 'コマンドが見つかりません：{cmd}。コマンドのリストについては「help」と入力してください。',
      processing: '推論ループがアクティブ...',
      awaiting: '指示を待っています'
    },
    pricing: { title: '展開', subtitle: '// オープンソース & セルフホスト', plan_dev: 'ローカル', plan_startup: 'クラウド VPS', plan_enterprise: 'クラスター', cta_start: 'CLI インストール', cta_deploy: 'Docker プル', cta_contact: 'エンタープライズサポート' },
    auth: {
      login_title: 'アカウントにサインイン',
      signup_title: 'アカウントを作成',
      login_subtitle: 'または ',
      signup_subtitle: 'すでにアカウントをお持ちですか？ ',
      login_action: '14日間の無料トライアルを開始',
      signup_action: 'ここでサインイン',
      email_label: 'メールアドレス',
      email_placeholder: 'you@company.com',
      password_label: 'パスワード',
      password_placeholder: '••••••••',
      remember_me: 'ログイン状態を保持',
      forgot_password: 'パスワードをお忘れですか？',
      login_button: 'サインイン',
      signup_button: 'アカウント作成',
      or_continue: 'または次で続行'
    },
    chat: {
      welcome: 'INVODEXへようこそ。本日はERPワークフローの自動化をどのようにサポートしましょうか？',
      clear_chat: 'チャットをクリア',
      new_session: '新しいセッション',
      recent_chats: '最近のチャット',
      settings: '設定',
      active_session: 'アクティブなセッション',
      return_home: 'ホームに戻る',
      placeholder: 'INVODEXにメッセージを送信...',
      upload_invoice: '請求書をアップロード',
      disclaimer: 'INVODEXは間違えることがあります。重要な情報は確認してください。',
      processing_msg: 'リクエストを受け取りました: "{0}"\n\nこの情報を処理し、それに応じてERPシステムを更新します。他に必要なことがあればお知らせください。',
      attached_msg: '添付ファイル: {0}。処理の準備ができました。',
      chat_cleared: 'チャットがクリアされました。本日はどのようにお手伝いしましょうか？'
    }
  },
  fr: {
    nav: { capabilities: 'Chaîne d\'outils', architecture: 'Cœur Cognitif', use_cases: 'Cas d\'utilisation', benchmarks: 'Latence', testimonials: 'Témoignages', terminal: 'Console', access: 'Accès', api_key: 'CLÉ_GEMINI', login: 'Connexion', signup: 'S\'inscrire' },
    hero: { 
      badge: 'Runtime Cognitif d\'Entreprise',
      title_start: 'Automatisez votre ERP avec des ',
      title_highlight: 'Agents Intelligents',
      description: 'INVODEX s\'intègre de manière transparente à vos systèmes ERP existants pour automatiser la saisie de données, le traitement des factures et les flux de travail complexes à l\'aide d\'une IA avancée.',
      button_trial: 'Démarrer l\'essai gratuit',
      button_chat_erp: 'Ouvrir le Chat ERP',
      check_no_card: 'Aucune carte de crédit requise',
      check_trial: 'Essai gratuit de 14 jours',
      check_cancel: 'Annulable à tout moment',
      mockup_title: 'Espace de travail INVODEX',
      mockup_desc: 'Votre centre de commandement intelligent pour l\'automatisation ERP et le traitement des données.'
    },
    quickstart: { title: 'Injection', subtitle: 'Déployez l\'agent INVODEX sur votre machine locale. Nécessite Node.js et une clé API Gemini valide.' },

    capabilities: { label: 'CAPACITÉS_AGENT', title_core: 'Cœur', title_suffix: 'Chaîne d\'outils', modules_loaded: 'OUTILS_MONTÉS: 6/6', status: 'RBAC: ACTIF', items: [
      { title: 'Marque Blanche B2B et Architecture Multi-Locataire', desc: 'L\'isolement multi-locataire natif garantit que les données d\'entreprise et les historiques de chat sont strictement séparés par ID client.' },
      { title: 'Cœur Cognitif Agnostique', desc: 'Adaptable aux besoins de l\'entreprise avec la prise en charge de plusieurs modèles d\'IA, notamment Gemini, GPT-4o, Claude 3.5, etc.' },
      { title: 'ADN Numérique AIEOS', desc: 'Modifie le comportement et le vocabulaire de l\'agent en temps réel en fonction de politiques d\'entreprise strictes et de contrats JSON.' },
      { title: 'Passerelle de Langage Naturel', desc: 'Extrait l\'intention principale des communications et la mappe de manière transparente aux flux de travail d\'entreprise corrects.' },
      { title: 'Architecture Zero-Trust (RBAC)', desc: 'Contrôles d\'accès stricts basés sur les rôles et application des politiques pour garantir la sécurité des données d\'entreprise.' },
      { title: 'Intelligence en Essaim', desc: 'Déploie des sous-agents dans des environnements isolés pour exécuter des tâches en parallèle de manière sûre et efficace.' },
      { title: 'Traitement Omnicanal Avancé', desc: 'Transcription audio native et purification des liens pour traiter efficacement les informations provenant de multiples sources.' }
    ] },
    architecture: { label: '// Architecture Omnicanale', title_swarm: 'V5.0', title_intelligence: 'Architecture', description: '> INVODEX injecte dynamiquement son propre code TypeScript dans son réseau neuronal à l\'exécution, transforme sa personnalité en fonction de fichiers ADN mathématiques et défend son identité d\'entreprise sous un modèle de sécurité strict "Titanium Cage".', layer1_title: 'Couche d\'Entrée', layer1: 'Passerelles Omnicanales : WhatsApp, Telegram et l\'API HTTP/WS agissent comme des entrées sensorielles.', layer2_title: 'Cœur de Traitement', layer2: 'Runtime Cognitif : L\'Orchestrateur Agnostique des Fournisseurs traite les intentions en utilisant l\'ADN Numérique AIEOS.', layer3_title: 'Couche d\'Exécution', layer3: 'Exécution et Essaim : Génère des Sous-Agents, exécute des outils MCP et gère les serveurs de manière autonome.' },
    benchmarks: { 
      title: 'Métriques Anti-Hallucination', 
      subtitle: '// Modèle: Gemini 2.5 Flash (Mode Furtif)', 
      metric: 'Taux de Succès', 
      chart_title: 'Taux de Complétion',
      commands: [
        { cmd: "Envoyer une image/document", desc: "Passerelle Omnicanale : Le système analyse automatiquement le document via WhatsApp/Telegram." },
        { cmd: "!status", desc: "Diagnostic : Renvoie l'état de l'Intelligence en Essaim et du serveur MCP." },
        { cmd: "invo cfo [tâche]", desc: "Mode Directeur Financier (Strict, analytique, outils de terminal bloqués via Titanium Cage)." },
        { cmd: "invo cmo [tâche]", desc: "Mode Directeur Marketing (Créatif, persuasif ADN AIEOS)." },
        { cmd: "invo dev [tâche]", desc: "Mode Développeur (Accès au MCP, commandes shell, fichiers locaux et Injection Dynamique de Code)." },
        { cmd: "invo research [tâche]", desc: "Mode Chercheur (Accès à l'inspection web et à la synthèse)." },
        { cmd: "invo chat [tâche]", desc: "Mode Conversationnel Sécurisé (Tous les outils modifiant le système sont bloqués)." }
      ]
    },
    useCases: {
      label: 'INTELLIGENCE APPLIQUÉE',
      title_real: 'Applications du',
      title_apps: 'Monde Réel',
      items: [
        { title: "Traitement de Documents Omnicanal", description: "INVODEX surveille les passerelles WhatsApp et Telegram, extrait les données des documents à l'aide de modèles de vision, les valide par rapport aux dossiers de l'entreprise et publie automatiquement les entrées.", tags: ["Omnicanal", "Automatisation", "IA de Vision"] },
        { title: "Forge d'Essaim Autonome", description: "Lorsque des tâches complexes surviennent, INVODEX génère des sous-agents dans des bacs à sable isolés, exécute tsc pour la validation et promeut le code via Hot-Swap sans redémarrer.", tags: ["Intelligence en Essaim", "Auto-guérison", "Code Dynamique"] },
        { title: "Orchestration Agnostique des Fournisseurs", description: "Échangez de manière transparente le cœur cognitif à l'échelle mondiale via une seule variable .env. Prend en charge Gemini, GPT-4o, Claude 3.5, DeepSeek, Grok 2 et Qwen 2.5 pour un rapport coût-performance optimal.", tags: ["Routage LLM", "Optimisation des Coûts", "Agnostique"] },
        { title: "Sécurité Titanium Cage", description: "L'Architecture Zero-Trust (PBAC) lit allowed_tools directement depuis l'ADN JSON AIEOS. Le mécanisme de Surcharge du Noyau purge les personas passés conflictuels pour défendre l'identité de l'entreprise.", tags: ["Cybersécurité", "Zero-Trust", "AIEOS"] }
      ]
    },
    testimonials: {
      label: 'SUCCÈS CLIENT',
      title_trusted: 'Approuvé par',
      title_leaders: 'les Leaders de l\'Industrie',
      items: [
        { quote: "La Marque Blanche B2B d'INVODEX nous a permis de déployer un agent cognitif entièrement personnalisé pour nos clients en quelques jours. L'isolation de la Mémoire Multi-Locataires dans Supabase garantit une confidentialité absolue des données.", author: "Sarah Jenkins", role: "CTO, TechFlow Solutions", rating: 5, highlight: true },
        { quote: "L'Intelligence en Essaim est époustouflante. Lorsqu'une tâche complexe échoue, INVODEX génère un sous-agent, écrit un correctif, exécute tsc et remplace le code à chaud sans redémarrer.", author: "David Chen", role: "Architecte Principal, Nexus Systems", rating: 5, highlight: false },
        { quote: "L'Orchestration Agnostique des Fournisseurs a tout changé. Nous basculons entre Gemini, Claude et DeepSeek via une seule variable .env, optimisant nos coûts de 60 %.", author: "Elena Rodriguez", role: "VP de l'Ingénierie, GlobalReach", rating: 5, highlight: false }
      ]
    },
    terminal: { 
      title: 'Console INVODEX', 
      subtitle: 'Environnement d\'Exécution Autonome Local',
      init: 'Moteur INVODEX v5.0.0 initialisé',
      secure: 'Connecté à la passerelle WhatsApp via WebSocket',
      help_prompt: 'Écoute des intentions... [dev, research, chat]',
      cmd_help: 'Routeur d\'Intention Actif: invo [RÔLE] [INSTRUCTION]',
      cmd_deploy_init: 'Analyse intention: RÔLE=DEV (Accès Total)',
      cmd_deploy_alloc: 'Exécution ShellTool: npm install express...',
      cmd_deploy_success: 'Paquet installé. FileTool: package.json mis à jour',
      cmd_status_nominal: 'BOUCLE COGNITIVE: STABLE',
      cmd_status_stats: 'TOKENS: 450/s | LATENCE: 120ms | MÉM: 400MB',
      cmd_audit_scan: 'Vérification permissions RBAC...',
      cmd_audit_clean: 'Accès écriture accordé pour rôle: ROOT',
      cmd_whoami: 'invo-agent@serveur-local',
      cmd_error_sudo: 'BLOCAGE RBAC: Le rôle "research" ne peut pas exécuter de commandes shell.',
      cmd_not_found: 'Intention non reconnue',
      help_text: 'Commandes disponibles :\n- process document: Exécuter le flux de traitement de documents\n- invo cfo budget: Lancer l\'audit financier\n- invo dev logs: Afficher les journaux système\n- status: Vérifier l\'état du système\n- whoami: Afficher l\'utilisateur actuel\n- date: Afficher l\'heure du système\n- ls: Lister le contenu du répertoire\n- matrix: Entrer dans la matrice\n- neofetch: Informations système\n- clear: Effacer le terminal',
      status_text: 'État du système : OPTIMAL\nCPU : 12%\nMémoire : 4.2Go / 16Go\nRéseau : 14ms de latence\nAgents actifs : 8',
      whoami_text: 'invo-admin (UID: 0, GID: 0)\nRôles : [SUPERUSER, DEV, CFO]',
      ls_text: 'drwxr-xr-x  agents/\ndrwxr-xr-x  config/\ndrwxr-xr-x  logs/\n-rw-r--r--  invo.config.json\n-rwxr-xr-x  start.sh',
      matrix_text: 'Réveille-toi, Neo...\nLa Matrice t\'a...\nSuis le lapin blanc.\n\nToc, toc, Neo.',
      neofetch_text: '\n       .---.        invo-admin@invodex\n      /     \\       -------------------\n     | () () |      OS: INVODEX OS v5.0 (Édition Entreprise)\n      \\  ^  /       Noyau: 6.1.0-invo-amd64\n       |||||        Disponibilité: 42 jours, 13 heures, 37 mins\n       |||||        Paquets: 1337 (dpkg)\n                    Shell: zsh 5.9\n                    Terminal: InvoTerm\n                    CPU: Processeur Neuronal Quantique @ 8.4GHz\n                    Mémoire: 4200MiB / 16384MiB\n         ',
      not_found: 'Commande introuvable : {cmd}. Tapez \'help\' pour une liste de commandes.',
      processing: 'BOUCLE DE RAISONNEMENT ACTIVE...',
      awaiting: 'EN ATTENTE D\'INSTRUCTION'
    },
    pricing: { title: 'Déploiement', subtitle: '// Open Source & Auto-hébergé', plan_dev: 'Local', plan_startup: 'Cloud VPS', plan_enterprise: 'Cluster', cta_start: 'Installer CLI', cta_deploy: 'Docker Pull', cta_contact: 'Support Entreprise' },
    auth: {
      login_title: 'Connectez-vous à votre compte',
      signup_title: 'Créez votre compte',
      login_subtitle: 'Ou ',
      signup_subtitle: 'Vous avez déjà un compte ? ',
      login_action: 'commencez votre essai gratuit de 14 jours',
      signup_action: 'connectez-vous ici',
      email_label: 'Adresse e-mail',
      email_placeholder: 'vous@entreprise.com',
      password_label: 'Mot de passe',
      password_placeholder: '••••••••',
      remember_me: 'Se souvenir de moi',
      forgot_password: 'Mot de passe oublié ?',
      login_button: 'Se connecter',
      signup_button: 'Créer un compte',
      or_continue: 'Ou continuer avec'
    },
    chat: {
      welcome: 'Bienvenue sur INVODEX. Comment puis-je vous aider à automatiser vos flux de travail ERP aujourd\'hui ?',
      clear_chat: 'Effacer le chat',
      new_session: 'Nouvelle session',
      recent_chats: 'Chats récents',
      settings: 'Paramètres',
      active_session: 'Session active',
      return_home: 'Retour à l\'accueil',
      placeholder: 'Message à INVODEX...',
      upload_invoice: 'Télécharger une facture',
      disclaimer: 'INVODEX peut faire des erreurs. Pensez à vérifier les informations importantes.',
      processing_msg: 'J\'ai reçu votre demande : "{0}".\n\nJe traite ces informations et mettrai à jour le système ERP en conséquence. N\'hésitez pas à me faire savoir si vous avez besoin d\'autre chose.',
      attached_msg: 'Fichier(s) joint(s) : {0}. Prêt pour le traitement.',
      chat_cleared: 'Chat effacé. Comment puis-je vous aider aujourd\'hui ?'
    }
  },
  it: {
    nav: { capabilities: 'Strumenti', architecture: 'Core Cognitivo', use_cases: 'Casi d\'uso', benchmarks: 'Latenza', testimonials: 'Testimonianze', terminal: 'Console', access: 'Accesso', api_key: 'CHIAVE_GEMINI', login: 'Accedi', signup: 'Registrati' },
    hero: { 
      badge: 'Runtime Cognitivo Aziendale',
      title_start: 'Automatizza il tuo ERP con ',
      title_highlight: 'Agenti Intelligenti',
      description: 'INVODEX si integra perfettamente con i tuoi sistemi ERP esistenti per automatizzare l\'inserimento dei dati, l\'elaborazione delle fatture e flussi di lavoro complessi utilizzando un\'IA avanzata.',
      button_trial: 'Inizia la prova gratuita',
      button_chat_erp: 'Apri Chat ERP',
      check_no_card: 'Nessuna carta di credito richiesta',
      check_trial: 'Prova gratuita di 14 giorni',
      check_cancel: 'Annulla in qualsiasi momento',
      mockup_title: 'Spazio di lavoro INVODEX',
      mockup_desc: 'Il tuo centro di comando intelligente per l\'automazione ERP e l\'elaborazione dei dati.'
    },
    quickstart: { title: 'Iniezione', subtitle: 'Distribuisci l\'agente INVODEX sulla tua macchina locale. Richiede Node.js e una chiave API Gemini valida.' },

    capabilities: { label: 'CAPACITÀ_AGENTE', title_core: 'Core', title_suffix: 'Toolchain', modules_loaded: 'STRUMENTI: 6/6', status: 'RBAC: ATTIVO', items: [
      { title: 'White-Labeling B2B e Architettura Multi-Tenant', desc: 'L\'isolamento multi-tenant nativo garantisce che i dati aziendali e le cronologie delle chat siano rigorosamente separati per ID client.' },
      { title: 'Core Cognitivo Indipendente dal Provider', desc: 'Adattabile alle esigenze aziendali con supporto per più modelli AI tra cui Gemini, GPT-4o, Claude 3.5 e altri.' },
      { title: 'DNA Digitale AIEOS', desc: 'Modifica il comportamento e il vocabolario dell\'agente in tempo reale in base a rigorose politiche aziendali e contratti JSON.' },
      { title: 'Gateway di Linguaggio Naturale', desc: 'Estrae l\'intento principale dalle comunicazioni e lo mappa senza problemi ai flussi di lavoro aziendali corretti.' },
      { title: 'Architettura Zero-Trust (RBAC)', desc: 'Rigorosi controlli di accesso basati sui ruoli e applicazione delle policy per garantire la sicurezza dei dati aziendali.' },
      { title: 'Swarm Intelligence', desc: 'Distribuisce sub-agenti in ambienti isolati per eseguire attività in parallelo in modo sicuro ed efficiente.' },
      { title: 'Elaborazione Omnicanale Avanzata', desc: 'Trascrizione audio nativa e purificazione dei link per elaborare in modo efficiente le informazioni da più fonti.' }
    ] },
    architecture: { label: '// Architettura Omnicanale', title_swarm: 'V5.0', title_intelligence: 'Architettura', description: '> INVODEX inietta dinamicamente il proprio codice TypeScript nella sua rete neurale in fase di esecuzione, trasforma la sua personalità in base a file DNA matematici e difende la sua identità aziendale sotto un rigoroso modello di sicurezza "Titanium Cage".', layer1_title: 'Livello di Input', layer1: 'Gateway Omnicanale: WhatsApp, Telegram e API HTTP/WS fungono da input sensoriali.', layer2_title: 'Core di Elaborazione', layer2: 'Runtime Cognitivo: L\'Orchestratore Indipendente dal Provider elabora gli intenti utilizzando il DNA Digitale AIEOS.', layer3_title: 'Livello di Esecuzione', layer3: 'Esecuzione e Swarm: Genera Sub-Agenti, esegue strumenti MCP e gestisce i server in modo autonomo.' },
    benchmarks: { 
      title: 'Metriche Anti-Allucinazione', 
      subtitle: '// Modello: Gemini 2.5 Flash (Modo Stealth)', 
      metric: 'Tasso di Successo', 
      chart_title: 'Tasso di Completamento',
      commands: [
        { cmd: "Invia un'immagine/documento", desc: "Gateway Omnicanale: Il sistema analizza automaticamente il documento tramite WhatsApp/Telegram." },
        { cmd: "!status", desc: "Diagnostica: Restituisce lo stato dell'Intelligenza Swarm e del server MCP." },
        { cmd: "invo cfo [attività]", desc: "Modalità CFO (Rigorosa, analitica, strumenti terminale bloccati tramite Titanium Cage)." },
        { cmd: "invo cmo [attività]", desc: "Modalità CMO (Creativa, persuasiva DNA AIEOS)." },
        { cmd: "invo dev [attività]", desc: "Modalità Sviluppatore (Accesso a MCP, comandi shell, file locali e Iniezione Dinamica di Codice)." },
        { cmd: "invo research [attività]", desc: "Modalità Ricercatore (Accesso all'ispezione web e alla sintesi)." },
        { cmd: "invo chat [attività]", desc: "Modalità Conversazionale Sicura (Tutti gli strumenti che modificano il sistema sono bloccati)." }
      ]
    },
    useCases: {
      label: 'INTELLIGENZA APPLICATA',
      title_real: 'Applicazioni del',
      title_apps: 'Mondo Reale',
      items: [
        { title: "Elaborazione Documenti Omnicanale", description: "INVODEX monitora i gateway WhatsApp e Telegram, estrae i dati dei documenti utilizzando modelli di visione, li convalida rispetto ai record aziendali e pubblica automaticamente le voci.", tags: ["Omnicanale", "Automazione", "IA di Visione"] },
        { title: "Forgiatura Swarm Autonoma", description: "Quando si presentano attività complesse, INVODEX genera sub-agenti in sandbox isolate, esegue tsc per la convalida e promuove il codice tramite Hot-Swap senza riavviare.", tags: ["Intelligenza Swarm", "Auto-guarigione", "Codice Dinamico"] },
        { title: "Orchestrazione Indipendente dal Provider", description: "Scambia senza problemi il core cognitivo a livello globale tramite una singola variabile .env. Supporta Gemini, GPT-4o, Claude 3.5, DeepSeek, Grok 2 e Qwen 2.5 per un rapporto costo-prestazioni ottimale.", tags: ["Routing LLM", "Ottimizzazione dei Costi", "Agnostico"] },
        { title: "Sicurezza Titanium Cage", description: "L'Architettura Zero-Trust (PBAC) legge allowed_tools direttamente dal DNA JSON AIEOS. Il meccanismo di Override del Kernel elimina i personaggi passati in conflitto per difendere l'identità aziendale.", tags: ["Sicurezza Informatica", "Zero-Trust", "AIEOS"] }
      ]
    },
    testimonials: {
      label: 'SUCCESSO DEL CLIENTE',
      title_trusted: 'Scelto dai',
      title_leaders: 'Leader del Settore',
      items: [
        { quote: "Il White-Labeling B2B di INVODEX ci ha permesso di distribuire un agente cognitivo completamente personalizzato ai nostri clienti in pochi giorni. L'isolamento della Memoria Multi-Tenant in Supabase garantisce la privacy assoluta dei dati.", author: "Sarah Jenkins", role: "CTO, TechFlow Solutions", rating: 5, highlight: true },
        { quote: "L'Intelligenza Swarm è sbalorditiva. Quando un'attività complessa fallisce, INVODEX genera un sub-agente, scrive una patch, esegue tsc ed esegue l'hot-swap del codice senza riavviare.", author: "David Chen", role: "Architetto Principale, Nexus Systems", rating: 5, highlight: false },
        { quote: "L'Orchestrazione Indipendente dal Provider ha cambiato tutto. Passiamo da Gemini, Claude a DeepSeek tramite una singola variabile .env, ottimizzando i nostri costi del 60%.", author: "Elena Rodriguez", role: "VP of Engineering, GlobalReach", rating: 5, highlight: false }
      ]
    },
    terminal: { 
      title: 'Console INVODEX', 
      subtitle: 'Ambiente di Esecuzione Autonoma Locale',
      init: 'Motore INVODEX v5.0.0 inizializzato',
      secure: 'Connesso al Gateway WhatsApp via WebSocket',
      help_prompt: 'Ascolto intenti... [dev, research, chat]',
      cmd_help: 'Router Intenti Attivo: invo [RUOLO] [ISTRUZIONE]',
      cmd_deploy_init: 'Analisi intento: RUOLO=DEV (Accesso Totale)',
      cmd_deploy_alloc: 'Esecuzione ShellTool: npm install express...',
      cmd_deploy_success: 'Pacchetto installato. FileTool: package.json aggiornato',
      cmd_status_nominal: 'LOOP COGNITIVO: STABILE',
      cmd_status_stats: 'TOKENS: 450/s | LATENZA: 120ms | MEM: 400MB',
      cmd_audit_scan: 'Verifica permessi RBAC...',
      cmd_audit_clean: 'Accesso scrittura concesso per ruolo: ROOT',
      cmd_whoami: 'invo-agent@server-locale',
      cmd_error_sudo: 'BLOCCO RBAC: Il ruolo "research" non può eseguire comandi shell.',
      cmd_not_found: 'Intento non riconosciuto',
      help_text: 'Comandi disponibili:\n- process document: Esegui il flusso di elaborazione documenti\n- invo cfo budget: Esegui l\'audit finanziario\n- invo dev logs: Visualizza i log di sistema\n- status: Controlla lo stato del sistema\n- whoami: Mostra l\'utente corrente\n- date: Mostra l\'ora di sistema\n- ls: Elenca i contenuti della directory\n- matrix: Entra in matrix\n- neofetch: Informazioni di sistema\n- clear: Cancella il terminale',
      status_text: 'Stato del Sistema: OTTIMALE\nCPU: 12%\nMemoria: 4.2GB / 16GB\nRete: 14ms latenza\nAgenti Attivi: 8',
      whoami_text: 'invo-admin (UID: 0, GID: 0)\nRuoli: [SUPERUSER, DEV, CFO]',
      ls_text: 'drwxr-xr-x  agents/\ndrwxr-xr-x  config/\ndrwxr-xr-x  logs/\n-rw-r--r--  invo.config.json\n-rwxr-xr-x  start.sh',
      matrix_text: 'Svegliati, Neo...\nMatrix ti possiede...\nSegui il bianconiglio.\n\nToc, toc, Neo.',
      neofetch_text: '\n       .---.        invo-admin@invodex\n      /     \\       -------------------\n     | () () |      OS: INVODEX OS v5.0 (Edizione Aziendale)\n      \\  ^  /       Kernel: 6.1.0-invo-amd64\n       |||||        Uptime: 42 giorni, 13 ore, 37 min\n       |||||        Pacchetti: 1337 (dpkg)\n                    Shell: zsh 5.9\n                    Terminale: InvoTerm\n                    CPU: Processore Neurale Quantistico @ 8.4GHz\n                    Memoria: 4200MiB / 16384MiB\n         ',
      not_found: 'Comando non trovato: {cmd}. Digita \'help\' per un elenco di comandi.',
      processing: 'CICLO DI RAGIONAMENTO ATTIVO...',
      awaiting: 'IN ATTESA DI ISTRUZIONI'
    },
    pricing: { title: 'Distribuzione', subtitle: '// Open Source & Self-Hosted', plan_dev: 'Locale', plan_startup: 'Cloud VPS', plan_enterprise: 'Cluster', cta_start: 'Installa CLI', cta_deploy: 'Docker Pull', cta_contact: 'Supporto Enterprise' },
    auth: {
      login_title: 'Accedi al tuo account',
      signup_title: 'Crea il tuo account',
      login_subtitle: 'Oppure ',
      signup_subtitle: 'Hai già un account? ',
      login_action: 'inizia la tua prova gratuita di 14 giorni',
      signup_action: 'accedi qui',
      email_label: 'Indirizzo email',
      email_placeholder: 'tu@azienda.com',
      password_label: 'Password',
      password_placeholder: '••••••••',
      remember_me: 'Ricordami',
      forgot_password: 'Hai dimenticato la password?',
      login_button: 'Accedi',
      signup_button: 'Crea account',
      or_continue: 'O continua con'
    },
    chat: {
      welcome: 'Benvenuto in INVODEX. Come posso aiutarti ad automatizzare i tuoi flussi di lavoro ERP oggi?',
      clear_chat: 'Cancella Chat',
      new_session: 'Nuova Sessione',
      recent_chats: 'Chat Recenti',
      settings: 'Impostazioni',
      active_session: 'Sessione Attiva',
      return_home: 'Torna alla Home',
      placeholder: 'Messaggio a INVODEX...',
      upload_invoice: 'Carica Fattura',
      disclaimer: 'INVODEX può commettere errori. Considera di verificare le informazioni importanti.',
      processing_msg: 'Ho ricevuto la tua richiesta: "{0}".\n\nSto elaborando queste informazioni e aggiornerò il sistema ERP di conseguenza. Fammi sapere se hai bisogno di altro.',
      attached_msg: 'File allegato/i: {0}. Pronto per l\'elaborazione.',
      chat_cleared: 'Chat cancellata. Come posso aiutarti oggi?'
    }
  },
  pt: {
    nav: { capabilities: 'Ferramentas', architecture: 'Núcleo Cognitivo', use_cases: 'Casos de Uso', benchmarks: 'Latência', testimonials: 'Depoimentos', terminal: 'Console', access: 'Acesso', api_key: 'CHAVE_GEMINI', login: 'Entrar', signup: 'Cadastrar' },
    hero: { 
      badge: 'Runtime Cognitivo Corporativo',
      title_start: 'Automatize seu ERP com ',
      title_highlight: 'Agentes Inteligentes',
      description: 'O INVODEX se integra perfeitamente aos seus sistemas ERP existentes para automatizar a entrada de dados, o processamento de faturas e fluxos de trabalho complexos usando IA avançada.',
      button_trial: 'Iniciar Teste Grátis',
      button_chat_erp: 'Abrir Chat ERP',
      check_no_card: 'Sem cartão de crédito',
      check_trial: 'Teste grátis de 14 dias',
      check_cancel: 'Cancele a qualquer momento',
      mockup_title: 'Espaço de Trabalho INVODEX',
      mockup_desc: 'Seu centro de comando inteligente para automação de ERP e processamento de dados.'
    },
    quickstart: { title: 'Injeção', subtitle: 'Implante o agente INVODEX em sua máquina local. Requer Node.js e uma API Key Gemini válida.' },

    capabilities: { label: 'CAPACIDADES_AGENTE', title_core: 'Core', title_suffix: 'Toolchain', modules_loaded: 'FERRAMENTAS: 6/6', status: 'RBAC: ATIVO', items: [
      { title: 'White-Labeling B2B e Arquitetura Multi-Tenant', desc: 'O isolamento multi-tenant nativo garante que os dados corporativos e os históricos de chat sejam estritamente segregados por ID do cliente.' },
      { title: 'Núcleo Cognitivo Agnóstico', desc: 'Adaptável às necessidades corporativas com suporte para vários modelos de IA, incluindo Gemini, GPT-4o, Claude 3.5 e muito mais.' },
      { title: 'DNA Digital AIEOS', desc: 'Altera o comportamento e o vocabulário do agente em tempo real com base em políticas corporativas rigorosas e contratos JSON.' },
      { title: 'Gateway de Linguagem Natural', desc: 'Extrai a intenção principal das comunicações e a mapeia perfeitamente para os fluxos de trabalho corporativos corretos.' },
      { title: 'Arquitetura Zero-Trust (RBAC)', desc: 'Controles de acesso rigorosos baseados em funções e aplicação de políticas para garantir a segurança dos dados corporativos.' },
      { title: 'Inteligência de Enxame', desc: 'Implanta sub-agentes em ambientes isolados para executar tarefas em paralelo de forma segura e eficiente.' },
      { title: 'Processamento Omnicanal Avançado', desc: 'Transcrição de áudio nativa e purificação de links para processar informações de várias fontes com eficiência.' }
    ] },
    architecture: { label: '// Arquitetura Omnicanal', title_swarm: 'V5.0', title_intelligence: 'Arquitetura', description: '> INVODEX injeta dinamicamente seu próprio código TypeScript em sua rede neural em tempo de execução, transforma sua personalidade com base em arquivos de DNA matemático e defende sua identidade corporativa sob um rigoroso modelo de segurança "Titanium Cage".', layer1_title: 'Camada de Entrada', layer1: 'Gateways Omnicanal: WhatsApp, Telegram e API HTTP/WS atuam como entradas sensoriais.', layer2_title: 'Núcleo de Processamento', layer2: 'Runtime Cognitivo: O Orquestrador Agnóstico de Provedores processa intenções usando o DNA Digital AIEOS.', layer3_title: 'Camada de Execução', layer3: 'Execução e Enxame: Gera Sub-Agentes, executa ferramentas MCP e gerencia servidores de forma autônoma.' },
    benchmarks: { 
      title: 'Métricas Anti-Alucinação', 
      subtitle: '// Modelo: Gemini 2.5 Flash (Modo Furtivo)', 
      metric: 'Taxa de Sucesso', 
      chart_title: 'Taxa de Conclusão',
      commands: [
        { cmd: "Enviar uma imagem/documento", desc: "Gateway Omnicanal: O sistema analisa automaticamente o documento via WhatsApp/Telegram." },
        { cmd: "!status", desc: "Diagnóstico: Retorna o status da Inteligência de Enxame e do servidor MCP." },
        { cmd: "invo cfo [tarefa]", desc: "Modo Diretor Financeiro (Estrito, analítico, ferramentas de terminal bloqueadas via Titanium Cage)." },
        { cmd: "invo cmo [tarefa]", desc: "Modo Diretor de Marketing (Criativo, persuasivo DNA AIEOS)." },
        { cmd: "invo dev [tarefa]", desc: "Modo Desenvolvedor (Acesso a MCP, comandos shell, arquivos locais e Injeção Dinâmica de Código)." },
        { cmd: "invo research [tarefa]", desc: "Modo Pesquisador (Acesso à inspeção web e síntese)." },
        { cmd: "invo chat [tarefa]", desc: "Modo Conversacional Seguro (Todas as ferramentas que modificam o sistema estão bloqueadas)." }
      ]
    },
    useCases: {
      label: 'INTELIGÊNCIA APLICADA',
      title_real: 'Aplicações do',
      title_apps: 'Mundo Real',
      items: [
        { title: "Processamento de Documentos Omnicanal", description: "O INVODEX monitora os gateways do WhatsApp e Telegram, extrai dados de documentos usando modelos de visão, os valida em relação aos registros corporativos e publica automaticamente as entradas.", tags: ["Omnicanal", "Automação", "IA de Visão"] },
        { title: "Forja de Enxame Autônoma", description: "Quando surgem tarefas complexas, o INVODEX gera sub-agentes em sandboxes isoladas, executa tsc para validação e promove o código via Hot-Swap sem reiniciar.", tags: ["Inteligência de Enxame", "Auto-recuperação", "Código Dinâmico"] },
        { title: "Orquestração Agnóstica de Provedores", description: "Troque perfeitamente o núcleo cognitivo globalmente por meio de uma única variável .env. Suporta Gemini, GPT-4o, Claude 3.5, DeepSeek, Grok 2 e Qwen 2.5 para uma relação custo-desempenho ideal.", tags: ["Roteamento LLM", "Otimização de Custos", "Agnóstico"] },
        { title: "Segurança Titanium Cage", description: "A Arquitetura Zero-Trust (PBAC) lê allowed_tools diretamente do DNA JSON AIEOS. O mecanismo de Substituição do Kernel elimina personas passadas conflitantes para defender a identidade corporativa.", tags: ["Segurança Cibernética", "Zero-Trust", "AIEOS"] }
      ]
    },
    testimonials: {
      label: 'SUCESSO DO CLIENTE',
      title_trusted: 'Confiado por',
      title_leaders: 'Líderes da Indústria',
      items: [
        { quote: "O White-Labeling B2B do INVODEX nos permitiu implantar um agente cognitivo totalmente personalizado para nossos clientes em dias. O isolamento de Memória Multi-Tenant no Supabase garante privacidade absoluta dos dados.", author: "Sarah Jenkins", role: "CTO, TechFlow Solutions", rating: 5, highlight: true },
        { quote: "A Inteligência de Enxame é alucinante. Quando uma tarefa complexa falha, o INVODEX gera um sub-agente, escreve um patch, executa tsc e faz hot-swap do código sem reiniciar.", author: "David Chen", role: "Arquiteto Principal, Nexus Systems", rating: 5, highlight: false },
        { quote: "A Orquestração Agnóstica de Provedores mudou tudo. Alternamos entre Gemini, Claude e DeepSeek por meio de uma única variável .env, otimizando nossos custos em 60%.", author: "Elena Rodriguez", role: "VP de Engenharia, GlobalReach", rating: 5, highlight: false }
      ]
    },
    terminal: { 
      title: 'Console INVODEX', 
      subtitle: 'Ambiente de Execução Autônoma Local',
      init: 'Motor INVODEX v5.0.0 inicializado',
      secure: 'Conectado ao Gateway WhatsApp via WebSocket',
      help_prompt: 'Ouvindo intenções... [dev, research, chat]',
      cmd_help: 'Roteador Ativo: invo [FUNÇÃO] [INSTRUÇÃO]',
      cmd_deploy_init: 'Analisando intenção: FUNÇÃO=DEV (Acesso Total)',
      cmd_deploy_alloc: 'Executando ShellTool: npm install express...',
      cmd_deploy_success: 'Pacote instalado. FileTool: package.json atualizado',
      cmd_status_nominal: 'LOOP COGNITIVO: ESTÁVEL',
      cmd_status_stats: 'TOKENS: 450/s | LATÊNCIA: 120ms | MEM: 400MB',
      cmd_audit_scan: 'Verificando permissões RBAC...',
      cmd_audit_clean: 'Acesso de escrita concedido para: ROOT',
      cmd_whoami: 'invo-agent@servidor-local',
      cmd_error_sudo: 'BLOQUEIO RBAC: Função "research" não pode executar comandos shell.',
      cmd_not_found: 'Intenção não reconhecida',
      help_text: 'Comandos disponíveis:\n- process document: Executar fluxo de processamento de documentos\n- invo cfo budget: Executar auditoria financeira\n- invo dev logs: Ver logs do sistema\n- status: Verificar status do sistema\n- whoami: Exibir usuário atual\n- date: Mostrar hora do sistema\n- ls: Listar conteúdo do diretório\n- matrix: Entrar na matrix\n- neofetch: Informações do sistema\n- clear: Limpar terminal',
      status_text: 'Status do Sistema: OTIMIZADO\nCPU: 12%\nMemória: 4.2GB / 16GB\nRede: 14ms de latência\nAgentes Ativos: 8',
      whoami_text: 'invo-admin (UID: 0, GID: 0)\nPapéis: [SUPERUSER, DEV, CFO]',
      ls_text: 'drwxr-xr-x  agents/\ndrwxr-xr-x  config/\ndrwxr-xr-x  logs/\n-rw-r--r--  invo.config.json\n-rwxr-xr-x  start.sh',
      matrix_text: 'Acorde, Neo...\nA Matrix tem você...\nSiga o coelho branco.\n\nToc, toc, Neo.',
      neofetch_text: '\n       .---.        invo-admin@invodex\n      /     \\       -------------------\n     | () () |      OS: INVODEX OS v5.0 (Edição Corporativa)\n      \\  ^  /       Kernel: 6.1.0-invo-amd64\n       |||||        Uptime: 42 dias, 13 horas, 37 mins\n       |||||        Pacotes: 1337 (dpkg)\n                    Shell: zsh 5.9\n                    Terminal: InvoTerm\n                    CPU: Processador Neural Quântico @ 8.4GHz\n                    Memória: 4200MiB / 16384MiB\n         ',
      not_found: 'Comando não encontrado: {cmd}. Digite \'help\' para uma lista de comandos.',
      processing: 'LOOP DE RACIOCÍNIO ATIVO...',
      awaiting: 'AGUARDANDO INSTRUÇÃO'
    },
    pricing: { title: 'Implantação', subtitle: '// Open Source & Self-Hosted', plan_dev: 'Local', plan_startup: 'Cloud VPS', plan_enterprise: 'Cluster', cta_start: 'Instalar CLI', cta_deploy: 'Docker Pull', cta_contact: 'Suporte Enterprise' },
    auth: {
      login_title: 'Faça login na sua conta',
      signup_title: 'Crie sua conta',
      login_subtitle: 'Ou ',
      signup_subtitle: 'Já tem uma conta? ',
      login_action: 'comece seu teste grátis de 14 dias',
      signup_action: 'faça login aqui',
      email_label: 'Endereço de e-mail',
      email_placeholder: 'voce@empresa.com',
      password_label: 'Senha',
      password_placeholder: '••••••••',
      remember_me: 'Lembrar de mim',
      forgot_password: 'Esqueceu sua senha?',
      login_button: 'Entrar',
      signup_button: 'Criar conta',
      or_continue: 'Ou continue com'
    },
    chat: {
      welcome: 'Bem-vindo ao INVODEX. Como posso ajudar a automatizar seus fluxos de trabalho ERP hoje?',
      clear_chat: 'Limpar Chat',
      new_session: 'Nova Sessão',
      recent_chats: 'Chats Recentes',
      settings: 'Configurações',
      active_session: 'Sessão Ativa',
      return_home: 'Voltar ao Início',
      placeholder: 'Mensagem para INVODEX...',
      upload_invoice: 'Enviar Fatura',
      disclaimer: 'O INVODEX pode cometer erros. Considere verificar informações importantes.',
      processing_msg: 'Recebi sua solicitação: "{0}".\n\nEstou processando essas informações e atualizarei o sistema ERP de acordo. Por favor, me avise se precisar de mais alguma coisa.',
      attached_msg: 'Arquivo(s) anexado(s): {0}. Pronto para processamento.',
      chat_cleared: 'Chat limpo. Como posso ajudar hoje?'
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en'); // Default to English

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};