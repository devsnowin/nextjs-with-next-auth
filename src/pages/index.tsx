import { type NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const Home: NextPage = () => {
	const { data: session } = useSession();

	if (!session || !session.user)
		return (
			<button
				onClick={() => signIn('google')}
				className='bg-white text-[#060715] px-4 py-2 rounded-md'
			>
				Login please!
			</button>
		);

	return (
		<div className='flex items-center gap-4'>
			<Image
				src={session.user.image}
				alt={session.user.name}
				width={120}
				height={120}
				className='rounded-xl'
			/>
			<span className='flex flex-col items-start gap-2'>
				<p className='text-2xl font-bold'>{session.user.name}</p>
				<p className='text-sm text-slate-300'>{session.user.email}</p>
				<button
					onClick={() => signOut()}
					className='bg-white text-[#060715] px-4 py-2 rounded-md w-fit'
				>
					SignOut
				</button>
			</span>
		</div>
	);
};

export default Home;
