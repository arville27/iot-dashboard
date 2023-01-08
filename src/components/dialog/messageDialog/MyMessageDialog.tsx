import useMyMessageDialogStore from "./useMyMessageDialogStore";
import MasterDialog from "../MasterDialog";
import { brokerTopic } from "../../../utils/config";
import { useState } from "react";

const MyMessageDialog = () => {
  const [lcdMessage, setLcdMessage] = useState("");
  const { messageDialogIsOpen, setMessageDialogIsOpen, mqttClient } =
    useMyMessageDialogStore((state) => ({
      messageDialogIsOpen: state.isOpen,
      setMessageDialogIsOpen: state.setIsOpen,
      mqttClient: state.mqttClient,
    }));

  function sendMessage() {
    if (mqttClient) {
      mqttClient.publish(brokerTopic, lcdMessage);
      setMessageDialogIsOpen(false);
    }
  }

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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
          >
            <input
              className={`"border-primary"} w-full rounded border border-primary bg-base-100 px-4 py-2 outline-2 outline-offset-1 outline-primary-focus`}
              type="text"
              placeholder="Message content"
              maxLength={80}
              onChange={(e) => setLcdMessage(e.target.value)}
            />
          </form>
          <p className="m-1 text-xs text-base-content/70">
            This message will be displayed in your LCD*
          </p>
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={sendMessage}
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
