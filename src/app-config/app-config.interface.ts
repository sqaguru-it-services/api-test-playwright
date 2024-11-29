export interface AppConfig {
    baseApiUrl: string;
    urlPath: {
      auth: string;
      booking: string;
      [key: string]: string;
    };
    executionEnv: string;
    [key: string]: any;
}