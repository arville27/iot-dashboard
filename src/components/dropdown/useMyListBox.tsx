import create from "zustand";
import { ListBoxOption } from "../../types/data";

type MyListboxStore = {
  selectedReportType: ListBoxOption;
  selectedYear: ListBoxOption | null;
  selectedMonth: ListBoxOption | null;
  selectedDate: ListBoxOption | null;
  setSelectedReportType: (reportType: ListBoxOption) => void;
  setSelectedYear: (year: ListBoxOption) => void;
  setSelectedMonth: (month: ListBoxOption) => void;
  setSelectedDate: (date: ListBoxOption) => void;
};

const useMyListBoxStore = create<MyListboxStore>((set) => ({
  selectedReportType: { id: 1, name: "Daily", unavailable: false },
  selectedYear: { id: 1, name: "2021", unavailable: false },
  selectedMonth: { id: 1, name: "January", unavailable: false },
  selectedDate: { id: 1, name: "1", unavailable: false },
  setSelectedReportType: (reportType) =>
    set((state) => ({ ...state, selectedReportType: reportType })),
  setSelectedYear: (year) => set((state) => ({ ...state, selectedYear: year })),
  setSelectedMonth: (month) =>
    set((state) => ({ ...state, selectedMonth: month })),
  setSelectedDate: (date) => set((state) => ({ ...state, selectedDate: date })),
}));

export default useMyListBoxStore;
