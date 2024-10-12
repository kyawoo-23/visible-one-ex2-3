"use client";

import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlinePlayCircle } from "react-icons/md";
import PlaceHolderImage from "@/app/images/placeholder.jpeg";
import { formatDuration } from "@/app/shared";
import { MusicDBAPI } from "@/app/lib/axios/musicDB";
import { useMusicPlayer } from "@/app/lib/zustand/useMusicPlayer";

type Props = {
  track_id: string;
  image: string;
  title: string;
  artist: string;
  duration: string;
};

export default function Music({
  track_id,
  artist,
  duration,
  image,
  title,
}: Props) {
  const { setGettingTrackDetails, setTrackDetails } = useMusicPlayer();

  const handleMusicPlay = async () => {
    setGettingTrackDetails(true);
    const res = await MusicDBAPI.GetTrackDetails(track_id);
    setTrackDetails(res.data.track[0]);
    setGettingTrackDetails(false);
  };

  return (
    <div
      className='w-full grid grid-cols-[50px_1fr_1fr_80px_40px_40px] items-center gap-4 cursor-pointer group'
      onClick={handleMusicPlay}
    >
      <figure className='relative size-10 rounded'>
        <Image
          src={image || PlaceHolderImage}
          alt={title}
          fill
          className='object-cover rounded'
        />
        <div className='group-hover:absolute bg-black/60 size-10 z-10 inset-0 rounded grid place-items-center'>
          <MdOutlinePlayCircle color='#fff' size={24} />
        </div>
      </figure>

      <h4 className='font-semibold truncate'>{title}</h4>

      <p className='text-black/60 font-semibold truncate'>{artist}</p>

      <p className='text-black/60 font-semibold'>
        {formatDuration(Number(duration))}
      </p>

      <button className='text-black/60 hover:text-red-500'>
        <BiHeart size={20} />
      </button>

      <button className='text-black/60'>
        <BsThreeDots size={20} />
      </button>
    </div>
  );
}
