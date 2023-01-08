import { IClientOptions } from "mqtt";
import {
  url,
  bucket,
  org,
  token,
  brokerHostname,
  brokerPort,
  brokerTopic,
} from "../../env";

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
  hostname: brokerHostname,
  protocolId: "MQTT",
  protocolVersion: 5,
  protocol: "ws",
  port: brokerPort,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30_000,
  rejectUnauthorized: false,
  clientId: "iot_web_dashboard",
};

export { url, bucket, org, token, baseUrl, mqttConfig, brokerTopic };
