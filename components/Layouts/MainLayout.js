
import Footer from "../essentials/Footer"
import Header from "../essentials/Header"
import Navbar from "../essentials/Navbar"
import ProductHistory from "../essentials/ProductHistory"

const MainLayout = ({children}) => {
    return (
        <div>
            <Header/>
            <Navbar/>
            {children}
            <ProductHistory/>
            <Footer/>
        </div>
    )
}

export default MainLayout