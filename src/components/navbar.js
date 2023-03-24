import { Link } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import logo from "../assets/logo-itb.png";

const Navbar = () => {

    return ( 
    <>
    <header className="bg-blue-500 shadow-lg h-36 md:flex flex flex-col">
        <div className=" flex-row flex items-center justify-start px-4 lg:px-6 xl:px-8 mt-3">
            <Link to='/'><img  className="" src={logo} alt="" height={70} width={70} /></Link>
            <h1 className="text-2xl text-slate-50 font-medium ml-2 judul">Pusat Penelitian Teknologi Informasi dan Komunikasi</h1>
        </div>
        <span className="ml-8 mt-4 border-b-2 border-white w-[80rem]"></span>
        <nav className="header-links pt-2 isi">
            <ul className="items-start justify-start flex ml-6 mr-auto">
            <li className="pb-5 pl-2 pr-5 text-slate-50 hover:text-black cursor-pointer">
                <Link to='/' preventScrollReset={true}><span className="font-thin text-lg">Home</span></Link>
            </li>
            <li className=" pl-2 pr-5">
            <div class="dropdown block">
                <div class="">
                <Link to='/Workshop & Seminar'><span class=" text-slate-50 hover:text-black cursor-pointer font-thin text-lg">Kegiatan</span></Link>
                </div>
                <ul class="dropdown-menu absolute hidden text-white mb-4" >
                <li class="font-thin text-lg"><a class=" bg-black hover:text-blue-500 py-4 px-4 block whitespace-no-wrap" href='#Workshop'>Seminar & Workshop</a></li>
                <li class="font-thin text-lg"><a class=" bg-black hover:text-blue-500 py-4 px-4 block whitespace-no-wrap" href="#Riset">Riset</a></li>
                </ul>
            </div>
            </li>
            <li className="pb-5 pl-2 pr-5">
            <div class="dropdown block">
                <div class="">
                <Link to='/Karya'><span class=" text-slate-50 hover:text-black cursor-pointer font-thin text-lg">Karya</span></Link>
                </div>
                <ul class="dropdown-menu  absolute hidden text-white mb-4" >
                <li class="font-thin text-lg"><a class=" bg-black hover:text-blue-500 py-4 px-4 block whitespace-no-wrap" href="#Karya" preventScrollReset={true}>Smart System</a></li>
                <li class="font-thin text-lg"><a class=" bg-black hover:text-blue-500 py-4 px-4 block whitespace-no-wrap" href="#Riset" preventScrollReset={true}>Riset</a></li>
                </ul>
            </div>
            </li>
            <li className="pb-5 pl-2 pr-5 text-slate-50 hover:text-black cursor-pointer">
                <Link to='/Mitra'><span className="font-thin text-lg">Mitra</span></Link>
            </li>
            <li className="pb-5 pl-2 pr-5 text-slate-50 hover:text-black cursor-pointer">  
                <Link to='/Galeri'><span className="font-thin text-lg">Galeri</span></Link>
            </li>
            <li className="pb-5 pl-2 pr-5 text-slate-50 hover:text-black cursor-pointer">  
                <Link to='/tentang'><span className="font-thin text-lg">Tentang PPTIK</span></Link>
            </li>
            <li className="pb-5 pl-2 pr-5 text-slate-50 hover:text-black cursor-pointer">  
                <Link to='/Peneliti & Staf'><span className="font-thin text-lg">Peneliti & Staff</span></Link>
            </li>
            <li className="pb-5 pl-2 pr-5 text-slate-50 hover:text-black cursor-pointer">  
                <Link to='/Kontak' target="" rel=""><span className="font-thin text-lg">Kontak</span></Link>
            </li>
            </ul>
        </nav>
    </header>
    </>
     );
}
 
export default Navbar;