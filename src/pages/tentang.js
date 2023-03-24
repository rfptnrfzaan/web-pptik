import Navbar from "../components/navbar";
import Footer from "../components/footer";
import img_1 from "../assets/logo-PPTIK-baru-300x300.jpg";
import img_2 from "../assets/Roadmap-PPTIK-300x266.jpg";
import img_3 from "../assets/Gd.PPTIK-ITB-212x300.png";
import logo_1 from "../assets/EON_Reality_Logo_Blue_300.png";
import logo_2 from "../assets/kisspng-klungkung-regency-the-general-election-committee-c-pemilu-5b37869846ae91.1942200315303655922895.png";
import logo_3 from "../assets/63eef9802d2e3.png";
import logo_4 from "../assets/logo.png";
import logo_5 from "../assets/logo_KEHATI.png";
import logo_6 from "../assets/Logo_prssni.png";
import logo_7 from "../assets/Logo_Telkom_University_potrait.png";
import logo_8 from "../assets/Logo-BMKG-new.png";
import logo_9 from "../assets/Logo-Bawaslu-2018-Icon-PNG-HD-272x300.png";
import logo_10 from "../assets/IRF-Logo-2015.png";
import logo_11 from "../assets/MIT-Massachusetts-Institute-of-Technology.png";
import logo_12 from "../assets/img01.png";

