import type {NextPage} from 'next'
import Head from 'next/head'
import {Hero} from "../components/Hero";
import {Navbar} from "../components/Navbar";

const Home: NextPage = () => {
    return (<>
            <Head>
                <title>Real Agency</title>
                <meta name="description" content="Real estate agency website"/>
                <link rel="icon" href="/favicon.svg"/>
            </Head>
            <main className="snap-mandatory snap-y scroll-smooth h-screen relative">
                <Navbar/>
                <Hero/>
            </main>
        </>
    )
}

export default Home
