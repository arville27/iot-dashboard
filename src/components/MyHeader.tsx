import Image from "next/image";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import useMyMessageDialogStore from "./dialog/messageDialog/useMyMessageDialogStore";

const MyHeader = () => {
  const setMessageDialogIsOpen = useMyMessageDialogStore(
    (state) => state.setIsOpen
  );

  return (
    <header className="relative bg-neutral text-neutral-content shadow-md">
      <div className="container mx-auto flex items-center justify-between py-6 px-8 md:space-x-10">
        <div className="flex items-center justify-start gap-5 lg:w-0 lg:flex-1">
          <span className="sr-only">IoT Guest Notify</span>
          <Image width={30} height={30} src="/dark.png" alt="Icon" />
          <span className="hidden whitespace-nowrap text-lg font-semibold tracking-wide sm:block">
            IoT Guest Notify
          </span>
        </div>
        <div className="-my-2 -mr-2">
          <div className="flex w-full justify-end">
            <button
              className="m-3 flex items-center gap-3 rounded bg-primary py-2 px-4 text-sm font-bold text-primary-content hover:bg-blue-700"
              onClick={() => setMessageDialogIsOpen(true)}
            >
              <PaperAirplaneIcon className="h-6 w-6" />
              <span className="hidden sm:block">Send Message to LCD</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MyHeader;
