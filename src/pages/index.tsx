import { Poppins } from "@next/font/google";
import { dataGraph } from "../dummy";
import TimseriesZoomable from "../components/TimseriesZoomable";
import MyResponsiveCalendar from "../components/MyResponsiveCalendar";
import MyDetailDialog from "../components/dialog/detailDialog/MyDetailDialog";
import MyMessageDialog from "../components/dialog/messageDialog/MyMessageDialog";
import Footer from "../components/Footer";
import MyHeader from "../components/MyHeader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <div className={`min-h-screen bg-base-300 ${poppins.className}`}>
      <MyHeader />
      <main className="container mx-auto mt-10">
        <div className="mb-20 flex flex-col gap-8">
          <h1 className="mx-auto text-3xl font-medium text-base-content">
            Dashboard
          </h1>
          <div className="z-10 mx-auto w-4/5 rounded-xl bg-base-200 p-8 text-base-content">
            <h1 className="text-center text-xl font-medium md:text-left">
              Time Series
            </h1>
            <TimseriesZoomable />
          </div>

          <div className="mx-auto w-4/5 rounded-xl bg-base-200 p-8 text-base-content">
            <h1 className="text-center text-xl font-medium md:text-left">
              Calendar
            </h1>
            <div className="scrollbar overflow-x-scroll lg:overflow-x-auto">
              <MyResponsiveCalendar data={dataGraph} />
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <MyDetailDialog />
      <MyMessageDialog />
    </div>
  );
}
