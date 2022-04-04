export default function AvatarInitial({ size="", initial, bgColor="", textColor="text-white" }: any) {
  return (
    <figure
      className={ `avatar mr-2 avatar-${size} ${bgColor} ${textColor}` }
      data-initial={ initial }
    ></figure>
  );
}