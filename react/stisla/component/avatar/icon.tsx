import Image from "next/image";

export default function AvatarIcon({ avatarSrc, iconSrc, avatarAlt, iconAlt, size }: any) {
  return (
    <figure className={ `avatar mr-2 avatar-${size}` }>
      <Image src={ avatarSrc } alt={ avatarAlt } layout="fill" />
      <div className="avatar-icon" style={{ borderRadius: "100%" }}>
        <Image
          src={ iconSrc }
          alt={ iconAlt }
          layout="fill"
        />
      </div>
    </figure>
  )
}