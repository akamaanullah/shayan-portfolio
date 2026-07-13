import { Project, Testimonial, PlatformSkill, Service, TimelineStep } from './types';

export const PLATFORMS_DATA: PlatformSkill[] = [
  {
    id: 'shopify',
    name: 'Shopify / Shopify Plus',
    icon: 'ShoppingBag',
    description: 'Expert-level customization, Liquid templates, and custom checkout implementation.',
    color: 'border-emerald-500/30 text-emerald-400 group-hover:border-emerald-500/70',
    bgGlow: 'from-emerald-500/10 to-transparent',
    details: [
      'OS 2.0 Theme architecture & schema customization',
      'Bespoke Liquid template & JSON section programming',
      'Checkout Extensibility & Custom App integrations',
      'Headless Shopify with Hydrogen & Storefront API',
      'Inventory, shipping, and API flow automations'
    ]
  },
  {
    id: 'wordpress',
    name: 'WordPress / WooCommerce',
    icon: 'Globe',
    description: 'Tailored plugins, full WooCommerce store builds, and Gutenberg/Elementor integrations.',
    color: 'border-blue-500/30 text-blue-400 group-hover:border-blue-500/70',
    bgGlow: 'from-blue-500/10 to-transparent',
    details: [
      'Custom theme creation from Figma with pure PHP/SASS',
      'WooCommerce extension & customized payment gateway integrations',
      'Custom block building for Gutenberg using React/JS',
      'Elementor / Divi highly optimized performance setups',
      'Advanced Custom Fields (ACF) & custom post type structuring'
    ]
  },
  {
    id: 'bigcommerce',
    name: 'BigCommerce Enterprise',
    icon: 'Layers',
    description: 'Advanced Stencil styling, Multi-Storefront (MSF) deployments, and API widgets.',
    color: 'border-indigo-500/30 text-indigo-400 group-hover:border-indigo-500/70',
    bgGlow: 'from-indigo-500/10 to-transparent',
    details: [
      'Stencil theme customization (Handlebars & SASS)',
      'GraphQL Storefront API and Cart/Checkout SDK scripts',
      'Multi-Storefront (MSF) configurations for global brands',
      'Complex catalog migrations and product option architectures',
      'B2B Edition customized workflow configuration'
    ]
  },
  {
    id: 'other',
    name: 'Webflow, Wix, Squarespace & PHP',
    icon: 'Cpu',
    description: 'Sleek visual styling, custom PHP integrations, and Laravel backend setups.',
    color: 'border-purple-500/30 text-purple-400 group-hover:border-purple-500/70',
    bgGlow: 'from-purple-500/10 to-transparent',
    details: [
      'Webflow custom layouts, interactions, and GSAP scripting',
      'Wix Velo backend code & Squarespace developer-mode features',
      'Custom PHP/Laravel web development & secure databases',
      'Database migration & legacy portal upkeep',
      'Third-party CRM, ERP & marketing tool connections'
    ]
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'setup-migration',
    title: 'Store Setup & Migration',
    icon: 'ArrowLeftRight',
    description: 'Seamless migration of catalog, orders, and customer accounts with absolute zero downtime.',
    bullets: [
      'Platform audits & strategy planning',
      'SEO metadata mapping & automatic redirects',
      'Bulk data export/import & schema normalization',
      'Integrations check & system sync tests'
    ]
  },
  {
    id: 'theme-customization',
    title: 'Theme Customization',
    icon: 'Paintbrush',
    description: 'Transforming off-the-shelf templates into highly tailored, brand-perfect storefronts.',
    bullets: [
      'Bespoke section & widget development',
      'Pixel-perfect Figma to theme conversions',
      'Mobile-first responsive adjustments',
      'Interactive e-commerce product customizers'
    ]
  },
  {
    id: 'speed-optimization',
    title: 'Speed Optimization',
    icon: 'Zap',
    description: 'Achieve Core Web Vitals green scores (90+) to improve conversion rate and SEO ranks.',
    bullets: [
      'Advanced image lazyloading & format conversion',
      'Script deferral and unused CSS/JS purging',
      'Server-side caching & CDN configurations',
      'Database query indexing and optimization'
    ]
  },
  {
    id: 'custom-dev',
    title: 'Custom App & Plugins',
    icon: 'Code',
    description: 'Building custom features that normal apps or plug-ins simply cannot do.',
    bullets: [
      'Custom Shopify custom apps (Node.js/React)',
      'Tailored WordPress/WooCommerce plugin design',
      'BigCommerce widgets and customized dashboard feeds',
      'Secure third-party API hookups (ERP, CRM)'
    ]
  },
  {
    id: 'seo-deliverability',
    title: 'SEO & Structured Data',
    icon: 'TrendingUp',
    description: 'Increasing organic reach through semantic schemas and fast search ranking layouts.',
    bullets: [
      'Structured JSON-LD schema microdata setups',
      'Sitemap and canonical index configurations',
      'Technical site structure corrections',
      'Google Search Console diagnostics'
    ]
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    icon: 'ShieldCheck',
    description: '24/7 priority support to resolve urgent issues and ensure persistent store availability.',
    bullets: [
      'Scheduled security audit logs and patches',
      'Backup automations and recovery validations',
      'Weekly app & plugin update audits',
      'Emergency store fix resolution dispatch'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'Luxe Apparels OS 2.0 Redesign',
    description: 'A complete Shopify Plus migration and OS 2.0 theme overhaul. Custom-built sections using Liquid and JSON schema enabled the client marketing team to build high-converting landing pages independently.',
    category: 'shopify',
    imageGradient: 'from-emerald-500/20 via-teal-600/10 to-slate-900',
    tags: ['Shopify Plus', 'Liquid', 'JSON Schema', 'Javascript', 'Tailwind'],
    features: ['Custom Mega-menu', 'Color Swatches', 'Advanced AJAX cart drawer', 'Checkout extensibility custom banner'],
    clientSector: 'Fashion & Apparel',
    scope: 'Shopify Plus theme development and optimization'
  },
  {
    id: 'proj-2',
    title: 'DecoArt Customized Frame Builder',
    description: 'An immersive WordPress portfolio with WooCommerce integration. Custom PHP plugins allow customers to choose frames, matte borders, and glass coatings in real-time, instantly adjusting pricing dynamically.',
    category: 'wordpress',
    imageGradient: 'from-blue-500/20 via-sky-600/10 to-slate-900',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'AJAX', 'jQuery'],
    features: ['Real-time frame simulator', 'ACF Pro structural fields', 'Dynamic custom price engine', 'Stripe checkout sync'],
    clientSector: 'Art & Framing Gallery',
    scope: 'WooCommerce Custom Plugin and Theme'
  },
  {
    id: 'proj-3',
    title: 'Vitality Nutrition B2B Store',
    description: 'A robust BigCommerce Enterprise Stencil customization. Tailored options to support wholesale pricing tiers, multi-attribute option grids, and quick order sheets directly synchronized to NetSuite ERP.',
    category: 'bigcommerce',
    imageGradient: 'from-indigo-500/20 via-violet-600/10 to-slate-900',
    tags: ['BigCommerce', 'Stencil', 'Handlebars.js', 'NetSuite API', 'SASS'],
    features: ['B2B Quick Order Portal', 'Dynamic volume-based tier pricing', 'Custom shipping quote calculator', 'Strict ERP inventory sync'],
    clientSector: 'Health & Supplements',
    scope: 'BigCommerce theme architecture & API connections'
  },
  {
    id: 'proj-4',
    title: 'Apex Automotives Storefront Migration',
    description: 'A custom Webflow storefront powered by a Laravel API backend. Migrated from Shopify to Webflow with an external database setup, delivering high responsiveness, complex filtering, and advanced speed.',
    category: 'other',
    imageGradient: 'from-purple-500/20 via-pink-600/10 to-slate-900',
    tags: ['Webflow', 'Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
    features: ['Deep faceted car model search', 'Webflow CMS sync with external DB', 'Custom stripe billing subscriptions', 'Admin order dashboard'],
    clientSector: 'Automotive Parts Distributor',
    scope: 'Headless / CMS hybrid implementation'
  },
  {
    id: 'proj-5',
    title: 'PureSkin Organics Shop Redesign',
    description: 'Complete UI rewrite and speed optimization of a high-traffic Shopify storefront. Resolved heavy bundle sizes, third-party render blockers, and script delays to skyrocket Core Web Vitals speed scores from 28 to 92.',
    category: 'shopify',
    imageGradient: 'from-emerald-400/20 via-cyan-600/10 to-slate-900',
    tags: ['Shopify', 'Liquid', 'Performance Audit', 'LazyLoading', 'Webpack'],
    features: ['Core Web Vitals green status', 'Lazy-loaded critical assets', 'Minimized script bundle weight', 'Dynamic product bundling tool'],
    clientSector: 'Skincare & Cosmetics',
    scope: 'Conversion rate & Performance enhancement'
  },
  {
    id: 'proj-6',
    title: 'Global Ceramics Wholesale Portal',
    description: 'A specialized BigCommerce Multi-Storefront layout. Built to support regional pricing and distinct shipping hubs across the USA, UK, and EU, maintaining a single consolidated catalog backend.',
    category: 'bigcommerce',
    imageGradient: 'from-indigo-400/20 via-blue-600/10 to-slate-900',
    tags: ['BigCommerce', 'Multi-Storefront', 'GraphQL API', 'i18n', 'Webpack'],
    features: ['Global geo-IP redirector', 'Multi-currency settlement', 'Multi-warehouse shipment routing', 'Custom translation overlays'],
    clientSector: 'Wholesale Home Decor',
    scope: 'Enterprise multi-store deployment'
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: '01',
    title: 'Discovery & Audit',
    description: 'We audit your current site, catalog structure, third-party integrations, and analyze speed bottleneck reports to outline custom goals.',
    icon: 'Search'
  },
  {
    step: '02',
    title: 'Strategic Architecture',
    description: 'Wireframing layouts and defining exact schemas. For migrations, we map redirect structures to prevent SEO value loss.',
    icon: 'LayoutGrid'
  },
  {
    step: '03',
    title: 'Tailored Development',
    description: 'Writing semantic HTML5, highly responsive Tailwind classes, and clean CMS code (Liquid, PHP, or Stencil/Handlebars) with zero fluff.',
    icon: 'Code'
  },
  {
    step: '04',
    title: 'Speed & SEO Audit',
    description: 'Lazyloading imagery, deferring scripts, optimizing fonts, and registering JSON-LD micro-schemas to secure green Speed Scores.',
    icon: 'Zap'
  },
  {
    step: '05',
    title: 'Seamless Launch',
    description: 'Rigorous validation checks across devices, final domain redirects mapping, safe checkout testing, and hand-off dashboard training.',
    icon: 'Rocket'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Marcus Vance',
    role: 'E-commerce Director',
    company: 'Luxe Wear',
    text: "Shayan is a true Shopify wizard. He migrated our entire store from an outdated, sluggish theme to a fully tailored OS 2.0 framework. Our mobile page load speed cut in half, and our conversion rate bumped up by 25%. Highly recommended!",
    rating: 5,
    initials: 'MV',
    bgGradient: 'from-emerald-500/10 to-teal-500/10'
  },
  {
    id: 'test-2',
    name: 'Eleanor Sterling',
    role: 'Founder',
    company: 'DecoArt Prints',
    text: "Our frame simulation plugin was extremely complex. Two previous developers told us it wasn't possible on WordPress. Shayan built it with pure PHP/AJAX flawlessly. It's clean, lightning-fast, and customers love using it.",
    rating: 5,
    initials: 'ES',
    bgGradient: 'from-blue-500/10 to-indigo-500/10'
  },
  {
    id: 'test-3',
    name: 'Kenji Tanaka',
    role: 'Supply Chain VP',
    company: 'Vitality Supplements',
    text: "We needed our BigCommerce Enterprise backend to communicate directly with NetSuite ERP. Shayan mapped the schemas perfectly and built custom quick-order interfaces. He is highly communicative and extremely professional.",
    rating: 5,
    initials: 'KT',
    bgGradient: 'from-violet-500/10 to-pink-500/10'
  }
];
