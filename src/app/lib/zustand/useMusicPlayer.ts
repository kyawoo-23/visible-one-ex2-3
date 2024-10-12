import { TTrack } from "@/app/models";
import { create } from "zustand";

type Store = {
  gettingTrackDetails: boolean;
  setGettingTrackDetails: (status: boolean) => void;
  trackDetails: TTrack | null;
  setTrackDetails: (track: TTrack) => void;
};

export const useMusicPlayer = create<Store>((set) => ({
  gettingTrackDetails: false,
  setGettingTrackDetails: (status) => {
    set({ gettingTrackDetails: status });
  },
  trackDetails: null,
  setTrackDetails: (track) => set({ trackDetails: track }),
}));
