"use client";

import { useMusicPlayer } from "@/app/lib/zustand/useMusicPlayer";
import Image from "next/image";
import React from "react";
import PlaceHolderImage from "@/app/images/placeholder.jpeg";
import { FiPlusCircle } from "react-icons/fi";
import { IoShuffle } from "react-icons/io5";
import { FaCirclePlay, FaVolumeHigh } from "react-icons/fa6";
import { IoMdRepeat, IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { RiPlayListFill } from "react-icons/ri";
import { MdDevices } from "react-icons/md";
import { formatDuration } from "@/app/shared";
import { CgSpinner } from "react-icons/cg";

export default function MusicPlayer() {
  const { trackDetails, gettingTrackDetails } = useMusicPlayer();

  return (
    <div className='h-[120px] w-full flex items-center gap-4 px-4 justify-between'>
      {gettingTrackDetails ? (
        <div className='flex flex-col items-center w-full'>
          <CgSpinner color='#fff' className='animate-spin' />
          <p className='text-center text-white text-sm mt-2'>
            Fetching your track details, please wait...
          </p>
        </div>
      ) : (
        <>
          {trackDetails ? (
            <>
              <div className='flex items-center gap-2 w-[280px] relative'>
                <figure className='relative rounded-full size-12 border-4 border-white/20'>
                  <Image
                    src={trackDetails?.strTrackThumb || PlaceHolderImage}
                    alt={trackDetails.strTrack}
                    fill
                    className='object-cover rounded-full'
                  />
                </figure>
                <div>
                  <h6 className='font-semibold text-white'>
                    {trackDetails.strTrack}
                  </h6>
                  <p className='text-white/60 text-sm'>
                    {trackDetails.strArtist}
                  </p>
                </div>
                <button
                  className='top-0 right-5 absolute'
                  aria-label='Add to playlist'
                >
                  <FiPlusCircle className='text-white' size={14} />
                </button>
              </div>

              <div className='flex items-center gap-6'>
                <button aria-label='Shuffle'>
                  <IoShuffle className='text-white/50' size={26} />
                </button>
                <button aria-label='Previous track'>
                  <IoMdSkipBackward color='#fff' size={28} />
                </button>
                <button aria-label='Play'>
                  <FaCirclePlay color='#fff' size={30} />
                </button>
                <button aria-label='Next track'>
                  <IoMdSkipForward color='#fff' size={28} />
                </button>
                <button aria-label='Repeat'>
                  <IoMdRepeat color='#fff' size={26} />
                </button>
              </div>

              <div className='w-full max-w-md flex justify-between items-center gap-2 text-white text-xs'>
                <span>0:00</span>
                <div className='h-2 bg-pink-500 rounded-full w-full cursor-pointer relative'>
                  <div className='h-2 bg-pink-700 rounded-full w-[40%]' />
                  <div className='size-4 rounded-full bg-white absolute left-[38%] -bottom-1 grid place-items-center cursor-pointer'>
                    <div className='size-2 rounded-full bg-pink-500' />
                  </div>
                </div>
                <span>{formatDuration(Number(trackDetails.intDuration))}</span>
              </div>

              <div className='flex items-center gap-4'>
                <button aria-label='Playlist'>
                  <RiPlayListFill color='#fff' size={20} />
                </button>
                <button aria-label='Devices'>
                  <MdDevices color='#fff' size={20} />
                </button>
                <button aria-label='Volume'>
                  <FaVolumeHigh color='#fff' size={20} />
                </button>
                <div className='w-[100px] max-w-md flex justify-between items-center'>
                  <div className='h-1 bg-pink-700 rounded-full w-full cursor-pointer'>
                    <div className='h-1 bg-white rounded-full w-[90%]' />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p className='text-center w-full text-white text-sm'>
              No track playing
            </p>
          )}
        </>
      )}
    </div>
  );
}
