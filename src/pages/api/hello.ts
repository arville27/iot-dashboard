// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { InfluxDB } from "@influxdata/influxdb-client";
import { url, bucket, token, org } from "../../utils/config";

type Data = {
  dateTime: string;
  unit: string;
  value: string;
};

const queryApi = new InfluxDB({ url, token }).getQueryApi(org);

const fluxQuery = `
from(bucket: "${bucket}")
  |> range(start: -1y)
  |> filter(fn: (r) => r["_measurement"] == "visitor")
  |> yield(name: "mean")
`;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const rows: Data[] = [];

  queryApi.queryRows(fluxQuery, {
    next(row, tableMeta) {
      const o = tableMeta.toObject(row);
      console.log(o);
      rows.push({
        dateTime: o._time,
        unit: o._field,
        value: o._value,
      });
    },
    error(error) {
      console.error(error);
      console.log("\nFinished ERROR");
    },
    complete() {
      res.status(200).json(rows);
    },
  });
}
