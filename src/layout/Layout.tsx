import Header from './Header';

const Layout = ({
	children,
	tw,
}: {
	children: React.ReactNode;
	tw?: string;
}) => {
	return (
		<div className={`${tw}`}>
			<Header />
			<main className='center min-h-screen px-8 -mt-28'>{children}</main>
		</div>
	);
};

export default Layout;
