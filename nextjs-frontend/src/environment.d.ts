declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_IPFS_API_KEY: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
