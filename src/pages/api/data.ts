// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { InfluxDB } from "@influxdata/influxdb-client";
import { url, bucket, token, org } from "../../utils/config";

type Data = {
  dateTime: string;
  value: string;
};

const queryApi = new InfluxDB({ url, token }).getQueryApi(org);

const fluxQuery = `
from(bucket: "${bucket}")
  |> range(start: -1y)
  |> filter(fn: (r) => r["_measurement"] == "visitor")
  |> aggregateWindow(every: 24h, fn: count, createEmpty: false)
  |> timeShift(duration: -1d)
`;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const rows: Data[] = [];

  queryApi.queryRows(fluxQuery, {
    next(row, tableMeta) {
      const o = tableMeta.toObject(row);
      rows.push({
        dateTime: o._time,
        value: o._value,
      });
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
