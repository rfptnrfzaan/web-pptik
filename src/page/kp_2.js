import Footer from "../components/footer";
import Navbar from "../components/navbar";
import img1 from "../assets/IMG_1.jpeg";
import img2 from "../assets/IMG_2.jpeg";
import img3 from "../assets/IMG_3.jpeg";
import img4 from "../assets/IMG_4.jpeg";

const Kp_2 = () => {
    return ( 
        <>
        <Navbar/>
        <div className="flex flex-col mb-7">
            <h1 className="pt-5 ml-10 text-2xl pb-2 head">Proses Pembuatan Mobil Listrik</h1>
            <span className="ml-10 w-40 border-b-2 border-black "></span>
        </div>
        <div className="flex flex-col max-w-4xl mx-auto">
        <div class="tabs mr-16 mb-5 flex justify-center items-center">
            <div class="border-b tab">
                <div class="border-l-2 border-transparent relative">
                    <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck3"/>
                    <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck3">
                                <span class="text-grey-darkest font-thin text-2xl head">
                                    Galeri
                                </span>
                                <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                    <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="6 9 12 15 18 9">
                                        </polyline>
                                    </svg>
                                </div>
                    </header>
                    <div class="tab-content flex flex-row gap-2">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Kp_2;