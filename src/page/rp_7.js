import Navbar from "../components/navbar";
import Footer from "../components/footer";
import img from "../assets/R_7.jpeg"
const RP_7 = () => {
    return ( 
        <>
        <Navbar/>
        <div className="flex flex-col mb-5">
            <h1 className="pt-5 ml-10 text-2xl pb-2 head">Serah Terima Absensi RFID ke Sekolah</h1>
            <span className="ml-10 w-40 border-b-2 border-black "></span>
        </div>
        <div className="flex flex-col  max-w-4xl mx-auto">
        <p className="konten text-sm">Jumat, 20 November 2017 PPTIK telah melakukan penyerahan Mesin Absensi dan Kartu RFID yang rencananya akan diujicoba di SMP Telkom Bandung akhir November ini.

Kegiatan ini merupakan tahapan awal dari ujicoba sistem ELearning terhadap beberapa SMP yang menjadi mitra kerjasama PPTIK.</p>
        <div class="tabs mr-16 mb-5 flex justify-start items-start">
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
                    <div class="tab-content">
                    <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default RP_7;