/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_STRIPE_PUBLISHABLE_KEY: string;
    // Add other VITE_ keys here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  