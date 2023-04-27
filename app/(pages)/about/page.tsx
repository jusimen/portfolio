import Link from 'next/link';
import Image from 'next/image';

export default function About() {
	return (
		<main className="w-full max-w-5xl py-8">
			<article className="prose max-w-5xl lg:prose-lg prose-invert prose-a:underline prose-strong:text-green-400">
				<h1>
					Hello There, I&apos;m <strong>Jusi</strong>
				</h1>
				<p>
					As a Full-stack developer, I bring a wealth of experience in
					creating innovative software solutions for businesses. With
					a focus on converting business visions into functional
					software, I have worked on a variety of projects in various
					domains. Based in Lisbon, Portugal, I have contributed to
					the development of two apps that have been published on {' '}
					<Link href={'https://play.google.com/store/apps/details?id=com.siliconslopesconsulting.steady&hl=en&gl=US&pli=1'} target={'_blank'}>
						Google&apos;s Playstore
					</Link>{' '}
					and{' '}
					<Link href={'https://apps.apple.com/us/app/im-steady/id1558949044'} target={'_blank'}>
						Apple&apos;s App Store
					</Link>
					.
				</p>
				<p>
					My tech stack includes various technologies such as React,
					NextJS, Flutter, Python, HTML, CSS, and JavaScript. With
					proficiency in back-end development and knowledge of Fast
					API and SQL, I am skilled in developing scalable and secure
					software solutions.
				</p>

				<p>
					I am also familiar with cloud-based technologies, such as
					Google Cloud Platform, and Firebase. These tools enable me
					to create software that is both accessible and
					user-friendly. As a remote worker, I am well-equipped to
					collaborate with teams from anywhere in the world.
				</p>

				<p>
					Currently, I am working on a personal project, an LMS
					(Learning Management System) that is built on NextJS and
					Tailwind and uses Google Cloud Platform as backend
					infrastructure.
				</p>

				<p>
					In summary, my expertise in full-stack development,
					knowledge of cutting-edge technologies, and experience in
					creating innovative solutions make me an asset to any
					project.
				</p>
			</article>
		</main>
	);
}
