import Navbar from "../components/navbar";
import Footer from "../components/footer";
import img from "../assets/R_9.jpg"
const Rp_9 = () => {
    return ( 
        <>
        <Navbar/>
        <div className="flex flex-col mb-5">
            <h1 className="pt-5 ml-10 text-2xl pb-2 head">Pertemuan dengan SMKN 1 Banjit Riset Mengenai Produktivitas Kopi</h1>
            <span className="ml-10 w-40 border-b-2 border-black "></span>
        </div>
        <div className="flex flex-col  max-w-4xl mx-auto">
        <p className="konten text-sm">Digital Learning Lesson Study (DLL) adalah studi pelajaran berbasis teknologi informasi. Dalam DLLS, studi pelajaran dilakukan dan diperkaya dengan penggunaan teknologi informasi. Pertemuan fisik digantikan oleh pertemuan virtual melalui media sosial digital sehingga mengurangi kebutuhan komuter. Sumber belajar dalam bentuk digital dapat dengan mudah dibagikan dan dibahas. Diskusi ini juga tercatat dengan baik. Selain itu, DLLS memperhitungkan tidak hanya kegiatan kelas reguler tetapi juga ruang kelas virtual dijalankan oleh streaming video dari kelas reguler.

Dalam penelitian ini kami memberikan perhatian dalam kompetensi guru untuk memproduksi sumber daya pembelajaran digital. Secara khusus, penelitian ini mempelajari media pembelajaran berbasis komputer dalam bentuk video. Media semacam ini memungkinkan guru untuk membawa hal-hal yang tidak mudah untuk hadir dalam kelas. Penelitian ini mengambil keuntungan dari pesatnya perkembangan teknologi ponsel pintar yang membuka banyak peluang untuk aplikasi selain komunikasi suara. Ponsel pintar yang semakin canggih menjadi lebih terjangkau. Kamera sebagai bagian integral ponsel pintar terus meningkatkan kualitas dan sekarang menawarkan fitur produksi video kepada siapa saja.

Tujuan dari penelitian ini untuk mengembangkan model untuk meningkatkan kompetensi guru sekolah dasar dalam pembuatan media pembelajaran berbasis komputer untuk mata pelajaran sains, Matematika dan Sains Terpadu. Model ini dikembangkan dan diuji ke komunitas guru di Cianjur.</p>
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
 
export default Rp_9;