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
    title: 'AequiVault',
    description: 'Motor de contabilidad de doble entrada API-first con modelo Open-Core — extensible, auditable y sin dependencias de vendor. Diseñado para reemplazar módulos contables de ERPs en empresas en crecimiento.',
    tags: ['TypeScript', 'Node.js', 'Open Core', 'API-first'],
    featured: true,
    repo: 'https://github.com/carlosindriago/AequiVault',
    url: ''
  },
  {
    title: 'Kartenant ERP',
    description: 'Plataforma SaaS con modelo Open-Core en Laravel que permite a múltiples negocios operar de forma independiente sobre una misma infraestructura compartida. Integra POS, inventario y facturación.',
    tags: ['PHP', 'Laravel', 'Multi-tenant', 'POS'],
    featured: true,
    repo: 'https://github.com/carlosindriago/kartenant-erp',
    url: ''
  },
  {
    title: 'SpectrusGuard',
    description: 'WAF empresarial con IA que intercepta ataques antes de que toquen la aplicación y camufla la instancia WP haciendo indetectables sus rutas para scanners.',
    tags: ['PHP', 'WordPress', 'WAF', 'AI-powered'],
    featured: true,
    repo: 'https://github.com/carlosindriago/SpectrusGuard',
    url: ''
  },
  {
    title: 'WooSpeed Analytics',
    description: 'Plugin que introduce tablas analíticas con índices compuestos, reduciendo tiempos de consulta hasta 10× sin modificar el core de WooCommerce.',
    tags: ['PHP', 'WordPress', 'WooCommerce', 'MySQL'],
    featured: false,
    repo: 'https://github.com/carlosindriago/woospeed',
    url: ''
  },
  {
    title: 'Wacom Linux Suite',
    description: 'Suite completa con detección dinámica de dispositivos, TUI interactivo y GUI en Electron que hace la configuración tan simple como en Windows/macOS.',
    tags: ['TypeScript', 'Electron', 'Shell', 'Linux'],
    featured: false,
    repo: 'https://github.com/carlosindriago/wacom-linux',
    url: ''
  },
  {
    title: 'TuxKeysToys',
    description: 'GUI en Python/Tkinter que detecta el teclado interno, permite remapear teclas individualmente y aplica los cambios sin tocar la configuración del teclado externo.',
    tags: ['Python', 'Tkinter', 'Linux', 'xmodmap'],
    featured: false,
    repo: 'https://github.com/carlosindriago/tuxkeystoys',
    url: ''
  }
];
