import Image from 'next/image';
import { SiNextdotjs, SiTailwindcss, SiGooglecloud, SiPython, SiTypescript, SiFlutter, SiFirebase, SiExpress, SiFastapi, SiDocker, SiGithub, SiInstagram, SiYoutube} from 'react-icons/si';
import { questions } from '@/types/questions';
import CustomAccordion from './components/accordion';
import { Routes } from './core/routes';
import Link from 'next/link';
import { SocialIcon } from './components/socials';

export default function Home() {
	return (
		<main className="w-full max-w-5xl">
      {/* Hero Section */}
			<div className='flex flex-col gap-4'>
        <div className="flex justify-center items-center gap-4 mt-8">
          <div className="w-72 h-72 relative">
            <Image
              src="/images/profile.png"
              alt={'Profile Picture of Jusi Monteiro, the full-stack developer behind this website'}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-8 items-start">
                  <h2 className="font-dislay text-lg lg:text-3xl text-white">
                    Hello there, I&apos;m{' '}
                    <span className="text-green-400">Jusi</span>.
                            <br /> I help businesses turn their vision into{' '}
                    <span className="text-green-400">software</span>.
                  </h2>
                  <div className='flex flex-row'>
                    {socialIcons.map((social, index) => (
                      <SocialIcon key={index} name={social.name} icon={social.icon} link={social.link}/>
                    ))}
                  </div>
                  <Link href={Routes.CONTACT} className='hidden md:block p-2 bg-indigo-800 text-3xl text-white font-silkscreen uppercase border-4 border-indigo-800 hover:border-white'>Let&apos;s Connect</Link>
                </div>
        </div>
              <Link href={Routes.CONTACT} className='md:hidden p-2 bg-indigo-800 text-3xl text-white text-center font-silkscreen uppercase border-4 border-indigo-800 hover:border-white'>Let&apos;s Connect</Link>
      </div>
      {/* Tech Stack */}
      <div className="flex flex-col mt-8 lg:mt-16 mx-4 md:mx-8">
        <h2 className='font-heading text-xl lg:text-2xl text-green-400 uppercase'>Tech Stack</h2>
        <div className='flex flex-wrap justify-evenly gap-4 mt-4 tech-stack-container'>
          {techStack.map((tech, index) => (
            <TechStackIcon key={index} name={tech.name} icon={tech.icon}/>
          ))}
        </div>  
			</div>
      {/* FAQ */}
      <div className="flex flex-col mt-8 lg:mt-16 mx-4 md:mx-8">
        <h2 className='font-heading text-xl lg:text-2xl text-green-400 uppercase'>FAQ</h2>
        <CustomAccordion questions={questions} />  
			</div>
		</main>
	);
}

interface TechStackProps {
  name: string;
  icon: React.ReactNode;
}

const techStack : TechStackProps[] = [
  {
    name: 'Next.js',
    icon: <SiNextdotjs className='w-full h-full'/>
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className='w-full h-full'/>
  },
  {
    name: 'Google Cloud',
    icon: <SiGooglecloud className='w-full h-full'/>
  },
  {
    name: 'Python',
    icon: <SiPython className='w-full h-full'/>
  },
  {
    name: 'Typescript',
    icon: <SiTypescript className='w-full h-full'/>
  },
  {
    name: 'Flutter',
    icon: <SiFlutter className='w-full h-full'/>
  },
  {
    name: 'Firebase',
    icon: <SiFirebase className='w-full h-full'/>
  },
  {
    name: 'Express',
    icon: <SiExpress className='w-full h-full'/>
  },
  {
    name: 'FastAPI',
    icon: <SiFastapi className='w-full h-full'/>
  },
  {
    name: 'Docker',
    icon: <SiDocker className='w-full h-full'/>
  },
]

const TechStackIcon = (props: TechStackProps) => {
  return (
    <div className='flex basis-1/4 md:basis-1/6 flex-col items-center justify-center m-2'>
      <div className='w-10 h-10 text-white relative'>
        {props.icon}
      </div>
      <p className='text-sm md:text-md lg:text-lg text-white text-center'>{props.name}</p>
    </div>
  )
};
const socialIcons : SocialIconProps[] = [
  {
    name: 'Github',
    icon: <SiGithub className='w-full h-full'/>,
    link: 'https://www.github.com/jusimen'
  },
  {
    name: 'Instagram',
    icon: <SiInstagram className='w-full h-full'/>,
    link: 'https://www.instagram.com/jusimen/'
  },
]
