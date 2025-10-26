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

type Project = {
  name: string;
  summary: string;
  tags: string[];
  href?: string;
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
  projects: { title: string; intro: string; items: Project[] };
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
        { id: 'projects', label: 'Progetti' },
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
      lead: 'Progetto e guido architetture cloud, data & AI per grandi organizzazioni, trasformando roadmap strategiche in risultati concreti e misurabili.',
      typing: [
        'roadmap cloud su scala enterprise',
        'landing zone AWS, Azure e Google Cloud',
        'programmi di trasformazione digitale',
        'piattaforme data & AI',
        'architetture secure-by-design'
      ],
      highlights: [
        'Enterprise & solution architecture lead across utilities, energy, media and banking',
        'Hands-on delivery di piattaforme multi-cloud su AWS, Azure e Google Cloud',
        'Programmi di modernizzazione e GenAI orientati a KPI di business misurabili'
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
      intro: 'Una panoramica dei risultati più ricorrenti che porto nei programmi enterprise.',
      items: [
        {
          value: 'AWS • Azure • GCP',
          label: 'Architetture multi-cloud',
          detail: 'Landing zone ibride, reference architecture e governance mission critical.'
        },
        {
          value: 'Utilities • Energy • Media • Banking',
          label: 'Settori serviti',
          detail: 'Esperienza end-to-end in trasformazioni digitali B2C e B2B.'
        },
        {
          value: 'Team lead & release mgmt',
          label: 'Leadership operativa',
          detail: 'Coordinamento di squadre cross-funzionali e gestione release complesse.'
        }
      ]
    },
    pillars: {
      title: 'Come affronto i programmi',
      intro: 'Un framework in tre fasi che accompagna clienti e team dall’allineamento strategico alla delivery misurabile.',
      items: [
        {
          title: 'Scouting & Vision',
          blurb: 'Assessment iniziali e definizione della roadmap condivisa con gli stakeholder business e IT.',
          points: [
            'Cloud readiness e analisi dei gap',
            'Business case e KPI di trasformazione',
            'Visione architetturale e guard-rail'
          ]
        },
        {
          title: 'Blueprint & Enablement',
          blurb: 'Disegno di reference architecture, landing zone e modelli operativi per squadre cross-funzionali.',
          points: [
            'Pattern riutilizzabili e acceleratori IaC',
            'Operating model e governance',
            'Security & compliance by design'
          ]
        },
        {
          title: 'Delivery & Adoption',
          blurb: 'Supporto hands-on alle squadre, rilascio e adozione della piattaforma lungo il ciclo di vita.',
          points: [
            'Coaching a team distribuiti',
            'Gestione release e change',
            'Misurazione valore e ottimizzazione costi'
          ]
        }
      ]
    },
    experience: {
      title: 'Esperienza',
      intro: 'Ruoli di leadership tecnica e strategica, con un approccio hands-on che connette business, architettura e delivery.',
      items: [
        {
          company: 'Reply',
          period: 'Aug 2022 — Present',
          role: 'Enterprise & Solution Architect Manager',
          bullets: [
            'Guida tecnica e governance per programmi multi-cloud (AWS, Azure, GCP) in utilities, energy e telecom.',
            'Definizione e industrializzazione di landing zone, reference architecture e sicurezza by design.',
            'Coordinamento di iniziative GenAI e data platform con impatto su customer experience e automazione.'
          ]
        },
        {
          company: 'Sky Italy',
          period: 'Feb 2022 — Jul 2022',
          role: 'Solution Architect Manager',
          bullets: [
            'Supporto alle digital squad nella definizione di architetture resilienti multi-cloud.',
            'Advisor per governance architetturale, modernizzazione e integrazione ecosistemi legacy.'
          ]
        },
        {
          company: 'Telepass',
          period: 'Jun 2021 — Jan 2022',
          role: 'Cloud Architect',
          bullets: [
            'Responsabile del blueprint GCP: container platform, modernizzazione dati e pipeline CI/CD.',
            'Enablement di team cross-funzionali per servizi di mobilità real-time.'
          ]
        },
        {
          company: 'Accenture Italy',
          period: 'Jun 2019 — Jun 2021',
          role: 'AWS Cloud & Solution Architect',
          bullets: [
            'Progettazione di acceleratori AWS riutilizzabili e supporto a programmi mobile/backend globali.',
            'Ottimizzazione costi, adozione IaC e DevOps enablement per team distribuiti.'
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
          items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Hybrid & Edge', 'Landing Zones']
        },
        {
          category: 'Architecture & Delivery',
          items: ['Enterprise Architecture', 'Solution Design', 'Microservizi', 'Event-driven', 'Serverless', 'DevOps']
        },
        {
          category: 'Data & AI',
          items: ['Data Platforms', 'Casi d\'uso GenAI', 'MLOps', 'Modernizzazione Analytics', 'Automation']
        },
        {
          category: 'Leadership & Governance',
          items: ['Architecture Governance', 'Team Coaching', 'Stakeholder Engagement', 'Regulatory Compliance']
        }
      ]
    },
    projects: {
      title: 'Progetti selezionati',
      intro: 'Esempi recenti di iniziative guidate con impatto misurabile su cloud, data e AI.',
      items: [
        {
          name: 'Landing zone multi-cloud per utility europea',
          summary: 'Blueprint, guard-rail di sicurezza e automazione IaC per abilitare rollout enterprise, con time-to-market ridotto del 30% per le squadre digital.',
          tags: ['AWS', 'Azure', 'Landing Zone']
        },
        {
          name: 'Data platform per media & advertising',
          summary: 'Definizione di data model, streaming pipeline e governance per campagne real-time, portando +25% di accuratezza sugli insight marketing.',
          tags: ['Data Platform', 'Streaming', 'Analytics']
        },
        {
          name: 'GenAI adoption framework',
          summary: 'Playbook, valutazione use case e guard-rail di compliance per introdurre GenAI in customer service e knowledge management con KPI condivisi.',
          tags: ['GenAI', 'Governance', 'Change Enablement']
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
        { id: 'projects', label: 'Projects' },
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
      lead: 'I design and lead cloud, data & AI architectures for large organisations, turning strategic roadmaps into measurable outcomes.',
      typing: [
        'enterprise-scale cloud roadmaps',
        'AWS, Azure & Google Cloud landing zones',
        'digital transformation programmes',
        'data & AI platforms',
        'secure-by-design architectures'
      ],
      highlights: [
        'Enterprise & solution architecture lead across utilities, energy, media and banking',
        'Hands-on delivery of multi-cloud platforms on AWS, Azure and Google Cloud',
        'Modernisation and GenAI programmes guided by measurable business KPIs'
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
      intro: 'Key capability pillars that I bring to enterprise programmes.',
      items: [
        {
          value: 'AWS • Azure • GCP',
          label: 'Multi-cloud architecture',
          detail: 'Hybrid landing zones, reference architectures and mission-critical governance.'
        },
        {
          value: 'Utilities • Energy • Media • Banking',
          label: 'Industries served',
          detail: 'End-to-end experience across B2C and B2B transformations.'
        },
        {
          value: 'Team lead & release mgmt',
          label: 'Operational leadership',
          detail: 'Coaching cross-functional squads and orchestrating complex release plans.'
        }
      ]
    },
    pillars: {
      title: 'How I approach programmes',
      intro: 'A three-step framework that guides stakeholders from strategic alignment to measurable delivery.',
      items: [
        {
          title: 'Scouting & Vision',
          blurb: 'Initial assessments and roadmap definition with business and IT stakeholders.',
          points: [
            'Cloud readiness and gap analysis',
            'Transformation business case & KPIs',
            'Architecture vision and guard-rails'
          ]
        },
        {
          title: 'Blueprint & Enablement',
          blurb: 'Design of reference architectures, landing zones and operating models for cross-functional teams.',
          points: [
            'Reusable patterns and IaC accelerators',
            'Operating model and governance',
            'Security & compliance by design'
          ]
        },
        {
          title: 'Delivery & Adoption',
          blurb: 'Hands-on support to squads, release orchestration and platform adoption throughout the lifecycle.',
          points: [
            'Coaching distributed teams',
            'Release and change management',
            'Value tracking and cost optimisation'
          ]
        }
      ]
    },
    experience: {
      title: 'Experience',
      intro: 'Leadership roles across architecture and delivery, bridging business goals with solid engineering execution.',
      items: [
        {
          company: 'Reply',
          period: 'Aug 2022 — Present',
          role: 'Enterprise & Solution Architect Manager',
          bullets: [
            'Technical lead and governance across multi-cloud programmes (AWS, Azure, GCP) in utilities, energy and telecom.',
            'Industrialised landing zones, reference architectures and security-by-design frameworks.',
            'Coordinated GenAI and data platform initiatives driving customer experience and automation use cases.'
          ]
        },
        {
          company: 'Sky Italy',
          period: 'Feb 2022 — Jul 2022',
          role: 'Solution Architect Manager',
          bullets: [
            'Supported digital squads in designing resilient multi-cloud architectures.',
            'Trusted advisor for architecture governance, modernisation and legacy integration.'
          ]
        },
        {
          company: 'Telepass',
          period: 'Jun 2021 — Jan 2022',
          role: 'Cloud Architect',
          bullets: [
            'Owned the GCP architecture blueprint: container platforms, data modernisation and CI/CD pipelines.',
            'Enabled cross-functional teams to deliver real-time mobility services.'
          ]
        },
        {
          company: 'Accenture Italy',
          period: 'Jun 2019 — Jun 2021',
          role: 'AWS Cloud & Solution Architect',
          bullets: [
            'Designed reusable AWS accelerators and supported global mobile/backend programmes.',
            'Led cost optimisation, IaC adoption and DevOps enablement for distributed agile teams.'
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
          items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Hybrid & Edge', 'Landing Zones']
        },
        {
          category: 'Architecture & Delivery',
          items: ['Enterprise Architecture', 'Solution Design', 'Microservices', 'Event-driven', 'Serverless', 'DevOps']
        },
        {
          category: 'Data & AI',
          items: ['Data Platforms', 'GenAI Use Cases', 'MLOps', 'Analytics Modernisation', 'Automation']
        },
        {
          category: 'Leadership & Governance',
          items: ['Architecture Governance', 'Team Coaching', 'Stakeholder Engagement', 'Regulatory Compliance']
        }
      ]
    },
    projects: {
      title: 'Selected projects',
      intro: 'Recent programmes delivered end-to-end with tangible business outcomes.',
      items: [
        {
          name: 'Multi-cloud landing zone for a European utility',
          summary: 'Led blueprint, security guard-rails and IaC automation to unlock enterprise-scale squads and accelerate time-to-market by 30%.',
          tags: ['AWS', 'Azure', 'Landing Zone']
        },
        {
          name: 'Media & advertising data platform',
          summary: 'Designed data model, streaming pipelines and governance for real-time campaign insight, boosting marketing accuracy by 25%.',
          tags: ['Data Platform', 'Streaming', 'Analytics']
        },
        {
          name: 'GenAI adoption framework',
          summary: 'Established playbooks, use-case evaluation and compliance guard-rails to introduce GenAI for customer service and knowledge management.',
          tags: ['GenAI', 'Governance', 'Change Enablement']
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
