import create from "zustand";

type DialogData = { date: Date; data: Date[] };

type MyDetailDialogStore = {
  isOpen: boolean;
  data: DialogData | null;
  setIsOpen: (isOpen: boolean) => void;
  setData: (date: DialogData) => void;
};

const useMyDetailDialogStore = create<MyDetailDialogStore>((set) => ({
  isOpen: false,
  data: null,
  setIsOpen: (bool) => set((state) => ({ ...state, isOpen: bool })),
  setData: (data) => set((state) => ({ ...state, data: data })),
}));

export default useMyDetailDialogStore;
