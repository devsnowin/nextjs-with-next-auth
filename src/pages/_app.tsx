import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import Layout from '@/layout/Layout';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<SessionProvider session={session}>
			<Layout tw={`${inter.className} --font-sans`}>
				<Component {...pageProps} />
			</Layout>
		</SessionProvider>
	);
}
