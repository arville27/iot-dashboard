import MyGraph from "../components/MyGraph";
import MyResponsiveBar from "../components/MyResponsiveBar";
import MyHeader from "../components/myHeader";
import MyListBox from "../components/MyListBox";

const data = [
  {
    weekDay: "Sunday",
    AM: 183,
    AMColor: "hsl(243, 70%, 50%)",
    PM: 143,
    PMColor: "hsl(45, 70%, 50%)",
  },
  {
    weekDay: "Monday",
    AM: 183,
    AMColor: "hsl(243, 70%, 50%)",
    PM: 143,
    PMColor: "hsl(45, 70%, 50%)",
  },
  {
    weekDay: "Tuesday",
    AM: 183,
    AMColor: "hsl(243, 70%, 50%)",
    PM: 143,
    PMColor: "hsl(45, 70%, 50%)",
  },
  {
    weekDay: "Wednesday",
    AM: 183,
    AMColor: "hsl(243, 70%, 50%)",
    PM: 143,
    PMColor: "hsl(45, 70%, 50%)",
  },
  {
    weekDay: "Thursday",
    AM: 183,
    AMColor: "hsl(243, 70%, 50%)",
    PM: 143,
    PMColor: "hsl(45, 70%, 50%)",
  },
  {
    weekDay: "Friday",
    AM: 183,
    AMColor: "hsl(243, 70%, 50%)",
    PM: 143,
    PMColor: "hsl(45, 70%, 50%)",
  },
  {
    weekDay: "Saturday",
    AM: 183,
    AMColor: "hsl(243, 70%, 50%)",
    PM: 143,
    PMColor: "hsl(45, 70%, 50%)",
  },
];

const typeOptions = [
  { id: 1, name: "Daily", unavailable: false },
  { id: 2, name: "Monthly", unavailable: false },
  { id: 3, name: "Annualy", unavailable: false },
];

export default function Home() {
  return (
    <>
      <div className="h-full w-full bg-sky-100">
        <header>
          <MyHeader></MyHeader>
        </header>
        <main className="mx-7">
          <div className="my-5">Ini buat field yang diinput...</div>
          <div>
            <label htmlFor="">Type</label>
            <MyListBox option={typeOptions} isDisabled={false}></MyListBox>
          </div>
          <div>
            <label htmlFor="">Year</label>
            <MyListBox option={typeOptions} isDisabled={true}></MyListBox>
          </div>
          <div>
            <label htmlFor="">Month</label>
            <MyListBox option={typeOptions} isDisabled={true}></MyListBox>
          </div>
          <div>
            <label htmlFor="">Day</label>
            <MyListBox option={typeOptions} isDisabled={false}></MyListBox>
          </div>
          <div className="flex h-fit flex-wrap gap-3 overflow-x-hidden"></div>
          <div className="my-3 flex flex-col gap-5">
            <div className="mx-auto h-full w-10/12 overflow-x-scroll">
              <div className="h-[47rem] w-[47rem] bg-white">
                <MyResponsiveBar data={data} />
              </div>
            </div>
            <div className="mx-auto h-full w-10/12 overflow-x-scroll">
              <div className="h-[47rem] w-[47rem] bg-white">
                <MyResponsiveBar data={data} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
