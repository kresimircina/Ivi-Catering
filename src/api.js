const FALLBACK_API_URL = "https://front2.edukacija.online/backend/wp-json/wp";

export const API_BASE_URL = (process.env.REACT_APP_API_URL || FALLBACK_API_URL).replace(/\/$/, "");
