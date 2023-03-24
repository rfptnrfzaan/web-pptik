import Footer from "../components/footer";
import Navbar from "../components/navbar";
import K_1 from '../assets/K_1.png';
import K_2 from '../assets/K_2.jpeg';
import K_3 from '../assets/K_3.jpeg';
import K_4 from '../assets/K_4.jpeg';
import K_5 from '../assets/K_5.jpeg';
import K_6 from '../assets/K_6.jpeg';
import K_7 from '../assets/K_7.jpeg';
import K_8 from '../assets/K_8.jpeg';
import K_9 from '../assets/K_9.jpeg';
import { Link } from "react-router-dom";

const Karya = () => {
    return ( 
    <>
    <Navbar/>
    <div className="flex flex-col mt-5">
        <h1 className="pt-4 ml-12 text-3xl head pb-2">Karya</h1>
        <span className="ml-12 w-40 border-b-2 border-black "></span>
    </div>
    <div className="flex flex-col justify-center items-center max-w-5xl mx-auto">
        <div className="flex flex-row gap-6 mt-10">
        <div class=" flex justify-center  ">
                    <div class="container flex justify-center">
                        <div class="max-w-sm ">
                        <div class="bg-white relative border-gray-100 ">
                            <img class="" src={K_1} alt="" />
                            <div class=" flex flex-col py-4 bg-white">
                            <p className="flex justify-start items-start text-xs font-body">9 MAR, 2023</p>
                            <Link to='/Smart Health System'><h1 class="text-black konten flex justify-center items-center text-lg hover:cursor-pointer hover:text-blue-500">Smart Health System</h1></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class=" flex justify-center ">
                    <div class="container flex justify-center ">
                        <div class="max-w-sm">
                        <div class="bg-white relative border-gray-100">
                            <img class=" " src={K_2} alt="" />
                            <div class="py-4 bg-white">
                            <p className="flex justify-start items-start text-xs font-body">13 FEB, 2023</p>
                            <Link to='/Pembuatan Mobil Listrik'><h1 class="text-black konten justify-center items-center flex text-lg hover:cursor-pointer hover:text-blue-500">Proses Pembuatan Mobil Listrik</h1></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class=" flex justify-center ">
                    <div class="container flex justify-center ">
                        <div class="max-w-sm">
                        <div class="bg-white relative border-gray-100">
                            <img class=" h-40 w-full" src={K_3} alt="" />
                            <div class="  py-4 bg-white">
                            <p className="flex justify-start items-start text-xs font-body">21 DEC, 2022</p>
                            <Link to='/Koordinasi SIM dengan SMKN 7 Kota Tangerang'><h1 class="text-black konten flex justify-center items-center text-lg hover:cursor-pointer hover:text-blue-500">Koordinasi SIM dengan SMKN 7 Kota Tangerang</h1></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className="flex flex-row gap-6 mt-10">
            <div class=" flex justify-center ">
                <div class="container flex justify-center ">
                    <div class="max-w-sm">
                    <div class="bg-white relative border-gray-100 ">
                        <img class=" h-52 w-full" src={K_4} alt="" />
                        <div class="  py-4 bg-white">
                        <p className="flex justify-start items-start text-xs font-body">8 NOV, 2022</p>
                        <Link to='/Pemasangan Alat Survey'><h1 class="text-black konten flex justify-center items-center text-lg hover:text-blue-500 hover:cursor-pointer">Pemasangan Alat Survey</h1></Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class=" flex justify-center">
                <div class="container flex justify-center ">
                    <div class="max-w-sm">
                    <div class="bg-white relative border-gray-100 ">
                        <img class=" h-52 w-96" src={K_5} alt="" />
                        <div class=" py-4 bg-white">
                        <p className="flex justify-start items-start text-xs font-body">13 OCT, 2022</p>
                        <Link to='/Diskusi Project Legit Bandung'><h1 class="text-black konten  flex justify-center items-center text-lg  hover:text-blue-500 hover:cursor-pointer">Diskusi Project Legit Bandung</h1></Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class=" flex justify-center">
                <div class="container flex justify-center ">
                    <div class="max-w-sm">
                    <div class="bg-white relative border-gray-100 ">
                        <img class="h-52" src={K_6} alt="" />
                        <div class="py-4 bg-white">
                        <p className="flex justify-start items-start text-xs font-body">15 SEP, 2022</p>
                        <Link to='/Diskusi Lanjutan dengan Tim Teknik Sipil Universitas Bandar Lampung'><h1 class="text-black konten text-lg  hover:text-blue-500 hover:cursor-pointer">Diskusi Lanjutan dengan Tim Teknik Sipil Universitas Bandar Lampung</h1></Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-row gap-6 mt-10">
            <div class=" flex justify-center">
                <div class="container flex justify-center ">
                    <div class="max-w-sm">
                    <div class="bg-white relative border-gray-100">
                        <img class=" w-full h-44" src={K_7} alt="" />
                        <div class="py-4 bg-white">
                        <p className="flex justify-start items-start text-xs font-body">18 JUN, 2022</p>
                        <Link to='/Pemasangan monitor untuk Bus Public Announcement'><h1 class="text-black konten text-lg  hover:text-blue-500 hover:cursor-pointer">Pemasangan monitor untuk Bus Public Announcement (18 Juni)</h1></Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class=" flex justify-center ">
                <div class="container flex justify-center ">
                    <div class="max-w-sm">
                    <div class="bg-white relative border-gray-100">
                        <img class="h-44 w-[32rem]" src={K_8} alt="" />
                        <div class="  py-4 bg-white">
                        <p className="flex justify-start items-start text-xs font-body">7 JUN, 2022</p>
                        <Link to='/Diskusi lanjutan SEMUT JABAR'><h1 class="text-black konten flex justify-center items-center text-lg  hover:text-blue-500 hover:cursor-pointer">Diskusi lanjutan SEMUT JABAR</h1></Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class=" flex justify-center">
                <div class="container flex justify-center ">
                    <div class="max-w-sm">
                    <div class="bg-white relative border-gray-100">
                        <img class="h-44 w-full" src={K_9} alt="" />
                        <div class=" py-4 bg-white">
                        <p className="flex justify-start items-start text-xs font-body">24 MAY, 2022</p>
                        <Link to='/Penyerahan Alat Peraga Smart Hidroponik'><h1 class="text-black konten flex justify-center items-center text-lg  hover:text-blue-500 hover:cursor-pointer">Penyerahan Alat Peraga Smart Hidroponik</h1></Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div class="flex my-10">
                <Link to='/Karya' class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                    1
                </Link>

                <Link to='/Karya_2' class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                    2
                </Link>
        </div> */}
    </div>
    <Footer/>
    </>
     );
}
 
export default Karya;