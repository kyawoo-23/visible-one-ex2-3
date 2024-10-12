import Image from "next/image";
import PlaceHolderImage from "@/app/images/placeholder.jpeg";

type Props = {
  title: string;
  artist: string;
  image: string;
};

export default function MusicCard({ artist, image, title }: Props) {
  return (
    <div className='flex flex-col gap-2'>
      <figure className='relative size-32 rounded-md'>
        <Image
          src={image || PlaceHolderImage}
          alt={title}
          fill
          className='object-cover rounded-md'
        />
      </figure>

      <div>
        <h3 className='font-semibold line-clamp-2'>{title}</h3>
        <p className='text-black/60 text-sm font-medium'>{artist}</p>
      </div>
    </div>
  );
}
