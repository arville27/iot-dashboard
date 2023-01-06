// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/calendar
import { ResponsiveCalendar } from "@nivo/calendar";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveCalendar = ({ data /* see data tab */ }: { data: any }) => (
  <>
    <h1 className="text-semibold text-xl">Calendar</h1>
    <ResponsiveCalendar
      data={data}
      from="2016-01-01"
      to="2016-12-31"
      emptyColor="#eeeeee"
      colors={["#C8B6E2", "#A8A4CE", "#7A86B6", "#495C83"]}
      margin={{ top: 0, right: 40, bottom: 0, left: 40 }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: "right-to-left",
        },
      ]}
      onClick={(data, event) => console.log(data)}
    />
    <div className="m-5 flex items-center justify-end gap-2 text-sm">
      <span>Less</span>
      <div className="my-1 h-4 w-4 bg-[#EEEEEE]"></div>
      <div className="my-1 h-4 w-4 bg-[#C8B6E2]"></div>
      <div className="my-1 h-4 w-4 bg-[#A8A4CE]"></div>
      <div className="my-1 h-4 w-4 bg-[#7A86B6]"></div>
      <div className="my-1 h-4 w-4 bg-[#495C83]"></div>
      <span>More</span>
    </div>
  </>
);

export default MyResponsiveCalendar;
