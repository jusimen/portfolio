"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

const DELAY_BETWEEN_CHANGES = 200;
const DELAY_BETWEEN_LOOPS = 3000;
const NUMBER_OF_CHANGES = 3;

export default function Eye(props: {height: number, width: number}) {

    const [eyeState, setEyeState] = useState(true);

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
        <Image src={eyeState ? '/icons/eye_open.svg' : '/icons/eye_closed.svg'} width={props.width} height={props.height} alt={''} className='text-green-400'/>
    );
}
