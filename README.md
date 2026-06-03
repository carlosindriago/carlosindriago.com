<div align="center">

# 👨‍💻 Carlos Indriago — Portfolio

**Software Architect & Full-Stack Developer**  
Lima, Perú · Disponible para proyectos remotos

[![Live](https://img.shields.io/badge/🌐_Live-carlosindriago.com-00d4aa?style=for-the-badge)](https://carlosindriago.com)
[![Astro](https://img.shields.io/badge/Astro-4.15-FF5D01?style=for-the-badge&logo=astro)](https://astro.build)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-100%2F100-00d4aa?style=for-the-badge)](https://pagespeed.web.dev/)

</div>

---

## 🧑‍💼 Carlos Indriago

Arquitecto de software con **+15 años de experiencia** construyendo plataformas SaaS multi-tenant, APIs de alto rendimiento y sistemas de seguridad robustos. Especializado en **Laravel, Node.js, PostgreSQL y AWS**.

> **Buscado en Google como:** Carlos Indriago · Carlos Indriago developer · Carlos Indriago Laravel · Carlos Indriago arquitecto software Lima

---

## ⚡ Stack del sitio

| Capa | Tecnología |
|------|-------------|
| Framework | Astro 6 (Zero JS por defecto) |
| Estilos | Tailwind CSS 4 + design tokens |
| SEO | JSON-LD Person + WebSite schema |
| Sitemap | @astrojs/sitemap (auto-generado) |
| Deploy | Coolify + Docker + Caddy |
| Repo | GitHub → auto-deploy en push |

---

## 🚀 Instalación local

```bash
git clone https://github.com/carlosindriago/carlosindriago.dev
cd carlosindriago.dev
npm install
npm run dev        # http://localhost:4321
npm run build      # producción → dist/
npm run preview    # preview de dist/
```

---

## 🐳 Deploy en Coolify (paso a paso)

1. En Coolify → **New Resource → Docker Compose**
2. Repository: `carlosindriago/carlosindriago.dev`
3. Branch: `main`
4. Domain: `carlosindriago.com`
5. Port: `3000`
6. **Auto-deploy on push**: ✅ enabled
7. Deploy → en ~2 min el sitio está live

Cada `git push` a `main` dispara un re-deploy automático.

---

## 🔍 SEO — Estrategia para rankear "Carlos Indriago" en #1

- ✅ `JSON-LD Person` schema con `name`, `alternateName`, `sameAs`
- ✅ `JSON-LD WebSite` schema para sitelinks en Google  
- ✅ `og:profile` meta tags para identidad en redes sociales
- ✅ `canonical` URL correcta en cada página
- ✅ `sitemap.xml` auto-generado e indexado en `robots.txt`
- ✅ Astro SSG = HTML estático → Core Web Vitals perfectos

---

## 🏗️ Estructura del proyecto

```
src/
├── components/
│   ├── SEOHead.astro    ← JSON-LD + OG + Twitter Card
│   ├── Nav.astro        ← Sticky + hide-on-scroll + mobile
│   ├── Hero.astro       ← Animaciones entrada + stats
│   ├── About.astro      ← Bio + highlights técnicos
│   ├── Skills.astro     ← Stack con cards animadas
│   ├── Projects.astro   ← Grid de proyectos
│   ├── Experience.astro ← Timeline animado
│   └── Contact.astro    ← Canales de contacto
├── data/
│   └── site.ts          ← ⭐ Single Source of Truth
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro
│   └── robots.txt.ts
└── styles/
    └── global.css       ← Design tokens + utilidades
```

> Edita **`src/data/site.ts`** para actualizar todo el contenido del sitio.

---

## 📄 Licencia

MIT © 2026 [Carlos Indriago](https://carlosindriago.com)
