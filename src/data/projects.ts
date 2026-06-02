export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  repo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'AequiVault: Motor Contable Financiero B2B',
    description: 'Desarrollé un motor de contabilidad de partida doble API-first aplicando Clean Architecture y patrones CQRS. Para la consolidación en tiempo real del Plan de Cuentas Jerárquico, utilicé árboles LTREE nativos. Resolví el problema de seguridad aislando físicamente a los tenants mediante inyección de variables de sesión JWT en el pool JDBC, forzando la seguridad a nivel de filas (RLS) en PostgreSQL para auditoría SOX compliance.',
    tags: ['Java 21', 'Spring Boot', 'PostgreSQL LTREE', 'Row-Level Security', 'Clean Architecture'],
    featured: true,
    repo: 'https://github.com/carlosindriago/AequiVault',
    url: ''
  },
  {
    title: 'Kartenant ERP',
    description: 'Arquitecté una plataforma SaaS bajo el patrón de Service Layer en Laravel. Para garantizar seguridad y cumplimiento normativo, implementé una arquitectura "Database-per-Tenant" en PostgreSQL, logrando un aislamiento estricto entre los datos de múltiples empresas y el orquestador principal (Landlord).',
    tags: ['PHP 8.2', 'Laravel 11', 'PostgreSQL', 'Database-per-Tenant', 'Docker'],
    featured: false,
    repo: 'https://github.com/carlosindriago/kartenant-erp',
    url: ''
  },
  {
    title: 'SpectrusGuard Enterprise',
    description: 'Diseñé un WAF de latencia ultra-baja (< 2ms) implementado como Drop-in Plugin. Desacoplé el bloqueo en tiempo real de la detección de amenazas, construyendo un motor de analítica de comportamiento (UEBA) impulsado por algoritmos estadísticos (Z-Score). Las métricas se procesan asíncronamente mitigando ataques sin degradar la experiencia de usuario.',
    tags: ['PHP', 'Web Application Firewall', 'UEBA', 'Security Architecture'],
    featured: false,
    repo: 'https://github.com/carlosindriago/SpectrusGuard',
    url: ''
  },
  {
    title: 'WooSpeed Analytics',
    description: 'Desarrollé un motor de indexación que proyecta los datos transaccionales hacia tablas analíticas planas de forma asíncrona. El resultado: reducción de los tiempos de consulta hasta en un 10x (O(1) vs O(N)), liberando el hilo principal sin alterar el core transaccional del CMS.',
    tags: ['PHP', 'MySQL', 'Data Projection', 'Database Optimization'],
    featured: false,
    repo: 'https://github.com/carlosindriago/woospeed',
    url: ''
  },
  {
    title: 'Ulauncher Docker Extension',
    description: 'Lideré la modernización integral de una herramienta open-source legada. Migré la base de código al Docker SDK 7.x moderno y refactoricé la compatibilidad para múltiples emuladores de terminal en Linux, resolviendo deuda técnica crítica.',
    tags: ['Python', 'Docker SDK', 'Legacy Refactoring'],
    featured: false,
    repo: 'https://github.com/carlosindriago/ulauncher-docker',
    url: ''
  },
  {
    title: 'Wacom Linux Suite',
    description: 'Construí una suite de configuración automatizada para tabletas digitalizadoras en entornos X11. Combina reglas `udev` para la detección dinámica de hardware persistente con un dashboard moderno en Electron, eliminando la configuración manual de dotfiles en setups multi-monitor.',
    tags: ['TypeScript', 'Electron', 'Shell Scripting', 'X11 Architecture'],
    featured: false,
    repo: 'https://github.com/carlosindriago/wacom-linux',
    url: ''
  },
  {
    title: 'TuxKeysToys',
    description: 'Desarrollé una utilidad gráfica para Linux que intercepta interrupciones de hardware a nivel de kernel utilizando el demonio `keyd`. Permite el remapeo de teclas exclusivo para el teclado integrado (mediante hardware IDs) sin alterar el comportamiento de periféricos externos.',
    tags: ['Python', 'Linux Kernel', 'Hardware Integration', 'GUI'],
    featured: false,
    repo: 'https://github.com/carlosindriago/tuxkeystoys',
    url: ''
  }
];
