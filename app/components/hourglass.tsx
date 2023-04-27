'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const DELAY_BETWEEN_CHANGES = 500;

export default function Hourglass(props: { height: number; width: number }) {
	const [rotateState, setRotateState] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (rotateState === 360) {
				setRotateState(0);
			} else {
				setRotateState((prevState) => prevState + 45);
			}
		}, DELAY_BETWEEN_CHANGES);

		return () => clearInterval(interval);
	}, [rotateState]);

	return (
		<Image
			src={`/icons/hourglass.svg`}
			width={props.width}
			height={props.height}
			alt={''}
			className={`fill-gray-200 rotate-[${rotateState}deg]`}
		/>
	);
}
