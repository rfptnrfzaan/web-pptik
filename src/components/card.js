import K_1 from '../assets/K_1.png';
import K_2 from '../assets/K_2.jpeg';
import K_3 from '../assets/K_3.jpeg';
import WS_1 from '../assets/WS_1.jpeg';
import WS_2 from '../assets/WS_2.jpeg';
import WS_3 from '../assets/WS_3.png';
import R_1 from '../assets/R_1.jpg';
import R_2 from '../assets/R_2.jpg';
import R_3 from '../assets/R_3.jpg';
import { Link } from "react-router-dom";



const Card = () => {
    
    return ( 
    <div className="overflow-x-hidden">
    <div id="Karya" className="container mx-auto mb-5">
    <div className="flex flex-col">
            <h1 className="pt-4 ml-2 text-3xl pb-2 head">Karya</h1>
            <span className="ml-2 w-40 border-b-2 border-black "></span>
            </div>
            <Link to='/Karya'><button type="button" class="py-3 px-4 mt-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 transition-all text-sm">
            Lainnya
            </button></Link>
        <div className="flex flex-col justify-center items-center max-w-5xl mx-auto">
            <div className="flex flex-row gap-6 mt-2">
                <div class=" flex justify-center  ">
                    <div class="container flex justify-center">
                        <div class="max-w-sm ">
                        <div class="bg-white relative ">
                            <img class="" src={K_1} alt="" />
                            <div class=" flex flex-col py-4 rounded-lg bg-white">
                            <p className="flex justify-start items-start text-xs font-body">9 MAR, 2023</p>
                            <Link to='/Smart Health System'><h1 class="text-black konten  flex justify-center items-center text-lg hover:cursor-pointer hover:text-blue-500">Smart Health System</h1></Link>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                </div>
                <div class=" flex justify-center ">
                    <div class="container flex justify-center ">
                        <div class="max-w-sm">
                        <div class="bg-white relative">
                            <img class=" " src={K_2} alt="" />
                            <div class="py-4 flex flex-col rounded-lg bg-white">
                            <p className="flex justify-start items-start text-xs font-body">9 MAR, 2023</p>
                            <Link to='/Pembuatan Mobil Listrik'><h1 class="text-black konten justify-center items-center flex text-lg hover:cursor-pointer hover:text-blue-500">Proses Pembuatan Mobil Listrik</h1></Link>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                </div>
                <div class=" flex justify-center ">
                    <div class="container flex justify-center ">
                        <div class="max-w-sm">
                        <div class="bg-white relative">
                            <img class=" h-36 w-full" src={K_3} alt="" />
                            <div class=" px-4 py-4 flex flex-col rounded-lg bg-white">
                            <p className="flex justify-start items-start text-xs font-body">9 MAR, 2023</p>
                            <Link to='/Koordinasi SIM dengan SMKN 7 Kota Tangerang'><h1 class="text-black konten flex justify-center items-center text-lg hover:cursor-pointer hover:text-blue-500">Koordinasi SIM dengan SMKN 7 Kota Tangerang</h1></Link>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="Workshop" className="container mx-auto mb-5">
    <div className="flex flex-col">
            <h1 className="pt-4 ml-2 text-3xl pb-2 head">Workshop & Seminar</h1>
            <span className="ml-2 w-40 border-b-2 border-black "></span>
            </div>
            <Link to='/Workshop & Seminar'><button type="button" class="py-3 px-4 mt-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 transition-all text-sm">
            Lainnya
            </button></Link>
        <div className="flex flex-col justify-center items-center max-w-5xl mx-auto">
            <div className="flex flex-row gap-6 mt-2">
                <div class=" flex justify-center">
                    <div class="container flex justify-center ">
                        <div class="max-w-sm">
                        <div class="bg-white relative">
                            <img class=" w-full h-[9.25rem]" src={WS_1} alt="" />
                            <div class=" py-4 px-4 flex flex-col rounded-lg bg-white">
                            <p className="flex justify-start items-start text-xs font-body">9 MAR, 2023</p>
                            <Link to='/Workshop Penyelarasan Kurikulum Bahan Ajar SMK Wikrama'><h1 class="text-black konten flex justify-center items-center text-lg hover:cursor-pointer hover:text-blue-500">Workshop Penyelarasan Kurikulum Bahan Ajar SMK Wikrama</h1></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class=" flex justify-center">
                    <div class="container flex justify-center ">
                        <div class="max-w-sm">
                        <div class="bg-white relative">
                            <img class=" w-full h-[9.25rem]" src={WS_2} alt="" />
                            <div class="flex flex-col py-4 px-4 rounded-lg  bg-white">
                            <p className="flex justify-start items-start text-xs font-body">9 MAR, 2023</p>
                            <Link to='/Program Kelas Online bersama PT LSKK'><h1 class="text-black konten flex justify-center items-center text-lg hover:cursor-pointer hover:text-blue-500">Program Kelas Online bersama PT LSKK</h1>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class=" flex justify-center">
                    <div class="container flex justify-center ">
                        <div class="max-w-sm">
                        <div class="bg-white relative">
                            <img class="" src={WS_3} alt="" />
                            <div class=" flex flex-col py-4 px-2 rounded-lg bg-white">
                            <p className="flex justify-start items-start text-xs font-body">9 MAR, 2023</p>
                            <Link to='/Webinar Smart System For Industry'><h1 class="text-black konten flex justify-center items-center text-lg hover:cursor-pointer hover:text-blue-500">Webinar Smart System For Industry</h1></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="Riset" className="container mx-auto">
    <div className="flex flex-col">
            <h1 className="pt-4 ml-2 text-3xl pb-2 head">Riset</h1>
            <span className="ml-2 w-40 border-b-2 border-black "></span>
            </div>
            <Link to='/Riset'><button type="button" class="py-3 px-4 mt-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 transition-all text-sm">
            Lainnya
            </button></Link>
        <div className="flex flex-col justify-center items-center max-w-5xl mx-auto mb-6">
            <div className="flex flex-row gap-6 mt-2">
                <div class=" flex justify-center items-center ">
                    <div class="container flex justify-center ">
                        <div class="max-w-sm">
                        <div class="bg-white relative">
                            <img class="" src={R_1} alt="" />
                            <div class="flex flex-col py-4 px-4 rounded-lg bg-white">
                            <p className="flex justify-start items-start text-xs font-body">9 MAR, 2023</p>
                            <Link to='/Serah Terima IoT Tracker Universitas Trilogi'><h1 class="text-black konten text-lg hover:cursor-pointer hover:text-blue-500">Serah Terima IoT Tracker Universitas Trilogi</h1></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class=" flex justify-center items-center ">
                    <div class="container flex justify-center ">
                        <div class="max-w-sm">
                        <div class="bg-white relative">
                            <img class="" src={R_2} alt="" />
                            <div class="flex flex-col py-4 px-4 rounded-lg bg-white">
                            <p className="flex justify-start items-start text-xs font-body">9 MAR, 2023</p>
                            <Link to='/Pertemuan Rutin PPTIK Bersama Forum Angkot'><h1 class="text-black konten text-lg  hover:cursor-pointer hover:text-blue-500">Pertemuan Rutin PPTIK Bersama Forum Angkot</h1></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class=" flex justify-center items-center ">
                    <div class="container flex justify-center ">
                        <div class="max-w-sm">
                        <div class="bg-white relative">
                            <img class=" h-[10rem] w-full" src={R_3} alt="" />
                            <div class="flex flex-col py-4 px-4 rounded-lg bg-white">
                            <p className="flex justify-start items-start text-xs font-body">9 MAR, 2023</p>
                            <Link to='/Diskusi PPTI 2018 bersama Ristekdikti'><h1 class="text-black konten text-lg  hover:cursor-pointer hover:text-blue-500">Diskusi PPTI 2018 bersama Ristekdikti</h1></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
     );
}
 
export default Card;