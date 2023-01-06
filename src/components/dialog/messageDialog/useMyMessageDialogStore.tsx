import create from "zustand";

type MyDialogStore = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const useMyMessageDialogStore = create<MyDialogStore>((set) => ({
  isOpen: false,
  setIsOpen: (bool) => set((state) => ({ ...state, isOpen: bool })),
}));

export default useMyMessageDialogStore;
