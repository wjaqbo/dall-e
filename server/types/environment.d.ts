export {};

declare global {
  namespace NodeJS {
    interface ProcesEnv {
      MONGODB_URL: string;
    }
  }
}
