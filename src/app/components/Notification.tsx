"use client";

import Image from "next/image";
import { useState } from "react";
import { GoBell } from "react-icons/go";

export default function Notification() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button className='relative' onClick={() => setIsOpen((prev) => !prev)}>
      <GoBell size={28} />
      <div className='absolute bg-primary size-4 grid place-items-center text-white rounded-full text-[10px] -top-1 -right-1'>
        3
      </div>

      {isOpen && (
        <div className='absolute right-0 -bottom-[150px] z-20 w-[260px] bg-white rounded shadow-lg border-2 border-gray-100'>
          <div className='flex flex-col'>
            {Array.from({ length: 3 }).map((_, idx) => (
              <div
                className='flex items-center justify-between p-2 hover:bg-gray-200'
                key={idx}
              >
                <div className='flex gap-2 items-center'>
                  <figure className='size-8 rounded-full relative'>
                    <Image
                      src='https://images.unsplash.com/photo-1460904577954-8fadb262612c?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt='profile'
                      fill
                      className='object-cover rounded-full'
                    />
                  </figure>
                  <div className='text-start'>
                    <h3 className='text-xs font-medium text-black/50'>
                      Maria likes your playlist
                    </h3>
                    <p className='text-xs font-semibold'>XD 4 Life.</p>
                  </div>
                </div>
                <span className='text-xs text-black/50'>2m</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </button>
  );
}
