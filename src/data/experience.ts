export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export const experience: Experience[] = [
  {
    role: 'Software Architect & Full-Stack Developer',
    company: 'Freelance / Remoto · Lima, Peru',
    period: '2020 — Presente',
    description: 'Arquitectura y desarrollo de plataformas SaaS multi-tenant, APIs de alto rendimiento y sistemas de seguridad para clientes en Latinoamérica y Europa. Construcción de plugins WordPress propios (WooSpeed, SpectrusGuard) y automatizaciones con n8n para clientes enterprise.',
    tags: ['Laravel', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'WordPress', 'n8n']
  },
  {
    role: 'Backend Developer & WordPress Engineer',
    company: 'Proyectos cliente · Venezuela / Remoto',
    period: '2015 — 2020',
    description: 'Desarrollo de sistemas web de gestión para PYMEs, e-commerce con WooCommerce, y aplicaciones de facturación. Especialización en optimización de bases de datos y rendimiento de queries SQL en sistemas heredados.',
    tags: ['PHP', 'MySQL', 'jQuery', 'WooCommerce', 'Linux']
  },
  {
    role: 'Desarrollador Web Full-Stack',
    company: 'Proyectos independientes',
    period: '2009 — 2015',
    description: 'Inicio en el desarrollo web con PHP/HTML/CSS/JavaScript. Construcción de los primeros sistemas de gestión empresarial y sitios web dinámicos para clientes locales. Base en Tecnología Electrónica de UDO Anzoátegui.',
    tags: ['PHP', 'HTML/CSS', 'JavaScript', 'MySQL']
  }
];
