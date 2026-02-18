import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Lucas Ruffieux',
    photoBackEmoji: '🖥️',
    title: {
      fr: 'Administrateur Système & Réseau',
      en: 'System & Network Administrator',
    },
    subtitle: {
      fr: '10+ ans d\'expérience en infrastructure IT et services managés',
      en: '10+ years of experience in IT infrastructure and managed services',
    },
    location: 'Fribourg, Suisse',
  },

  seo: {
    title: 'Lucas Ruffieux — System & Network Administrator',
    description: 'CV interactif de Lucas Ruffieux, administrateur système et réseau spécialisé en infrastructures Microsoft, virtualisation et cloud.',
  },

  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },

  contact: [
    { type: 'linkedin', label: 'Lucas Ruffieux', href: 'https://www.linkedin.com/in/lucas-ruffieux' },
    { type: 'email', label: 'lucasruffieux@gmail.com' },
    { type: 'phone', label: '079 623 50 39' },
    { type: 'location', label: 'Fribourg, Suisse' },
  ],

  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Français', en: 'French' }, level: { fr: ' - Langue maternelle', en: ' - Native' } },
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: ' - Compétence professionnelle complète', en: ' - Full professional proficiency' } },
        { name: { fr: 'Allemand', en: 'German' }, level: { fr: ' - Compétence professionnelle limitée', en: ' - Limited professional proficiency' } },
      ],
    },
    {
      title: { fr: 'Cloud & Microsoft', en: 'Cloud & Microsoft' },
      type: 'badges',
      items: [
        { name: 'Microsoft 365 Admin' },
        { name: 'Windows Server' },
        { name: 'Exchange On-Prem/Online' },
      ],
    },
    {
      title: { fr: 'Systèmes', en: 'Operating Systems' },
      type: 'badges',
      items: [
        { name: 'RHEL' },
        { name: 'Debian' },
        { name: 'Linux' },
      ],
    },
    {
      title: { fr: 'Virtualisation', en: 'Virtualization' },
      type: 'badges',
      items: [
        { name: 'VMware' },
        { name: 'Hyper-V' },
        { name: 'Nutanix' },
        { name: 'Docker' },
        { name: 'Proxmox' },
      ],
    },
    {
      title: { fr: 'Storage & Backup', en: 'Storage & Backup' },
      type: 'badges',
      items: [
        { name: 'Dell EMC SAN' },
        { name: 'NetApp' },
        { name: 'Veeam' },
        { name: 'Hycu' },
      ],
    },
    {
      title: { fr: 'Monitoring & ITSM', en: 'Monitoring & ITSM' },
      type: 'badges',
      items: [
        { name: 'Centreon' },
        { name: 'Zabbix' },
        { name: 'Fresh Desk' },
        { name: 'GLPI' },
        { name: 'Action1' },
      ],
    },
    {
      title: { fr: 'Réseau & Sécurité', en: 'Network & Security' },
      type: 'badges',
      items: [
        { name: 'Fortinet' },
        { name: 'Check Point' },
        { name: 'SonicWall' },
        { name: 'HPE Aruba' },
      ],
    },
    {
      title: { fr: 'Scripting & Base de données', en: 'Scripting & Database' },
      type: 'badges',
      items: [
        { name: 'PowerShell' },
        { name: 'MSSQL' },
      ],
    },
    {
      title: { fr: 'Méthodologies', en: 'Methodologies' },
      type: 'text',
      items: [
        { name: { fr: 'ITIL', en: 'ITIL' } },
      ],
    },
    {
      title: { fr: 'Qualités', en: 'Soft Skills' },
      type: 'text',
      items: [
        { name: { fr: 'Résolution d\'incidents complexes, Autonomie, Communication, Gestion des priorités, Amélioration continue', en: 'Complex incident resolution, Autonomy, Communication, Priority management, Continuous improvement' } },
      ],
    },
  ],

  experiences: [
    {
    id: 'cremo',
    company: { fr: 'Cremo SA', en: 'Cremo SA' },
    role: { fr: 'Administrateur système et réseau', en: 'System & Network Administrator' },
    type: { fr: 'CDI', en: 'Permanent Contract' },
    period: { fr: '06/2024 - 05/2026', en: '06/2024 - 05/2026' },
    description: {
      fr: 'Administration et amélioration continue de l\'infrastructure système et réseau.',
      en: 'Administration and continuous improvement of system and network infrastructure.',
    },
    techs: ['Windows Server', 'Microsoft 365', 'VMware', 'NetApp', 'Veeam', 'Check Point', 'HPE Aruba'],
    details: {
      context: {
        fr: 'Entreprise agroalimentaire suisse avec infrastructure multi-sites.',
        en: 'Swiss food industry company with multi-site infrastructure.',
      },
      tasks: {
        fr: [
          'Support niveau 2 et 3',
          'Administration des serveurs Windows et de l\'environnement Microsoft 365',
          'Gestion de la virtualisation VMware',
          'Administration stockage NetApp et sauvegardes Veeam',
          'Gestion firewall Check Point et réseau HPE Aruba',
          'Automatisation et amélioration des services via PowerShell',
        ],
        en: [
          'Level 2 and 3 support',
          'Administration of Windows Servers and Microsoft 365 environment',
          'VMware virtualization management',
          'NetApp storage and Veeam backup administration',
          'Check Point firewall and HPE Aruba network management',
          'Service automation and improvements using PowerShell',
        ],
      },
      env: {
        fr: 'Windows Server / Microsoft 365 / VMware / NetApp / Veeam / Check Point / Aruba / PowerShell',
        en: 'Windows Server / Microsoft 365 / VMware / NetApp / Veeam / Check Point / Aruba / PowerShell',
      },
    },
  },
  {
    id: 'ixion-l3',
    company: { fr: 'iXion Services SA', en: 'iXion Services SA' },
    role: { fr: 'Senior Specialist L3', en: 'Senior Specialist L3' },
    type: { fr: 'CDI', en: 'Permanent Contract' },
    period: { fr: '04/2023 - 05/2024', en: '04/2023 - 05/2024' },
    description: {
      fr: 'Support niveau 3 et référent technique Windows, Linux et services.',
      en: 'Level 3 support and technical lead for Windows, Linux and services.',
    },
    techs: ['Windows Server', 'Linux', 'Fortinet'],
    details: {
      context: {
        fr: 'Fournisseur de services IT pour entreprises suisses.',
        en: 'IT service provider for Swiss enterprises.',
      },
      tasks: {
        fr: [
          'Gestion des escalades critiques',
          'Référent technique Windows et Linux',
          'Diagnostic et résolution d\'incidents complexes',
          'Support clients grands comptes',
        ],
        en: [
          'Management of critical escalations',
          'Technical lead for Windows and Linux',
          'Diagnosis and resolution of complex incidents',
          'Enterprise client support',
        ],
      },
      env: {
        fr: 'Windows Server / Linux / Services hybrides',
        en: 'Windows Server / Linux / Hybrid services',
      },
    },
  },
  {
    id: 'ixion-engineer',
    company: { fr: 'iXion Services SA', en: 'iXion Services SA' },
    role: { fr: 'System Engineer', en: 'System Engineer' },
    type: { fr: 'CDI', en: 'Permanent Contract' },
    period: { fr: '11/2020 - 03/2023', en: '11/2020 - 03/2023' },
    description: {
      fr: 'Administration d\'infrastructures internes et cloud pour clients.',
      en: 'Administration of internal and client cloud infrastructures.',
    },
    techs: ['VMware', 'Nutanix', 'Azure', 'Veeam', 'Centreon'],
    details: {
      context: {
        fr: 'Gestion des infrastructures internes et des environnements clients dédiés.',
        en: 'Management of internal infrastructure and dedicated client environments.',
      },
      tasks: {
        fr: [
          'Administration VMware et Nutanix',
          'Gestion Azure et environnements cloud',
          'Déploiement monitoring Centreon',
          'Administration sauvegardes Veeam et Hycu',
          'Gestion services ITSM et O365',
        ],
        en: [
          'VMware and Nutanix administration',
          'Azure and cloud environment management',
          'Centreon monitoring deployment',
          'Veeam and Hycu backup administration',
          'ITSM and O365 service management',
        ],
      },
      env: {
        fr: 'VMware / Nutanix / Azure / Veeam / Hycu / Centreon',
        en: 'VMware / Nutanix / Azure / Veeam / Hycu / Centreon',
      },
    },
  },
  {
    id: 'birgma-admin',
    company: { fr: 'Birgma International SA', en: 'Birgma International SA' },
    role: { fr: 'System Administrator', en: 'System Administrator' },
    type: { fr: 'CDI', en: 'Permanent Contract' },
    period: { fr: '08/2019 - 11/2020', en: '08/2019 - 11/2020' },
    description: {
      fr: 'Administration des fermes Citrix et des services IT internes.',
      en: 'Administration of Citrix farms and internal IT services.',
    },
    techs: ['Citrix', 'VMware', 'Hyper-V', 'Veeam'],
    details: {
      context: {
        fr: 'Siège social de la société Biltema',
        en: 'Headquarters of Biltema',
      },
      tasks: {
        fr: [
          'Gestion complète des fermes Citrix (versions 6.5, 7.15 et Cloud)',
          'Administration et optimisation des plateformes VMware, Hyper-V et Proxmox',
          'Administration des serveurs de messagerie Exchange et de Skype for Business',
          'Configuration, déploiement et monitoring des sauvegardes Veeam et BackupExec',
          'Supervision des bases de données MSSQL et administration de la solution d\'archivage légal DocuWare',
		  'Création de packages de déploiement, gestion du cycle de vie des incidents (Support Niveau 2) et administration de l\'outil de ticketing',
        ],
        en: [
          'Complete management of Citrix farms (versions 6.5, 7.15, and Cloud)',
          'Administration and optimization of VMware, Hyper-V, and Proxmox platforms',
          'Administration of Exchange and Skype for Business email servers',
          'Configuration, deployment, and monitoring of Veeam and BackupExec backups',
          'Supervision of MSSQL databases and administration of the DocuWare legal archiving solution',
          'Creation of deployment packages, incident lifecycle management (Level 2 Support), and administration of the ticketing tool',
        ],
      },
      env: {
        fr: 'Windows Server / Microsoft 365 / VMware / NetApp / Veeam / Check Point / Aruba / PowerShell',
        en: 'Windows Server / Microsoft 365 / VMware / NetApp / Veeam / Check Point / Aruba / PowerShell',
      },
    },
  },
  {
    id: 'birgma-servicedesk',
    company: { fr: 'Birgma International SA', en: 'Birgma International SA' },
    role: { fr: 'IT Service Desk Analyst', en: 'IT Service Desk Analyst' },
    type: { fr: 'CDI', en: 'Permanent Contract' },
    period: { fr: '01/2015 - 07/2019', en: '01/2015 - 07/2019' },
    description: {
      fr: 'Support niveau 1 et gestion du parc informatique.',
      en: 'Level 1 support and IT asset management.',
    },
    techs: ['Windows', 'ITSM'],
    details: {
      context: {
        fr: 'Siège social de la société Biltema',
        en: 'Headquarters of Biltema',
      },
      tasks: {
        fr: [
          'Support Utilisateurs Niveau 1 : Prise en charge des incidents et demandes de proximité, diagnostic et résolution des problématiques postes de travail',
          'Gestion du Cycle de Vie du Matériel (IT Asset Management) : Responsable de l\'inventaire des actifs informatiques et financiers ; gestion des achats, de la réception et de la préparation (masterisation) du nouveau matériel',
          'Maintenance & Packaging Applicatif : Pilotage des mises à jour software/hardware et création de packages pour le déploiement automatisé',
          'Supervision des Services Critiques : Monitoring et dépannage des services d\'infrastructure (Active Directory, serveurs d\'impression, téléphonie IP et solutions antivirus)',
        ],
        en: [
          'Tier 1 Technical Support: Provided first-line incident response and resolution for end-users, ensuring workstation stability and user productivity',
          'IT Asset Management (ITAM): Managed the full lifecycle of IT and financial assets, including procurement, inventory auditing, and hardware provisioning',
          'Hardware & Software Lifecycle: Executed hardware upgrades and software packaging to ensure fleet-wide security and compliance',
          'Infrastructure Services Monitoring: Maintained and choreographed troubleshooting for core services including Active Directory (AD), print servers, VoIP systems, and antivirus solutions',
        ],
      },
      env: {
        fr: 'Windows Server / Microsoft 365 / VMware / NetApp / Veeam / Check Point / Aruba / PowerShell',
        en: 'Windows Server / Microsoft 365 / VMware / NetApp / Veeam / Check Point / Aruba / PowerShell',
      },
    },
  },
],

  education: [
    {
      school: { fr: 'Hycu', en: 'Hycu' },
      degree: { fr: 'Private Cloud & Data Center Admin', en: 'Private Cloud & Data Center Admin' },
      period: '2023',
    },
    {
      school: { fr: 'PeopleCert', en: 'PeopleCert' },
      degree: { fr: 'ITIL Foundation v3', en: 'ITIL Foundation v3' },
      period: '2016',
    },
    {
      school: { fr: 'Cambridge ESOL', en: 'Cambridge ESOL' },
      degree: { fr: 'English B2 Certificate', en: 'English B2 Certificate' },
      period: '2011',
    },
    {
      school: { fr: 'CFC d\'informaticien', en: 'Federal VET Diploma in IT' },
      degree: { fr: 'Informaticien', en: 'IT Specialist' },
      period: '2006 - 2011',
    },
    {
      school: { fr: 'Maturité professionnelle technique', en: 'Technical Professional Baccalaureate' },
      degree: { fr: 'Maturité professionnelle', en: 'Professional Baccalaureate' },
      period: '2006 - 2011',
    },
  ],

  projects: [
    {
      id: 'homelab',
      title: { fr: 'Homelab Infrastructure', en: 'Homelab Infrastructure' },
      description: {
        fr: 'Infrastructure personnelle de test incluant virtualisation, sauvegarde, monitoring et automatisation PowerShell.',
        en: 'Personal lab environment including virtualization, backup systems, monitoring and PowerShell automation.',
      },
      techs: ['VMware', 'Proxmox', 'Veeam', 'Zabbix', 'Docker', 'Windows Server', 'Linux'],
    },
  ],

  hobbies: [
    { title: { fr: 'IT Lab / Proof of Concepts', en: 'IT Lab / Proof of Concepts' } },
    { title: { fr: 'Musique', en: 'Music' } },
    { title: { fr: 'Séries et films', en: 'TV Series & Movies' } },
    { title: { fr: 'Cuisine', en: 'Cooking' } },
    { title: { fr: 'Horlogerie', en: 'Watchmaking' } },
    { title: { fr: 'Lecture (science-fiction)', en: 'Reading (Science Fiction)' } },
  ],

  theme: {
    preset: 'forest',
  },

  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES', en: 'PROFESSIONAL EXPERIENCE' },
      education: { fr: 'FORMATION & CERTIFICATIONS', en: 'EDUCATION & CERTIFICATIONS' },
      projects: { fr: 'PROJETS', en: 'PROJECTS' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main responsibilities:' },
      moreTasks: { fr: 'autres missions...', en: 'more tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Env. technique :', en: 'Tech environment:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click on experiences to see more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}
