import NavBar from "@/components/NavBar"
import Landing from "@/Landing"
import ProductPage from "@/pages/ProductPage"
import Footer from "@/components/Footer"

type props ={
    children: React.ReactNode;
}
const Layout = ({children} : props) => {
  return (
    <div className="flex flex-col justify-between min-h-screen ">
      <NavBar/>
      <div className=" flex-1 ">
        {children}
      </div>
     <Footer/>


    </div>
  )
}

export default Layout
