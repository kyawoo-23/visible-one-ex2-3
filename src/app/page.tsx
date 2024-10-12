import Music from "@/app/components/Music";
import MusicCard from "@/app/components/MusicCard";
import { MusicDBAPI } from "@/app/lib/axios/musicDB";
import { MdOutlinePlayCircle } from "react-icons/md";

export default async function Home() {
  const { data: tracks } = await MusicDBAPI.GetAllTracks();
  const { data: albums } = await MusicDBAPI.GetAllAlbums();

  return (
    <>
      <div className='flex gap-8 items-center'>
        <div className='relative w-[580px] h-[240px] bg-gradient-to-b from-primary to-pink-600 rounded-3xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 hover:z-10 transition-all hover:shadow-primary'>
          <div className='p-2'>
            <h1 className='text-white text-6xl font-extrabold'>GET LOST</h1>
            <p className='text-white/70 text-2xl'>in your music.</p>
          </div>
          <button>
            <MdOutlinePlayCircle color='#fff' size={30} />
          </button>
        </div>

        <div className='relative w-[580px] h-[240px] bg-gradient-to-b from-secondary to-blue-600 rounded-3xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 hover:z-10 transition-all hover:shadow-secondary'>
          <div className='p-2'>
            <h1 className='text-white text-6xl font-extrabold'>MELLOW</h1>
            <p className='text-white/70 text-2xl'>beats.</p>
          </div>
          <button>
            <MdOutlinePlayCircle color='#fff' size={30} />
          </button>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-8 mt-4'>
        <div className='space-y-2 sticky top-0'>
          <h2 className='text-xl font-semibold'>Recently Played</h2>
          {tracks.track.map((track) => (
            <Music
              key={track.idTrack}
              track_id={track.idTrack}
              artist={track.strArtist}
              duration={track.intDuration}
              title={track.strTrack}
              image={track.strTrackThumb || ""}
            />
          ))}
        </div>

        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Recommended For You</h2>

          <div className='grid grid-cols-3 gap-4'>
            {albums.album.map((album) => (
              <MusicCard
                key={album.idAlbum}
                artist={album.strArtist}
                image={album.strAlbumThumb || ""}
                title={album.strAlbum}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
