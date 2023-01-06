import useMyMessageDialogStore from "./useMyMessageDialogStore";
import MasterDialog from "../MasterDialog";

const MyMessageDialog = () => {
  const { messageDialogIsOpen, setMessageDialogIsOpen } =
    useMyMessageDialogStore((state) => ({
      messageDialogIsOpen: state.isOpen,
      setMessageDialogIsOpen: state.setIsOpen,
    }));

  return (
    <>
      <MasterDialog
        dialogState={{
          isOpen: messageDialogIsOpen,
          setIsOpen: setMessageDialogIsOpen,
        }}
        title={<span className="text-base-content">Set Message</span>}
      >
        <div className="mt-2">
          <form action="">
            <input
              className="w-full rounded border border-primary bg-base-100 px-4 py-2 outline-2 outline-offset-1 outline-primary-focus"
              type="text"
              placeholder="Type something"
            />
          </form>
          <p className="m-1 text-xs text-base-content/70">
            This message will be displayed in your LCD*
          </p>
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={() => setMessageDialogIsOpen(false)}
          >
            Send
          </button>
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={() => setMessageDialogIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </MasterDialog>
    </>
  );
};

export default MyMessageDialog;
