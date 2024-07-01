import { inter } from '~/assets/fonts/Inter';
import '~/styles/globals.css';

export const metadata = {
  title: 'Attios CRM',
  description: 'Generated by create-t3-app',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-base-600">{children}</body>
    </html>
  );
}
