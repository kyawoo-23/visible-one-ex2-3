import Notification from "@/app/components/Notification";
import Searchbar from "@/app/components/Searchbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FiPlusCircle, FiUser } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineLibraryMusic, MdShowChart } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { TbPlaylist } from "react-icons/tb";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex bg-white w-full h-full rounded-b-[50px] shadow-lg max-h-[90vh]'>
      <div className='min-w-[280px] bg-gray-100 rounded-bl-[50px] flex flex-col gap-4 p-6 space-y-2'>
        <div className='flex items-center gap-4'>
          <figure className='relative size-12 rounded-full'>
            <Image
              src='https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='profile'
              fill
              className='object-cover rounded-full'
            />
          </figure>
          <div>
            <h3 className='font-semibold flex gap-2 items-center'>
              Joshua
              <button>
                <IoIosArrowDown />
              </button>
            </h3>
            <div className='border border-black/50 px-1 pt-[2px] text-[8px] text-center text-black/50 uppercase w-fit'>
              premium
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          <h3 className='uppercase text-gray-400 font-medium'>Browse</h3>
          <div className='flex flex-col gap-5'>
            <NavItem isActive title='Home' href='#'>
              <AiFillHome size={20} className='text-[#404040]' />
            </NavItem>
            <NavItem title='Songs' href='#'>
              <MdOutlineLibraryMusic size={20} className='text-[#404040]' />
            </NavItem>
            <NavItem title='Playlists' href='#'>
              <TbPlaylist size={20} className='text-[#404040]' />
            </NavItem>
            <NavItem title='Just for You' href='#'>
              <FiUser size={20} className='text-[#404040]' />
            </NavItem>
            <NavItem title='Top Charts' href='#'>
              <MdShowChart size={20} className='text-[#404040]' />
            </NavItem>
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          <div className='flex items-center justify-between'>
            <h3 className='uppercase text-gray-400 font-medium'>
              Your playlists
            </h3>
            <button>
              <FiPlusCircle className='text-[#404040]' size={20} />
            </button>
          </div>
          <div className='flex flex-col gap-5'>
            <NavItem title='Workout Mix' href='#'>
              <RiPlayList2Fill size={20} className='text-[#404040]' />
            </NavItem>
            <NavItem title="Chillin' at Home" href='#'>
              <RiPlayList2Fill size={20} className='text-[#404040]' />
            </NavItem>
            <NavItem title='Booping at Adobe' href='#'>
              <RiPlayList2Fill size={20} className='text-[#404040]' />
            </NavItem>
            <NavItem title='XD 4 Life' href='#'>
              <RiPlayList2Fill size={20} className='text-[#404040]' />
            </NavItem>
          </div>
        </div>
      </div>

      <div className='p-6 w-full overflow-y-auto myScrollBar'>
        <div className='flex items-center justify-between h-11 mb-4'>
          <Searchbar />
          <Notification />
        </div>

        {children}
      </div>
    </div>
  );
}

const NavItem = ({
  isActive = false,
  title,
  href,
  children,
}: {
  isActive?: boolean;
  title: string;
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className='flex items-center gap-4'>
      {children}
      <span
        className={`text-base text-[#404040] ${
          isActive ? "font-bold" : "font-medium"
        }`}
      >
        {title}
      </span>
    </Link>
  );
};
