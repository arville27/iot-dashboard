import useMyDetailDialogStore from "./useMyDetailDialogStore";
import MasterDialog from "./../MasterDialog";

const MyDetailDialog = () => {
  const date = useMyDetailDialogStore((state) => state.date);
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
            {date && <p className="text-xs">lala pada {date.toDateString()}</p>}
          </span>
        }
        dialogState={{
          isOpen: detailDialogIsOpen,
          setIsOpen: setDetailDialogIsOpen,
        }}
      >
        <div className="scrollbar h-[20rem] overflow-y-auto px-1">
          <div className="flex flex-col gap-2 divide-y-2 rounded-lg bg-base-100">
            {[1, 2, 3, 5, 6, 7, 8, 9, 10, 11].map((data, i) => (
              <div key={i} className="px-6 py-4 text-base-content">
                2022 12 13
              </div>
            ))}
          </div>
        </div>
      </MasterDialog>
    </>
  );
};

export default MyDetailDialog;
