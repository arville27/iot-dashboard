import MyGraph from "../components/MyGraph";
import MyResponsiveBar from "../components/MyResponsiveBar";
import MyHeader from "../components/MyHeader";
import MyListbox from "../components/dropdown/MyListBox";
import { ListBoxOption, GuestArrival } from "../types/data";
import useMyListBoxStore from "../components/dropdown/useMyListBox";
import { GetServerSideProps } from "next";
import MyResponsiveLine from "../components/MyResponsiveLine";
import { Poppins } from "@next/font/google";
import MyResponsiveCalendar from "../components/MyResponsiveCalendar";
import { dataGraph, dates, months, years, typeOptions } from "../dummy";
import TimseriesZoomable from "../components/TimseriesZoomable";
import MyDialog from "../components/dialog/MyDialog";
import useMyDialogStore from "../components/dialog/useMyDialogStore";
import MyTable from "../components/MyTable";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

export default function Home() {
  const selectedReportTypeOption = useMyListBoxStore(
    (state) => state.selectedReportType
  );
  const setSelectedReportTypeOption = useMyListBoxStore(
    (state) => state.setSelectedReportType
  );
  const selectedYearOption = useMyListBoxStore((state) => state.selectedYear);
  const setSelectedYearOption = useMyListBoxStore(
    (state) => state.setSelectedYear
  );
  const selectedMonthOption = useMyListBoxStore((state) => state.selectedMonth);
  const setSelectedMonthOption = useMyListBoxStore(
    (state) => state.setSelectedMonth
  );
  const selectedDateOption = useMyListBoxStore((state) => state.selectedDate);
  const setSelectedDateOption = useMyListBoxStore(
    (state) => state.setSelectedDate
  );

  return (
    <>
      <div className={`h-full min-h-screen w-full bg-base-300`}>
        <header>
          <MyHeader></MyHeader>
        </header>
        <main className="py-5">
          {/* <div className="m-5 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="block items-center gap-5 p-3 lg:flex ">
              <h3>Set Report Type :</h3>
              <MyListbox
                option={typeOptions}
                isDisabled={false}
                selectedOption={selectedReportTypeOption}
                setSelectedOption={setSelectedReportTypeOption}
              ></MyListbox>
            </div>
            <div className="w-fit rounded-md bg-base-200 p-3 shadow-sm">
              <h3>Set Time Period :</h3>
              <div className="flex flex-wrap gap-3">
                <div>
                  <label htmlFor="">Year</label>
                  <MyListbox
                    option={years}
                    isDisabled={false}
                    selectedOption={selectedYearOption}
                    setSelectedOption={setSelectedYearOption}
                  ></MyListbox>
                </div>
                <div>
                  <label htmlFor="">Month</label>
                  <MyListbox
                    option={months}
                    isDisabled={selectedReportTypeOption.id > 2}
                    selectedOption={selectedMonthOption}
                    setSelectedOption={setSelectedMonthOption}
                  ></MyListbox>
                </div>
                <div>
                  <label htmlFor="">Day</label>
                  <MyListbox
                    option={dates}
                    isDisabled={selectedReportTypeOption.id > 1}
                    selectedOption={selectedDateOption}
                    setSelectedOption={setSelectedDateOption}
                  ></MyListbox>
                </div>
              </div>
            </div>
          </div> */}

          <MyDialog />

          <div className="my-3 flex h-full w-full flex-col items-center gap-5">
            <h1 className="text-center text-3xl font-semibold italic">
              Your Guest Arrival {selectedReportTypeOption.name} Report
            </h1>
            <div className="flex w-10/12 justify-center gap-5">
              <div className="w-full">
                <div className="w-full overflow-x-scroll md:overflow-x-auto">
                  <div className="h-fit w-full min-w-[47rem] rounded-xl border-2 bg-white p-10">
                    <MyResponsiveCalendar data={dataGraph} />
                  </div>
                </div>
                <div className="w-full overflow-x-scroll md:overflow-x-auto">
                  <div className="h-fit w-full min-w-[47rem] rounded-xl border-2 bg-white p-10">
                    <TimseriesZoomable />
                  </div>
                </div>
              </div>
              <div>
                <MyTable data="" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = () => {
//   return {
//     props: {

//     },
//   };
// };
