import { MusicAPI } from "@/app/lib/axios/config";
import { TAllAlubmResponse, TAllTrackResposne } from "@/app/models";

export const MusicDBAPI = {
  GetAllTracks: async (album_id: string = "2115888") => {
    return await MusicAPI.get<TAllTrackResposne>(`track.php?m=${album_id}`);
  },

  GetTrackDetails: async (track_id: string) => {
    return await MusicAPI.get<TAllTrackResposne>(`track.php?h=${track_id}`);
  },

  GetAllAlbums: async (artist_id: string = "112024") => {
    return await MusicAPI.get<TAllAlubmResponse>(`album.php?i=${artist_id}`);
  },
};
