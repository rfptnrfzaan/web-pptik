import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ketua from "../assets/Dr.techn_.-Ary-Setijadi-P-ST.MT_..jpg";
import peneliti_1 from "../assets/Ir.-Mervin-T.-Hutabarat-M.Sc_.Ph_.D.jpg";
import peneliti_2 from "../assets/Prof.-Armein-Z.R.-Langi-M.Sc_.Ph_.D.jpg";
import peneliti_3 from "../assets/Utk-di-crop_Prof.-Andriyan-Bayu-Suksmono.jpg";
import peneliti_4 from "../assets/Dr.-Yoanes-Bandung-MT-edit.jpg";
import upi_1 from "../assets/Yani-Widyani-MT-243x300-1.jpg";
import upi_2 from "../assets/Prof.-Liliasari-e1483090899145.jpg";
import img_1 from "../assets/Aila-edit-1.jpg";
import img_2 from "../assets/Agus-Sukoco-1.jpeg";
import staf_1 from "../assets/pp.jpg";
import img_3 from "../assets/Yuli-1.jpg";
import img_4 from "../assets/Fahmi.jpg";
import img_5 from "../assets/IMG_1199-2.jpg";
import img_6 from "../assets/IMG_3501-1536x1536.jpg";
import img_7 from "../assets/WhatsApp-Image-2023-03-07-at-3.08.11-PM-1.jpeg";

const Team = () => {
    return ( 
        <>
        <Navbar/>
        <section class="bg-white dark:bg-gray-900">
                <div class="container px-6 py-10 mx-auto">
                <div className="flex flex-col mt-2">
        <span className="ml-10 flex text-2xl">Peneliti & Staf</span>
        <span className="border-b-4 ml-10 border-black w-48"></span>
        </div>
                    <div class="flex flex-col ml-[30rem] justify-center items-center p-8 transition-colors duration-300 transform group rounded-xl w-80">
                            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={ketua}alt=""/>
                            <h1 class="mt-4 text-2xl font-semibold text-black capitalize dark:text-white ">Dr. tech.Ary Setijadi Prihatmanto, ST., MT.</h1>
                            <p class="mt-2 text-black capitalize">Kepala PPTIK</p>
                        </div>

                    <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                        <div class="flex flex-col items-center p-8 transition-colors duration-300 transform  group  rounded-xl">
                            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={peneliti_1} alt=""/>

                            <h1 class="mt-4 text-2xl font-semibold text-black capitalize text-center dark:text-white ">Ir.Mervin T Hutabarat M.Sc.,Phd</h1>

                            <p class="mt-2 text-black capitalize text-lg">Peneliti</p>
                        </div>

                        <div class="flex flex-col items-center p-8 transition-colors duration-300 transform  group  rounded-xl">
                            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={peneliti_2} alt=""/>

                            <h1 class="mt-4 text-2xl font-semibold text-black capitalize text-center dark:text-white ">Prof.Armein Z.R Langi M.Sc.,Phd</h1>

                            <p class="mt-2 text-black capitalize text-lg">Peneliti</p>
                        </div>

                        <div class="flex flex-col items-center p-8 transition-colors duration-300 transform  group  rounded-xl">
                            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={peneliti_3} alt=""/>

                            <h1 class="mt-4 text-2xl font-semibold text-black capitalize text-center dark:text-white ">Prof. Andriyan Bayu Suksmono</h1>

                            <p class="mt-2 text-black capitalize text-lg">Peneliti</p>
                        </div>

                        <div class="flex flex-col items-center p-8 transition-colors duration-300 transform  group  rounded-xl">
                            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={peneliti_4} alt=""/>

                            <h1 class="mt-4 text-2xl font-semibold text-black capitalize text-center dark:text-white ">Dr.Yoanes Bandung, M.T</h1>

                            <p class="mt-2 text-black capitalize text-lg">Peneliti</p>
                        </div>

                        <div class="flex flex-col items-center p-8 transition-colors duration-300 transform  group  rounded-xl">
                            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={upi_1} alt=""/>

                            <h1 class="mt-4 text-2xl font-semibold text-black capitalize text-center dark:text-white ">Yani Widyani M.T</h1>

                            <p class="mt-2 text-black capitalize text-lg">UPI</p>
                        </div>

                        <div class="flex flex-col items-center p-8 transition-colors duration-300 transform  group  rounded-xl">
                            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={upi_2} alt=""/>

                            <h1 class="mt-4 text-2xl font-semibold text-black capitalize text-center dark:text-white ">Prof.Liliasari</h1>

                            <p class="mt-2 text-black capitalize text-lg">UPI</p>
                        </div>

                        <div class="flex flex-col items-center p-8 transition-colors duration-300 transform  group  rounded-xl">
                            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={img_1} alt=""/>

                            <h1 class="mt-4 text-2xl font-semibold text-black capitalize text-center dark:text-white ">Aila Gema Safitri, S.T ., M.T.</h1>
                        </div>

                        <div class="flex flex-col items-center p-8 transition-colors duration-300 transform  group  rounded-xl">
                            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={img_2} alt=""/>

                            <h1 class="mt-4 text-2xl font-semibold text-black capitalize text-center dark:text-white ">Agus Sukoco</h1>
                        </div>

                        <div class="flex flex-col items-center p-8 transition-colors duration-300 transform  group  rounded-xl">
                            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={staf_1} alt=""/>

                            <h1 class="mt-4 text-2xl font-semibold text-black capitalize text-center dark:text-white ">Tessa Hikmah Gahari</h1>

                            <p class="mt-2 text-black capitalize text-lg">Staf PPTIK</p>
                        </div>

                        <div class="flex flex-col items-center p-8 transition-colors duration-300 transform  group  rounded-xl">
                            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={img_3} alt=""/>

                            <h1 class="mt-4 text-2xl font-semibold text-black capitalize text-center dark:text-white ">Yuliawati Soemarno</h1>
                        </div>

                        <div class="flex flex-col items-center p-8 transition-colors duration-300 transform  group  rounded-xl">
                            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={img_4} alt=""/>

                            <h1 class="mt-4 text-2xl font-semibold text-black capitalize text-center dark:text-white ">Muhammad Fahmi Nurfadilah, S.ST</h1>
                        </div>

                        <div class="flex flex-col items-center p-8 transition-colors duration-300 transform  group  rounded-xl">
                            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={img_5} alt=""/>

                            <h1 class="mt-4 text-2xl font-semibold text-black capitalize text-center dark:text-white ">Adnan Darwanto</h1>
                        </div>

                        <div class="flex flex-col items-center p-8 transition-colors duration-300 transform  group  rounded-xl">
                            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={img_6} alt=""/>

                            <h1 class="mt-4 text-2xl font-semibold text-black capitalize text-center dark:text-white ">Maulana Yusuf</h1>
                        </div>

                        <div class="flex flex-col items-center p-8 transition-colors duration-300 transform  group  rounded-xl">
                            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={img_7} alt=""/>

                            <h1 class="mt-4 text-2xl font-semibold text-black capitalize text-center dark:text-white ">Vidya Ikawati</h1>
                        </div>
                    </div>
                </div>
            </section>
        <Footer/>
        </>
     );
}
 
export default Team;