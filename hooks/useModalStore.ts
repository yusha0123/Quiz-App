import { create } from "zustand";

export type modalType = "showResults" | "quitQuiz";

interface AdditionalData {
  score?: number;
  limit?: number;
}

interface modalStore {
  type: modalType | null;
  isOpen: boolean;
  additionalData: AdditionalData;
  onOpen: (type: modalType, data?: AdditionalData) => void;
  onClose: () => void;
}

const useModalStore = create<modalStore>((set) => ({
  type: null,
  isOpen: false,
  additionalData: {},
  onOpen: (type, data) => {
    set({ isOpen: true, type, additionalData: { ...data } });
  },
  onClose: () => set({ type: null, isOpen: false, additionalData: {} }),
}));

export default useModalStore;
