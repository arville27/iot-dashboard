// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { InfluxDB } from "@influxdata/influxdb-client";
import { url, bucket, token, org } from "../../utils/config";

const queryApi = new InfluxDB({ url, token }).getQueryApi(org);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
  const { date } = req.query;
  const rows: string[] = [];

  if (!date) {
    return res.status(200).json([]);
  }

  const dateISO = new Date(date.toString()).toISOString().split("T").shift();

  const fluxQuery = `
    from(bucket: "${bucket}")
    |> range(start: ${dateISO}T00:00:00Z, stop: ${dateISO}T23:59:59Z)
    |> filter(fn: (r) => r["_measurement"] == "visitor")
`;

  queryApi.queryRows(fluxQuery, {
    next(row, tableMeta) {
      const o = tableMeta.toObject(row);
      rows.push(String(o._time));
    },
    error(error) {
      console.error(error);
      console.log("\nFinished ERROR");
      return res.status(200).json([]);
    },
    complete() {
      return res.status(200).json(rows);
    },
  });
}
