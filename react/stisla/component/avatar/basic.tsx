import Image from "next/image";

export default function AvatarBasic({ src, alt, size }: any) {
  return (
    <figure className={`avatar mr-2 avatar-${size}`}>
      <Image src={ src } alt={ alt } layout="fill" />
    </figure>
  )
}