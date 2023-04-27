'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Routes } from '@/core/routes';
import { useEffect, useState } from 'react';
import {RiMenu3Fill } from 'react-icons/ri';

const routes = [
	{
		name: 'Home',
		path: Routes.HOME,
	},
	{
		name: 'About',
		path: Routes.ABOUT,
	},
	// {
	// 	name: 'Projects',
	// 	path: Routes.PROJECTS,
	// },
	// {
	// 	name: 'Blog',
	// 	path: Routes.BLOG,
	// },
	{
		name: 'Contact',
		path: Routes.CONTACT,
	},
];

const DELAY_BETWEEN_CHANGES = 200;
const DELAY_BETWEEN_LOOPS = 3000;
const NUMBER_OF_CHANGES = 3;

export default function Nav() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [eyeState, setEyeState] = useState(true);

	const currentPath = usePathname();

	useEffect(() => {
		const intervalId = setInterval(() => {
		  let count = 0;
		  const interval = setInterval(() => {
			count++;
			setEyeState(prevState => !prevState);
	
			if (count === NUMBER_OF_CHANGES) {
			  clearInterval(interval);
			}
		  }, DELAY_BETWEEN_CHANGES);
		}, DELAY_BETWEEN_LOOPS);
	
		return () => clearInterval(intervalId);
	  }, []);
		

	return (
		<nav className="flex justify-between w-full max-w-5xl font-silkscreen my-8">
			<Link href={'/'}>
				<div className="flex gap-2">
					<h1 className="text-2xl text-green-400 uppercase ">
						Jusi Monteiro
					</h1>
					<Image src={eyeState ? '/icons/eye_open.svg' : '/icons/eye_closed.svg'} width={30} height={30} alt={''} />
				</div>
			</Link>
			<RiMenu3Fill
				className="w-8 h-full text-white lg:hidden"
				onClick={() => setMenuOpen(true)}
			/>
			{/* Mobile */}
			<div
				className={`z-10 fixed top-0 h-screen p-4 bg-neutral-800 w-2/3 md:w-2/3 lg:hidden ease-linear duration-200 ${
					menuOpen ? 'right-0' : '-right-full'
				}`}>
				<ul className="flex flex-col justify-top items-end">
					<div
						className="text-3xl h-full text-white"
						onClick={() =>
							window.innerWidth < 1024 &&
							menuOpen &&
							setMenuOpen(false)
						}>
						X
					</div>
					<div className="flex flex-col justify-top items-end mt-8 gap-4">
						{routes.map((route) => (
							<li
								key={route.name}
								className={`text-2xl ${
									currentPath !== route.path
										? 'opacity-50 text-white hover:text-green-400'
										: 'text-green-200'
								}`}>
								<Link href={route.path} onClick={()=> setMenuOpen(false)}>{route.name}</Link>
							</li>
						))}
					</div>
				</ul>
			</div>
			{/* Destkop */}
			<div className="hidden lg:flex lg:justify-between lg:items-center">
				<ul className="flex justify-between items-center gap-4">
					{routes.map((route) => (
						<li
							key={route.name}
							className={`text-2xl ${
								currentPath !== route.path
									? 'opacity-50 text-white hover:text-green-400'
									: 'text-green-400'
							}`}>
							<Link href={route.path}>{route.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
