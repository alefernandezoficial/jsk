export interface CareerEntry {
  id: string;
  teamName: string;
  tag: string;
  era: string;
  period: string;
  role: string;
  region: string;
  note?: string;
}

export const careerHistory: CareerEntry[] = [
  // ==========================================
  // COUNTER-STRIKE 2
  // ==========================================
  {
    id: "cs2-alternative-ccd",
    teamName: "Alternative CCD",
    tag: "ALT",
    era: "Counter-Strike 2",
    period: "Era CS2",
    role: "Rifler / Entry Fragger",
    region: "Chile / Sudamérica",
    note: "Equipo competitivo de Chile"
  },
  {
    id: "cs2-university-warg",
    teamName: "University WarG",
    tag: "UWG",
    era: "Counter-Strike 2",
    period: "Era CS2",
    role: "Rifler",
    region: "Sudamérica"
  },

  // ==========================================
  // COUNTER-STRIKE 1.6
  // ==========================================
  {
    id: "cs-makest",
    teamName: "MAKEST",
    tag: "MKST",
    era: "CS 1.6",
    period: "Era 1.6",
    role: "Entry Fragger",
    region: "Rosario"
  },
  {
    id: "cs-sickgamers",
    teamName: "SickGamers",
    tag: "SG",
    era: "CS 1.6 / CS:GO",
    period: "Era 1.6 / CS:GO",
    role: "Rifler",
    region: "Argentina"
  },
  {
    id: "cs-demons-in-game",
    teamName: "Demons in Game",
    tag: "DiG",
    era: "CS 1.6",
    period: "Era 1.6",
    role: "Rifler",
    region: "Rosario"
  },
  {
    id: "cs-undertow",
    teamName: "UNDERTOW",
    tag: "UTW",
    era: "CS 1.6",
    period: "Era 1.6",
    role: "Rifler",
    region: "Argentina"
  },
  {
    id: "cs-keepsports",
    teamName: "KEEPSPORTS",
    tag: "KEEP",
    era: "CS:GO",
    period: "CS:GO",
    role: "Rifler",
    region: "Rosario"
  },
  {
    id: "cs-roar-of-victory",
    teamName: "ROAR OF VICTORY",
    tag: "ROV",
    era: "CS:GO / CS2",
    period: "CS:GO / CS2",
    role: "Entry Fragger",
    region: "Rosario"
  },
  {
    id: "cs-xtreme-your-zone",
    teamName: "XTREME YOUR ZONE",
    tag: "XYZ",
    era: "CS 1.6 / CS:GO",
    period: "Era 1.6 / CS:GO",
    role: "Rifler",
    region: "Argentina"
  },

  // ==========================================
  // COUNTER-STRIKE 1.5
  // ==========================================
  {
    id: "cs15-against-attack",
    teamName: "Against Attack",
    tag: "AA",
    era: "Counter-Strike 1.5",
    period: "Era CS 1.5",
    role: "Rifler",
    region: "Argentina"
  },
  {
    id: "cs15-skilled-five",
    teamName: "Skilled Five",
    tag: "s5",
    era: "Counter-Strike 1.5",
    period: "Era CS 1.5",
    role: "Rifler",
    region: "Argentina"
  }
];