const Tentang = () => {
    return ( 
        <>
        <Navbar/>
        <div className="flex flex-col mt-6">
        <span className="ml-10 flex text-2xl">Tentang PPTIK</span>
        <span className="border-b-4 ml-10 border-black w-44"></span>
        </div>
        <div class="py-16 bg-white">  
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div class="mr-20">
                <img src={img_1} className="w-[1500px] h-[320px]" alt="image" loading="lazy" width="" height=""/>
                </div>
                <div class="flex flex-col">
                <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Profile PPTIK</h2>
                <p class="mt-6 text-black text-lg">Pusat Penelitian Teknologi Informasi dan Komunikasi (PPTIK-ITB) memiliki misi diantaranya adalah membangun reputasi riset dan peniliti berkelas dunia. Hal ini menuntut selarasnya topik, kompetensi peneliti, kelayakan fasilitas, tingginya aktivitas dan maraknya kemitraan global di bidang penelitian ICT. Selain itu, PPTIK juga memiliki misi untuk mendorong perkembangan produk komersil, enterpreneurship dan industri di bidang ICT. Hal ini ditandai juga dengan signifikannya kontribusi sektor ICT bagi revenue ITB.</p>

                <p class=" text-black text-lg ">Teknologi dan solusi teknologi yang dikembangkan di PPTIK akan berupa sistem layanan media digital interaktif modern.</p>
                </div>
            </div>
        </div>
        </div>
        <section class="mb-4 text-gray-800 text-start">
            <h2 class="text-3xl font-bold mb-20 ml-10">Kegiatan PPTIK</h2>
                <div class=" ml-10 mr-10 flex flex-col">
                <div className="flex flex-row gap-10">
                    <div class="mb-10">
                        <div class="rounded-lg shadow-md hover:shadow-xl h-full block transition duration-500 bg-white">
                        <div class="flex ">
                            <div class="p-4 bg-blue-600 rounded-full shadow-2xl inline-block ">
                            </div>
                        </div>
                        <div class="p-6">
                            <p>
                            Pemantapan kapasitas organisasi PPTIK untuk berkolaborasi dengan sebanyak mungkin pihak pada berbagai sektor dengan memanfaatkan portfolio teknologi dan solusi yang telah dikembangkan oleh seluruh stakeholder PPTIK.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="mb-10">
                        <div class="rounded-lg shadow-md hover:shadow-xl h-full block transition duration-500 bg-white">
                        <div class="flex ">
                            <div class="p-4 bg-blue-600 rounded-full shadow-lg inline-block ">
                            </div>
                        </div>
                        <div class="p-6">
                            <p>
                            Pemantapan peran PPTIK sebagai pionir dan rujukan dalam pengembangan dan pemanfaatan teknologi dan solusi digital learning dengan menerapan teknologi dan solusi digital learning kepada stakeholder yang semakin luas dan beragam dengan memastikan munculnya inovasi pembelajaran yang berbasis teknologi dan solusi digital learning dalam bentuk model bisnis maupun startup digital learning.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div class="">
                        <div class="rounded-lg shadow-md h-full block transition duration-500 hover:shadow-xl bg-white">
                        <div class="flex ">
                            <div class="p-4 bg-blue-600 rounded-full shadow-2xl inline-block ">
                            </div>
                        </div>
                        <div class="p-6">
                            <p>
                            Peningkatan peran PPTIK sebagai pionir dan rujukan dalam pengembangan dan pemanfaatan TIK dan solusi berbasis TIK untuk berbagai sektor aplikasi dengan memastikan munculnya inovasi teknologi terkait yang dapat didemonstrasikan dalam 3 bentuk yaitu publikasi ilmiah, prototype yang berfungsi, pra-Startup.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
        </section>
        <div class="py-16 bg-white">  
        <div class="container m-auto px-3 text-gray-600">
            <div class="space-y-6 md:space-y-0 md:flex lg:items-center gap-2 flex flex-row-reverse">
                <div class="mr-20">
                <img src={img_2} className="w-[1750px] h-[350px]" alt="image" loading="lazy" width="" height=""/>
                </div>
                <div class="flex flex-col">
                <p class=" text-black text-lg">Teknologi dan solusi teknologi yang dikembangkan di PPTIK akan berupa sistem layanan media digital interaktif modern.</p>
                <p class="mt-4 text-black text-lg">Untuk mendukung roadmap tersebut, di tahun 2015-2017 riset yang dikembangkan oleh PPTIK ITB fokus ke arah pengembangan framework komunitas pintar yang menjadi standar tercapainya konsep kota pintar. Komponen framework smart community yang dikembangkan adalah:</p>
                        <div class="flex flex-wrap  justify-center items-center ">
                        <div class="grow-0 shrink-0 flex basis-auto w-full mt-6 mb-md-0">
                            <div class="flex flex-wrap ">
                            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12 ">
                                <div class="flex">
                                <div class="shrink-0">
                                    <div class="p-4 bg-blue-600 rounded-md shadow-lg">
                                    </div>
                                </div>
                                <div class="grow ml-4">
                                    <p class="font-bold mb-1">Smart Mobility</p>
                                    <p class="text-gray-500">
                                    melalui penerapan riset Intelligent Transportation System (ITS).
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12 px-2 ">
                                <div class="flex">
                                <div class="shrink-0">
                                    <div class="p-4 bg-blue-600 rounded-md shadow-lg">
                                    </div>
                                </div>
                                <div class="grow ml-4">
                                    <p class="font-bold mb-1">Smart Health Care</p>
                                    <p class="text-gray-500">
                                    melalui pengembangan dan penerapan sistem Detta Care (Detection of Data Patient Condition with Health Monitoring System).
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12 ">
                                <div class="flex">
                                <div class="shrink-0">
                                    <div class="p-4 bg-blue-600 rounded-md shadow-lg">
                                    </div>
                                </div>
                                <div class="grow ml-4">
                                    <p class="font-bold mb-1">Smart Government</p>
                                    <p class="text-gray-500">
                                    melalui pengembangan sebuah riset berbasis proyek bernama Indonesia United (Idun).
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12 px-2 ">
                                <div class="flex">
                                <div class="shrink-0">
                                    <div class="p-4 bg-blue-600 rounded-md shadow-lg">
                                    </div>
                                </div>
                                <div class="grow ml-4">
                                    <p class="font-bold mb-1">Smart Education</p>
                                    <p class="text-gray-500">
                                    melalui pengembangan riset E-Learning dan game edukasi VidyaNusa, Tugas Akhir Dalam Jaringan (TADJ), Open Online Data Course (OODC) hingga ke pengembangan robot Artificial Intelligence (AI) untuk edukasi dan interaksi sosial manusia dengan nama “Lumen Social Robot”.
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
        </div>

        <section class="py-10 bg-white">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="max-w-2xl mx-auto text-center">
                    <h2 class="text-2xl font-bold text-gray-800 sm:text-4xl sm:leading-tight">Kemitraan</h2>
                </div>

                <div class="grid items-center max-w-4xl grid-cols-2 mx-auto mt-12 md:mt-20 md:grid-cols-4 gap-x-10 gap-y-16">
                    <div>
                        <img class="object-contain w-full h-20 mx-auto" src={logo_2} alt="" />
                    </div>

                    <div>
                        <img class="object-contain w-full h-20 mx-auto" src={logo_3} alt="" />
                    </div>

                    <div>
                        <img class="object-contain w-full h-20 mx-auto" src={logo_4} alt="" />
                    </div>

                    <div>
                        <img class="object-contain w-full mx-auto h-20" src={logo_5} alt="" />
                    </div>

                    <div class="hidden md:block">
                        <img class="object-contain w-full h-20 mx-auto" src={logo_6} alt="" />
                    </div>

                    <div class="hidden md:block">
                        <img class="object-contain w-full h-20 mx-auto" src={logo_7} alt="" />
                    </div>

                    <div class="hidden md:block">
                        <img class="object-contain w-full h-20 mx-auto" src={logo_8} alt="" />
                    </div>

                    <div class="hidden md:block">
                        <img class="object-contain w-full h-20 mx-auto" src={logo_9} alt="" />
                    </div>

                    <div class="hidden md:block">
                        <img class="object-contain w-full h-20 mx-auto" src={logo_10} alt="" />
                    </div>

                    <div class="hidden md:block">
                        <img class="object-contain w-full mx-auto h-7" src={logo_1} alt="" />
                    </div>

                    <div class="hidden md:block">
                        <img class="object-contain w-full h-28 mx-auto" src={logo_11} alt="" />
                    </div>

                    <div class="hidden md:block">
                        <img class="object-contain w-full h-20 mx-auto" src={logo_12} alt="" />
                    </div>
                </div>

                <p class="mt-10 text-xl text-center text-gray-500 ">dan masih banyak lagi</p>
            </div>
        </section>
        <div class="pt-16 pb-10 bg-white">  
        <div class="container m-auto px-6 text-gray-600">
            <div class="space-y-6 flex">
                <div class="mr-20">
                <img src={img_3} className="w-[950px] h-[450px]" alt="image" loading="lazy" width="" height=""/>
                </div>
                <div class="flex flex-col tabs ">
                        <div class="border-b ">
                        <div class="border-l-2 border-transparent relative tab">
                            <input class="w-full absolute cursor-pointer  z-10 opacity-0 h-5 top-6 " type="checkbox" id="chck1"/>
                            <header class="flex justify-between items-center p-1 pl-8 pr-8 select-none tab-label" for="chck1">
                            <span class="text-4xl  font-bold">VISI</span>
                                <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                    <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="6 9 12 15 18 9">
                                        </polyline>
                                    </svg>
                                </div>
                            </header>
                            <div class="tab-content">
                                <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                                <h2 class="text-lg mb-12">Setiap warga negara Indonesia harus dapat memanfaatkan TIK untuk kemajuan perikehidupannya. Setiap warganegara dapat berpartisipasi dalam masyarakat pengetahuan dan ekonomi pengetahuan, baik ikut mendapatkan manfaatnya maupun ikut membangunnya. Di tahun 2016 setiap warga negara Indonesia harus bisa mendapatkan jatah secara cuma-cuma.</h2>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="border-b tab mt-5">
                        <div class="border-l-2 border-transparent relative">
                            <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1"/>
                            <header class="flex justify-between items-center  p-1 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck1">
                            <span class="text-4xl font-bold">MISI</span>
                            <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                    <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="6 9 12 15 18 9">
                                        </polyline>
                                    </svg>
                                </div>
                            </header>
                            <div class="tab-content">
                                <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                                <ol>
                                    <li className="mb-3">1. Membangun reputasi riset dan peneliti berkelas dunia. Hal ini menuntut selarasnya topik, kompetensi peneliti, kelayakan fasilitas, tingginya aktivitas dan maraknya kemitraan global di bidang penelitian ICT.</li>
                                    <li>2. Mendorong perkembangan produk komersial, enterpreneurship, dan industri di bidang ICT. Hal ini ditandai juga dengan signifikannya kontribusi sektor ICT bagi revenue ITB.</li>
                                </ol>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
        </div>
        <div class="tabs ml-16 mr-16">
            <div class="border-b tab">
                <div class="border-l-2 border-transparent relative">
                    <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck3"/>
                    <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck3">
                                <span class="text-grey-darkest font-thin text-4xl">
                                    LAINNYA
                                </span>
                                <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                    <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="6 9 12 15 18 9">
                                        </polyline>
                                    </svg>
                                </div>
                    </header>
                    <div class="tab-content">
                        <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                                    <ul class="pl-4">
                                        <div class="flex flex-col mb-4">
                                           <h1 className="mb-2 text-2xl">Jasa Layanan</h1>
                                           <ol className="ml-4 text-xl">
                                            <li>Penelitian dalam penerapan TIK</li>
                                            <li>Kerjasama Industri</li>
                                            <li>Konsultasi</li>
                                            <li>Inkubasi Startup</li>
                                           </ol>
                                        </div>
                                        <div class="flex flex-col mb-4">
                                            <h1 className="mb-2 text-2xl">Pengalaman Pembinaan</h1>
                                            <p className="ml-4 text-xl">PPTIK berpengalaman selama beberapa tahun terakhir membina banyak calon startup seperti: Lentera Nusantara, PT.Anargya, dll.</p>
                                        </div>
                                        <div class="flex flex-col mb-4">
                                            <h1 className="mb-2 text-2xl">Prestasi</h1>
                                            <p className="ml-4 text-xl">Calon-calon startup binaan PPTIK ITB banyak mendapatkan award pada level nasional maupun internasional, seperti INAICTA, APICTA, Indonesia Innovations and Innovators Expo (I3E) Kemenristekdikti, dan lain-lain.</p>
                                        </div>
                                    </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Tentang;