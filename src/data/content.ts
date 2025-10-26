export type Locale = 'it' | 'en';
export const locales: Locale[] = ['it', 'en'];
export const fallbackLocale: Locale = 'it';

type Metric = {
  value: string;
  label: string;
  detail: string;
};

type Pillar = {
  title: string;
  blurb: string;
  points: string[];
};

type TimelineItem = {
  company: string;
  period: string;
  role: string;
  bullets: string[];
};

type EducationItem = {
  school: string;
  title: string;
  period: string;
  bullets: string[];
};

type SkillGroup = {
  category: string;
  items: string[];
};

type Certification = {
  name: string;
  issuer: string;
  href: string;
};

type ContactCard = {
  icon: string;
  label: string;
  text: string;
  href?: string;
};

type Content = {
  head: {
    title: string;
    description: string;
    keywords: string;
    ogDescription: string;
  };
  nav: {
    brand: string;
    items: { id: string; label: string }[];
    cvLabel: string;
    contactLabel: string;
    languageSwitchLabel: string;
    languageSwitchSr: string;
    themeToggle: { light: string; dark: string };
  };
  hero: {
    badge: string;
    title: string;
    lead: string;
    typing: string[];
    highlights: string[];
    actions: { primaryLabel: string; primaryHref: string; secondaryLabel: string; secondaryHref: string };
  };
  metrics: { title: string; intro: string; items: Metric[] };
  pillars: { title: string; intro: string; items: Pillar[] };
  experience: { title: string; intro: string; items: TimelineItem[] };
  education: { title: string; intro: string; items: EducationItem[] };
  skills: { title: string; intro: string; groups: SkillGroup[] };
  certifications: { title: string; intro: string; items: Certification[] };
  contact: { title: string; intro: string; cards: ContactCard[] };
  footer: string;
};

