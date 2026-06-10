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
  context?: string;
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
      title: 'Marco Califano - BU Manager, Cloud & AI Solutions',
      description: 'BU Manager, Cloud & AI Solutions: strategia di offering, governance della delivery e crescita del team su iniziative cloud, data e GenAI, con background da Enterprise & Solution Architect multi-cloud (AWS, Azure, Google Cloud).',
      keywords: 'Marco Califano, BU Manager, Business Unit Manager, Solution Architect, Cloud Architect, AWS, Azure, GCP, GenAI, Enterprise Architecture',
      ogDescription: 'BU Manager, Cloud & AI Solutions: trasformo priorità di business in delivery tecnologica sicura e scalabile.'
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
      badge: 'BU Manager, Cloud & AI Solutions',
      title: 'Ciao, sono Marco.',
      lead: 'Guido una Business Unit Cloud & AI con responsabilità su strategia di offering, governance della delivery e crescita del team su iniziative cloud, data e GenAI, unendo leadership e background hands-on da enterprise architect.',
      typing: [
        'Strategia di offering cloud, data e GenAI',
        'Landing zone, RAG e AI gateway',
        'Presales e solution shaping',
        'Governance di delivery e programmi',
        'Mentoring di architetti e tech lead'
      ],
      proofSignals: [
        { text: '10+ anni di delivery enterprise' },
        { text: 'AWS / Azure / GCP' },
        { text: 'BU leadership e governance GenAI' }
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
      intro: 'Mandati selezionati in cui ho allineato architettura target, governance e delivery per programmi cloud, dati e AI.',
      items: [
        {
          company: 'Liquid',
          period: '2026 - Oggi',
          role: 'BU Manager, Cloud & AI Solutions',
          context: 'Business unit cloud, data e generative AI',
          summary: 'Guido la Business Unit con responsabilità su strategia di offering, governance della delivery e crescita del team su iniziative cloud, data e generative AI.',
          highlights: ['BU leadership', 'Cloud & GenAI strategy', 'Presales', 'Delivery governance'],
          bullets: [
            'Guido pianificazione della BU, pipeline, staffing e supervisione della delivery, allineando priorità commerciali e capacità di esecuzione.',
            'Disegno soluzioni cloud e GenAI su AWS, Azure e GCP - landing zone, architetture RAG, AI gateway e integrazione sicura - con modelli di governance su architettura, security, compliance e costi.',
            'Guido proposal shaping, stime, technical storytelling e solution review per opportunità strategiche, con governance di release e programmi di trasformazione.',
            'Faccio crescere architetti e technical lead e promuovo asset riutilizzabili, acceleratori e standard di delivery.'
          ]
        },
        {
          company: 'Reply',
          period: '2022 - 2025',
          role: 'Enterprise & Solution Architect / PMO / Technical Lead',
          context: 'Banking, insurance e programmi di trasformazione regulated',
          summary: 'Ho guidato programmi enterprise in cui l’architettura doveva tradursi in decisioni operative, governance di programma e delivery tecnico fino al go-live.',
          highlights: ['Banking & insurance', 'Regulated cloud', 'AI gateway', 'Release governance'],
          bullets: [
            'Ho reso riutilizzabili blueprint multi-cloud, landing zone e service layer data/AI per programmi banking e insurance, accelerando le scelte architetturali in contesti regulated.',
            'Ho portato in delivery AI gateway, pattern RAG e pratiche AI SDLC/MLOps condivise, trasformando sperimentazione GenAI in operating model governato.',
            'Ho tenuto allineati go-live, dipendenze e rischio con dashboard BI, controlli Terraform SAST e mentoring continuo di team distribuiti.'
          ]
        },
        {
          company: 'Mandati selezionati',
          period: '2016 - 2022',
          role: 'Solution Architect, Cloud Architect, Product Specialist, PMO',
          context: 'Media, telco, mobility e IoT',
          summary: 'Percorso su modernizzazione cloud e digital delivery con ownership tecnica, coordinamento di stream e product enablement in domini diversi.',
          highlights: ['Media & telco', 'Mobility & IoT', 'Kubernetes / GCP', 'AWS + Azure'],
          bullets: [
            'Rafforzo scalabilità e operabilità di workload media e telco introducendo Kubernetes e database gestiti su GCP.',
            'Abilito piattaforme mobility e IoT integrate su AWS e Azure, combinando architettura applicativa e scrum leadership.',
            'Supporto iniziative edge, RFID e M2M mantenendo ownership tecnica e coordinamento PMO su stream complessi.'
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
          summary: 'Leadership di business unit: offering, roadmap, compliance ed execution fino al go-live.',
          items: ['BU management e IT strategy', 'Presales e solution shaping', 'Delivery governance e PMO', 'Orchestrazione di team cross-funzionali', 'Compliance e security', 'Stakeholder engagement']
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
    footer: 'Marco Califano - BU Manager, Cloud & AI Solutions'
  },
  en: {
    head: {
      title: 'Marco Califano - BU Manager, Cloud & AI Solutions',
      description: 'BU Manager, Cloud & AI Solutions: offering strategy, delivery governance and team growth across cloud, data and GenAI initiatives, with an Enterprise & Solution Architect background spanning AWS, Azure and Google Cloud.',
      keywords: 'Marco Califano, BU Manager, Business Unit Manager, Solution Architect, Cloud Architect, AWS, Azure, GCP, GenAI, Enterprise Architecture',
      ogDescription: 'BU Manager, Cloud & AI Solutions turning business priorities into secure, scalable technology delivery.'
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
      badge: 'BU Manager, Cloud & AI Solutions',
      title: "Hi, I'm Marco.",
      lead: 'I lead a Cloud & AI Business Unit with responsibility for offering strategy, delivery governance and team growth across cloud, data and GenAI initiatives, building on a hands-on enterprise architecture background.',
      typing: [
        'Cloud, data & GenAI offering strategy',
        'Landing zones, RAG & AI gateways',
        'Presales and solution shaping',
        'Delivery and programme governance',
        'Mentoring architects and tech leads'
      ],
      proofSignals: [
        { text: '10+ years in enterprise delivery' },
        { text: 'AWS / Azure / GCP' },
        { text: 'BU leadership & GenAI governance' }
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
      intro: 'Selected mandates where I aligned target architecture, governance and delivery across cloud, data and AI programmes.',
      items: [
        {
          company: 'Liquid',
          period: '2026 - Present',
          role: 'BU Manager, Cloud & AI Solutions',
          context: 'Cloud, data and generative AI business unit',
          summary: 'I lead the Business Unit with responsibility for offering strategy, delivery governance and team growth across cloud, data and generative AI initiatives.',
          highlights: ['BU leadership', 'Cloud & GenAI strategy', 'Presales', 'Delivery governance'],
          bullets: [
            'Drive BU planning, pipeline support, staffing and delivery oversight, aligning commercial priorities with execution capacity.',
            'Shape cloud and GenAI solutions across AWS, Azure and GCP - landing zones, RAG architectures, AI gateways and secure integration patterns - with governance models for architecture, security, compliance and cost.',
            'Lead proposal shaping, estimation, technical storytelling and solution review for strategic opportunities, managing release and programme governance for transformation initiatives.',
            'Mentor architects and technical leads, promoting reusable assets, accelerators and delivery standards.'
          ]
        },
        {
          company: 'Reply',
          period: '2022 - 2025',
          role: 'Enterprise & Solution Architect / PMO / Technical Lead',
          context: 'Banking, insurance and regulated transformation programmes',
          summary: 'I led enterprise programmes where architecture had to translate into operating decisions, programme governance and technical delivery through go-live.',
          highlights: ['Banking & insurance', 'Regulated cloud', 'AI gateway', 'Release governance'],
          bullets: [
            'Made multi-cloud blueprints, landing zones and data/AI service layers reusable across banking and insurance programmes, accelerating architecture decisions in regulated contexts.',
            'Brought AI gateways, RAG patterns and shared AI SDLC/MLOps practices into delivery, turning GenAI experimentation into a governed operating model.',
            'Kept go-live, dependencies and risk aligned through BI dashboards, Terraform SAST controls and ongoing team mentoring.'
          ]
        },
        {
          company: 'Selected mandates',
          period: '2016 - 2022',
          role: 'Solution Architect, Cloud Architect, Product Specialist, PMO',
          context: 'Media, telco, mobility and IoT',
          summary: 'A progression through cloud modernisation and digital delivery with hands-on technical ownership, stream coordination and product enablement across different domains.',
          highlights: ['Media & telco', 'Mobility & IoT', 'Kubernetes / GCP', 'AWS + Azure'],
          bullets: [
            'Improved scalability and operability for media and telco workloads by introducing Kubernetes and managed databases on GCP.',
            'Enabled integrated mobility and IoT platforms across AWS and Azure, combining application architecture with scrum leadership.',
            'Supported edge, RFID and large-scale M2M initiatives while keeping both technical ownership and PMO coordination on complex streams.'
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
          summary: 'Business unit leadership: offering, roadmaps, compliance and execution through go-live.',
          items: ['BU management & IT strategy', 'Presales & solution shaping', 'Delivery governance & PMO', 'Cross-team orchestration', 'Compliance & security', 'Stakeholder management']
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
    footer: 'Marco Califano - BU Manager, Cloud & AI Solutions'
  }
};

export function getContent(locale: Locale): Content {
  return data[locale] ?? data[fallbackLocale];
}

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && locales.includes(value as Locale);
}
