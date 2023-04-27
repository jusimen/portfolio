'use client';
import { SocialIcon } from '@/components/socials';
import { useEffect, useState } from 'react';
import { SiGithub, SiInstagram, SiYoutube } from 'react-icons/si';

type FocusedInputs = {
	[key: string]: boolean;
};

export default function Contact() {
	const [focusedInputs, setFocusedInputs] = useState<FocusedInputs>({});
	const [successMessage, setSuccessMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [formValues, setFormValues] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		const inputName = e.target.name;
		setFocusedInputs((prevState) => ({ ...prevState, [inputName]: true }));
	};

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		const inputName = e.target.name;
		setFocusedInputs((prevState) => ({ ...prevState, [inputName]: false }));
	};

	const handleSubmit = (event: any) => {
		//Prevent default
		event.preventDefault();

		//Validate form
		if (!formValues.name || !formValues.email || !formValues.message) {
			setErrorMessage('Please fill out all fields.');
			return;
		}

		//Send email
		fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formValues),
		}).then((data) => {
			if (data.status === 200) {
				console.log('Success:', data);

				//Clear form
				setFormValues({
					name: '',
					email: '',
					message: '',
				});

				

				//Show success message
				setSuccessMessage('Message sent successfully!');
			} else {
				console.log('Error:', data);
				setErrorMessage(
					'Something went wrong, please try again later.'
				);
			}
		});
	};

	useEffect(() => {
		//Clear success message after 5 seconds
		if (successMessage) {
			setTimeout(() => {
				setSuccessMessage('');
			}, 5000);
		}

		//Clear error message after 5 seconds
		if (errorMessage) {
			setTimeout(() => {
				setErrorMessage('');
			}, 5000);
		}
	} , [successMessage, errorMessage]);

	return (
		<main className="w-full max-w-5xl">
			<div className="flex flex-col lg:flex-row gap-8">
				<form className=" flex flex-col flex-1 text-white/50 text-sm md:text-lg font-display mt-4 caret-green-700">
					<div className="flex flex-col md:flex-row md:flex-wrap md:items-center md:gap-4 mb-8">
						<h1 className="font-silkscreen text-4xl mb text-white ">
							Contact Me
						</h1>
						{successMessage && ( <span className="font-silkscreen text-green-400 text-lg md:text-xl">{successMessage}</span> )} {errorMessage && ( <span className="font-silkscreen text-red-400 text-lg md:text-xl">{errorMessage}</span> )}
					</div>
					{/* Name */}
					<label
						htmlFor="name"
						className={`font-silkscreen ease-linear duration-100 ${
							focusedInputs.name &&
							'text-green-400 text-lg md:text-xl'
						}`}>
						C:\What should I call you?\
					</label>
					<input
						type="text"
						name="name"
						className="bg-transparent p-2 ease-in duration-100 focus:outline-none name border-b-[1px] focus:border-b-2 border-white/50 focus:border-green-400 text-white/90 text-xl focus:text-xl autofill:bg-transparent autofill:fill-transparent"
						value={formValues.name}
						onChange={(e) =>
							setFormValues((prevState) => ({
								...prevState,
								name: e.target.value,
							}))
						}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
					{/* Email */}
					<label
						htmlFor="email"
						className={`font-silkscreen ease-linear duration-100 mt-8 ${
							focusedInputs.email &&
							'text-green-400 text-lg md:text-xl'
						}`}>
						C:\What email can I reach you at?\
					</label>
					<input
						type="email"
						name="email"
						className="bg-transparent p-2 ease-in duration-100 focus:outline-none name border-b-[1px] focus:border-b-2 border-white/50 focus:border-green-400 text-white/90 text-xl focus:text-xl autofill:bg-transparent"
						value={formValues.email}
						onChange={(e) =>
							setFormValues((prevState) => ({
								...prevState,
								email: e.target.value,
							}))
						}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
					{/* Message */}
					<label
						htmlFor="message"
						className={`font-silkscreen ease-linear duration-100 mt-8 ${
							focusedInputs.message &&
							'text-green-400 text-lg md:text-xl'
						}`}>
						C:\I&apos;m not home right now, please leave a message.
						Bip!\
					</label>
					<textarea
						name="message"
						className="bg-transparent p-2 ease-in duration-100 focus:outline-none name border-[1px] focus:border-2 border-white/50 focus:border-green-400 text-white/90 text-xl focus:text-xl autofill:bg-transparent"
						rows={5}
						value={formValues.message}
						onChange={(e) =>
							setFormValues((prevState) => ({
								...prevState,
								message: e.target.value,
							}))
						}
						//@ts-ignore
						onFocus={handleFocus}
						//@ts-ignore
						onBlur={handleBlur}></textarea>
					{/* Submit */}
					<button
						onClick={handleSubmit}
						className="bg-transparent border-2 border-white/50 hover:border-green-400 ease-linear duration-100 mt-8 py-2 px-4 font-silkscreen text-xl hover:text-green-500">
						Send Message
					</button>
				</form>
				<div className="flex flex-col justify-start w-1/5 text-white/50 font-display mt-4">
					<h1 className="font-silkscreen text-4xl text-white">
						Socials
					</h1>
					<div className="flex flex-col justify-start items-start gap-4 mt-4">
						{socialIcons.map((socialIcon) => (
							//@ts-ignore
							<SocialIcon key={socialIcon.name} {...socialIcon} />
						))}
					</div>
				</div>
			</div>
		</main>
	);
}

const socialIcons: SocialIconProps[] = [
	{
		name: 'Github',
		icon: <SiGithub className="w-full h-full" />,
		link: 'https://www.github.com/jusimen',
	},
	{
		name: 'Instagram',
		icon: <SiInstagram className="w-full h-full" />,
		link: 'https://www.instagram.com/jusimen/',
	},
];
