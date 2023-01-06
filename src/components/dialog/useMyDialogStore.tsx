import create from "zustand";

type MyDialogStore = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const useMyDialogStore = create<MyDialogStore>((set) => ({
  isOpen: true,
  setIsOpen: (bool) => set((state) => ({ ...state, isOpen: bool })),
}));

export default useMyDialogStore;
