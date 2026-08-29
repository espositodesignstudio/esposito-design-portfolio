export interface MediaItem {
  type: "video" | "image";
  src: string;
  alt?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  cardTitle?: string;
  subtitle: string;
  category: "Branding & UX/UI" | "Stampa 3D";
  subCategory: string;
  coverImage: string;
  coverVideo?: string;
  gallery: string[];
  mediaItems?: MediaItem[];
  year: string;
  description: string;
  strategyTitle?: string;
  strategyDescription?: string;
  visualDirectionTitle?: string;
  visualDirectionDescription?: string;
  scope: string[];
  credits: { role: string; name: string }[];
  websiteUrl?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "aura",
    slug: "aura",
    title: "AURA DESIGN",
    subtitle: "One page dal design moderno ed energico",
    category: "Branding & UX/UI",
    subCategory: "UX/UI Design",
    coverImage: "/progetti/01-aura/cover.webp",
    coverVideo: "/progetti/01-aura/cover-video.mp4",
    year: "2024",
    description: "Aura Design nasce come progetto accademico: sviluppare una landing page one-page a partire da un concept assegnato dal docente, senza un cliente reale da soddisfare ma con la stessa cura di un brief professionale.",
    strategyTitle: "IL PROGETTO & LA STRATEGIA",
    strategyDescription: "Aura Design nasce come progetto accademico: sviluppare una landing page one-page a partire da un concept assegnato dal docente, senza un cliente reale da soddisfare ma con la stessa cura di un brief professionale.",
    visualDirectionTitle: "DIREZIONE VISIVA & SVILUPPO CONCETTUALE",
    visualDirectionDescription: "Ho scelto uno stile moderno e una palette colori energica, per dare al progetto un'identità visiva capace di catturare l'attenzione fin dal primo scroll.",
    scope: ["UX/UI Design", "Landing Page", "Visual Design"],
    credits: [{ role: "UX/UI Designer", name: "Peppe Esposito" }],
    featured: true,
    gallery: [
      "/progetti/01-aura/cover.webp",
      "/progetti/01-aura/01.webp",
      "/progetti/01-aura/02.webp",
      "/progetti/01-aura/03.webp",
      "/progetti/01-aura/04.webp",
      "/progetti/01-aura/05.webp",
      "/progetti/01-aura/06.webp"
    ],
    mediaItems: [
      { type: "video", src: "/progetti/01-aura/cover-video.mp4", alt: "Aura Design Cover Video" },
      { type: "image", src: "/progetti/01-aura/cover.webp", alt: "Aura Design Cover Image" },
      { type: "image", src: "/progetti/01-aura/01.webp", alt: "Aura Design Detail 01" },
      { type: "image", src: "/progetti/01-aura/02.webp", alt: "Aura Design Detail 02" },
      { type: "image", src: "/progetti/01-aura/03.webp", alt: "Aura Design Detail 03" },
      { type: "image", src: "/progetti/01-aura/04.webp", alt: "Aura Design Detail 04" },
      { type: "image", src: "/progetti/01-aura/05.webp", alt: "Aura Design Detail 05" },
      { type: "image", src: "/progetti/01-aura/06.webp", alt: "Aura Design Detail 06" }
    ]
  },
  {
    id: "ddm-coach",
    slug: "ddm-coach",
    title: "DDM COACH",
    subtitle: "Rebranding motivazionale per un personal trainer",
    category: "Branding & UX/UI",
    subCategory: "Brand Identity",
    coverImage: "/progetti/02-ddmcoach/cover.jpg",
    gallery: [
      "/progetti/02-ddmcoach/cover.jpg",
      "/progetti/02-ddmcoach/01.jpg",
      "/progetti/02-ddmcoach/02.jpg",
      "/progetti/02-ddmcoach/03.jpg",
      "/progetti/02-ddmcoach/04.jpg",
      "/progetti/02-ddmcoach/05.jpg"
    ],
    mediaItems: [
      { type: "image", src: "/progetti/02-ddmcoach/cover.jpg", alt: "DDM Coach Cover Image" },
      { type: "image", src: "/progetti/02-ddmcoach/01.jpg", alt: "DDM Coach Detail 01" },
      { type: "image", src: "/progetti/02-ddmcoach/02.jpg", alt: "DDM Coach Detail 02" },
      { type: "image", src: "/progetti/02-ddmcoach/03.jpg", alt: "DDM Coach Detail 03" },
      { type: "image", src: "/progetti/02-ddmcoach/04.jpg", alt: "DDM Coach Detail 04" },
      { type: "image", src: "/progetti/02-ddmcoach/05.jpg", alt: "DDM Coach Detail 05" }
    ],
    year: "2026",
    description: "Un personal trainer con un logo ormai datato e trascurato mi ha chiesto di intervenire sulla sua identità. Insieme abbiamo scelto una direzione capace di trasmettere motivazione e determinazione.",
    strategyTitle: "IL PROGETTO & LA STRATEGIA",
    strategyDescription: "Un personal trainer con un logo ormai datato e trascurato mi ha chiesto di intervenire sulla sua identità. Insieme abbiamo scelto una direzione capace di trasmettere motivazione e determinazione.",
    visualDirectionTitle: "DIREZIONE VISIVA & SVILUPPO CONCETTUALE",
    visualDirectionDescription: "Ho sviluppato un pittogramma che rappresenta il percorso di crescita e la motivazione vissuti durante il lavoro con il personal trainer.",
    scope: ["Rebranding", "Logo Design", "Visual Identity"],
    credits: [{ role: "Brand Designer", name: "Peppe Esposito" }],
    featured: true
  },
  {
    id: "enjoy",
    slug: "enjoy",
    title: "ENJOY",
    subtitle: "Identità natura per un brand fittizio di pasta biologica",
    category: "Branding & UX/UI",
    subCategory: "Brand Identity",
    coverImage: "/progetti/03-enjoy/cover.jpg",
    gallery: [
      "/progetti/03-enjoy/cover.jpg",
      "/progetti/03-enjoy/01.jpg",
      "/progetti/03-enjoy/02.jpg",
      "/progetti/03-enjoy/03.jpg",
      "/progetti/03-enjoy/04.jpg",
      "/progetti/03-enjoy/05.jpg",
      "/progetti/03-enjoy/06.jpg"
    ],
    mediaItems: [
      { type: "image", src: "/progetti/03-enjoy/cover.jpg", alt: "Enjoy Cover Image" },
      { type: "image", src: "/progetti/03-enjoy/01.jpg", alt: "Enjoy Detail 01" },
      { type: "image", src: "/progetti/03-enjoy/02.jpg", alt: "Enjoy Detail 02" },
      { type: "image", src: "/progetti/03-enjoy/03.jpg", alt: "Enjoy Detail 03" },
      { type: "image", src: "/progetti/03-enjoy/04.jpg", alt: "Enjoy Detail 04" },
      { type: "image", src: "/progetti/03-enjoy/05.jpg", alt: "Enjoy Detail 05" },
      { type: "image", src: "/progetti/03-enjoy/06.jpg", alt: "Enjoy Detail 06" }
    ],
    year: "2024",
    description: "Un progetto personale nato per fare esperienza sul campo, con un concept fittizio: un brand di pasta biologica.",
    strategyTitle: "IL PROGETTO & LA STRATEGIA",
    strategyDescription: "Un progetto personale nato per fare esperienza sul campo, con un concept fittizio: un brand di pasta biologica.",
    visualDirectionTitle: "DIREZIONE VISIVA & SVILUPPO CONCETTUALE",
    visualDirectionDescription: "Ho sviluppato un pittogramma che unisce i valori della natura — il grano (foglia gialla), il sole (sfera arancione) e il biologico (foglia verde) — che insieme formano, in negativo, la silhouette di una figura felice con le braccia alzate. Palette colori ispirata ai toni della natura.",
    scope: ["Brand Strategy", "Logo Design", "Visual Identity", "Packaging Concept"],
    credits: [{ role: "Brand Designer", name: "Peppe Esposito" }],
    featured: true
  },
  {
    id: "esposito-design",
    slug: "esposito-design",
    title: "ESPOSITO DESIGN",
    subtitle: "Identità personale e sito portfolio, dal foglio bianco al web",
    category: "Branding & UX/UI",
    subCategory: "Brand Identity & UX/UI Design",
    coverImage: "/progetti/04-espositodesign/cover.jpg",
    coverVideo: "/progetti/04-espositodesign/cover-video.mp4",
    gallery: [
      "/progetti/04-espositodesign/cover.jpg",
      "/progetti/04-espositodesign/01.jpg",
      "/progetti/04-espositodesign/02.jpg",
      "/progetti/04-espositodesign/03.jpg",
      "/progetti/04-espositodesign/04.jpg",
      "/progetti/04-espositodesign/05.jpg",
      "/progetti/04-espositodesign/06.jpg",
      "/progetti/04-espositodesign/07.jpg"
    ],
    mediaItems: [
      { type: "video", src: "/progetti/04-espositodesign/cover-video.mp4", alt: "Esposito Design Cover Video" },
      { type: "image", src: "/progetti/04-espositodesign/cover.jpg", alt: "Esposito Design Cover Image" },
      { type: "image", src: "/progetti/04-espositodesign/01.jpg", alt: "Esposito Design Detail 01" },
      { type: "image", src: "/progetti/04-espositodesign/02.jpg", alt: "Esposito Design Detail 02" },
      { type: "image", src: "/progetti/04-espositodesign/03.jpg", alt: "Esposito Design Detail 03" },
      { type: "image", src: "/progetti/04-espositodesign/04.jpg", alt: "Esposito Design Detail 04" },
      { type: "image", src: "/progetti/04-espositodesign/05.jpg", alt: "Esposito Design Detail 05" },
      { type: "image", src: "/progetti/04-espositodesign/06.jpg", alt: "Esposito Design Detail 06" },
      { type: "image", src: "/progetti/04-espositodesign/07.jpg", alt: "Esposito Design Detail 07" }
    ],
    year: "2025",
    description: "Un progetto personale a 360°: costruire la mia identità di brand partendo da zero e tradurla in un sito portfolio coerente in ogni suo processo, dal logo all'esperienza utente.",
    strategyTitle: "IL PROGETTO & LA STRATEGIA",
    strategyDescription: "Un progetto personale a 360°: costruire la mia identità di brand partendo da zero e tradurla in un sito portfolio coerente in ogni suo processo, dal logo all'esperienza utente.",
    visualDirectionTitle: "DIREZIONE VISIVA & SVILUPPO CONCETTUALE",
    visualDirectionDescription: "Per la brand identity e il sito ho scelto uno stile creativo e handmade: il logo raffigura il mio volto disegnato a mano, con tratti volutamente irregolari, per trasmettere autenticità fin dal primo contatto visivo.",
    scope: ["Brand Identity", "UX/UI Design", "Portfolio Website"],
    credits: [{ role: "Founder & Lead Designer", name: "Peppe Esposito" }],
    featured: true
  },
  {
    id: "fortune",
    slug: "fortune",
    title: "FORTUNE",
    subtitle: "Birra artigianale e tarocchi, un'identità nata dalla Ruota della Fortuna",
    category: "Branding & UX/UI",
    subCategory: "Brand Identity",
    coverImage: "/progetti/05-fortune/cover.jpg",
    gallery: [
      "/progetti/05-fortune/cover.jpg",
      "/progetti/05-fortune/01.jpg",
      "/progetti/05-fortune/02.jpg",
      "/progetti/05-fortune/03.jpg",
      "/progetti/05-fortune/04.jpg",
      "/progetti/05-fortune/05.jpg",
      "/progetti/05-fortune/06.jpg"
    ],
    mediaItems: [
      { type: "image", src: "/progetti/05-fortune/cover.jpg", alt: "Fortune Cover Image" },
      { type: "image", src: "/progetti/05-fortune/01.jpg", alt: "Fortune Detail 01" },
      { type: "image", src: "/progetti/05-fortune/02.jpg", alt: "Fortune Detail 02" },
      { type: "image", src: "/progetti/05-fortune/03.jpg", alt: "Fortune Detail 03" },
      { type: "image", src: "/progetti/05-fortune/04.jpg", alt: "Fortune Detail 04" },
      { type: "image", src: "/progetti/05-fortune/05.jpg", alt: "Fortune Detail 05" },
      { type: "image", src: "/progetti/05-fortune/06.jpg", alt: "Fortune Detail 06" }
    ],
    year: "2025",
    description: "Il concept di partenza univa due mondi apparentemente distanti: la birra artigianale e i tarocchi. Ho scelto la Ruota della Fortuna come simbolo centrale attorno a cui costruire l'intero progetto.",
    strategyTitle: "IL PROGETTO & LA STRATEGIA",
    strategyDescription: "Il concept di partenza univa due mondi apparentemente distanti: la birra artigianale e i tarocchi. Ho scelto la Ruota della Fortuna come simbolo centrale attorno a cui costruire l'intero progetto.",
    visualDirectionTitle: "DIREZIONE VISIVA & SVILUPPO CONCETTUALE",
    visualDirectionDescription: "Ho sviluppato un concept semplice e lineare, ispirato direttamente alla carta dei tarocchi, scegliendo font e palette colori capaci di evocare mistero e fortuna.",
    scope: ["Brand Strategy", "Logo Design", "Visual Identity", "Packaging Concept"],
    credits: [{ role: "Brand Designer", name: "Peppe Esposito" }],
    featured: true
  },
  {
    id: "futsal-soccer-c5",
    slug: "futsal-soccer-c5",
    title: "FUTSAL SOCCER C5",
    subtitle: "Identità sportiva radicata nel territorio di Nocera Inferiore",
    category: "Branding & UX/UI",
    subCategory: "Brand Identity",
    coverImage: "/progetti/06-futsalsoccerc5/cover.jpg",
    gallery: [
      "/progetti/06-futsalsoccerc5/cover.jpg",
      "/progetti/06-futsalsoccerc5/01.jpg",
      "/progetti/06-futsalsoccerc5/02.jpg",
      "/progetti/06-futsalsoccerc5/03.jpg",
      "/progetti/06-futsalsoccerc5/04.jpg",
      "/progetti/06-futsalsoccerc5/05.jpg",
      "/progetti/06-futsalsoccerc5/06.jpg",
      "/progetti/06-futsalsoccerc5/07.jpg"
    ],
    mediaItems: [
      { type: "image", src: "/progetti/06-futsalsoccerc5/cover.jpg", alt: "Futsal Soccer C5 Cover Image" },
      { type: "image", src: "/progetti/06-futsalsoccerc5/01.jpg", alt: "Futsal Soccer C5 Detail 01" },
      { type: "image", src: "/progetti/06-futsalsoccerc5/02.jpg", alt: "Futsal Soccer C5 Detail 02" },
      { type: "image", src: "/progetti/06-futsalsoccerc5/03.jpg", alt: "Futsal Soccer C5 Detail 03" },
      { type: "image", src: "/progetti/06-futsalsoccerc5/04.jpg", alt: "Futsal Soccer C5 Detail 04" },
      { type: "image", src: "/progetti/06-futsalsoccerc5/05.jpg", alt: "Futsal Soccer C5 Detail 05" },
      { type: "image", src: "/progetti/06-futsalsoccerc5/06.jpg", alt: "Futsal Soccer C5 Detail 06" },
      { type: "image", src: "/progetti/06-futsalsoccerc5/07.jpg", alt: "Futsal Soccer C5 Detail 07" }
    ],
    year: "2024",
    description: "Il mio primo progetto personale: lo sviluppo dell'identità completa per una squadra di calcio a 5, comprensiva di tutti gli asset necessari al club. Il cliente mi ha lasciato piena libertà creativa.",
    strategyTitle: "IL PROGETTO & LA STRATEGIA",
    strategyDescription: "Il mio primo progetto personale: lo sviluppo dell'identità completa per una squadra di calcio a 5, comprensiva di tutti gli asset necessari al club. Il cliente mi ha lasciato piena libertà creativa.",
    visualDirectionTitle: "DIREZIONE VISIVA & SVILUPPO CONCETTUALE",
    visualDirectionDescription: "Ho sviluppato un'identità che richiamasse la città di Nocera Inferiore, inserendo il simbolo cittadino (l'albero) insieme al pallone da calcio, per un logo che parlasse tanto di sport quanto di appartenenza al territorio.",
    scope: ["Brand Strategy", "Logo Design", "Visual Identity", "Brand Assets"],
    credits: [{ role: "Brand Designer", name: "Peppe Esposito" }],
    featured: true
  },
  {
    id: "gr-inox",
    slug: "gr-inox",
    title: "GR INOX",
    subtitle: "Rebranding tecnico ed energico per un'azienda di lavorazione dell'acciaio",
    category: "Branding & UX/UI",
    subCategory: "Brand Identity",
    coverImage: "/progetti/07-grinox/cover.jpg",
    coverVideo: "/progetti/07-grinox/cover-video.mp4",
    gallery: [
      "/progetti/07-grinox/cover.jpg",
      "/progetti/07-grinox/01.jpg",
      "/progetti/07-grinox/02.jpg",
      "/progetti/07-grinox/03.jpg",
      "/progetti/07-grinox/04.jpg",
      "/progetti/07-grinox/05.jpg",
      "/progetti/07-grinox/06.jpg",
      "/progetti/07-grinox/07.jpg"
    ],
    mediaItems: [
      { type: "video", src: "/progetti/07-grinox/cover-video.mp4", alt: "Gr Inox Cover Video" },
      { type: "image", src: "/progetti/07-grinox/cover.jpg", alt: "Gr Inox Cover Image" },
      { type: "image", src: "/progetti/07-grinox/01.jpg", alt: "Gr Inox Detail 01" },
      { type: "image", src: "/progetti/07-grinox/02.jpg", alt: "Gr Inox Detail 02" },
      { type: "image", src: "/progetti/07-grinox/03.jpg", alt: "Gr Inox Detail 03" },
      { type: "image", src: "/progetti/07-grinox/04.jpg", alt: "Gr Inox Detail 04" },
      { type: "image", src: "/progetti/07-grinox/05.jpg", alt: "Gr Inox Detail 05" },
      { type: "image", src: "/progetti/07-grinox/06.jpg", alt: "Gr Inox Detail 06" },
      { type: "image", src: "/progetti/07-grinox/07.jpg", alt: "Gr Inox Detail 07" }
    ],
    year: "2026",
    description: "Un'azienda a conduzione familiare, guidata da due fratelli, con un'identità visiva ormai datata. Il brief chiedeva un ringiovanimento completo del brand, mantenendo al centro il legame tra i due fratelli e la lavorazione dell'acciaio.",
    strategyTitle: "IL PROGETTO & LA STRATEGIA",
    strategyDescription: "Un'azienda a conduzione familiare, guidata da due fratelli, con un'identità visiva ormai datata. Il brief chiedeva un ringiovanimento completo del brand, mantenendo al centro il legame tra i due fratelli e la lavorazione dell'acciaio.",
    visualDirectionTitle: "DIREZIONE VISIVA & SVILUPPO CONCETTUALE",
    visualDirectionDescription: "Ho sviluppato un logotipo forte ed energico: le lettere G e R condividono un'asta con una legatura che richiama una giuntura saldata. Palette colori tecnica ed energica, abbinata a un font deciso.",
    scope: ["Brand Strategy", "Rebranding", "Logo Design", "Visual Identity"],
    credits: [{ role: "Brand Designer", name: "Peppe Esposito" }],
    featured: true
  },
  {
    id: "am-barber",
    slug: "am-barber",
    title: "IL BARBIERE DEL VICO",
    cardTitle: "AM BARBER",
    subtitle: "Logo minimal per una barberia italiana dallo stile pulito",
    category: "Branding & UX/UI",
    subCategory: "Brand Identity",
    coverImage: "/progetti/08-ilbarbieredelvico/cover.jpg",
    gallery: [
      "/progetti/08-ilbarbieredelvico/cover.jpg",
      "/progetti/08-ilbarbieredelvico/01.jpg",
      "/progetti/08-ilbarbieredelvico/02.jpg",
      "/progetti/08-ilbarbieredelvico/03.jpg",
      "/progetti/08-ilbarbieredelvico/04.jpg",
      "/progetti/08-ilbarbieredelvico/05.jpg",
      "/progetti/08-ilbarbieredelvico/06.jpg",
      "/progetti/08-ilbarbieredelvico/07.jpg"
    ],
    mediaItems: [
      { type: "image", src: "/progetti/08-ilbarbieredelvico/cover.jpg", alt: "Il Barbiere del Vico Cover Image" },
      { type: "image", src: "/progetti/08-ilbarbieredelvico/01.jpg", alt: "Il Barbiere del Vico Detail 01" },
      { type: "image", src: "/progetti/08-ilbarbieredelvico/02.jpg", alt: "Il Barbiere del Vico Detail 02" },
      { type: "image", src: "/progetti/08-ilbarbieredelvico/03.jpg", alt: "Il Barbiere del Vico Detail 03" },
      { type: "image", src: "/progetti/08-ilbarbieredelvico/04.jpg", alt: "Il Barbiere del Vico Detail 04" },
      { type: "image", src: "/progetti/08-ilbarbieredelvico/05.jpg", alt: "Il Barbiere del Vico Detail 05" },
      { type: "image", src: "/progetti/08-ilbarbieredelvico/06.jpg", alt: "Il Barbiere del Vico Detail 06" },
      { type: "image", src: "/progetti/08-ilbarbieredelvico/07.jpg", alt: "Il Barbiere del Vico Detail 07" }
    ],
    year: "2024",
    description: "Un progetto per un amico che stava per aprire il suo salone di barberia italiana. La richiesta era chiara: un logo che integrasse le sue iniziali (AM), mantenendo uno stile moderno e pulito.",
    strategyTitle: "IL PROGETTO & LA STRATEGIA",
    strategyDescription: "Un progetto per un amico che stava per aprire il suo salone di barberia italiana. La richiesta era chiara: un logo che integrasse le sue iniziali (AM), mantenendo uno stile moderno e pulito.",
    visualDirectionTitle: "DIREZIONE VISIVA & SVILUPPO CONCETTUALE",
    visualDirectionDescription: "Ho sviluppato un logo minimal, integrando le iniziali del cliente in un pittogramma che richiama anche i lineamenti di un capello. Insieme al cliente abbiamo scelto una palette neutra, bianco e nero.",
    scope: ["Brand Strategy", "Logo Design", "Visual Identity"],
    credits: [{ role: "Brand Designer", name: "Peppe Esposito" }],
    featured: true
  },
  {
    id: "japan",
    slug: "japan",
    title: "JAPAN",
    subtitle: "Set di sticker illustrati ispirati ai monumenti iconici del Giappone",
    category: "Branding & UX/UI",
    subCategory: "Illustrazione",
    coverImage: "/progetti/09-japan/cover.jpg",
    coverVideo: "/progetti/09-japan/cover-video.mp4",
    gallery: [
      "/progetti/09-japan/cover.jpg",
      "/progetti/09-japan/01.jpg",
      "/progetti/09-japan/02.jpg",
      "/progetti/09-japan/03.jpg",
      "/progetti/09-japan/04.jpg",
      "/progetti/09-japan/05.jpg",
      "/progetti/09-japan/06.jpg",
      "/progetti/09-japan/07.jpg"
    ],
    mediaItems: [
      { type: "video", src: "/progetti/09-japan/cover-video.mp4", alt: "Japan Cover Video" },
      { type: "image", src: "/progetti/09-japan/cover.jpg", alt: "Japan Cover Image" },
      { type: "image", src: "/progetti/09-japan/01.jpg", alt: "Japan Detail 01" },
      { type: "image", src: "/progetti/09-japan/02.jpg", alt: "Japan Detail 02" },
      { type: "image", src: "/progetti/09-japan/03.jpg", alt: "Japan Detail 03" },
      { type: "image", src: "/progetti/09-japan/04.jpg", alt: "Japan Detail 04" },
      { type: "image", src: "/progetti/09-japan/05.jpg", alt: "Japan Detail 05" },
      { type: "image", src: "/progetti/09-japan/06.jpg", alt: "Japan Detail 06" },
      { type: "image", src: "/progetti/09-japan/07.jpg", alt: "Japan Detail 07" }
    ],
    year: "2025",
    description: "Uno dei miei progetti preferiti in assoluto. Nato come esercizio accademico — sviluppare un set di 3 sticker con relative declinazioni future — ho scelto come tema il Giappone, paese di cui sono da sempre appassionato, illustrando tre monumenti iconici: il Monte Fuji, il tempio Senso-ji e il portale Torii.",
    strategyTitle: "IL PROGETTO & LA STRATEGIA",
    strategyDescription: "Uno dei miei progetti preferiti in assoluto. Nato come esercizio accademico — sviluppare un set di 3 sticker con relative declinazioni future — ho scelto come tema il Giappone, paese di cui sono da sempre appassionato, illustrando tre monumenti iconici: il Monte Fuji, il tempio Senso-ji e il portale Torii.",
    visualDirectionTitle: "DIREZIONE VISIVA & SVILUPPO CONCETTUALE",
    visualDirectionDescription: "Ho disegnato gli sticker da zero su Procreate (iPad) per poi digitalizzarli su Illustrator, scegliendo una palette colori e uno stile dal sapore retro.",
    scope: ["Illustration", "Sticker Design", "Procreate Artwork"],
    credits: [{ role: "Illustrator & Designer", name: "Peppe Esposito" }],
    featured: true
  },
  {
    id: "lumea",
    slug: "lumea",
    title: "LUMEA",
    subtitle: "Identità delicata per un brand di candele artigianali",
    category: "Branding & UX/UI",
    subCategory: "Brand Identity",
    coverImage: "/progetti/10-lumea/cover.jpg",
    gallery: [
      "/progetti/10-lumea/cover.jpg",
      "/progetti/10-lumea/01.jpg",
      "/progetti/10-lumea/02.jpg",
      "/progetti/10-lumea/03.jpg",
      "/progetti/10-lumea/04.jpg",
      "/progetti/10-lumea/05.jpg",
      "/progetti/10-lumea/06.jpg",
      "/progetti/10-lumea/07.jpg",
      "/progetti/10-lumea/08.jpg"
    ],
    mediaItems: [
      { type: "image", src: "/progetti/10-lumea/cover.jpg", alt: "Lumea Cover Image" },
      { type: "image", src: "/progetti/10-lumea/01.jpg", alt: "Lumea Detail 01" },
      { type: "image", src: "/progetti/10-lumea/02.jpg", alt: "Lumea Detail 02" },
      { type: "image", src: "/progetti/10-lumea/03.jpg", alt: "Lumea Detail 03" },
      { type: "image", src: "/progetti/10-lumea/04.jpg", alt: "Lumea Detail 04" },
      { type: "image", src: "/progetti/10-lumea/05.jpg", alt: "Lumea Detail 05" },
      { type: "image", src: "/progetti/10-lumea/06.jpg", alt: "Lumea Detail 06" },
      { type: "image", src: "/progetti/10-lumea/07.jpg", alt: "Lumea Detail 07" },
      { type: "image", src: "/progetti/10-lumea/08.jpg", alt: "Lumea Detail 08" }
    ],
    year: "2026",
    description: "Un progetto sviluppato per un brand di candele artigianali, con totale libertà creativa lasciata dal cliente su stile e palette colori.",
    strategyTitle: "IL PROGETTO & LA STRATEGIA",
    strategyDescription: "Un progetto sviluppato per un brand di candele artigianali, con totale libertà creativa lasciata dal cliente su stile e palette colori.",
    visualDirectionTitle: "DIREZIONE VISIVA & SVILUPPO CONCETTUALE",
    visualDirectionDescription: "Ho sviluppato un pittogramma che richiama il movimento di una candela durante la sua consumazione, abbinato a un font dai tratti morbidi e naturali. Palette colori tenue e rilassante, coerente con l'atmosfera del prodotto.",
    scope: ["Brand Strategy", "Logo Design", "Visual Identity"],
    credits: [{ role: "Brand Designer", name: "Peppe Esposito" }],
    featured: true
  },
  {
    id: "mnz",
    slug: "mnz",
    title: "MNZ CARTONGESSO",
    cardTitle: "MNZ",
    subtitle: "Identità tecnica e decisa per un'azienda di cartongesso",
    category: "Branding & UX/UI",
    subCategory: "Brand Identity",
    coverImage: "/progetti/11-mnz/cover.jpg",
    coverVideo: "/progetti/11-mnz/cover-video.mp4",
    gallery: [
      "/progetti/11-mnz/cover.jpg",
      "/progetti/11-mnz/01.jpg",
      "/progetti/11-mnz/02.jpg",
      "/progetti/11-mnz/03.jpg",
      "/progetti/11-mnz/04.jpg",
      "/progetti/11-mnz/05.jpg",
      "/progetti/11-mnz/06.jpg",
      "/progetti/11-mnz/07.jpg"
    ],
    mediaItems: [
      { type: "video", src: "/progetti/11-mnz/cover-video.mp4", alt: "MNZ Cartongesso Cover Video" },
      { type: "image", src: "/progetti/11-mnz/cover.jpg", alt: "MNZ Cartongesso Cover Image" },
      { type: "image", src: "/progetti/11-mnz/01.jpg", alt: "MNZ Cartongesso Detail 01" },
      { type: "image", src: "/progetti/11-mnz/02.jpg", alt: "MNZ Cartongesso Detail 02" },
      { type: "image", src: "/progetti/11-mnz/03.jpg", alt: "MNZ Cartongesso Detail 03" },
      { type: "image", src: "/progetti/11-mnz/04.jpg", alt: "MNZ Cartongesso Detail 04" },
      { type: "image", src: "/progetti/11-mnz/05.jpg", alt: "MNZ Cartongesso Detail 05" },
      { type: "image", src: "/progetti/11-mnz/06.jpg", alt: "MNZ Cartongesso Detail 06" },
      { type: "image", src: "/progetti/11-mnz/07.jpg", alt: "MNZ Cartongesso Detail 07" }
    ],
    year: "2024",
    description: "Un progetto realizzato per un caro amico. Dal punto di vista creativo è stato tra i più interessanti da sviluppare, con un'ispirazione nata da un dettaglio inaspettato: le pareti della mia stanza.",
    strategyTitle: "IL PROGETTO & LA STRATEGIA",
    strategyDescription: "Un progetto realizzato per un caro amico. Dal punto di vista creativo è stato tra i più interessanti da sviluppare, con un'ispirazione nata da un dettaglio inaspettato: le pareti della mia stanza.",
    visualDirectionTitle: "DIREZIONE VISIVA & SVILUPPO CONCETTUALE",
    visualDirectionDescription: "Ho sviluppato un'identità forte e tecnica, con una palette colori decisa capace di comunicare i valori del brand con immediatezza.",
    scope: ["Brand Strategy", "Logo Design", "Visual Identity"],
    credits: [{ role: "Brand Designer", name: "Peppe Esposito" }],
    featured: true
  },
  {
    id: "urban-sound",
    slug: "urban-sound",
    title: "URBAN SOUND",
    subtitle: "Identità urbana per un festival di musica rap",
    category: "Branding & UX/UI",
    subCategory: "Brand Identity",
    coverImage: "/progetti/12-urbansound/cover.jpg",
    gallery: [
      "/progetti/12-urbansound/cover.jpg",
      "/progetti/12-urbansound/01.jpg",
      "/progetti/12-urbansound/02.jpg",
      "/progetti/12-urbansound/03.jpg",
      "/progetti/12-urbansound/04.jpg",
      "/progetti/12-urbansound/05.jpg",
      "/progetti/12-urbansound/06.jpg",
      "/progetti/12-urbansound/07.jpg"
    ],
    mediaItems: [
      { type: "image", src: "/progetti/12-urbansound/cover.jpg", alt: "Urban Sound Cover Image" },
      { type: "image", src: "/progetti/12-urbansound/01.jpg", alt: "Urban Sound Detail 01" },
      { type: "image", src: "/progetti/12-urbansound/02.jpg", alt: "Urban Sound Detail 02" },
      { type: "image", src: "/progetti/12-urbansound/03.jpg", alt: "Urban Sound Detail 03" },
      { type: "image", src: "/progetti/12-urbansound/04.jpg", alt: "Urban Sound Detail 04" },
      { type: "image", src: "/progetti/12-urbansound/05.jpg", alt: "Urban Sound Detail 05" },
      { type: "image", src: "/progetti/12-urbansound/06.jpg", alt: "Urban Sound Detail 06" },
      { type: "image", src: "/progetti/12-urbansound/07.jpg", alt: "Urban Sound Detail 07" }
    ],
    year: "2025",
    description: "Progetto accademico con un brief creativo: sviluppare l'identità per un festival di musica rap con line-up di tre artisti a scelta libera — ho selezionato artisti che ascolto quotidianamente.",
    strategyTitle: "IL PROGETTO & LA STRATEGIA",
    strategyDescription: "Progetto accademico con un brief creativo: sviluppare l'identità per un festival di musica rap con line-up di tre artisti a scelta libera — ho selezionato artisti che ascolto quotidianamente.",
    visualDirectionTitle: "DIREZIONE VISIVA & SVILUPPO CONCETTUALE",
    visualDirectionDescription: "Ho costruito un'identità dallo stile forte, capace di richiamare le atmosfere della musica di strada e della cultura rap.",
    scope: ["Brand Strategy", "Logo Design", "Visual Identity"],
    credits: [{ role: "Brand Designer", name: "Peppe Esposito" }],
    featured: true
  },
  {
    id: "void-museum",
    slug: "void-museum",
    title: "VOID MUSEUM",
    subtitle: "Sito multipagina immersivo per un museo d'arte contemporanea",
    category: "Branding & UX/UI",
    subCategory: "UX/UI Design",
    coverImage: "/progetti/13-voidmuseum/cover.avif",
    coverVideo: "/progetti/13-voidmuseum/cover-video.mp4",
    gallery: [
      "/progetti/13-voidmuseum/cover.avif",
      "/progetti/13-voidmuseum/01.avif",
      "/progetti/13-voidmuseum/02.avif",
      "/progetti/13-voidmuseum/03.avif",
      "/progetti/13-voidmuseum/04.jpg",
      "/progetti/13-voidmuseum/05.jpg",
      "/progetti/13-voidmuseum/06.jpg"
    ],
    mediaItems: [
      { type: "video", src: "/progetti/13-voidmuseum/cover-video.mp4", alt: "Void Museum Cover Video" },
      { type: "image", src: "/progetti/13-voidmuseum/cover.avif", alt: "Void Museum Cover Image" },
      { type: "image", src: "/progetti/13-voidmuseum/01.avif", alt: "Void Museum Detail 01" },
      { type: "image", src: "/progetti/13-voidmuseum/02.avif", alt: "Void Museum Detail 02" },
      { type: "image", src: "/progetti/13-voidmuseum/03.avif", alt: "Void Museum Detail 03" },
      { type: "image", src: "/progetti/13-voidmuseum/04.jpg", alt: "Void Museum Detail 04" },
      { type: "image", src: "/progetti/13-voidmuseum/05.jpg", alt: "Void Museum Detail 05" },
      { type: "image", src: "/progetti/13-voidmuseum/06.jpg", alt: "Void Museum Detail 06" }
    ],
    year: "2025",
    description: "Progetto accademico focalizzato esclusivamente sulla progettazione digitale: sviluppare un sito multipagina per un museo di arte contemporanea, senza intervenire sull'identità visiva del brand.",
    strategyTitle: "IL PROGETTO & LA STRATEGIA",
    strategyDescription: "Progetto accademico focalizzato esclusivamente sulla progettazione digitale: sviluppare un sito multipagina per un museo di arte contemporanea, senza intervenire sull'identità visiva del brand.",
    visualDirectionTitle: "DIREZIONE VISIVA & SVILUPPO CONCETTUALE",
    visualDirectionDescription: "Ho costruito un'esperienza dinamica e immersiva, con una palette colori fredda scelta in coerenza con l'identità complessiva del sito.",
    scope: ["UX/UI Design", "Website Design", "Multi-page Layout"],
    credits: [{ role: "UX/UI Designer", name: "Peppe Esposito" }],
    featured: true
  }
];
