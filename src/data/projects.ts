export interface GalleryItem {
  src: string;
  alt: string;
  technicalDescription: string;
}

export interface Project {
  title: string;
  problem: string;
  decision: string;
  impact: string;
  tags: string[];
  url?: string;
  urlLabel?: string;
  repo?: string;
  featured?: boolean;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  gallery?: GalleryItem[];
}

export const projects: Project[] = [
  {
    title: 'AequiVault: Motor Contable Financiero B2B',
    problem: 'La plataforma necesitaba manejar contabilidad B2B con trazabilidad, aislamiento por tenant y consistencia en operaciones financieras sensibles.',
    decision: 'Diseñé un motor API-first de partida doble con Clean Architecture, CQRS, PostgreSQL LTREE para jerarquías contables y RLS alimentado por contexto JWT.',
    impact: 'Base auditable y preparada para cumplimiento, con separación estricta de datos y una arquitectura clara para evolucionar reglas financieras complejas.',
    tags: ['Java 21', 'Spring Boot', 'PostgreSQL LTREE', 'Row-Level Security', 'Clean Architecture'],
    featured: true,
    image: '/projects/aequivault.webp',
    imageWidth: 1024,
    imageHeight: 787,
    repo: 'https://github.com/carlosindriago/AequiVault',
    url: 'https://aequivault.carlosindriago.com/',
    urlLabel: 'Ver en Producción',
    gallery: [
      {
        src: '/projects/aequivault.webp',
        alt: 'Core Ledger & Transactions',
        technicalDescription: 'Consola principal del ledger contable de partida doble. Valida la consistencia de balances y la integridad de transacciones multi-tenant en tiempo real antes de su confirmación.'
      },
      {
        src: '/projects/aequivault-db.webp',
        alt: 'PostgreSQL Hierarchies & RLS',
        technicalDescription: 'Estructura jerárquica de cuentas (Plan de Cuentas) utilizando PostgreSQL LTREE. Valida el aislamiento estricto por inquilino mediante políticas nativas de Row-Level Security.'
      },
      {
        src: '/projects/aequivault-perf.webp',
        alt: 'API Latency & Audit Trail',
        technicalDescription: 'Consola de auditoría financiera inmutable y trazas de rendimiento. Valida latencias inferiores a 50ms en inserciones transaccionales concurrentes.'
      }
    ]
  },
  {
    title: 'Clinicalyx (HealthTech SaaS)',
    problem: 'El almacenamiento y búsqueda de datos médicos altamente confidenciales (PHI) en un entorno SaaS multi-tenant requería encriptación robusta en reposo sin perder la capacidad de realizar consultas eficientes.',
    decision: 'Arquitecté la plataforma en Go con la estructura de la Arquitectura Hexagonal, implementando encriptación AES-256-GCM en reposo, Blind Indexing (HMAC-SHA256) para búsquedas deterministas y PostgreSQL Row-Level Security (RLS).',
    impact: 'Aislamiento multi-tenant delegado directamente a la base de datos, mitigando de forma segura fugas de datos de salud en la capa de aplicación y cumpliendo con estándares de seguridad HIPAA.',
    tags: ['Go 1.25', 'Next.js', 'Hexagonal Architecture', 'AES-256 Crypto', 'PostgreSQL RLS'],
    featured: false,
    image: '/projects/clinicalyx.webp',
    imageWidth: 1024,
    imageHeight: 499,
    repo: 'https://github.com/carlosindriago/clinicalyx',
    url: '',
    gallery: [
      {
        src: '/projects/clinicalyx.webp',
        alt: 'SaaS Patient Portal',
        technicalDescription: 'Vista del expediente clínico multi-tenant. Valida la visualización segura de datos de salud en cumplimiento estricto con los requerimientos de la ley HIPAA.'
      },
      {
        src: '/projects/clinicalyx-db.webp',
        alt: 'Blind Indexing & AES-256',
        technicalDescription: 'Panel de control de encriptación a nivel de campo. Valida la indexación determinista (Blind Indexing) para búsquedas rápidas en campos de datos cifrados.'
      },
      {
        src: '/projects/clinicalyx-perf.webp',
        alt: 'Infrastructure Performance',
        technicalDescription: 'Métricas de infraestructura y monitoreo del servicio. Valida el aislamiento de conexiones y la integridad de datos transaccionales de PHI.'
      }
    ]
  },
  {
    title: 'Kartenant ERP',
    problem: 'El ERP debía servir a múltiples empresas sin mezclar datos, manteniendo operación estable y una base flexible para nuevos módulos.',
    decision: 'Implementé una arquitectura SaaS database-per-tenant con Laravel, PostgreSQL y una capa de servicios para separar dominio, operación and orquestación landlord.',
    impact: 'Aislamiento fuerte entre clientes, menor riesgo operativo y una estructura más mantenible para incorporar nuevos flujos de negocio.',
    tags: ['PHP 8.2', 'Laravel 11', 'PostgreSQL', 'Database-per-Tenant', 'Docker'],
    featured: false,
    image: '/projects/kartenant.webp',
    imageWidth: 1024,
    imageHeight: 461,
    repo: 'https://github.com/carlosindriago/kartenant-erp',
    url: '',
    gallery: [
      {
        src: '/projects/kartenant.webp',
        alt: 'Multi-tenant ERP Dashboard',
        technicalDescription: 'Consola consolidada de administración del ERP. Valida la salud de los múltiples módulos integrados y la segregación de inquilinos en base de datos.'
      },
      {
        src: '/projects/kartenant-db.webp',
        alt: 'Tenant Database Connections',
        technicalDescription: 'Consola de orquestación Landlord de Laravel. Valida las migraciones automáticas y la conexión dinámica a bases de datos aisladas por inquilino.'
      },
      {
        src: '/projects/kartenant-perf.webp',
        alt: 'API Metrics & Resource Load',
        technicalDescription: 'Monitor de consumo de recursos de Docker. Valida latencias bajas y disponibilidad de balanceadores de carga en picos de tráfico operacional.'
      }
    ]
  },
  {
    title: 'TramiFlow CE (SaaS CRM & Workflow Engine)',
    problem: 'Las agencias legales y de consultoría dependen de CRMs genéricos que no soportan flujos de trabajo documentales complejos, exponiendo datos sensibles al procesar archivos de clientes en servidores de terceros.',
    decision: 'Diseñé un CRM multi-tenant utilizando Next.js (App Router) y Supabase, e implementé un motor de manipulación de PDFs 100% client-side (Canvas API/WASM) y Server Actions para validar límites de consumo.',
    impact: 'Garantía de privacidad absoluta (Zero-Trust) al no transmitir documentos sensibles al servidor, con aislamiento estricto mediante políticas PostgreSQL RLS y liberado bajo licencia AGPL-3.0.',
    tags: ['TypeScript', 'Next.js 14', 'PostgreSQL RLS', 'Client-Side Architecture', 'SaaS'],
    featured: false,
    image: '/projects/tramiflow.webp',
    imageWidth: 1024,
    imageHeight: 499,
    repo: 'https://github.com/carlosindriago/tramiflow-ce',
    url: 'https://tramiflow.vercel.app/login',
    urlLabel: 'Ver en Producción',
    gallery: [
      {
        src: '/projects/tramiflow.webp',
        alt: 'Workflow Designer & CRM',
        technicalDescription: 'Dashboard principal de seguimiento de trámites y CRM. Valida el estado de expedientes y la automatización de notificaciones del flujo de trabajo.'
      },
      {
        src: '/projects/tramiflow-db.webp',
        alt: 'Client-Side WASM PDF Engine',
        technicalDescription: 'Módulo client-side de firmas y manipulación de PDFs. Valida la privacidad absoluta (Zero-Trust) al procesar y firmar documentos sin subirlos al servidor.'
      },
      {
        src: '/projects/tramiflow-perf.webp',
        alt: 'Supabase RLS & Consumo',
        technicalDescription: 'Trazas de Server Actions y cuotas de consumo. Valida el control estricto de accesos vía RLS de Supabase y límites por suscripción SaaS.'
      }
    ]
  },
  {
    title: 'SpectrusGuard Enterprise',
    problem: 'Sitios WordPress necesitaban protección activa sin degradar la experiencia de usuario ni introducir fricción operativa.',
    decision: 'Diseñé un WAF drop-in de baja latencia, separando bloqueo en tiempo real de analítica UEBA asíncrona basada en señales estadísticas.',
    impact: 'Mitigación de amenazas sin penalizar el rendimiento, con una arquitectura preparada para observar comportamiento y reducir falsos positivos.',
    tags: ['PHP', 'Web Application Firewall', 'UEBA', 'Security Architecture'],
    featured: false,
    image: '/projects/spectrusguard.webp',
    imageWidth: 1024,
    imageHeight: 499,
    repo: 'https://github.com/carlosindriago/SpectrusGuard',
    url: '',
    gallery: [
      {
        src: '/projects/spectrusguard.webp',
        alt: 'WAF Traffic Overview',
        technicalDescription: 'Visualización activa del analizador de tráfico. Valida la mitigación de ataques XSS e inyecciones SQL en tiempo real directamente en la capa PHP.'
      },
      {
        src: '/projects/spectrusguard-db.webp',
        alt: 'UEBA Analytics Console',
        technicalDescription: 'Panel analítico de comportamiento de usuarios. Valida la detección de anomalías y reducción de falsos positivos usando reglas estadísticas no intrusivas.'
      },
      {
        src: '/projects/spectrusguard-perf.webp',
        alt: 'Latency Overhead Monitoring',
        technicalDescription: 'Métrica de sobrecarga en tiempo de respuesta del WAF. Valida que la latencia agregada sea menor a 2ms, garantizando rendimiento del servidor.'
      }
    ]
  },
  {
    title: 'WooSpeed Analytics',
    problem: 'Reportes WooCommerce dependían de consultas costosas sobre datos transaccionales, afectando tiempos de respuesta y operación diaria.',
    decision: 'Creé un motor de proyección analítica asíncrona hacia tablas planas optimizadas, separando lectura analítica del flujo transaccional.',
    impact: 'Consultas hasta 10x más rápidas sin modificar el core del CMS ni comprometer la operación de ventas.',
    tags: ['PHP', 'MySQL', 'Data Projection', 'Database Optimization'],
    featured: false,
    image: '/projects/woospeed.webp',
    imageWidth: 1024,
    imageHeight: 499,
    repo: 'https://github.com/carlosindriago/woospeed',
    url: '',
    gallery: [
      {
        src: '/projects/woospeed.webp',
        alt: 'Sales Analytics Overview',
        technicalDescription: 'Panel general de visualización analítica WooCommerce. Valida el correcto rendimiento de ventas y el estado de carga de las consultas asíncronas.'
      },
      {
        src: '/projects/woospeed-db.webp',
        alt: 'Data Projection Engine',
        technicalDescription: 'Consola de sincronización de proyecciones analíticas. Valida la consistencia de tablas planas optimizadas y la descompresión del flujo transaccional principal.'
      },
      {
        src: '/projects/woospeed-perf.webp',
        alt: 'Database Query Optimization',
        technicalDescription: 'Estadísticas comparativas de latencia de consulta. Valida mejoras de hasta 10x de velocidad en consultas agregadas complejas.'
      }
    ]
  },
  {
    title: 'Ulauncher Docker Extension',
    problem: 'La extensión acumulaba deuda técnica y dependencias antiguas, lo que limitaba compatibilidad con entornos Linux modernos.',
    decision: 'Modernicé la base al Docker SDK 7.x y refactoricé la integración con múltiples emuladores de terminal.',
    impact: 'Herramienta más estable, mantenible y compatible, con menor fricción para usuarios open-source.',
    tags: ['Python', 'Docker SDK', 'Legacy Refactoring'],
    featured: false,
    image: '/projects/ulauncher-docker.webp',
    imageWidth: 563,
    imageHeight: 307,
    repo: 'https://github.com/carlosindriago/ulauncher-docker',
    url: '',
    gallery: [
      {
        src: '/projects/ulauncher-docker.webp',
        alt: 'Docker Extension Interface',
        technicalDescription: 'Interfaz integrada en el lanzador Ulauncher. Valida la rápida respuesta al listar contenedores y ejecutar acciones rápidas del Docker Daemon.'
      },
      {
        src: '/projects/ulauncher-docker-db.webp',
        alt: 'Terminal Emulator Integration',
        technicalDescription: 'Vista de la integración con emuladores de terminal. Valida el correcto traspaso de comandos y la compatibilidad con diferentes shell entornos Linux.'
      },
      {
        src: '/projects/ulauncher-docker-perf.webp',
        alt: 'Docker SDK Performance',
        technicalDescription: 'Monitor de uso de CPU y RAM de la extensión. Valida que el runtime mantenga un overhead mínimo de memoria al invocar el Docker API de fondo.'
      }
    ]
  },
  {
    title: 'Wacom Linux Suite',
    problem: 'Configurar tabletas Wacom en Linux/X11 era frágil, manual y propenso a romperse en setups multi-monitor.',
    decision: 'Combiné reglas udev para detección persistente de hardware con un dashboard Electron para automatizar perfiles y ajustes.',
    impact: 'Menos configuración manual, experiencia más consistente y reducción de errores en entornos de trabajo complejos.',
    tags: ['TypeScript', 'Electron', 'Shell Scripting', 'X11 Architecture'],
    featured: false,
    image: '/projects/wacom-linux.webp',
    imageWidth: 1000,
    imageHeight: 700,
    repo: 'https://github.com/carlosindriago/wacom-linux',
    url: '',
    gallery: [
      {
        src: '/projects/wacom-linux.webp',
        alt: 'Configuration Dashboard',
        technicalDescription: 'Panel interactivo para mapeo de tabletas digitalizadoras. Valida la asignación de perfiles específicos y calibración de lápices en setups de trabajo.'
      },
      {
        src: '/projects/wacom-linux-db.webp',
        alt: 'udev Rule Orchestration',
        technicalDescription: 'Consola de depuración de reglas de dispositivos hotplug. Valida el correcto reconocimiento persistente de hardware al conectar/desconectar vía USB.'
      },
      {
        src: '/projects/wacom-linux-perf.webp',
        alt: 'Multi-Monitor Mapping Latency',
        technicalDescription: 'Monitoreo de latencia de entrada y coordenadas X11. Valida que no exista input lag en pantallas 4K y setups de escritorio extendido.'
      }
    ]
  },
  {
    title: 'TuxKeysToys',
    problem: 'El remapeo de teclas en Linux podía afectar periféricos externos y generar configuraciones difíciles de aislar.',
    decision: 'Construí una utilidad gráfica que usa keyd y hardware IDs para aplicar remapeos solo al teclado integrado.',
    impact: 'Personalización precisa del entorno sin efectos colaterales sobre otros dispositivos.',
    tags: ['Python', 'Linux Kernel', 'Hardware Integration', 'GUI'],
    featured: false,
    image: '/projects/tuxkeystoys.webp',
    imageWidth: 684,
    imageHeight: 636,
    repo: 'https://github.com/carlosindriago/tuxkeystoys',
    url: '',
    gallery: [
      {
        src: '/projects/tuxkeystoys.webp',
        alt: 'GUI Key Remapper',
        technicalDescription: 'Interfaz de usuario para personalización de teclas físicas. Valida el mapa interactivo del teclado y la creación de capas de entrada personalizadas.'
      },
      {
        src: '/projects/tuxkeystoys-db.webp',
        alt: 'Keyd Integration Driver',
        technicalDescription: 'Monitor del servicio keyd a bajo nivel. Valida la inyección segura de configuraciones aislando las reglas solo al teclado nativo de la laptop.'
      },
      {
        src: '/projects/tuxkeystoys-perf.webp',
        alt: 'Event Loop & Input Latency',
        technicalDescription: 'Gráfico de tiempos de procesamiento de eventos input. Valida una latencia de inyección de entrada inferior a 1ms para una respuesta instantánea.'
      }
    ]
  }
];
