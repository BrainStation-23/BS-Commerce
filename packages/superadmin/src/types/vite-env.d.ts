/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PROJECT_NAME: string;
  readonly VITE_HOST_API: string;
  // add other env variables here if needed
}

// Augment the ImportMeta interface from Vite
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
