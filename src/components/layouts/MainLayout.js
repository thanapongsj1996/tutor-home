import Head from 'next/head'
import Footer from "../shared/Footer"
import Navbar from "../shared/Navbar"

const MainLayout = ({ children }) => {
    return (
        <>
            <Head>
                <meta name="description" content="tutor-home" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
                { children }
            <Footer />
        </>
    )
}

export default MainLayout
