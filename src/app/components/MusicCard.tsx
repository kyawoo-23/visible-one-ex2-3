import Image from "next/image";
import PlaceHolderImage from "@/app/images/placeholder.png";
import { MdOutlinePlayCircle } from "react-icons/md";

type Props = {
  title: string;
  artist: string;
  image: string;
};

export default function MusicCard({ artist, image, title }: Props) {
  return (
    <div className='flex flex-col gap-2'>
      <figure className='relative size-32 rounded-md group'>
        <Image
          src={image || PlaceHolderImage}
          alt={title}
          fill
          className='object-cover rounded-md'
        />

        <div className='group-hover:absolute bg-black/60 size-32 z-10 inset-0 rounded grid place-items-center'>
          <MdOutlinePlayCircle color='#fff' size={48} />
        </div>
      </figure>

      <div>
        <h3 className='font-semibold line-clamp-2'>{title}</h3>
        <p className='text-black/60 text-sm font-medium'>{artist}</p>
      </div>
    </div>
  );
}
