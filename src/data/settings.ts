export interface SettingItem {
  key: string;
  label: string;
  value: string | number;
}

export interface CrosshairConfig {
  code: string;
  style: string;
  color: string;
  colorHex: string;
  size: number;
  thickness: number;
  gap: number;
  outline: number;
  dot: boolean;
  alpha: number;
  tStyle: boolean;
  sniperWidth: number;
}

export interface GamingSettingsData {
  mouse: SettingItem[];
  video: SettingItem[];
  crosshair: CrosshairConfig;
  crosshairDetails: SettingItem[];
  hardware: SettingItem[];
  peripherals: SettingItem[];
  launchOptions: string;
}

export const gamingSettings: GamingSettingsData = {
  mouse: [
    { key: "mouse", label: "Dispositivo de Ratón", value: "Logitech G PRO X Superlight White" },
    { key: "dpi", label: "DPI", value: "1600" },
    { key: "sensitivity", label: "Sensibilidad en Juego", value: "0.40" },
    { key: "edpi", label: "eDPI", value: "640" },
    { key: "polling_rate", label: "Tasa de Sondeo", value: "1000 Hz" },
    { key: "zoom_sens", label: "Sensibilidad con Zoom", value: "1.00" },
    { key: "raw_input", label: "Entrada Directa", value: "Activado" },
    { key: "win_sens", label: "Sensibilidad Windows", value: "6 / 11" },
    { key: "mouse_accel", label: "Aceleración de Ratón", value: "Desactivada (0.00)" },
  ],
  video: [
    { key: "resolution", label: "Resolución", value: "1280 × 960 (4:3 Estirada)" },
    { key: "aspect_ratio", label: "Relación de Aspecto", value: "4:3 Estirada" },
    { key: "refresh_rate", label: "Frecuencia de Actualización", value: "144 Hz (Monitor ASUS)" },
    { key: "display_mode", label: "Modo de Pantalla", value: "Pantalla Completa Exclusiva" },
    { key: "brightness", label: "Brillo", value: "93%" },
    { key: "shadow_quality", label: "Calidad Global de Sombras", value: "Baja" },
    { key: "model_detail", label: "Detalle de Modelos / Texturas", value: "Baja" },
    { key: "texture_filtering", label: "Filtrado de Texturas", value: "Bilineal" },
    { key: "shader_detail", label: "Detalle de Sombreadores", value: "Baja" },
    { key: "particle_detail", label: "Detalle de Partículas", value: "Baja" },
    { key: "ambient_occlusion", label: "Oclusión Ambiental", value: "Desactivada" },
    { key: "hdr", label: "Alto Rango Dinámico (HDR)", value: "Rendimiento" },
    { key: "fsr", label: "FSR (Super Resolución)", value: "Desactivado (Nativo)" },
    { key: "nvidia_reflex", label: "NVIDIA Reflex", value: "Activado" },
  ],
  crosshair: {
    code: "CSGO-uFqQx-r4y4X-T88Z8-q6vC8-XwJ5O",
    style: "Classic Static (4)",
    color: "Cyan",
    colorHex: "#00E5FF",
    size: 1.5,
    thickness: 0.8,
    gap: -2.5,
    outline: 0,
    dot: false,
    alpha: 255,
    tStyle: false,
    sniperWidth: 1,
  },
  crosshairDetails: [
    { key: "style", label: "Estilo", value: "Classic Static (4)" },
    { key: "size", label: "Tamaño / Largo", value: "1.5" },
    { key: "thickness", label: "Grosor", value: "0.8" },
    { key: "gap", label: "Separación", value: "-2.5" },
    { key: "outline", label: "Contorno", value: "0 (Desactivado)" },
    { key: "dot", label: "Punto Central", value: "No" },
    { key: "color", label: "Tono de Color", value: "Cyan (#00E5FF)" },
    { key: "alpha", label: "Opacidad", value: "255" },
  ],
  // Hardware y componentes de CPU oficiales de JSK (uniformes sin resaltados disparejos)
  hardware: [
    { key: "cpu", label: "CPU", value: "AMD Ryzen 7 5700X3D 4.1GHz Turbo AM4" },
    { key: "cooler", label: "COOLER", value: "ID-Cooling FROZN A620 PRO SE" },
    { key: "gpu", label: "GPU", value: "EVGA RTX 3060 Ti 8GB" },
    { key: "motherboard", label: "MotherBoard", value: "ASUS TUF GAMING B450M-PLUS II" },
    { key: "ram", label: "RAM", value: "T-Force Delta RGB DDR4 32GB 3200MHz" },
    { key: "soundcard", label: "SoundCard", value: "BEHRINGER U-PHORIA UM2" },
    { key: "psu", label: "PSU", value: "Corsair CX 750w 80 Plus Gold" },
    { key: "store1", label: "STORE 1", value: "SSD M.2 1TB XPG S11 Pro 3D NAND 3500MB/s" },
    { key: "store2", label: "STORE 2", value: "120GB SSD Kingston 500MB/s" },
    { key: "store3", label: "STORE 3", value: "1TB WD Blue" },
    { key: "case", label: "CASE", value: "ANTEC CX200M 5 Fans Cooler ARGB" },
  ],
  // Periféricos de juego oficiales de JSK (uniformes sin resaltados disparejos)
  peripherals: [
    { key: "mouse", label: "Mouse", value: "Logitech G PRO X Superlight White" },
    { key: "mousepad", label: "Mousepad", value: "90x40CM Pro Plus Personalizado (tiene mi cara)" },
    { key: "headset", label: "Auriculares", value: "HyperX Cloud Revolver" },
    { key: "keyboard", label: "Teclado", value: "ASUS ROG Strix M602 Falchion Ace RGB White" },
    { key: "monitor", label: "Monitor", value: "ASUS VG248QE 144hz" },
    { key: "monitor2", label: "Monitor 2", value: "LG 32' 75Hz" },
  ],
  launchOptions: "-high -novid -nojoy -allow_third_party_software -console +exec autoexec.vcfg"
};
