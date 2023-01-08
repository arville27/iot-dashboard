declare global {
  namespace NodeJS {
    interface ProcessEnv {
      INFLUXDB_URL: string;
      INFLUXDB_TOKEN: string;
      INFLUXDB_BUCKET: string;
      INFLUXDB_ORG: string;
      NEXT_PUBLIC_BROKER_HOSTNAME: string;
      NEXT_PUBLIC_BROKER_PORT: number;
      NEXT_PUBLIC_BROKER_TOPIC: string;
    }
  }
}

export {};
