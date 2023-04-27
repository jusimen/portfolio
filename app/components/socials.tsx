import Link from "next/link";

export const SocialIcon = (props: SocialIconProps) => {
    return (
      <Link href={props.link} target='_blank'> <div className='flex flex-row items-center justify-center mx-2 gap-2 text-white/50 hover:text-green-300 text-md'>
        <div className="w-5">
        {props.icon}
        </div>
        {props.name}
      </div></Link>
    );
  };