import { IClientOptions } from "mqtt";

function getBaseUrl() {
  if (typeof window !== "undefined")
    // browser should use relative path
    return "";

  if (process.env.RENDER_INTERNAL_HOSTNAME)
    // reference for render.com
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

const baseUrl = getBaseUrl();

const mqttConfig: IClientOptions = {
  hostname: process.env.NEXT_PUBLIC_BROKER_HOSTNAME,
  protocolId: "MQTT",
  protocolVersion: 5,
  protocol: "ws",
  port: process.env.NEXT_PUBLIC_BROKER_PORT,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30_000,
  rejectUnauthorized: false,
  clientId: "iot_web_dashboard",
};

const brokerTopic = process.env.NEXT_PUBLIC_BROKER_TOPIC;
const url = process.env.INFLUXDB_URL;
const bucket = process.env.INFLUXDB_BUCKET;
const org = process.env.INFLUXDB_ORG;
const token = process.env.INFLUXDB_TOKEN;

export { url, bucket, org, token, baseUrl, mqttConfig, brokerTopic };
