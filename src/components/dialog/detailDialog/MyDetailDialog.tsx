import useMyDetailDialogStore from "./useMyDetailDialogStore";
import MasterDialog from "./../MasterDialog";
import { ClockIcon } from "@heroicons/react/24/solid";

const MyDetailDialog = () => {
  const date = useMyDetailDialogStore((state) => state.data);
  const data = useMyDetailDialogStore((state) => state.data);
  const { detailDialogIsOpen, setDetailDialogIsOpen } = useMyDetailDialogStore(
    (state) => ({
      detailDialogIsOpen: state.isOpen,
      setDetailDialogIsOpen: state.setIsOpen,
    })
  );

  return (
    <>
      <MasterDialog
        title={
          <span className="text-base-content">
            Arrival Details
            {date && <p className="text-xs">on {date.date.toDateString()}</p>}
          </span>
        }
        dialogState={{
          isOpen: detailDialogIsOpen,
          setIsOpen: setDetailDialogIsOpen,
        }}
      >
        <div className="scrollbar h-[20rem] overflow-y-auto px-1">
          <div className="flex flex-col gap-2 divide-y-2 rounded-lg bg-base-100">
            {data &&
              data.data.map((entry, i) => (
                <div key={i} className="flex gap-3 px-6 py-4 text-base-content">
                  <span>{i + 1}</span>
                  <ClockIcon className="w-6" />
                  {`${entry.getHours().toString().padStart(2, "0")}:${entry
                    .getMinutes()
                    .toString()
                    .padStart(2, "0")}`}
                </div>
              ))}
          </div>
        </div>
      </MasterDialog>
    </>
  );
};

export default MyDetailDialog;
