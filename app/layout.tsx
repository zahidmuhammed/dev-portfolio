import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ weight: "200", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "zahid.dev",
	description: "Personal Portfolio Website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
