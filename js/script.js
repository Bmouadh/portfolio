const translations = {
  en: {
    "nav.about":"About","nav.experience":"Experience","nav.projects":"Projects","nav.skills":"Skills","nav.education":"Education","nav.contact":"Contact","nav.resume":"Resume",
    "hero.eyebrow":"SYSTEM &amp; SOFTWARE DEVELOPER · COTTBUS, DE",
    "hero.title":"Building the infrastructure<br>behind <span class=\"accent\">reliable</span> systems<br>— and the signals inside them.",
    "hero.lead":"I automate infrastructure, build backend systems and REST APIs at scale, and research how the brain's own signals can drive virtual reality — currently as a Master's candidate in AI at BTU Cottbus.",
    "hero.langs":"Arabic · French · English · German",
    "about.heading":"About","about.tag":"// 01 — background",
    "about.p1":"I'm a <strong>System and Software Developer</strong> with hands-on experience in infrastructure automation, backend engineering, and scalable distributed systems — currently working as a System &amp; Software Developer at <strong>IONOS</strong>, where I build internal and customer-facing systems, automate network and security processes, and maintain REST APIs across distributed environments.",
    "about.p2":"My path has taken me from full-stack web development and IoT-based monitoring systems in Algiers, to infrastructure and security automation in Germany. I'm now pursuing a <strong>Master's in Artificial Intelligence</strong> at BTU Cottbus, focused on decoding relaxation states in virtual reality using EEG signals — a project that sits right at the intersection of software engineering, signal processing, and applied AI.",
    "lang.ar":"Arabic","lang.fr":"French","lang.en":"English","lang.de":"German",
    "exp.heading":"Experience","exp.tag":"// 02 — timeline","exp.today":"TODAY",
    "exp.i1.role":"System &amp; Software Developer","exp.i1.org":"Working Student",
    "exp.i1.bullets":["Developed and maintained internal and customer-facing systems and dashboards","Automated network and security processes to reduce manual workload","Integrated and maintained REST APIs in distributed environments","Executed automated end-to-end tests using Cypress","Supported CI/CD, deployment, and infrastructure automation"],
    "exp.i2.role":"Full-Stack Software Developer",
    "exp.i2.bullets":["Built multiple web applications to optimize internal business operations","Developed dashboards for customer service and HR management","Created a global partner and service management system","Implemented a company-wide data analytics system"],
    "exp.i3.role":"System &amp; Software Developer",
    "exp.i3.bullets":["Developed an AI- and IoT-based intelligent data center monitoring system"],
    "exp.i4.role":"System &amp; Software Developer",
    "exp.i4.bullets":["Built and automated a driver billing system integrated with fleet management"],
    "exp.i5.role":"Full-Stack Software Developer",
    "exp.i5.bullets":["Processed JSON data to build a multi-user dashboard for company-wide data visualization"],
    "projects.heading":"Projects","projects.tag":"// 03 — selected work",
    "projects.p1.title":"Relaxation Decoding in VR","projects.p1.desc":"Master's thesis project decoding relaxation states from EEG signals to drive adaptive virtual reality environments.",
    "projects.p2.title":"Intelligent Data Center Monitoring","projects.p2.desc":"AI- and IoT-based monitoring system for data centers, built during my time at Adex Technologie and my second Master's thesis.",
    "projects.p3.title":"Partner &amp; Service Management System","projects.p3.desc":"Full-stack platform for managing global partners and services, built for Hello Delivery's internal operations.",
    "projects.p4.title":"Weather Forecast App","projects.p4.desc":"Small Angular app showing current weather and forecasts for a given location.",
    "projects.p5.title":"Filesystem MCP Server","projects.p5.desc":"Lightweight MCP server exposing filesystem read operations as tools for LLM agents.",
    "projects.p6.title":"Sales &amp; Financial Analytics Dashboard","projects.p6.desc":"Company-wide dashboard for Hello Delivery tracking sales, product performance, and financial metrics in one place.",
    "projects.p7.title":"Delivery Payroll Calculation System","projects.p7.desc":"System calculating delivery drivers' pay based on completed deliveries and commission, used by HR for payroll processing.",
    "skills.heading":"Technical Skills","skills.tag":"// 04 — stack",
    "skills.backend":"Backend &amp; Systems","skills.programming":"Programming","skills.devops":"DevOps &amp; Tools","skills.databases":"Databases","skills.testing":"Testing","skills.frontend":"Frontend","skills.monitoring":"Monitoring","skills.ai":"AI Tools","skills.eeg":"EEG Research",
    "edu.heading":"Education","edu.tag":"// 05 — academic",
    "edu.e1.title":"M.Sc. Artificial Intelligence","edu.e1.body":"BTU Cottbus<br>Thesis: Relaxation Decoding in Virtual Reality Environments",
    "edu.e2.title":"M.Sc. Networks &amp; Embedded Systems","edu.e2.body":"University Algiers 1<br>Thesis: Intelligent Data Center Monitoring using IoT and AI (with Adex Cloud)",
    "edu.e3.title":"B.Sc. Computer Systems","edu.e3.body":"University Algiers 1<br>Thesis: Development of a Learning System",
    "contact.heading":"Let's build something<br>reliable together.",
    "contact.lead":"Open to opportunities in backend engineering, infrastructure automation, and applied AI research.",
    "contact.email":"Send an email","contact.linkedin":"View LinkedIn",
    "footer.text":"Hichem Mouadh Belaid · Cottbus, Germany"
  },
  fr: {
    "nav.about":"À propos","nav.experience":"Expérience","nav.projects":"Projets","nav.skills":"Compétences","nav.education":"Formation","nav.contact":"Contact","nav.resume":"CV",
    "hero.eyebrow":"DÉVELOPPEUR SYSTÈME &amp; LOGICIEL · COTTBUS, DE",
    "hero.title":"Je construis l'infrastructure<br>derrière des systèmes <span class=\"accent\">fiables</span><br>— et les signaux qui les traversent.",
    "hero.lead":"J'automatise des infrastructures, je développe des systèmes backend et des API REST à grande échelle, et j'étudie comment les signaux du cerveau peuvent piloter la réalité virtuelle — actuellement en Master IA à la BTU Cottbus.",
    "hero.langs":"Arabe · Français · Anglais · Allemand",
    "about.heading":"À propos","about.tag":"// 01 — parcours",
    "about.p1":"Je suis <strong>développeur système et logiciel</strong>, avec une expérience concrète en automatisation d'infrastructure, en ingénierie backend et en systèmes distribués à grande échelle — actuellement développeur système &amp; logiciel chez <strong>IONOS</strong>, où je conçois des systèmes internes et destinés aux clients, automatise les processus réseau et sécurité, et maintiens des API REST dans des environnements distribués.",
    "about.p2":"Mon parcours m'a mené du développement web full-stack et des systèmes de surveillance IoT à Alger, jusqu'à l'automatisation d'infrastructure et de sécurité en Allemagne. Je poursuis aujourd'hui un <strong>Master en intelligence artificielle</strong> à la BTU Cottbus, centré sur le décodage d'états de relaxation en réalité virtuelle à partir de signaux EEG — un projet à la croisée du génie logiciel, du traitement du signal et de l'IA appliquée.",
    "lang.ar":"Arabe","lang.fr":"Français","lang.en":"Anglais","lang.de":"Allemand",
    "exp.heading":"Expérience","exp.tag":"// 02 — parcours pro","exp.today":"AUJOURD'HUI",
    "exp.i1.role":"Développeur système &amp; logiciel","exp.i1.org":"Étudiant en alternance",
    "exp.i1.bullets":["Développement et maintenance de systèmes et tableaux de bord internes et clients","Automatisation des processus réseau et sécurité pour réduire le travail manuel","Intégration et maintenance d'API REST en environnement distribué","Exécution de tests end-to-end automatisés avec Cypress","Support du CI/CD, du déploiement et de l'automatisation d'infrastructure"],
    "exp.i2.role":"Développeur full-stack",
    "exp.i2.bullets":["Développement de plusieurs applications web pour optimiser les opérations internes","Création de tableaux de bord pour le service client et les RH","Création d'un système global de gestion des partenaires et services","Mise en place d'un système d'analyse de données à l'échelle de l'entreprise"],
    "exp.i3.role":"Développeur système &amp; logiciel",
    "exp.i3.bullets":["Développement d'un système intelligent de surveillance de data center basé sur l'IA et l'IoT"],
    "exp.i4.role":"Développeur système &amp; logiciel",
    "exp.i4.bullets":["Développement et automatisation d'un système de facturation chauffeurs intégré à la gestion de flotte"],
    "exp.i5.role":"Développeur full-stack",
    "exp.i5.bullets":["Traitement de données JSON pour créer un tableau de bord multi-utilisateurs de visualisation de données"],
    "projects.heading":"Projets","projects.tag":"// 03 — travaux sélectionnés",
    "projects.p1.title":"Décodage de la relaxation en RV","projects.p1.desc":"Projet de mémoire de master décodant les états de relaxation à partir de signaux EEG pour piloter des environnements de réalité virtuelle adaptatifs.",
    "projects.p2.title":"Surveillance intelligente de data center","projects.p2.desc":"Système de surveillance basé sur l'IA et l'IoT pour data centers, développé chez Adex Technologie dans le cadre de mon second mémoire de master.",
    "projects.p3.title":"Système de gestion des partenaires et services","projects.p3.desc":"Plateforme full-stack de gestion des partenaires et services à l'échelle mondiale, développée pour les opérations internes de Hello Delivery.",
    "projects.p4.title":"Application météo","projects.p4.desc":"Petite application Angular affichant la météo actuelle et les prévisions pour un lieu donné.",
    "projects.p5.title":"Serveur MCP pour système de fichiers","projects.p5.desc":"Serveur MCP léger exposant des opérations de lecture de fichiers comme outils pour des agents LLM.",
    "projects.p6.title":"Tableau de bord analytique des ventes et finances","projects.p6.desc":"Tableau de bord à l'échelle de l'entreprise pour Hello Delivery, suivant les ventes, la performance des produits et les indicateurs financiers en un seul endroit.",
    "projects.p7.title":"Système de calcul de paie des livreurs","projects.p7.desc":"Système calculant la rémunération des livreurs en fonction des livraisons effectuées et des commissions, utilisé par les RH pour le traitement de la paie.",
    "skills.heading":"Compétences techniques","skills.tag":"// 04 — stack",
    "skills.backend":"Backend &amp; systèmes","skills.programming":"Programmation","skills.devops":"DevOps &amp; outils","skills.databases":"Bases de données","skills.testing":"Tests","skills.frontend":"Frontend","skills.monitoring":"Supervision","skills.ai":"Outils IA","skills.eeg":"Recherche EEG",
    "edu.heading":"Formation","edu.tag":"// 05 — académique",
    "edu.e1.title":"Master en intelligence artificielle","edu.e1.body":"BTU Cottbus<br>Mémoire : Décodage de la relaxation en réalité virtuelle",
    "edu.e2.title":"Master Réseaux &amp; systèmes embarqués","edu.e2.body":"Université Alger 1<br>Mémoire : Surveillance intelligente de data center par IoT et IA (avec Adex Cloud)",
    "edu.e3.title":"Licence en systèmes informatiques","edu.e3.body":"Université Alger 1<br>Mémoire : Développement d'un système d'apprentissage",
    "contact.heading":"Construisons quelque chose<br>de fiable ensemble.",
    "contact.lead":"Ouvert aux opportunités en ingénierie backend, automatisation d'infrastructure et recherche appliquée en IA.",
    "contact.email":"Envoyer un e-mail","contact.linkedin":"Voir LinkedIn",
    "footer.text":"Hichem Mouadh Belaid · Cottbus, Allemagne"
  },
  de: {
    "nav.about":"Über mich","nav.experience":"Erfahrung","nav.projects":"Projekte","nav.skills":"Kenntnisse","nav.education":"Ausbildung","nav.contact":"Kontakt","nav.resume":"Lebenslauf",
    "hero.eyebrow":"SYSTEM- &amp; SOFTWAREENTWICKLER · COTTBUS, DE",
    "hero.title":"Ich baue die Infrastruktur<br>hinter <span class=\"accent\">zuverlässigen</span> Systemen<br>— und den Signalen darin.",
    "hero.lead":"Ich automatisiere Infrastrukturen, entwickle Backend-Systeme und REST-APIs im großen Maßstab und erforsche, wie Gehirnsignale Virtual Reality steuern können — derzeit als Masterstudent für KI an der BTU Cottbus.",
    "hero.langs":"Arabisch · Französisch · Englisch · Deutsch",
    "about.heading":"Über mich","about.tag":"// 01 — hintergrund",
    "about.p1":"Ich bin <strong>System- und Softwareentwickler</strong> mit praktischer Erfahrung in Infrastrukturautomatisierung, Backend-Engineering und skalierbaren verteilten Systemen — aktuell tätig als System- &amp; Softwareentwickler bei <strong>IONOS</strong>, wo ich interne und kundenseitige Systeme entwickle, Netzwerk- und Sicherheitsprozesse automatisiere und REST-APIs in verteilten Umgebungen pflege.",
    "about.p2":"Mein Weg führte mich von Full-Stack-Webentwicklung und IoT-basierten Monitoring-Systemen in Algier bis zur Infrastruktur- und Sicherheitsautomatisierung in Deutschland. Aktuell absolviere ich einen <strong>Master in Künstlicher Intelligenz</strong> an der BTU Cottbus mit Fokus auf die Dekodierung von Entspannungszuständen in Virtual Reality mittels EEG-Signalen — ein Projekt an der Schnittstelle von Softwareentwicklung, Signalverarbeitung und angewandter KI.",
    "lang.ar":"Arabisch","lang.fr":"Französisch","lang.en":"Englisch","lang.de":"Deutsch",
    "exp.heading":"Erfahrung","exp.tag":"// 02 — werdegang","exp.today":"HEUTE",
    "exp.i1.role":"System- &amp; Softwareentwickler","exp.i1.org":"Werkstudent",
    "exp.i1.bullets":["Entwicklung und Pflege interner und kundenseitiger Systeme und Dashboards","Automatisierung von Netzwerk- und Sicherheitsprozessen zur Reduzierung manueller Arbeit","Integration und Pflege von REST-APIs in verteilten Umgebungen","Durchführung automatisierter End-to-End-Tests mit Cypress","Unterstützung von CI/CD, Deployment und Infrastrukturautomatisierung"],
    "exp.i2.role":"Full-Stack-Softwareentwickler",
    "exp.i2.bullets":["Entwicklung mehrerer Webanwendungen zur Optimierung interner Geschäftsprozesse","Entwicklung von Dashboards für Kundenservice und HR-Management","Aufbau eines globalen Partner- und Servicemanagementsystems","Implementierung eines unternehmensweiten Datenanalysesystems"],
    "exp.i3.role":"System- &amp; Softwareentwickler",
    "exp.i3.bullets":["Entwicklung eines KI- und IoT-basierten intelligenten Data-Center-Monitoring-Systems"],
    "exp.i4.role":"System- &amp; Softwareentwickler",
    "exp.i4.bullets":["Aufbau und Automatisierung eines Fahrer-Abrechnungssystems, integriert in das Flottenmanagement"],
    "exp.i5.role":"Full-Stack-Softwareentwickler",
    "exp.i5.bullets":["Verarbeitung von JSON-Daten zum Aufbau eines Multi-User-Dashboards für unternehmensweite Datenvisualisierung"],
    "projects.heading":"Projekte","projects.tag":"// 03 — ausgewählte arbeiten",
    "projects.p1.title":"Relaxation Decoding in VR","projects.p1.desc":"Masterarbeit zur Dekodierung von Entspannungszuständen aus EEG-Signalen zur Steuerung adaptiver Virtual-Reality-Umgebungen.",
    "projects.p2.title":"Intelligentes Data-Center-Monitoring","projects.p2.desc":"KI- und IoT-basiertes Monitoring-System für Rechenzentren, entwickelt bei Adex Technologie im Rahmen meiner zweiten Masterarbeit.",
    "projects.p3.title":"Partner- &amp; Servicemanagementsystem","projects.p3.desc":"Full-Stack-Plattform zur Verwaltung globaler Partner und Services, entwickelt für die internen Abläufe von Hello Delivery.",
    "projects.p4.title":"Wetter-App","projects.p4.desc":"Kleine Angular-App, die aktuelles Wetter und Vorhersagen für einen bestimmten Ort anzeigt.",
    "projects.p5.title":"Dateisystem-MCP-Server","projects.p5.desc":"Schlanker MCP-Server, der Dateisystem-Lesevorgänge als Tools für LLM-Agenten bereitstellt.",
    "projects.p6.title":"Vertriebs- &amp; Finanzanalyse-Dashboard","projects.p6.desc":"Unternehmensweites Dashboard für Hello Delivery zur Erfassung von Vertrieb, Produktleistung und Finanzkennzahlen an einem Ort.",
    "projects.p7.title":"Gehaltsabrechnungssystem für Fahrer","projects.p7.desc":"System zur Berechnung der Fahrervergütung auf Basis abgeschlossener Lieferungen und Provisionen, genutzt von der Personalabteilung für die Gehaltsabrechnung.",
    "skills.heading":"Technische Kenntnisse","skills.tag":"// 04 — stack",
    "skills.backend":"Backend &amp; Systeme","skills.programming":"Programmierung","skills.devops":"DevOps &amp; Tools","skills.databases":"Datenbanken","skills.testing":"Testing","skills.frontend":"Frontend","skills.monitoring":"Monitoring","skills.ai":"KI-Tools","skills.eeg":"EEG-Forschung",
    "edu.heading":"Ausbildung","edu.tag":"// 05 — akademisch",
    "edu.e1.title":"M.Sc. Künstliche Intelligenz","edu.e1.body":"BTU Cottbus<br>Thesis: Relaxation Decoding in Virtual-Reality-Umgebungen",
    "edu.e2.title":"M.Sc. Netzwerke &amp; eingebettete Systeme","edu.e2.body":"Universität Algier 1<br>Thesis: Intelligentes Data-Center-Monitoring mittels IoT und KI (mit Adex Cloud)",
    "edu.e3.title":"B.Sc. Informatik","edu.e3.body":"Universität Algier 1<br>Thesis: Entwicklung eines Lernsystems",
    "contact.heading":"Lass uns gemeinsam etwas<br>Zuverlässiges bauen.",
    "contact.lead":"Offen für Möglichkeiten in Backend-Engineering, Infrastrukturautomatisierung und angewandter KI-Forschung.",
    "contact.email":"E-Mail senden","contact.linkedin":"LinkedIn ansehen",
    "footer.text":"Hichem Mouadh Belaid · Cottbus, Deutschland"
  },
  ar: {
    "nav.about":"نبذة","nav.experience":"الخبرة","nav.projects":"المشاريع","nav.skills":"المهارات","nav.education":"التعليم","nav.contact":"تواصل","nav.resume":"السيرة الذاتية",
    "hero.eyebrow":"مطوّر أنظمة وبرمجيات · كوتبوس، ألمانيا",
    "hero.title":"أبني البنية التحتية<br>وراء أنظمة <span class=\"accent\">موثوقة</span><br>— والإشارات الكامنة بداخلها.",
    "hero.lead":"أقوم بأتمتة البنية التحتية، وبناء أنظمة خلفية وواجهات REST API على نطاق واسع، وأبحث في كيفية استخدام إشارات الدماغ لتشغيل الواقع الافتراضي — وأنا حاليًا طالب ماجستير في الذكاء الاصطناعي بجامعة BTU كوتبوس.",
    "hero.langs":"العربية · الفرنسية · الإنجليزية · الألمانية",
    "about.heading":"نبذة عني","about.tag":"// ٠١ — الخلفية",
    "about.p1":"أنا <strong>مطوّر أنظمة وبرمجيات</strong> ولدي خبرة عملية في أتمتة البنية التحتية، وهندسة الأنظمة الخلفية، والأنظمة الموزّعة القابلة للتوسّع — أعمل حاليًا كمطوّر أنظمة وبرمجيات في <strong>IONOS</strong>، حيث أبني أنظمة داخلية وأخرى موجّهة للعملاء، وأؤتمت عمليات الشبكة والأمان، وأحافظ على واجهات REST API في بيئات موزّعة.",
    "about.p2":"بدأت مسيرتي في تطوير الويب الشامل وأنظمة المراقبة القائمة على إنترنت الأشياء في الجزائر، وصولاً إلى أتمتة البنية التحتية والأمان في ألمانيا. أدرس حاليًا <strong>ماجستير في الذكاء الاصطناعي</strong> في جامعة BTU كوتبوس، بتركيز على فك تشفير حالات الاسترخاء في الواقع الافتراضي باستخدام إشارات EEG — مشروع يجمع بين هندسة البرمجيات ومعالجة الإشارات والذكاء الاصطناعي التطبيقي.",
    "lang.ar":"العربية","lang.fr":"الفرنسية","lang.en":"الإنجليزية","lang.de":"الألمانية",
    "exp.heading":"الخبرة","exp.tag":"// ٠٢ — المسار المهني","exp.today":"حتى الآن",
    "exp.i1.role":"مطوّر أنظمة وبرمجيات","exp.i1.org":"طالب متدرّب",
    "exp.i1.bullets":["تطوير وصيانة أنظمة ولوحات تحكم داخلية وموجّهة للعملاء","أتمتة عمليات الشبكة والأمان لتقليل العمل اليدوي","دمج وصيانة واجهات REST API في بيئات موزّعة","تنفيذ اختبارات آلية شاملة باستخدام Cypress","دعم CI/CD والنشر وأتمتة البنية التحتية"],
    "exp.i2.role":"مطوّر ويب شامل",
    "exp.i2.bullets":["بناء تطبيقات ويب متعددة لتحسين العمليات الداخلية","تطوير لوحات تحكم لخدمة العملاء وإدارة الموارد البشرية","إنشاء نظام عالمي لإدارة الشركاء والخدمات","تطبيق نظام تحليل بيانات على مستوى الشركة"],
    "exp.i3.role":"مطوّر أنظمة وبرمجيات",
    "exp.i3.bullets":["تطوير نظام مراقبة ذكي لمراكز البيانات قائم على الذكاء الاصطناعي وإنترنت الأشياء"],
    "exp.i4.role":"مطوّر أنظمة وبرمجيات",
    "exp.i4.bullets":["بناء وأتمتة نظام فوترة للسائقين متكامل مع إدارة الأسطول"],
    "exp.i5.role":"مطوّر ويب شامل",
    "exp.i5.bullets":["معالجة بيانات JSON لبناء لوحة تحكم متعددة المستخدمين لتصور البيانات على مستوى الشركة"],
    "projects.heading":"المشاريع","projects.tag":"// ٠٣ — أعمال مختارة",
    "projects.p1.title":"فك تشفير الاسترخاء في الواقع الافتراضي","projects.p1.desc":"مشروع رسالة الماجستير لفك تشفير حالات الاسترخاء من إشارات EEG لتشغيل بيئات واقع افتراضي تكيّفية.",
    "projects.p2.title":"مراقبة ذكية لمراكز البيانات","projects.p2.desc":"نظام مراقبة قائم على الذكاء الاصطناعي وإنترنت الأشياء لمراكز البيانات، طُوّر خلال عملي في Adex Technologie كجزء من رسالة الماجستير الثانية.",
    "projects.p3.title":"نظام إدارة الشركاء والخدمات","projects.p3.desc":"منصة شاملة لإدارة الشركاء والخدمات على مستوى عالمي، طُوّرت للعمليات الداخلية لشركة Hello Delivery.",
    "projects.p4.title":"تطبيق الطقس","projects.p4.desc":"تطبيق صغير بإطار Angular يعرض حالة الطقس الحالية والتوقعات لموقع محدد.",
    "projects.p5.title":"خادم MCP لنظام الملفات","projects.p5.desc":"خادم MCP خفيف يوفّر عمليات قراءة نظام الملفات كأدوات لوكلاء نماذج اللغة الكبيرة.",
    "projects.p6.title":"لوحة تحليلات المبيعات والمالية","projects.p6.desc":"لوحة تحكم على مستوى الشركة لـ Hello Delivery لتتبع المبيعات وأداء المنتجات والمؤشرات المالية في مكان واحد.",
    "projects.p7.title":"نظام حساب رواتب السائقين","projects.p7.desc":"نظام يحسب أجور سائقي التوصيل بناءً على عدد التوصيلات المنجزة والعمولة، تستخدمه الموارد البشرية لمعالجة الرواتب.",
    "skills.heading":"المهارات التقنية","skills.tag":"// ٠٤ — الأدوات",
    "skills.backend":"الأنظمة الخلفية","skills.programming":"البرمجة","skills.devops":"DevOps والأدوات","skills.databases":"قواعد البيانات","skills.testing":"الاختبار","skills.frontend":"الواجهة الأمامية","skills.monitoring":"المراقبة","skills.ai":"أدوات الذكاء الاصطناعي","skills.eeg":"أبحاث EEG",
    "edu.heading":"التعليم","edu.tag":"// ٠٥ — أكاديمي",
    "edu.e1.title":"ماجستير في الذكاء الاصطناعي","edu.e1.body":"جامعة BTU كوتبوس<br>أطروحة: فك تشفير الاسترخاء في بيئات الواقع الافتراضي",
    "edu.e2.title":"ماجستير في الشبكات والأنظمة المدمجة","edu.e2.body":"جامعة الجزائر 1<br>أطروحة: مراقبة ذكية لمراكز البيانات باستخدام إنترنت الأشياء والذكاء الاصطناعي (مع Adex Cloud)",
    "edu.e3.title":"بكالوريوس في نظم الحاسوب","edu.e3.body":"جامعة الجزائر 1<br>أطروحة: تطوير نظام تعلّم",
    "contact.heading":"لنبنِ شيئًا<br>موثوقًا معًا.",
    "contact.lead":"منفتح على فرص في هندسة الأنظمة الخلفية، وأتمتة البنية التحتية، وأبحاث الذكاء الاصطناعي التطبيقية.",
    "contact.email":"أرسل بريدًا إلكترونيًا","contact.linkedin":"عرض LinkedIn",
    "footer.text":"هشام مؤاده بلعيد · كوتبوس، ألمانيا"
  }
};

function applyLanguage(lang){
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    const key = el.getAttribute('data-i18n-html');
    if(dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-list]').forEach(el=>{
    const key = el.getAttribute('data-i18n-list');
    const items = dict[key];
    if(Array.isArray(items)){
      el.innerHTML = items.map(t=>`<li>${t}</li>`).join('');
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn=>{
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn=>{
  btn.addEventListener('click', ()=> applyLanguage(btn.getAttribute('data-lang')));
});

applyLanguage('en');
