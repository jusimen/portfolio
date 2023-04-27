import Hourglass from './components/hourglass';
export default function NotFound() {
	return (
		<main className="h-screen flex flex-col justify-center items-center">
            <Hourglass height={50} width={50}/>
			<h1 className="text-4xl font-silkscreen text-red-400">404</h1>
			<h2 className="text-2xl font-silkscreen text-white">
				Page not found
			</h2>
		</main>
	);
}
