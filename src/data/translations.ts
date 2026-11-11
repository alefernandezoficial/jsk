export interface ContentData {
  nav: {
    profile: string;
    career: string;
    tournaments: string;
    settings: string;
  };
  titles: {
    profile: string;
    career: string;
    tournaments: string;
    settings: string;
  };
  routeDescriptions: {
    profile: string;
    career: string;
    tournaments: string;
    settings: string;
  };
  sidebar: {
    game: string;
    country: string;
    nationality: string;
    statusFreeAgent: string;
    statusActive: string;
    role: string;
    contactBtn: string;
    copyEmail: string;
    copied: string;
  };
  profile: {
    sectionTag: string;
    miniBioTitle: string;
    miniBio: string;
    personalDetailsTitle: string;
    details: {
      label: string;
      value: string;
    }[];
    platformsTitle: string;
    keySpecsTitle: string;
    specs: {
      label: string;
      value: string;
    }[];
  };
  career: {
    sectionTag: string;
    headline: string;
    currentTeam: string;
    statusBadge: string;
    tableHeaders: {
      team: string;
      period: string;
      role: string;
      region: string;
    };
  };
  tournaments: {
    sectionTag: string;
    headline: string;
    tableHeaders: {
      name: string;
      mode: string;
      placement: string;
    };
  };
  settings: {
    sectionTag: string;
    headline: string;
    tabMouse: string;
    tabVideo: string;
    tabCrosshair: string;
    tabHardware: string;
    tabPeripherals: string;
    crosshairCodeLabel: string;
    copyCrosshair: string;
    copied: string;
    launchOptionsTitle: string;
    copyLaunch: string;
  };
  footer: {
    text: string;
  };
}

export const content: ContentData = {
  nav: {
    profile: "PERFIL",
    career: "TRAYECTORIA",
    tournaments: "TORNEOS",
    settings: "CONFIGURACIÓN",
  },
  titles: {
    profile: "JSK — Perfil | Counter-Strike 2",
    career: "JSK — Trayectoria | Counter-Strike 2",
    tournaments: "JSK — Torneos y Resultados | Counter-Strike 2",
    settings: "JSK — Configuración | Counter-Strike 2",
  },
  routeDescriptions: {
    profile:
      "Perfil competitivo oficial de Alejandro Fernandez 'JSK' — Jugador de Counter-Strike 2 de Argentina. Rol: Entry Fragger. Agente libre disponible para equipos.",
    career:
      "Historial oficial de equipos y trayectoria competitiva de Alejandro Fernandez 'JSK' en circuitos de Counter-Strike en Sudamérica.",
    tournaments:
      "Historial competitivo y clasificaciones oficiales de torneos de Alejandro Fernandez 'JSK' en Counter-Strike 2, CS:GO, CS 1.6 y CS 1.5 (2001 — 2025).",
    settings:
      "Configuración verificada de Counter-Strike 2, sensibilidad a 1600 DPI, resolución 1280x960 estirada, código de mira y periféricos de torneo de JSK.",
  },
  sidebar: {
    game: "COUNTER-STRIKE 2",
    country: "ARGENTINA",
    nationality: "ARGENTINA",
    statusFreeAgent: "AGENTE LIBRE",
    statusActive: "ROSTER ACTIVO",
    role: "ENTRY FRAGGER / RIFLER",
    contactBtn: "CONSULTAR POR TRIAL",
    copyEmail: "COPIAR EMAIL",
    copied: "EMAIL COPIADO",
  },
  profile: {
    sectionTag: "PERFIL DEL JUGADOR",
    miniBioTitle: "RESUMEN COMPETITIVO",
    miniBio: `Mi trayectoria en Counter-Strike comenzó en 2001, compitiendo en LAN desde los primeros años de CS 1.5. Durante CS 1.6 participé en diferentes torneos presenciales de la escena argentina, incluyendo Challenge The Stars, PuntoNet, Dattatec y Area51, además de conseguir varios primeros puestos en competencias LAN y online.

Con la llegada de CS:GO continué compitiendo, logrando el primer puesto en Torneo CSGO LAN PuntoNet 2014 y el segundo puesto en Liga Open GamersClub 2019.

En CS2, mis resultados más destacados fueron el campeonato de Copa Profesional Sudamericana 2024 y el segundo puesto en ReDragon Battle Series S1 2024, además de participar en qualifiers y competencias sudamericanas.

Más de 20 años después, sigo vinculado a Counter-Strike, actualmente en stand by y abierto a nuevas oportunidades competitivas.`,
    personalDetailsTitle: "DATOS DEL JUGADOR",
    details: [
      { label: "Nombre Real", value: "Alejandro Fernández" },
      { label: "Trayectoria", value: "2001 — Presente (24+ años activo)" },
      { label: "Ubicación", value: "Rosario, Santa Fe" },
      { label: "Nacionalidad", value: "Argentina" },
      { label: "Juego Principal", value: "Counter-Strike 2" },
      { label: "Rol Táctico", value: "Entry Fragger / Rifler" },
      { label: "Estado Competitivo", value: "Agente Libre (Disponible)" },
      { label: "Idiomas", value: "Español (Nativo)" },
    ],
    platformsTitle: "PLATAFORMAS COMPETITIVAS",
    keySpecsTitle: "CONFIGURACIÓN BÁSICA",
    specs: [
      { label: "eDPI", value: "640" },
      { label: "Sensibilidad", value: "0.40 (1600 DPI)" },
      { label: "Resolución", value: "1280 × 960 (4:3)" },
      { label: "Frecuencia", value: "144 Hz" },
    ],
  },
  career: {
    sectionTag: "HISTORIAL DE EQUIPOS",
    headline: "Historial de equipos y alineaciones.",
    currentTeam: "ESTADO ACTUAL",
    statusBadge: "DISPONIBLE PARA OFERTAS",
    tableHeaders: {
      team: "EQUIPO",
      period: "PERÍODO",
      role: "ROL",
      region: "REGIÓN",
    },
  },
  tournaments: {
    sectionTag: "REGISTRO DE TORNEOS",
    headline: "Torneos y clasificaciones",
    tableHeaders: {
      name: "NOMBRE",
      mode: "MODALIDAD",
      placement: "POSICIÓN",
    },
  },
  settings: {
    sectionTag: "CONFIGURACIÓN TÉCNICA",
    headline: "Configuración competitiva verificada.",
    tabMouse: "RATÓN",
    tabVideo: "VÍDEO",
    tabCrosshair: "MIRA",
    tabHardware: "HARDWARE",
    tabPeripherals: "PERIFÉRICOS",
    crosshairCodeLabel: "CÓDIGO DE MIRA CS2",
    copyCrosshair: "COPIAR CÓDIGO",
    copied: "COPIADO",
    launchOptionsTitle: "OPCIONES DE LANZAMIENTO STEAM",
    copyLaunch: "COPIAR COMANDO",
  },
  footer: {
    text: "Alejandro ' jsk ' Fernandez - Jugador E-Sports de Counter-Strike - Since 2001",
  },
};

// Aliases to preserve compatibility
export const translations = {
  es: content,
};
export type Language = "es";
export type TranslationDictionary = ContentData;
