import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Wiingy</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Header title="Welcome to my app!" />
				<p className="description">
					Want to Learn Python{" "}
					<a href="https://wiingy.com/python/">Click Here </a>
				</p>
			</main>

			<Footer />
		</div>
	);
}
