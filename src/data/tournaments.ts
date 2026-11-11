export interface TournamentRecord {
  id: string;
  nombre: string;
  modalidad: "LAN" | "Online";
  posicion: string;
}

export interface VersionGroup {
  id: "cs2" | "csgo" | "1.6" | "1.5";
  titulo: string;
  periodo: string;
  torneos: TournamentRecord[];
}

// Ordered strictly from most recent version to oldest: CS2 -> CS:GO -> CS 1.6 -> CS 1.5
// Within each version, ordered from newest to oldest tournament
export const torneosPorVersion: VersionGroup[] = [
  {
    id: "cs2",
    titulo: "Counter-Strike 2",
    periodo: "2024 — 2025",
    torneos: [
      { id: "cs2-1", nombre: "CCT Season 3 South America Series 3", modalidad: "Online", posicion: "16th" },
      { id: "cs2-2", nombre: "ReDragon Battle Series S1", modalidad: "Online", posicion: "2nd" },
      { id: "cs2-3", nombre: "Copa Profesional Sudamericana", modalidad: "Online", posicion: "1st" },
      { id: "cs2-4", nombre: "PGL Major SA Open Qualifier #2", modalidad: "Online", posicion: "129th" },
      { id: "cs2-5", nombre: "ACE South American Masters Spring Open Qualifier 2", modalidad: "Online", posicion: "Groups" },
      { id: "cs2-6", nombre: "ACE South American Masters Spring Open Qualifier 1", modalidad: "Online", posicion: "Groups" },
      { id: "cs2-7", nombre: "ACE South American Masters Fall Open Qualifier 2", modalidad: "Online", posicion: "Groups" },
      { id: "cs2-8", nombre: "ACE South American Masters Fall Open Qualifier 1", modalidad: "Online", posicion: "Groups" }
    ]
  },
  {
    id: "csgo",
    titulo: "Counter-Strike Global Offensive",
    periodo: "2014 — 2022",
    torneos: [
      { id: "csgo-1", nombre: "Copa BA Gaming", modalidad: "Online", posicion: "Groups" },
      { id: "csgo-2", nombre: "Liga Open GamersClub", modalidad: "Online", posicion: "2nd" },
      { id: "csgo-3", nombre: "Liga ESM Temporada #1", modalidad: "Online", posicion: "Groups" },
      { id: "csgo-4", nombre: "Torneo CSGO LAN PuntoNet", modalidad: "LAN", posicion: "1st" },
      { id: "csgo-5", nombre: "Liga CS:GO Argentina", modalidad: "Online", posicion: "3nd" },
      { id: "csgo-6", nombre: "Torneo Tecnofields Nitro", modalidad: "Online", posicion: "8th" },
      { id: "csgo-7", nombre: "Torneo XGamePro By EVGA", modalidad: "Online", posicion: "Groups" }
    ]
  },
  {
    id: "1.6",
    titulo: "Counter-Strike 1.6",
    periodo: "2004 — 2020",
    torneos: [
      { id: "cs16-1", nombre: "SouthAmerica PRO League Invite", modalidad: "Online", posicion: "4nd" },
      { id: "cs16-2", nombre: "Challenge The Stars ForAll Fecha#2", modalidad: "LAN", posicion: "2nd" },
      { id: "cs16-3", nombre: "Challenge The Stars ForAll Fecha#1", modalidad: "LAN", posicion: "5th" },
      { id: "cs16-4", nombre: "Comunidad SickGamers", modalidad: "Online", posicion: "1st" },
      { id: "cs16-8", nombre: "Caseros Cup #4", modalidad: "LAN", posicion: "4nd" },
      { id: "cs16-5", nombre: "Challenge The Stars PuntoNet", modalidad: "LAN", posicion: "8th" },
      { id: "cs16-15", nombre: "Qualy Challenge The Stars PuntoNet", modalidad: "LAN", posicion: "1st" },
      { id: "cs16-16", nombre: "ComandoGP Final Audition", modalidad: "LAN", posicion: "8th" },
      { id: "cs16-24", nombre: "FragPoint", modalidad: "Online", posicion: "1st" },
      { id: "cs16-6", nombre: "Dattatec Championship", modalidad: "LAN", posicion: "15th" },
      { id: "cs16-14", nombre: "Qualy Tecnofields", modalidad: "Online", posicion: "11th" },
      { id: "cs16-18", nombre: "Area51 Invierno", modalidad: "LAN", posicion: "8th" },
      { id: "cs16-9", nombre: "Extreme Experiencie", modalidad: "Online", posicion: "8th" },
      { id: "cs16-20", nombre: "Eventos Steam", modalidad: "Online", posicion: "1st" },
      { id: "cs16-21", nombre: "Extreme League I", modalidad: "Online", posicion: "1st" },
      { id: "cs16-22", nombre: "Extreme League II", modalidad: "Online", posicion: "1st" },
      { id: "cs16-23", nombre: "Gamingstars", modalidad: "Online", posicion: "1st" },
      { id: "cs16-13", nombre: "Qualy KODE5", modalidad: "Online", posicion: "12th" },
      { id: "cs16-7", nombre: "Punto Net Summer Cup", modalidad: "LAN", posicion: "16th" },
      { id: "cs16-10", nombre: "ComandoGP ThreeCups Last Edition", modalidad: "LAN", posicion: "12th" },
      { id: "cs16-11", nombre: "Qualy WCG", modalidad: "Online", posicion: "8th" },
      { id: "cs16-17", nombre: "ComandoGP Summer Championship", modalidad: "LAN", posicion: "8th" },
      { id: "cs16-12", nombre: "Qualy WCG", modalidad: "Online", posicion: "16th" },
      { id: "cs16-19", nombre: "Area51 Rosario Counter Cup", modalidad: "LAN", posicion: "8th" }
    ]
  },
  {
    id: "1.5",
    titulo: "Counter-Strike 1.5",
    periodo: "2001 — 2009",
    torneos: [
      { id: "cs15-7", nombre: "zGamerz Online", modalidad: "Online", posicion: "4nd" },
      { id: "cs15-8", nombre: "Torneo Us #1", modalidad: "Online", posicion: "4nd" },
      { id: "cs15-6", nombre: "CyberOP Living on CS", modalidad: "LAN", posicion: "1st" },
      { id: "cs15-5", nombre: "Cyber Andromeda League", modalidad: "LAN", posicion: "1st" },
      { id: "cs15-4", nombre: "Cyber Andromeda", modalidad: "LAN", posicion: "1st" },
      { id: "cs15-3", nombre: "Hardex Cup End Place", modalidad: "LAN", posicion: "1st" },
      { id: "cs15-2", nombre: "Hardex Summer Cup", modalidad: "LAN", posicion: "1st" },
      { id: "cs15-1", nombre: "Hardex Started", modalidad: "LAN", posicion: "1st" }
    ]
  }
];
