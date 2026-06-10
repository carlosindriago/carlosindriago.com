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
    urlLabel: 'Ver en Producción'
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
    url: ''
  },
  {
    title: 'Kartenant ERP',
    problem: 'El ERP debía servir a múltiples empresas sin mezclar datos, manteniendo operación estable y una base flexible para nuevos módulos.',
    decision: 'Implementé una arquitectura SaaS database-per-tenant con Laravel, PostgreSQL y una capa de servicios para separar dominio, operación and orquestación landlord.',
    impact: 'Aislamiento fuerte entre clientes, menor riesgo operativo y una estructura más mantenible para incorporar nuevos flujos de negocio.',
    tags: ['PHP 8.2', 'Laravel 11', 'PostgreSQL', 'Database-per-Tenant', 'Docker'],
    featured: false,
    repo: 'https://github.com/carlosindriago/kartenant-erp',
    url: ''
  },
  {
    title: 'TramiFlow CE (SaaS CRM & Workflow Engine)',
    problem: 'Las agencias legales y de consultoría dependen de CRMs genéricos que no soportan flujos de trabajo documentales complejos, exponiendo datos sensibles al procesar archivos de clientes en servidores de terceros.',
    decision: 'Diseñé un CRM multi-tenant utilizando Next.js (App Router) y Supabase, e implementé un motor de manipulación de PDFs 100% client-side (Canvas API/WASM) y Server Actions para validar límites de consumo.',
    impact: 'Garantía de privacidad absoluta (Zero-Trust) al no transmitir documentos sensibles al servidor, con aislamiento estricto mediante políticas PostgreSQL RLS y liberado bajo licencia AGPL-3.0.',
    tags: ['TypeScript', 'Next.js 14', 'PostgreSQL RLS', 'Client-Side Architecture', 'SaaS'],
    featured: false,
    repo: 'https://github.com/carlosindriago/tramiflow-ce',
    url: ''
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
    url: ''
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
    url: ''
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
    url: ''
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
    url: ''
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
    url: ''
  }
];
