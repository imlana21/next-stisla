import Image from "next/image";

export default function AvatarPresence({ src, alt, size, status }: any) {
  return (
    <figure className={`avatar mr-2 avatar-${size}`}>
      <Image src={ src } alt={ alt } layout="fill" />
      {/* online, busy, away, offline */}
      <i className={ `avatar-presence ${status}` }></i>
    </figure>
  )
}