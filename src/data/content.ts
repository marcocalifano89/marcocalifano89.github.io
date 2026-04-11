export type Locale = 'it' | 'en';
export const locales: Locale[] = ['it', 'en'];
export const fallbackLocale: Locale = 'it';

type Metric = {
  value: string;
  label: string;
  detail: string;
  eyebrow?: string;
  signals?: string[];
};

type HeroHighlight = {
  title: string;
  detail: string;
};

type HeroProofSignal = {
  text: string;
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
  summary: string;
  highlights?: string[];
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
  summary: string;
  items: string[];
};

type Certification = {
  name: string;
  issuer: string;
  href?: string;
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
    proofSignals: HeroProofSignal[];
    highlights: HeroHighlight[];
    actions: { primaryLabel: string; primaryHref: string };
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
        { id: 'impact', label: 'Impatto' },
        { id: 'approach', label: 'Metodo' },
        { id: 'experience', label: 'Esperienza' },
        { id: 'skills', label: 'Competenze' },
        { id: 'certifications', label: 'Certificazioni' },
        { id: 'contact', label: 'Contatti' }
      ],
      cvLabel: 'Scarica il CV',
      contactLabel: 'Contattami',
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
      lead: 'Disegno e coordino programmi di modernizzazione cloud, dati e AI per organizzazioni finanziarie, assicurative e industriali, unendo visione strategica e delivery hands-on.',
      typing: [
        'Blueprint multi-cloud e landing zone',
        'Governance GenAI e AI gateway',
        'Toolchain MLOps e AI SDLC',
        'Digital integration hub su Azure',
        'Coaching di team DevSecOps distribuiti'
      ],
      proofSignals: [
        { text: '10+ anni di delivery enterprise' },
        { text: 'AWS / Azure / GCP' },
        { text: 'Governance GenAI e AI gateway' }
      ],
      highlights: [
        { title: 'Strategia cloud', detail: 'Blueprint, landing zone' },
        { title: 'Orchestrazione GenAI', detail: 'Gateway, RAG, AI SDLC' },
        { title: 'Leadership operativa', detail: 'Release governance, BI' },
        { title: 'Governance programma', detail: 'Roadmap, dipendenze' },
        { title: 'Data platform', detail: 'Azure, AWS, analytics' },
        { title: 'Adozione e change', detail: 'Onboarding, runbook' }
      ],
      actions: {
        primaryLabel: 'Scarica il CV',
        primaryHref: 'https://drive.google.com/file/d/1Ik4bvW0YoHdVsm_CBipPkPgcaRpKqVvA/view?usp=drive_link'
      }
    },
    metrics: {
      title: 'Outcome selezionati',
      intro: 'Una vista rapida sui programmi che porto dalla strategia al go-live.',
      items: [
        {
          eyebrow: 'Banking & insurance',
          value: 'Multi-cloud',
          label: 'Blueprint, landing zone e layer data/AI',
          detail: 'Architetture target AWS, Azure e GCP per iniziative regulated con governance e pattern riutilizzabili.',
          signals: ['AWS / Azure / GCP', 'Landing zone', 'Risk-aware']
        },
        {
          eyebrow: 'GenAI delivery',
          value: 'GenAI',
          label: 'Gateway centralizzati, RAG e AI SDLC',
          detail: 'Dall’assessment dell’AI gateway ai playbook MLOps/DevSecOps con controlli, KPI e modelli operativi condivisi.',
          signals: ['AI gateway', 'RAG', 'AI SDLC']
        },
        {
          eyebrow: 'Programme orchestration',
          value: '10+',
          label: 'Team e stakeholder allineati fino al go-live',
          detail: 'Release governance, dashboard BI, mentoring tecnico ed executive advisory su stream cross-funzionali.',
          signals: ['Executive advisory', 'Release governance', 'Change enablement']
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
      title: 'Esperienza',
      intro: 'Ruoli di leadership su architettura e delivery, allineando obiettivi business ed execution tecnica.',
      items: [
        {
          company: 'Reply',
          period: '2022 - Oggi',
          role: 'Enterprise & Solution Architect / PMO / Technical Lead',
          summary: 'Ruolo di regia tra architettura, governance di programma e delivery tecnico su iniziative cloud, data e AI.',
          highlights: ['AWS / Azure / GCP', 'AI gateway & RAG', 'Release governance'],
          bullets: [
            'Disegno blueprint multi-cloud, landing zone e service layer data/AI per programmi regulated in banking e insurance.',
            'Imposto AI gateway, pipeline RAG e adozione AI SDLC/MLOps con pattern riutilizzabili e controlli condivisi.',
            'Coordino release, dipendenze e rischio, con dashboard BI, SAST su Terraform e mentoring di team distribuiti.'
          ]
        },
        {
          company: 'Ruoli precedenti',
          period: '2016 - 2022',
          role: 'Solution Architect, Cloud Architect, Product Specialist, PMO',
          summary: 'Percorso su architettura cloud, delivery digitale e product enablement in media, telco, mobility e IoT.',
          highlights: ['Kubernetes & managed DB', 'AWS + Azure mobility', 'Edge / RFID / M2M'],
          bullets: [
            'Migrazioni e ottimizzazioni cloud su GCP con Kubernetes e database gestiti per workload media e telco.',
            'Architettura AWS e scrum leadership per piattaforme mobility e IoT integrate con servizi AWS e Azure.',
            'Ruoli su edge computing, RFID e programmi M2M con ownership tecnica e PMO.'
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
            'Sviluppo di un video mixer open-source per multi-conference di alta qualita.'
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
          summary: 'Fondazioni multi-cloud, landing zone e standard di piattaforma per ambienti ibridi e regulated.',
          items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Landing zone e ambienti ibridi', 'Edge e IoT']
        },
        {
          category: 'GenAI & Data',
          summary: 'Governance GenAI, piattaforme dati e pattern operativi per AI gateway, analytics e RAG.',
          items: ['Governance GenAI', 'AI gateway e RAG', 'Data e BI platform', 'MLOps', 'Analytics realtime']
        },
        {
          category: 'Architecture & Delivery',
          summary: 'Reference architecture, integrazione applicativa e pratiche delivery per servizi resilienti e moderni.',
          items: ['Enterprise architecture', 'Blueprint e Digital Integration Hub', 'Microservizi ed event-driven', 'IaC e DevSecOps', 'Modern application design']
        },
        {
          category: 'Leadership & Governance',
          summary: 'Allineamento tra stakeholder, roadmap, compliance e execution fino al go-live.',
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
          href: 'https://learn.microsoft.com/api/credentials/share/en-us/MarcoCalifano89/FB64D18989F3E67B?sharingId=CAB9C76CF28D6EAE'
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
      intro: 'Qui trovi i miei riferimenti principali.',
      cards: [
        { icon: 'ri-map-pin-2-line', label: 'Base', text: 'Milano, Italia' },
        { icon: 'ri-mail-line', label: 'Email', text: 'marcocalifano89@gmail.com', href: 'mailto:marcocalifano89@gmail.com' },
        { icon: 'ri-phone-line', label: 'Telefono', text: '+39 348 878 2506', href: 'tel:+393488782506' },
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
        { id: 'impact', label: 'Impact' },
        { id: 'approach', label: 'Approach' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'certifications', label: 'Certifications' },
        { id: 'contact', label: 'Contact' }
      ],
      cvLabel: 'Download CV',
      contactLabel: 'Contact me',
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
      lead: 'I architect and steer cloud, data and AI modernisation for financial, insurance and industrial organisations, blending strategic governance with hands-on delivery.',
      typing: [
        'Multi-cloud blueprints & landing zones',
        'GenAI governance and AI Gateway',
        'MLOps & AI SDLC playbooks',
        'Real-time data & analytics platforms',
        'Coaching distributed DevSecOps teams'
      ],
      proofSignals: [
        { text: '10+ years in enterprise delivery' },
        { text: 'AWS / Azure / GCP' },
        { text: 'GenAI governance & AI gateway' }
      ],
      highlights: [
        { title: 'Cloud strategy', detail: 'Blueprints, landing zones' },
        { title: 'GenAI orchestration', detail: 'Gateway, RAG, AI SDLC' },
        { title: 'Operational leadership', detail: 'Release governance, BI' },
        { title: 'Programme control', detail: 'Roadmaps, dependencies' },
        { title: 'Data platform', detail: 'Azure, AWS, analytics' },
        { title: 'Adoption & change', detail: 'Onboarding, runbooks' }
      ],
      actions: {
        primaryLabel: 'Download CV',
        primaryHref: 'https://drive.google.com/file/d/1Ik4bvW0YoHdVsm_CBipPkPgcaRpKqVvA/view?usp=drive_link'
      }
    },
    metrics: {
      title: 'Selected outcomes',
      intro: 'A quick view of the programmes I carry from strategy into rollout.',
      items: [
        {
          eyebrow: 'Banking & insurance',
          value: 'Multi-cloud',
          label: 'Blueprints, landing zones and data/AI service layers',
          detail: 'Target architectures across AWS, Azure and GCP for regulated initiatives with reusable governance patterns.',
          signals: ['AWS / Azure / GCP', 'Landing zones', 'Risk-aware']
        },
        {
          eyebrow: 'GenAI delivery',
          value: 'GenAI',
          label: 'Central gateways, RAG and AI SDLC patterns',
          detail: 'From AI gateway assessments to MLOps/DevSecOps playbooks with shared controls, KPIs and operating models.',
          signals: ['AI gateway', 'RAG', 'AI SDLC']
        },
        {
          eyebrow: 'Programme orchestration',
          value: '10+',
          label: 'Teams and stakeholders aligned through go-live',
          detail: 'Release governance, BI dashboards, technical mentoring and executive advisory across cross-functional streams.',
          signals: ['Executive advisory', 'Release governance', 'Change enablement']
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
          title: 'Blueprint & enablement',
          blurb: 'Design of reference architectures, AI toolchains and repeatable operating models.',
          points: [
            'Multi-cloud landing zones and centralised AI Gateways',
            'IaC, CI/CD and security-by-design patterns',
            'GenAI playbooks, MLOps guidelines and reusable accelerators'
          ]
        },
        {
          title: 'Delivery & adoption',
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
          summary: 'A steering role spanning architecture, programme governance and technical delivery for cloud, data and AI initiatives.',
          highlights: ['AWS / Azure / GCP', 'AI gateway & RAG', 'Release governance'],
          bullets: [
            'Designed multi-cloud blueprints, landing zones and data/AI service layers for regulated banking and insurance programmes.',
            'Introduced AI gateway patterns, RAG pipelines and AI SDLC/MLOps operating models with reusable controls.',
            'Coordinated releases, dependencies and risk while driving AWS BI dashboards, Terraform SAST and team mentoring.'
          ]
        },
        {
          company: 'Prior roles',
          period: '2016 - 2022',
          role: 'Solution Architect, Cloud Architect, Product Specialist, PMO',
          summary: 'A track record across cloud architecture, digital delivery and product enablement in media, telco, mobility and IoT.',
          highlights: ['Kubernetes & managed DB', 'AWS + Azure mobility', 'Edge / RFID / M2M'],
          bullets: [
            'Led migrations and optimisation work on GCP using Kubernetes and managed databases for media and telco workloads.',
            'Worked as AWS architect and scrum lead on mobility and IoT platforms integrating AWS and Azure services.',
            'Covered edge computing, RFID and large-scale M2M initiatives with both technical and PMO ownership.'
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
          summary: 'Multi-cloud foundations, landing zones and platform standards for hybrid and regulated environments.',
          items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Landing zones & hybrid environments', 'Edge & IoT']
        },
        {
          category: 'GenAI & Data',
          summary: 'GenAI governance, data platforms and operating patterns for AI gateways, analytics and RAG.',
          items: ['GenAI governance', 'AI gateways & RAG', 'Data and BI platforms', 'MLOps', 'Real-time analytics']
        },
        {
          category: 'Architecture & Delivery',
          summary: 'Reference architecture, application integration and delivery practices for resilient modern services.',
          items: ['Enterprise architecture', 'Blueprints & Digital Integration Hub', 'Microservices & event-driven design', 'IaC & DevSecOps', 'Modern application design']
        },
        {
          category: 'Leadership & Governance',
          summary: 'Alignment across stakeholders, roadmaps, compliance and execution through go-live.',
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
          href: 'https://learn.microsoft.com/api/credentials/share/en-us/MarcoCalifano89/FB64D18989F3E67B?sharingId=CAB9C76CF28D6EAE'
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
      intro: 'Here are the best ways to reach me.',
      cards: [
        { icon: 'ri-map-pin-2-line', label: 'Location', text: 'Milan, Italy' },
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
