import { signIn, signOut, useSession } from 'next-auth/react';

const Header = () => {
	const { data: session } = useSession();

	return (
		<header className='h-28 px-8 flex justify-between items-center'>
			<h1 className='head'>Logo</h1>
			<nav className='flex items-center gap-4'>
				{session?.user ? (
					<button
						onClick={() => signOut()}
						className='bg-white text-[#060715] px-4 py-2 rounded-md w-fit'
					>
						SignOut
					</button>
				) : (
					<button
						onClick={() => signIn()}
						className='bg-white text-[#060715] px-4 py-2 rounded-md w-fit'
					>
						SignIn
					</button>
				)}
			</nav>
		</header>
	);
};

export default Header;
