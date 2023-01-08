import { MqttClient } from "mqtt";
import create from "zustand";

type MyDialogStore = {
  mqttClient: MqttClient | null;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setMqttClient: (client: MqttClient) => void;
};

const useMyMessageDialogStore = create<MyDialogStore>((set) => ({
  isOpen: false,
  mqttClient: null,
  setIsOpen: (bool) => set((state) => ({ ...state, isOpen: bool })),
  setMqttClient: (client) => set((state) => ({ ...state, mqttClient: client })),
}));

export default useMyMessageDialogStore;
