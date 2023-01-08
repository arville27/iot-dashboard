// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/calendar
import { Datum, ResponsiveCalendar } from "@nivo/calendar";
import { baseUrl } from "../utils/config";
import useMyDialogStore from "./dialog/detailDialog/useMyDetailDialogStore";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const MyResponsiveCalendar = ({ data }: { data: any }) => {
  const setDetailDialogIsOpen = useMyDialogStore((state) => state.setIsOpen);
  const setDetailDialogData = useMyDialogStore((state) => state.setData);

  return (
    <div className="h-[13rem] w-[60rem] lg:w-full xl:h-[17rem]">
      <ResponsiveCalendar
        data={data}
        from="2022-01-01"
        to="2022-01-31"
        emptyColor="#e2e8f4"
        colors={["#C8B6E2", "#A8A4CE", "#7A86B6", "#495C83"]}
        margin={{ top: 0, right: 75, bottom: 0, left: 75 }}
        yearSpacing={40}
        daySpacing={2}
        monthBorderColor="#f0f6ff"
        dayBorderColor="#f0f6ff"
        legends={[
          {
            anchor: "bottom-right",
            direction: "row",
            translateY: 0,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 2,
            padding: { bottom: 4, right: 75 },
            itemDirection: "right-to-left",
          },
        ]}
        onClick={(data) => {
          async function getData(date: string) {
            const response = await fetch(`${baseUrl}/api/daily?date=${date}`);
            return await response.json();
          }
          const dataAsDatum = data as Datum;

          getData(data.day).then((result) => {
            if (dataAsDatum.value) {
              setDetailDialogData({
                date: dataAsDatum.date,
                data: result.map((entry: string) => new Date(entry)),
              });
              setDetailDialogIsOpen(true);
            }
          });
        }}
      />
    </div>
  );
};

export default MyResponsiveCalendar;
