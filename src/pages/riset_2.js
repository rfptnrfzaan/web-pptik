import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import R_10 from "../assets/R_10.png";
import R_11 from "../assets/R_11.jpg";
import R_12 from "../assets/R_12.png";

const Riset_2 = () => {
    return ( 
        <>
        <Navbar/>
        <div className="flex flex-col mt-5">
        <h1 className="pt-4 ml-12 text-3xl head pb-2">Riset</h1>
        <span className="ml-12 w-40 border-b-2 border-black "></span>
        </div>
        <div className="flex flex-col justify-center items-center max-w-5xl mx-auto">
            <div className="flex flex-row gap-6 mt-10">
                <div class=" flex justify-center items-center ">
                    <div class="container flex justify-center ">
                        <div class="max-w-sm">
                        <div class="bg-white relative">
                            <img class="" src={R_10} alt="" />
                            <div class="py-6 flex flex-col bg-white">
                                <p className="flex justify-start items-start text-xs font-body">9 MAR, 2023</p>
                            <h1 class="text-black konten text-lg hover:text-blue-500 hover:cursor-pointer">Smart Health System</h1>

                            </div>

                        </div>
                        </div>
                    </div>
                </div>
                <div class=" flex justify-center items-center ">
                    <div class="container flex justify-center ">
                        <div class="max-w-sm">
                        <div class="bg-white relative">
                            <img class="" src={R_11} alt="" />
                            <div class="py-6 flex flex-col bg-white">
                                <p className="flex justify-start items-start text-xs font-body">9 MAR, 2023</p>
                            <h1 class="text-black konten text-lg hover:text-blue-500 hover:cursor-pointer">Smart Health System</h1>

                            </div>

                        </div>
                        </div>
                    </div>
                </div>
                <div class=" flex justify-center items-center ">
                    <div class="container flex justify-center ">
                        <div class="max-w-sm">
                        <div class="bg-white relative">
                            <img class="" src={R_12} alt="" />
                            <div class="py-6 flex flex-col bg-white">
                                <p className="flex justify-start items-start text-xs font-body">9 MAR, 2023</p>
                            <h1 class="text-black konten text-lg hover:text-blue-500 hover:cursor-pointer">Smart Health System</h1>

                            </div>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex my-10">
                    <Link to='/Riset' class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                        1
                    </Link>

                    <Link to='/Riset_2' class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                        2
                    </Link>
                </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Riset_2;