export const LOGO =
  "https://variety.com/wp-content/uploads/2019/03/netflix-logo-n-icon.png?w=1000&h=563&crop=1";
export const DEFAULT_USER_AVTAR =
  "https://avatars.githubusercontent.com/u/47854133?v=4";

export const FETCH_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CONSTANT = "https://image.tmdb.org/t/p/w500/";

export const LANGUAGE_CONSTANTS = [
  { label: "en", value: "English" },
  { label: "hindi", value: "हिंदी" },
  { label: "es", value: "español" },
  { label: "tn", value: "தமிழ்" },
];

export const LANG = {
  tn: {
    play: "விளையாடு",
    moreInfo: "மேலும் தகவல்",
    signIn: "உள்நுழைக",
    signOut: "வெளியேறு",
    gptSearchPlaceholder: "நீங்கள் என்ன தேடுவது பார்க்க விரும்புகிறீர்கள்?",
    search: "தேடு",
  },
  es: {
    play: "Jugar",
    moreInfo: "Más información",
    signIn: "Iniciar sesión",
    signOut: "Cerrar sesión",
    gptSearchPlaceholder: "¿Qué te gustaría buscar?",
    search: "Buscar",
  },
  hindi: {
    play: "खेलें",
    moreInfo: "अधिक जानकारी",
    signIn: "साइन इन करें",
    signOut: "साइन आउट करें",
    gptSearchPlaceholder: "आप क्या खोजना चाहेंगे?",
    search: "खोजें",
  },
  en: {
    play: "Play",
    moreInfo: "More Info",
    signIn: "Sign In",
    signOut: "Sign out",
    gptSearchPlaceholder: "What would you like to search?",
    search: "Search",
  },
};

export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;
