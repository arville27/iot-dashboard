declare global {
  namespace NodeJS {
    interface ProcessEnv {
      INFLUXDB_URL: string;
      INFLUXDB_TOKEN: string;
      INFLUXDB_BUCKET: string;
      INFLUXDB_ORG: string;
      BROKER_HOSTNAME: string;
      BROKER_PORT: number;
      BROKER_TOPIC: string;
    }
  }
}

export {};
