import Nav from './Nav'
import Footer from './Footer'
import Meta from './Meta'

const Layout = ({ children }) => {
    return (
        <div>
            <Nav />
            <Meta />
            <main className="main1"><div className="">{children}</div></main>

            <Footer />
        </div>

    )
}

export default Layout