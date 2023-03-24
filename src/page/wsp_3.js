import Footer from "../components/footer";
import Navbar from "../components/navbar";
import img1 from "../assets/WSP3_1.png";
import img2 from "../assets/WS_2.jpeg";
import img3 from "../assets/WSP3_3.png";
import img4 from "../assets/WSP3_4.png";
import img5 from "../assets/WSP3_5.png";
import img6 from "../assets/WSP3_6.png";
import img7 from "../assets/WSP3_7.png";
import img8 from "../assets/WSP3_8.png";
import img9 from "../assets/WSP3_9.png";

const WSP_2 = () => {
    return ( 
        <>
        <Navbar/>
        <div className="flex flex-col mb-7">
            <h1 className="pt-5 ml-10 text-2xl pb-2 head">Webinar Smart System For Industry</h1>
            <span className="ml-10 w-40 border-b-2 border-black "></span>
        </div>
        <div className="flex flex-col max-w-4xl mx-auto">
        <p className="konten text-sm">Webinar Smart System For Industry ialah salah satu acara webinar yang diselenggarakan PPTIK bekerjasama dengan PT. LSKK dan Binari Inkubator. Webinar ini dilaksankan pada tanggal 6 Juni 2022.</p>
        <div class="tabs mb-5 flex justify-center items-center">
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
                    <div class="tab-content flex flex-col gap-2">
                        <div className="flex flex-row">
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                            <img src={img3} alt="" />
                        </div>
                        <div className="flex flex-row">
                            <img src={img4} alt="" />
                            <img src={img5} alt="" />
                            <img src={img6} alt="" />
                        </div>
                        <div className="flex flex-row">
                            <img src={img7} alt="" />
                            <img src={img8} alt="" />
                            <img src={img9} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default WSP_2;