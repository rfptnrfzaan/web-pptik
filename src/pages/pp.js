import Navbar from "../components/navbar";
import Footer from "../components/footer";

const PP = () => {
    return ( 
        <>
        <Navbar/>
        <div className="w-1/2 flex flex-col">
        <div className="flex flex-col mt-2">
        <span className="ml-10 flex text-2xl">Mitra</span>
        <span className="border-b-4 ml-10 border-black w-24"></span>
        </div>
        <div className="flex flex-col">
            <h1> Privacy Policy</h1>
        </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default PP;