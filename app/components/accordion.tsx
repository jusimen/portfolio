'use client';
import { Question } from '@/types/questions';
import * as Accordion from '@radix-ui/react-accordion';
import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

export default function CustomAccordion({
	questions,
}: {
	questions: Question[];
}) {
	return (
		<Accordion.Root type="multiple">
			{questions.map((question, index) => (
				<Accordion.Item key={index} value={question.question} className="my-4 p-4 border-b-2">
					<Accordion.Trigger className="font-heading text-white text-left ease-in group">
						<div className='flex flex-row gap-2 items-center text-lg'>
							<AiOutlineRight className={`w-7 h-7 text-green-400 ease-in duration-200 group-data-[state=open]:rotate-90`}/>
                            {question.question}
						</div>
					</Accordion.Trigger>
					<Accordion.Content className='text-white text-lg ease-in duration-200 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden'>{question.answer}</Accordion.Content>
				</Accordion.Item>
			))}
		</Accordion.Root>
	);
}