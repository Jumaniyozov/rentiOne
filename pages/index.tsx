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
            <main className="snap-mandatory snap-y scroll-smooth h-screen overflow-y-hidden relative">
                <Navbar/>
                <Hero id="hero_1"/>
                <Hero id="hero_2"/>
                <Hero id="hero_3"/>
                <Hero id="hero_4"/>
            </main>
        </>
    )
}

export default Home
