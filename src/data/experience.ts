export interface Experience {
  role: string;
  company: string;
  period: string;
  responsibility: string;
  impact: string[];
  tags: string[];
}

export const experience: Experience[] = [
  {
    role: 'Software Architect & Full-Stack Developer',
    company: 'Freelance / Remoto · Lima, Peru',
    period: '2020 — Presente',
    responsibility: 'Diseño y desarrollo de plataformas SaaS, APIs críticas, sistemas de seguridad y automatizaciones para clientes en Latinoamérica y Europa.',
    impact: [
      'Definición de arquitecturas multi-tenant con foco en aislamiento, mantenibilidad y evolución del producto.',
      'Construcción de soluciones backend y WordPress orientadas a rendimiento, seguridad y operación estable.',
      'Acompañamiento técnico en decisiones de stack, despliegue, datos e integración con procesos de negocio.',
    ],
    tags: ['Laravel', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'WordPress', 'n8n']
  },
  {
    role: 'Backend Developer & WordPress Engineer',
    company: 'Proyectos cliente · Venezuela / Remoto',
    period: '2015 — 2020',
    responsibility: 'Desarrollo de sistemas de gestión, e-commerce y aplicaciones de facturación para PYMEs y proyectos remotos.',
    impact: [
      'Optimización de consultas SQL y bases de datos en sistemas con limitaciones heredadas.',
      'Implementación de flujos comerciales y administrativos conectados a operación real del negocio.',
      'Mejora progresiva de soluciones existentes sin interrumpir continuidad de clientes.',
    ],
    tags: ['PHP', 'MySQL', 'jQuery', 'WooCommerce', 'Linux']
  },
  {
    role: 'Desarrollador Web Full-Stack',
    company: 'Proyectos independientes',
    period: '2009 — 2015',
    responsibility: 'Construcción de sitios dinámicos y primeros sistemas de gestión empresarial para clientes locales.',
    impact: [
      'Consolidación de fundamentos full-stack en PHP, JavaScript, HTML/CSS y MySQL.',
      'Traducción de necesidades operativas de negocio en herramientas web funcionales.',
      'Base técnica combinada con formación en Tecnología Electrónica de UDO Anzoátegui.',
    ],
    tags: ['PHP', 'HTML/CSS', 'JavaScript', 'MySQL']
  }
];