const data: Record<Locale, Content> = {
  it: {
    head: {
      title: 'Marco Califano — Enterprise & Solution Architect',
      description: 'Enterprise & Solution Architect con esperienza multi-cloud (AWS, Azure, Google Cloud) e programmi di trasformazione digitale in utilities, energy, media e banking.',
      keywords: 'Marco Califano, Solution Architect, Cloud Architect, AWS, Azure, GCP, Enterprise Architecture',
      ogDescription: 'Enterprise & Solution Architect che guida roadmap cloud, data & AI con impatto misurabile sul business.'
    },
    nav: {
      brand: 'Marco Califano',
      items: [
        { id: 'about', label: 'Chi sono' },
        { id: 'experience', label: 'Esperienza' },
        { id: 'skills', label: 'Competenze' },
        { id: 'certifications', label: 'Certificazioni' },
        { id: 'contact', label: 'Contatti' }
      ],
      cvLabel: 'Scarica il CV',
      contactLabel: 'Parliamo del tuo progetto',
      languageSwitchLabel: 'EN',
      languageSwitchSr: 'Passa alla versione inglese',
      themeToggle: {
        light: 'Attiva il tema chiaro',
        dark: 'Attiva il tema scuro'
      }
    },
    hero: {
      badge: 'Enterprise & Solution Architect',
      title: 'Ciao, sono Marco.',
      lead: 'Guido programmi di modernizzazione cloud, data e AI per banche, assicurazioni e aziende industriali, unendo governance strategica e delivery hands-on.',
      typing: [
        'blueprint multi-cloud e landing zone',
        'governance GenAI e AI gateway',
        'toolchain MLOps e AI SDLC',
        'data platform e analytics realtime',
        'coaching di team DevSecOps distribuiti'
      ],
      highlights: [
        'Disegno blueprint multi-cloud e GenAI per trasformazioni enterprise a livello europeo.',
        'Integro landing zone, toolchain AI e data platform con controlli di sicurezza e KPI misurabili.',
        'Coordino team cross-funzionali dalla strategia alla produzione con roadmap e metriche condivise.'
      ],
      actions: {
        primaryLabel: 'Scarica il CV',
        primaryHref: 'https://drive.google.com/file/d/1Ik4bvW0YoHdVsm_CBipPkPgcaRpKqVvA/view?usp=drive_link',
        secondaryLabel: 'Parliamo del tuo progetto',
        secondaryHref: '#contact'
      }
    },
    metrics: {
      title: 'Impact snapshot',
      intro: 'Indicatori chiave dei programmi enterprise che seguo ogni giorno.',
      items: [
        {
          value: '8+',
          label: 'Anni di esperienza enterprise',
          detail: 'Cloud, data e AI in banking, insurance, mobility, energy e telecomunicazioni.'
        },
        {
          value: '3',
          label: 'Programmi GenAI 2025',
          detail: 'Blueprint, AI toolchain 3.0 e gateway centralizzati per iniziative bancarie di nuova generazione.'
        },
        {
          value: '10+',
          label: 'Team e stakeholder orchestrati',
          detail: 'IT strategy, DevSecOps/MLOps e change management con squadre distribuite.'
        }
      ]
    },
    pillars: {
      title: 'Come affronto i programmi',
      intro: 'Un framework operativo che allinea strategia, architettura e adozione.',
      items: [
        {
          title: 'Strategia & Governance',
          blurb: 'Assessment, business case e roadmap condivise con C-level e team di delivery.',
          points: [
            'Cloud readiness, gap analysis e KPI di trasformazione',
            'Modelli di compliance e risk management',
            'Steering committee e reporting trasparente'
          ]
        },
        {
          title: 'Blueprint & Enablement',
          blurb: 'Disegno di reference architecture, AI toolchain e modelli operativi ripetibili.',
          points: [
            'Landing zone multi-cloud e AI Gateway centralizzati',
            'Pattern IaC, CI/CD e sicurezza by design',
            'Playbook GenAI, MLOps e acceleratori riutilizzabili'
          ]
        },
        {
          title: 'Delivery & Adoption',
          blurb: 'Supporto hands-on a squadre cross-funzionali fino alla produzione e allo scaling.',
          points: [
            'Coaching di team DevSecOps/MLOps distribuiti',
            'Misurazione valore, KPI e iterazioni guidate dai dati',
            'Change management e abilitazione organizzativa'
          ]
        }
      ]
    },
    experience: {
      title: 'Esperienza',
      intro: 'Ruoli di leadership tecnica e strategica, con un approccio hands-on che connette business, architettura e delivery.',
      items: [
        {
          company: 'Reply · Crédit Agricole',
          period: 'Lug 2025 — Presente',
          role: 'Senior Architect / PM / IT Strategy',
          bullets: [
            'Definizione del blueprint multi-cloud e GenAI: landing zone, modelli di sicurezza, data/AI service layer e integrazioni applicative.',
            'IT strategy advisor per governance, roadmap e operating model DevSecOps/MLOps condivisi con il gruppo Crédit Agricole.',
            'Coordinamento dei primi use case GenAI (document intelligence, credit risk) con KPI, compliance e change management dedicati.'
          ]
        },
        {
          company: 'Reply · BPER Banca',
          period: 'Lug 2025 — Presente',
          role: 'Senior Architect · GenAI Design Authority',
          bullets: [
            'Design authority sulle iniziative GenAI: assessment architetturali, blueprint contestualizzati, remediation plan e governance centralizzata.',
            'Analisi e rollout della piattaforma AI su Google Cloud (MongoDB Atlas, Neo4j Aura, Elastic, Cloud Run/MemoryStore).',
            'Valutazione AI Gateway: requisiti RBAC, auditing, semantic caching, cost tracking e roadmap di adozione.'
          ]
        },
        {
          company: 'Reply · BAPS',
          period: 'Mar 2025 — Presente',
          role: 'Technical Lead',
          bullets: [
            'Ottimizzazione di workflow cloud personalizzati, integrando SAST in pipeline Terraform-based e KPI di sicurezza.',
            'Sviluppo di dashboard BI su stack AWS per decision making data-driven e visibility operativa.',
            'Advisor tecnico per garantire soluzioni scalabili, sicure e allineate alle priorità del cliente.'
          ]
        },
        {
          company: 'Reply · Telepass',
          period: 'Giu 2021 — Gen 2022',
          role: 'GCP Cloud Architect',
          bullets: [
            'Blueprint GCP end-to-end per migrazione lift-and-shift e modernizzazione di servizi mobility.',
            'Adozione di Kubernetes, SQL gestiti e pipeline CI/CD per accelerare il go-live delle applicazioni.'
          ]
        },
        {
          company: 'Accenture · CNH Industrial',
          period: 'Giu 2019 — Giu 2021',
          role: 'AWS Architect & Team Leader',
          bullets: [
            'Realizzazione di soluzioni Alexa integrate con infrastruttura Azure per servizi connessi sui veicoli Iveco.',
            'Coordinamento di team sviluppo/test globali, pianificazione sprint e adozione di best practice DevOps.'
          ]
        }
      ]
    },
    education: {
      title: 'Formazione',
      intro: 'Studi ingegneristici con focus su telecomunicazioni, sistemi distribuiti e innovazione.',
      items: [
        {
          school: 'University of Trento',
          title: 'MSc Telecommunications Engineering',
          period: '2014 — 2016',
          bullets: [
            'Tesi su tolerance analysis per antenne a riflettore tramite interval arithmetic (C/C++).',
            'Sviluppo di un video mixer open-source per multi-conference di alta qualità.'
          ]
        },
        {
          school: 'University of Salerno',
          title: 'BSc Electronic Engineering',
          period: '2008 — 2013',
          bullets: [
            'Tesi su ottimizzazione della copertura radio con WinProp Suite in scenari indoor/outdoor.',
            'Focus su campi elettromagnetici, elettronica digitale e radiopropagazione.'
          ]
        }
      ]
    },
    skills: {
      title: 'Focus & competenze',
      intro: 'Competenze principali su cui costruisco strategie, architetture e delivery roadmap.',
      groups: [
        {
          category: 'Cloud & Platforms',
          items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Landing Zone & Hybrid', 'Edge & IoT']
        },
        {
          category: 'GenAI & Data',
          items: ['GenAI Governance', 'AI Gateway', 'Data & BI Platform', 'MLOps', 'Analytics in tempo reale']
        },
        {
          category: 'Architecture & Delivery',
          items: ['Enterprise Architecture', 'Reference Blueprint', 'Microservizi & Event-driven', 'IaC & DevSecOps', 'Modern Application Design']
        },
        {
          category: 'Leadership & Governance',
          items: ['IT Strategy & PM', 'Cross-team orchestration', 'Compliance & Security', 'Stakeholder Engagement']
        }
      ]
    },
    certifications: {
      title: 'Certificazioni',
      intro: 'Credenziali che attestano il mio impegno continuo nell\'evoluzione tecnologica e metodologica.',
      items: [
        {
          name: 'Azure Solutions Architect Expert',
          issuer: 'Microsoft',
          href: 'https://learn.microsoft.com/api/credentials/share/en-us/MarcoCalifano89/BC062EA070865656?sharingId=CAB9C76CF28D6EAE'
        },
        {
          name: 'Azure AI Fundamentals',
          issuer: 'Microsoft',
          href: 'https://www.credly.com/badges/83fa5e74-5a25-4a19-8aac-4e7c0f815508' // placeholder? need actual link but unknown
        },
        {
          name: 'Azure Administrator Associate',
          issuer: 'Microsoft',
          href: 'https://learn.microsoft.com/api/credentials/share/en-us/MarcoCalifano89/4C72C1888660AB9A?sharingId=CAB9C76CF28D6EAE'
        },
        {
          name: 'AWS Solutions Architect Associate',
          issuer: 'Amazon Web Services',
          href: 'https://www.credly.com/badges/d902b397-e33c-419c-84dc-f66d32e94fc3'
        },
        {
          name: 'Databricks Generative AI Fundamentals',
          issuer: 'Databricks',
          href: 'https://sgq.io/GodJh3O'
        },
        {
          name: 'Professional Scrum Master I',
          issuer: 'Scrum.org',
          href: 'https://www.credly.com/badges/3a6c266f-578b-468d-b1a9-89e633976ac1/public_url'
        },
        {
          name: 'Associate Cloud Engineer',
          issuer: 'Google Cloud',
          href: 'https://www.credly.com/users/marcocalifano/badges' // placeholder
        }
      ]
    },
    contact: {
      title: 'Contatti',
      intro: 'Scrivimi per discutere del tuo prossimo progetto o per una consulenza architetturale.',
      cards: [
        { icon: 'ri-map-pin-2-line', label: 'Home Town', text: 'Milan, Italy' },
        { icon: 'ri-mail-line', label: 'Email', text: 'marcocalifano89@gmail.com', href: 'mailto:marcocalifano89@gmail.com' },
        { icon: 'ri-phone-line', label: 'Phone', text: '+39 348 878 2506', href: 'tel:+393488782506' },
        { icon: 'ri-linkedin-box-line', label: 'LinkedIn', text: 'linkedin.com/in/marcocalifano', href: 'https://www.linkedin.com/in/marcocalifano/' }
      ]
    },
    footer: 'Marco Califano — Enterprise & Solution Architect'
  },
  en: {
    head: {
      title: 'Marco Califano — Enterprise & Solution Architect',
      description: 'Enterprise & Solution Architect delivering multi-cloud (AWS, Azure, Google Cloud) platforms and digital transformation programmes across utilities, energy, media and banking.',
      keywords: 'Marco Califano, Solution Architect, Cloud Architect, AWS, Azure, GCP, Enterprise Architecture',
      ogDescription: 'Enterprise & Solution Architect driving cloud, data & AI strategies with measurable business impact.'
    },
    nav: {
      brand: 'Marco Califano',
      items: [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'certifications', label: 'Certifications' },
        { id: 'contact', label: 'Contact' }
      ],
      cvLabel: 'Download CV',
      contactLabel: 'Let’s talk about your project',
      languageSwitchLabel: 'IT',
      languageSwitchSr: 'Switch to Italian version',
      themeToggle: {
        light: 'Switch to light theme',
        dark: 'Switch to dark theme'
      }
    },
    hero: {
      badge: 'Enterprise & Solution Architect',
      title: "Hi, I'm Marco.",
      lead: 'I lead cloud, data & AI modernisation for banks, insurers and industrial players, blending strategy, governance and hands-on execution.',
      typing: [
        'multi-cloud blueprints & landing zones',
        'GenAI governance and AI Gateway',
        'MLOps & AI SDLC playbooks',
        'real-time data & analytics platforms',
        'coaching distributed DevSecOps teams'
      ],
      highlights: [
        'Design multi-cloud and GenAI blueprints for tier-one European banks.',
        'Integrate landing zones, AI toolchains and data platforms with measurable business controls.',
        'Orchestrate cross-functional teams from idea to production with shared KPIs.'
      ],
      actions: {
        primaryLabel: 'Download CV',
        primaryHref: 'https://drive.google.com/file/d/1Ik4bvW0YoHdVsm_CBipPkPgcaRpKqVvA/view?usp=drive_link',
        secondaryLabel: 'Let’s talk',
        secondaryHref: '#contact'
      }
    },
    metrics: {
      title: 'Impact snapshot',
      intro: 'Key indicators from the programmes I run with clients.',
      items: [
        {
          value: '8+',
          label: 'Years in enterprise delivery',
          detail: 'Cloud, data and AI across banking, insurance, mobility, energy and telecom.'
        },
        {
          value: '3',
          label: 'GenAI programmes in 2025',
          detail: 'Blueprints, AI toolchain 3.0 and centralised gateways for Crédit Agricole and BPER.'
        },
        {
          value: '10+',
          label: 'Teams & stakeholders coordinated',
          detail: 'IT strategy, DevSecOps/MLOps and change management across distributed squads.'
        }
      ]
    },
    pillars: {
      title: 'How I approach programmes',
      intro: 'An operating framework that keeps strategy, architecture and adoption aligned.',
      items: [
        {
          title: 'Strategy & Governance',
          blurb: 'Assessments, business cases and shared roadmaps with C-level stakeholders.',
          points: [
            'Cloud readiness, gap analysis and transformation KPIs',
            'Compliance and risk-management models',
            'Steering committees and transparent reporting'
          ]
        },
        {
          title: 'Blueprint & Enablement',
          blurb: 'Design of reference architectures, AI toolchains and repeatable operating models.',
          points: [
            'Multi-cloud landing zones and centralised AI Gateways',
            'IaC, CI/CD and security-by-design patterns',
            'GenAI playbooks, MLOps guidelines and reusable accelerators'
          ]
        },
        {
          title: 'Delivery & Adoption',
          blurb: 'Hands-on support until production launch and scaling.',
          points: [
            'Coaching DevSecOps/MLOps teams across locations',
            'Data-driven KPI tracking and iteration',
            'Change management and organisational enablement'
          ]
        }
      ]
    },
    experience: {
      title: 'Experience',
      intro: 'Leadership roles across architecture and delivery, bridging business goals with engineering execution.',
      items: [
        {
          company: 'Reply · Crédit Agricole',
          period: 'Jul 2025 — Present',
          role: 'Senior Architect / PM / IT Strategy',
          bullets: [
            'Defined the end-to-end multi-cloud and GenAI blueprint covering landing zones, security, data/AI services and integration patterns.',
            'Acted as IT strategy advisor on governance, roadmap and operating models for DevSecOps/MLOps teams across Crédit Agricole Group.',
            'Led the first GenAI use cases (document intelligence, credit risk), setting KPIs, compliance controls and adoption plans.'
          ]
        },
        {
          company: 'Reply · BPER Banca',
          period: 'Jul 2025 — Present',
          role: 'Senior Architect · GenAI Design Authority',
          bullets: [
            'Design authority for Generative AI initiatives: architectural assessments, remediation plans and contextualised blueprints.',
            'Oversaw the rollout of the AI platform on Google Cloud (MongoDB Atlas, Neo4j Aura, Elastic, Cloud Run/MemoryStore).',
            'Benchmarked and governed AI Gateway solutions covering RBAC, auditing, semantic caching, cost and token tracking.'
          ]
        },
        {
          company: 'Reply · BAPS',
          period: 'Mar 2025 — Present',
          role: 'Technical Lead',
          bullets: [
            'Integrated SAST tools into Terraform-based CI/CD pipelines to strengthen security and compliance early in delivery.',
            'Built and evolved BI dashboards on AWS to drive data-informed operations and visibility.',
            'Trusted technical advisor ensuring scalable, secure and high-performance solutions aligned with client goals.'
          ]
        },
        {
          company: 'Reply · Telepass',
          period: 'Jun 2021 — Jan 2022',
          role: 'GCP Cloud Architect',
          bullets: [
            'Owned the GCP blueprint for lift-and-shift migrations and modernisation of mobility services.',
            'Delivered Kubernetes, managed SQL and CI/CD foundations accelerating application go-live.'
          ]
        },
        {
          company: 'Accenture · CNH Industrial',
          period: 'Jun 2019 — Jun 2021',
          role: 'AWS Architect & Team Leader',
          bullets: [
            'Delivered Alexa-based connected services integrated with CNH’s Azure landscape for Iveco vehicles.',
            'Led global development and testing teams, sprint planning and DevOps best practices.'
          ]
        }
      ]
    },
    education: {
      title: 'Education',
      intro: 'Engineering background focused on telecommunications, distributed systems and innovation.',
      items: [
        {
          school: 'University of Trento',
          title: 'MSc Telecommunications Engineering',
          period: '2014 — 2016',
          bullets: [
            'Thesis on tolerance analysis for reflector antennas using interval arithmetic (C/C++).',
            'Developed an open-source video mixer for high-quality multi-conference experiences.'
          ]
        },
        {
          school: 'University of Salerno',
          title: 'BSc Electronic Engineering',
          period: '2008 — 2013',
          bullets: [
            'Thesis on radio coverage optimisation with WinProp Suite in indoor/outdoor scenarios.',
            'Focused on electromagnetics, digital electronics and radiopropagation.'
          ]
        }
      ]
    },
    skills: {
      title: 'Focus areas & skills',
      intro: 'Core capabilities underpinning my strategies, architectures and delivery roadmaps.',
      groups: [
        {
          category: 'Cloud & Platforms',
          items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Landing Zone & Hybrid', 'Edge & IoT']
        },
        {
          category: 'GenAI & Data',
          items: ['GenAI Governance', 'AI Gateway', 'Data & BI Platforms', 'MLOps', 'Real-time analytics']
        },
        {
          category: 'Architecture & Delivery',
          items: ['Enterprise Architecture', 'Reference Blueprint', 'Microservices & Event-driven', 'IaC & DevSecOps', 'Modern Application Design']
        },
        {
          category: 'Leadership & Governance',
          items: ['IT Strategy & PM', 'Cross-team orchestration', 'Compliance & Security', 'Stakeholder Engagement']
        }
      ]
    },
    certifications: {
      title: 'Certifications',
      intro: 'Credentials that prove my ongoing commitment to technology excellence.',
      items: [
        {
          name: 'Azure Solutions Architect Expert',
          issuer: 'Microsoft',
          href: 'https://learn.microsoft.com/api/credentials/share/en-us/MarcoCalifano89/BC062EA070865656?sharingId=CAB9C76CF28D6EAE'
        },
        {
          name: 'Azure Administrator Associate',
          issuer: 'Microsoft',
          href: 'https://learn.microsoft.com/api/credentials/share/en-us/MarcoCalifano89/4C72C1888660AB9A?sharingId=CAB9C76CF28D6EAE'
        },
        {
          name: 'AWS Solutions Architect Associate',
          issuer: 'Amazon Web Services',
          href: 'https://www.credly.com/badges/d902b397-e33c-419c-84dc-f66d32e94fc3'
        },
        {
          name: 'Databricks Generative AI Fundamentals',
          issuer: 'Databricks',
          href: 'https://sgq.io/GodJh3O'
        },
        {
          name: 'Professional Scrum Master I',
          issuer: 'Scrum.org',
          href: 'https://www.credly.com/badges/3a6c266f-578b-468d-b1a9-89e633976ac1/public_url'
        }
      ]
    },
    contact: {
      title: 'Contact',
      intro: 'Get in touch to discuss your next project or architect a new platform together.',
      cards: [
        { icon: 'ri-map-pin-2-line', label: 'Home Town', text: 'Milan, Italy' },
        { icon: 'ri-mail-line', label: 'Email', text: 'marcocalifano89@gmail.com', href: 'mailto:marcocalifano89@gmail.com' },
        { icon: 'ri-phone-line', label: 'Phone', text: '+39 348 878 2506', href: 'tel:+393488782506' },
        { icon: 'ri-linkedin-box-line', label: 'LinkedIn', text: 'linkedin.com/in/marcocalifano', href: 'https://www.linkedin.com/in/marcocalifano/' }
      ]
    },
    footer: 'Marco Califano — Enterprise & Solution Architect'
  }
};

export function getContent(locale: Locale): Content {
  return data[locale] ?? data[fallbackLocale];
}

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && locales.includes(value as Locale);
}

