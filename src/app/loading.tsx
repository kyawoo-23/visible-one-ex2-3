"use client";

import { CgSpinner } from "react-icons/cg";

export default function loading() {
  return (
    <div className='w-full h-[75vh] grid place-items-center'>
      <CgSpinner className='animate-spin' size={32} />
    </div>
  );
}
