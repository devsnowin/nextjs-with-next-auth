import { Inter } from '@next/font/google';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/layout/Layout';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout tw={`${inter.className} --font-sans`}>
			<Component {...pageProps} />
		</Layout>
	);
}
