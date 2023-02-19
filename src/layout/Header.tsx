import Link from 'next/link';

const Header = () => {
	return (
		<header className='h-28 px-8 flex justify-between items-center'>
			<h1 className='head'>Logo</h1>
			<nav className='flex items-center gap-4'>
				<Link href='/'>Link</Link>
				<Link href='/'>Link</Link>
				<Link href='/'>Link</Link>
			</nav>
		</header>
	);
};

export default Header;
