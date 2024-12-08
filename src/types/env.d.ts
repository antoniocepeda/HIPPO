/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_ENVIRONMENT: 'development' | 'staging' | 'production';
  // Add other env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
