import create from "zustand";

type MyDetailDialogStore = {
  isOpen: boolean;
  date: Date | null;
  setIsOpen: (isOpen: boolean) => void;
  setDate: (date: Date) => void;
};

const useMyDetailDialogStore = create<MyDetailDialogStore>((set) => ({
  isOpen: false,
  date: null,
  setIsOpen: (bool) => set((state) => ({ ...state, isOpen: bool })),
  setDate: (date) => set((state) => ({ ...state, date: date })),
}));

export default useMyDetailDialogStore;
