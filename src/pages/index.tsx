import MyGraph from "../components/MyGraph";
import MyResponsiveBar from "../components/MyResponsiveBar";
import MyHeader from "../components/MyHeader";
import MyListbox from "../components/dropdown/MyListBox";
import { ListBoxOption, GuestArrival } from "../types/data";
import useMyListBoxStore from "../components/dropdown/useMyListBox";
import { GetServerSideProps } from "next";
import MyResponsiveLine from "../components/MyResponsiveLine";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const dataGraph: any[] = [
  {
    x: "January",
    y: 100,
  },
  {
    x: "February",
    y: 10,
  },
  {
    x: "March",
    y: 50,
  },
  {
    x: "April",
    y: 80,
  },
  {
    x: "May",
    y: 75,
  },
  {
    x: "June",
    y: 30,
  },
  {
    x: "July",
    y: 90,
  },
  {
    x: "August",
    y: 99,
  },
  {
    x: "September",
    y: 100,
  },
  {
    x: "October",
    y: 21,
  },
  {
    x: "November",
    y: 8,
  },
  {
    x: "December",
    y: 22,
  },
];

const typeOptions: ListBoxOption[] = [
  { id: 1, name: "Daily", unavailable: false },
  { id: 2, name: "Monthly", unavailable: false },
  { id: 3, name: "Annual", unavailable: false },
];

//dummy
const months: ListBoxOption[] = [
  { id: 1, name: "January", unavailable: false },
  { id: 2, name: "February", unavailable: false },
  { id: 3, name: "March", unavailable: false },
  { id: 4, name: "April", unavailable: false },
  { id: 5, name: "May", unavailable: false },
  { id: 6, name: "June", unavailable: false },
  { id: 7, name: "July", unavailable: false },
  { id: 8, name: "August", unavailable: false },
  { id: 9, name: "September", unavailable: false },
  { id: 10, name: "October", unavailable: false },
  { id: 11, name: "November", unavailable: false },
  { id: 12, name: "December", unavailable: false },
];

const years: ListBoxOption[] = [
  { id: 1, name: "2021", unavailable: false },
  { id: 2, name: "2022", unavailable: false },
  { id: 3, name: "2023", unavailable: false },
];

const dates: ListBoxOption[] = [
  { id: 1, name: "1", unavailable: false },
  { id: 2, name: "2", unavailable: false },
  { id: 3, name: "3", unavailable: false },
  { id: 4, name: "4", unavailable: false },
  { id: 5, name: "5", unavailable: false },
  { id: 6, name: "6", unavailable: false },
  { id: 7, name: "7", unavailable: false },
  { id: 8, name: "8", unavailable: false },
  { id: 9, name: "9", unavailable: false },
  { id: 10, name: "10", unavailable: false },
  { id: 11, name: "11", unavailable: false },
  { id: 12, name: "12", unavailable: false },
  { id: 13, name: "13", unavailable: false },
  { id: 14, name: "14", unavailable: false },
  { id: 15, name: "15", unavailable: false },
  { id: 16, name: "16", unavailable: false },
  { id: 17, name: "17", unavailable: false },
  { id: 18, name: "18", unavailable: false },
  { id: 19, name: "19", unavailable: false },
  { id: 20, name: "20", unavailable: false },
  { id: 21, name: "21", unavailable: false },
  { id: 22, name: "22", unavailable: false },
  { id: 23, name: "23", unavailable: false },
  { id: 24, name: "24", unavailable: false },
  { id: 25, name: "25", unavailable: false },
  { id: 26, name: "26", unavailable: false },
  { id: 27, name: "27", unavailable: false },
  { id: 28, name: "28", unavailable: false },
  { id: 29, name: "29", unavailable: false },
  { id: 30, name: "30", unavailable: false },
  { id: 31, name: "31", unavailable: false },
];

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
      <div
        className={`h-full min-h-screen w-full bg-base-300 ${poppins.className}`}
      >
        <header>
          <MyHeader></MyHeader>
        </header>
        <main className="py-5">
          <div className="m-5 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
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
          </div>
          <div className="my-3 flex h-full w-full flex-col gap-5">
            <h1 className="text-center text-3xl font-semibold italic">
              Your Guest Arrival {selectedReportTypeOption.name} Report
            </h1>
            <div className="mx-auto h-full w-10/12 overflow-x-scroll">
              <div className="h-[27rem] w-full min-w-[37rem] rounded-t-xl border-2 bg-white">
                <MyResponsiveBar data={dataGraph} />
              </div>
              <div className="h-[27rem] w-full min-w-[37rem] rounded-t-xl border-2 bg-white">
                <MyResponsiveLine
                  data={[
                    {
                      id: "japan",
                      color: "hsl(114, 70%, 50%)",
                      data: dataGraph,
                    },
                  ]}
                />
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
