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
      title: 'Marco Califano - Enterprise & Solution Architect',
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
      lead: 'Guido programmi di modernizzazione cloud, dati e AI per realta finance, assicurative e industriali, unendo visione strategica e delivery hands-on.',
      typing: [
        'blueprint multi-cloud e landing zone',
        'governance GenAI e AI gateway',
        'toolchain MLOps e AI SDLC',
        'digital integration hub su Azure',
        'coaching di team DevSecOps distribuiti'
      ],
      highlights: [
        'Architettura e strategia cloud: blueprint multi-cloud, landing zone e integrazione dei canali digitali.',
        'GenAI e innovazione: AI gateway, pipeline RAG e toolchain AI SDLC conformi a standard MLOps/DevSecOps.',
        'Leadership operativa: governance dei rilasci, dashboard BI su AWS e mentoring di team distribuiti.'
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
          detail: 'Cloud, dati e AI in banking, insurance, mobility, energy e telecom.'
        },
        {
          value: '3',
          label: 'Programmi GenAI 2025',
          detail: 'Blueprint, AI toolchain 3.0 e AI gateway per iniziative di nuova generazione.'
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
      intro: 'Un framework operativo che mantiene allineati strategia, architettura e adozione.',
      items: [
        {
          title: 'Strategia e governance',
          blurb: 'Assessment, business case e roadmap condivise con stakeholder business e IT.',
          points: [
            'Cloud readiness, gap analysis e KPI di trasformazione',
            'Modelli di compliance e risk management',
            'Steering committee e reporting trasparente'
          ]
        },
        {
          title: 'Blueprint e enablement',
          blurb: 'Disegno di reference architecture, toolchain AI e modelli operativi riutilizzabili.',
          points: [
            'Landing zone multi-cloud e AI Gateway centralizzati',
            'Pattern IaC, CI/CD e sicurezza by design',
            'Playbook GenAI, MLOps e acceleratori riutilizzabili'
          ]
        },
        {
          title: 'Delivery e adozione',
          blurb: 'Supporto hands-on fino al go-live e allo scaling della piattaforma.',
          points: [
            'Coaching di team DevSecOps/MLOps distribuiti',
            'Misurazione di valore e viste KPI condivise',
            'Change management e abilitazione organizzativa'
          ]
        }
      ]
    },
    experience: {
      title: 'Experience',
      intro: 'Leadership roles across architecture and delivery, aligning business goals with engineering execution.',
      items: [
        {
          company: 'Reply',
          period: '2022 - Present',
          role: 'Enterprise & Solution Architect / PMO / Technical Lead',
          bullets: [
            'Architecture & cloud strategy: multi-cloud and GenAI blueprints (AWS, Azure, GCP), landing zones, data/AI service layers and Digital Integration Hub.',
            'GenAI & innovation: AI gateway assessments, RAG pipelines, AI Toolchain 3.0 and AI SDLC adoption on GCP.',
            'Release & program management: release governance, dependency management and risk mitigation across complex programmes.',
            'Technical leadership: SAST integration within Terraform pipelines, AWS BI dashboards and modernisation of .NET/Angular applications.',
            'Team & stakeholder management: executive advisory, coordination of cloud/AI/DevSecOps/security teams and mentoring of architects and developers.'
          ]
        },
        {
          company: 'Prior roles',
          period: '2016 - 2022',
          role: 'Solution Architect, Cloud Architect, Product Specialist, PMO',
          bullets: [
            'Digital projects across AWS, GCP and Azure within media and telco domains.',
            'Cloud architect on GCP with migrations and optimisation using Kubernetes and managed databases.',
            'AWS architect and scrum master for mobility and IoT platforms integrating AWS and Azure.',
            'Product specialist for edge computing and RFID, IoT engineer and PMO on large-scale M2M initiatives.'
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
          period: '2014 - 2016',
          bullets: [
            'Tesi su tolerance analysis per antenne a riflettore tramite interval arithmetic (C/C++).',
            'Sviluppo di un video mixer open-source per multi-conference di alta qualit-.'
          ]
        },
        {
          school: 'University of Salerno',
          title: 'BSc Electronic Engineering',
          period: '2008 - 2013',
          bullets: [
            'Tesi su ottimizzazione della copertura radio con WinProp Suite in scenari indoor/outdoor.',
            'Focus su campi elettromagnetici, elettronica digitale e radiopropagazione.'
          ]
        }
      ]
    },
    skills: {
      title: 'Focus & competenze',
      intro: 'Competenze principali che portano valore a programmi cloud, dati e AI.',
      groups: [
        {
          category: 'Cloud & Platforms',
          items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Landing zone e ambienti ibridi', 'Edge e IoT']
        },
        {
          category: 'GenAI & Data',
          items: ['Governance GenAI', 'AI gateway e RAG', 'Data e BI platform', 'MLOps', 'Analytics realtime']
        },
        {
          category: 'Architecture & Delivery',
          items: ['Enterprise architecture', 'Blueprint e Digital Integration Hub', 'Microservizi ed event-driven', 'IaC e DevSecOps', 'Modern application design']
        },
        {
          category: 'Leadership & Governance',
          items: ['IT strategy e PMO', 'Orchestrazione di team cross-funzionali', 'Compliance e security', 'Stakeholder engagement']
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
          href: ''
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
          name: 'Professional Scrum Master I',
          issuer: 'Scrum.org',
          href: 'https://www.credly.com/badges/3a6c266f-578b-468d-b1a9-89e633976ac1/public_url'
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
    footer: 'Marco Califano - Enterprise & Solution Architect'
  },
  en: {
    head: {
      title: 'Marco Califano - Enterprise & Solution Architect',
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
      contactLabel: 'Let\'s talk about your project',
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
      lead: 'I lead cloud, data and AI modernisation for financial, insurance and industrial organisations, blending strategic governance with hands-on delivery.',
      typing: [
        'multi-cloud blueprints & landing zones',
        'GenAI governance and AI Gateway',
        'MLOps & AI SDLC playbooks',
        'real-time data & analytics platforms',
        'coaching distributed DevSecOps teams'
      ],
      highlights: [
        'Architecture & cloud strategy: multi-cloud blueprints, landing zones and resilient digital channels.',
        'GenAI & innovation: AI gateways, RAG pipelines and AI SDLC aligned with MLOps/DevSecOps standards.',
        'Operational leadership: release governance, AWS BI dashboards and mentoring of distributed teams.'
      ],
      actions: {
        primaryLabel: 'Download CV',
        primaryHref: 'https://drive.google.com/file/d/1Ik4bvW0YoHdVsm_CBipPkPgcaRpKqVvA/view?usp=drive_link',
        secondaryLabel: 'Let\'s talk',
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
          detail: 'Cloud, data and AI across banking, insurance, mobility, energy and telecom sectors.'
        },
        {
          value: '3',
          label: 'GenAI programmes in 2025',
          detail: 'Blueprints, AI toolchain 3.0 and centralised gateways for next-generation banking initiatives.'
        },
        {
          value: '10+',
          label: 'Teams & stakeholders coordinated',
          detail: 'IT strategy, DevSecOps/MLOps and change management across distributed teams.'
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
          title: 'Blueprint e enablement',
          blurb: 'Design of reference architectures, AI toolchains and repeatable operating models.',
          points: [
            'Multi-cloud landing zones and centralised AI Gateways',
            'IaC, CI/CD and security-by-design patterns',
            'GenAI playbooks, MLOps guidelines and reusable accelerators'
          ]
        },
        {
          title: 'Delivery e adozione',
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
      intro: 'Leadership roles across architecture and delivery, aligning business goals with engineering execution.',
      items: [
        {
          company: 'Reply',
          period: '2022 - Present',
          role: 'Enterprise & Solution Architect / PMO / Technical Lead',
          bullets: [
            'Architecture & cloud strategy: multi-cloud and GenAI blueprints (AWS, Azure, GCP), landing zones, data/AI service layers and Digital Integration Hub.',
            'GenAI & innovation: AI gateway assessments, RAG pipelines, AI Toolchain 3.0 and AI SDLC adoption on GCP.',
            'Release & program management: release governance, dependency management and risk mitigation across complex programmes.',
            'Technical leadership: SAST integration within Terraform pipelines, AWS BI dashboards and modernisation of .NET/Angular applications.',
            'Team & stakeholder management: executive advisory, coordination of cloud/AI/DevSecOps/security teams and mentoring of architects and developers.'
          ]
        },
        {
          company: 'Prior roles',
          period: '2016 - 2022',
          role: 'Solution Architect, Cloud Architect, Product Specialist, PMO',
          bullets: [
            'Digital projects across AWS, GCP and Azure within media and telco domains.',
            'Cloud architect on GCP with migrations and optimisation using Kubernetes and managed databases.',
            'AWS architect and scrum master for mobility and IoT platforms integrating AWS and Azure.',
            'Product specialist for edge computing and RFID, IoT engineer and PMO on large-scale M2M initiatives.'
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
          period: '2014 - 2016',
          bullets: [
            'Thesis on tolerance analysis for reflector antennas using interval arithmetic (C/C++).',
            'Developed an open-source video mixer for high-quality multi-conference experiences.'
          ]
        },
        {
          school: 'University of Salerno',
          title: 'BSc Electronic Engineering',
          period: '2008 - 2013',
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
          items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Landing zones & hybrid environments', 'Edge & IoT']
        },
        {
          category: 'GenAI & Data',
          items: ['GenAI governance', 'AI gateways & RAG', 'Data and BI platforms', 'MLOps', 'Real-time analytics']
        },
        {
          category: 'Architecture & Delivery',
          items: ['Enterprise architecture', 'Blueprints & Digital Integration Hub', 'Microservices & event-driven design', 'IaC & DevSecOps', 'Modern application design']
        },
        {
          category: 'Leadership & Governance',
          items: ['IT strategy & PMO', 'Cross-team orchestration', 'Compliance & security', 'Stakeholder management']
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
          name: 'Azure AI Fundamentals',
          issuer: 'Microsoft',
          href: ''
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
    footer: 'Marco Califano - Enterprise & Solution Architect'
  }
};

export function getContent(locale: Locale): Content {
  return data[locale] ?? data[fallbackLocale];
}

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && locales.includes(value as Locale);
}


