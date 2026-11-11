export interface CompetitivePlatformData {
  platform: "faceit" | "gamersclub";
  name: string;
  game: string;
  level: number;
  elo: number;
  eloFormatted: string;
  isVerified: boolean;
  profileUrl: string;
  username: string;
  region: string;
  themeColor: string;
  accentBg: string;
  levelTierLabel: string;
}

export interface CompetitiveRankingsData {
  faceit: CompetitivePlatformData;
  gamersclub: CompetitivePlatformData;
}

export const competitiveData: CompetitiveRankingsData = {
  faceit: {
    platform: "faceit",
    name: "FACEIT",
    game: "Counter-Strike 2",
    level: 9, // Nivel 9 FACEIT oficial
    elo: 1820, // 1,820 ELO oficial
    eloFormatted: "1,820",
    isVerified: true, // Cuenta verificada oficialmente
    profileUrl: "https://www.faceit.com/es/players/jsk_cs",
    username: "jsk_cs",
    region: "Sudamérica",
    themeColor: "#FF5500", // Naranja oficial de FACEIT
    accentBg: "rgba(255, 85, 0, 0.12)",
    levelTierLabel: "Nivel 9",
  },
  gamersclub: {
    platform: "gamersclub",
    name: "GamersClub",
    game: "Counter-Strike 2",
    level: 20, // Nivel 20 GamersClub oficial
    elo: 2902, // 2,902 Puntos ELO oficiales
    eloFormatted: "2,902",
    isVerified: true, // Cuenta verificada oficialmente
    profileUrl: "https://gamersclub.com.br/jogador/34165",
    username: "ID: 34165",
    region: "Sudamérica",
    themeColor: "#00A3FF", // Azul celeste característico GamersClub
    accentBg: "rgba(0, 163, 255, 0.12)",
    levelTierLabel: "Nivel 20",
  },
};
