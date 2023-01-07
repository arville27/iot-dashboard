// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/calendar
import { Datum, ResponsiveCalendar } from "@nivo/calendar";
import useMyDialogStore from "./dialog/detailDialog/useMyDetailDialogStore";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const MyResponsiveCalendar = ({ data }: { data: any }) => {
  const setDetailDialogIsOpen = useMyDialogStore((state) => state.setIsOpen);
  const setDetailDialogData = useMyDialogStore((state) => state.setDate);

  return (
    <div className="h-[13rem] w-[60rem] lg:w-full xl:h-[17rem]">
      <ResponsiveCalendar
        data={data}
        from="2016-01-01"
        to="2016-01-31"
        emptyColor="#e2e8f4"
        colors={["#C8B6E2", "#A8A4CE", "#7A86B6", "#495C83"]}
        margin={{ top: 0, right: 0, bottom: 0, left: 57 }}
        yearSpacing={40}
        daySpacing={2}
        monthBorderColor="#f0f6ff"
        dayBorderColor="#f0f6ff"
        legends={[
          {
            anchor: "bottom-right",
            direction: "row",
            translateY: 0,
            itemCount: 2,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 2,
            padding: { bottom: 4, right: 57 },
            itemDirection: "right-to-left",
          },
        ]}
        onClick={(data, event) => {
          const dataAsDatum = data as Datum;
          if (dataAsDatum.value) {
            setDetailDialogData(dataAsDatum.date);
            setDetailDialogIsOpen(true);
          }
        }}
      />
    </div>
  );
};

export default MyResponsiveCalendar;
