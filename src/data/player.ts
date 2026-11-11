export interface LinkItem {
  id: string;
  label: string;
  url: string;
  username: string;
  platform: string;
}

export interface PlayerData {
  nickname: string;
  realName: string;
  game: string;
  country: string;
  countryCode: string;
  nationality: string;
  status: 'free-agent' | 'active' | 'contracted';
  currentTeam: string | null;
  role: string;
  alternateRole: string;
  portraits: {
    desktop: string;
    mobile: string;
    stageMoment: string;
  };
  competitivePlatforms: LinkItem[];
  socialLinks: LinkItem[];
  streamingLinks: LinkItem[];
  quickStats: {
    yearsActive: number;
    preferredWeapon: string;
    resolution: string;
    edpi: number;
  };
}

export const player: PlayerData = {
  nickname: "JSK",
  realName: "Alejandro Fernández",
  game: "Counter-Strike 2",
  country: "Argentina",
  countryCode: "AR",
  nationality: "Argentina",
  status: "free-agent",
  currentTeam: null,
  role: "Rifler / Entry Fragger",
  alternateRole: "Lurker / Coach",
  portraits: {
    desktop: "images/port.png",
    mobile: "images/port.png",
    stageMoment: "images/jsk3.jpg",
  },
  // Plataformas Competitivas Oficiales & Perfiles Verificados
  competitivePlatforms: [
    {
      id: "gamersclub",
      platform: "gamersclub",
      label: "GamersClub",
      url: "https://gamersclub.com.br/jogador/34165",
      username: "ID: 34165"
    },
    {
      id: "faceit",
      platform: "faceit",
      label: "Faceit",
      url: "https://www.faceit.com/es/players/jsk_cs",
      username: "jsk_cs"
    },
    {
      id: "challengermode",
      platform: "challengermode",
      label: "ChallengerMode",
      url: "https://www.challengermode.com/users/eab6cb63-803c-40d7-a328-70ce07e8f147",
      username: "jsk"
    },
    {
      id: "hltv",
      platform: "hltv",
      label: "HLTV",
      url: "https://www.hltv.org/profile/462055/jsk1337",
      username: "jsk1337"
    },
    {
      id: "liquipedia",
      platform: "liquipedia",
      label: "Liquipedia",
      url: "https://liquipedia.net/counterstrike/User:Jsk1337",
      username: "User:Jsk1337"
    }
  ],
  // Redes Sociales Oficiales
  socialLinks: [
    {
      id: "instagram",
      platform: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/ale.jsk",
      username: "@ale.jsk"
    },
    {
      id: "x",
      platform: "x",
      label: "X",
      url: "https://www.x.com/jsk_ale",
      username: "@jsk_ale"
    },
    {
      id: "facebook",
      platform: "facebook",
      label: "Facebook",
      url: "https://www.facebook.com/jsk.mbo",
      username: "jsk.mbo"
    }
  ],
  // Streaming y Canales Oficiales
  streamingLinks: [
    {
      id: "twitch",
      platform: "twitch",
      label: "TwitchStream",
      url: "https://www.twitch.tv/SoloHabilidad",
      username: "SoloHabilidad"
    },
    {
      id: "kick",
      platform: "kick",
      label: "KickStream",
      url: "https://www.kick.com/SoloHabilidad",
      username: "SoloHabilidad"
    },
    {
      id: "youtube",
      platform: "youtube",
      label: "YouTube",
      url: "https://www.youtube.com/c/jsk1337",
      username: "jsk1337"
    }
  ],
  quickStats: {
    yearsActive: 24,
    preferredWeapon: "AK-47 / M4A1-S",
    resolution: "1280x960 (4:3)",
    edpi: 640
  }
};
