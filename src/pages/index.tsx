import { Poppins } from "@next/font/google";
import TimseriesZoomable from "../components/TimseriesZoomable";
import MyResponsiveCalendar from "../components/MyResponsiveCalendar";
import MyDetailDialog from "../components/dialog/detailDialog/MyDetailDialog";
import MyMessageDialog from "../components/dialog/messageDialog/MyMessageDialog";
import Footer from "../components/Footer";
import MyHeader from "../components/MyHeader";
import { useEffect } from "react";
import { baseUrl, mqttConfig } from "../utils/config";
import useMyMessageDialogStore from "../components/dialog/messageDialog/useMyMessageDialogStore";
import mqtt from "mqtt";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

type Props = {
  data: { dateTime: string; value: number }[];
};

const Home: React.FC<Props> = ({ data }) => {
  const setMqttClient = useMyMessageDialogStore((state) => state.setMqttClient);

  useEffect(() => {
    const client = mqtt.connect(mqttConfig);

    client.on("connect", () => {
      console.log("Connected to broker");
      setMqttClient(client);
    });

    return () => {
      client.end();
    };
  }, [setMqttClient]);

  if (!data) return null;

  return (
    <>
      <Head>
        <title>IoT Dashboard - Automatic Doorbell System</title>
      </Head>
      <div className={`min-h-screen bg-base-300 ${poppins.className}`}>
        <MyHeader />
        <main className="scrollbar container mx-auto mt-10">
          <div className="mb-20 flex flex-col gap-8">
            <h1 className="mx-auto text-3xl font-medium text-base-content">
              Dashboard
            </h1>
            <div className="z-10 mx-auto w-4/5 rounded-xl bg-base-200 p-8 text-base-content">
              <h1 className="text-center text-xl font-medium md:text-left">
                Time Series
              </h1>
              <TimseriesZoomable
                data={data.map((entry) => [
                  new Date(entry.dateTime).getTime(),
                  entry.value,
                ])}
              />
            </div>

            <div className="mx-auto w-4/5 rounded-xl bg-base-200 p-8 text-base-content">
              <h1 className="text-center text-xl font-medium md:text-left">
                Calendar
              </h1>
              <div className="scrollbar overflow-x-scroll lg:overflow-x-auto">
                <MyResponsiveCalendar
                  data={data.map((entry) => ({
                    day: entry.dateTime.split("T").shift(),
                    value: entry.value,
                  }))}
                />
              </div>
            </div>
          </div>
        </main>
        <Footer />

        <MyDetailDialog />
        <MyMessageDialog />
      </div>
    </>
  );
};

export default Home;

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${baseUrl}/api/data`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
