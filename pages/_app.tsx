import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DoctorsProvider from '../context/doctors.context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DoctorsProvider>
      <Component {...pageProps} />
    </DoctorsProvider>
  );
}
