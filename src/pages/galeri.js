import Navbar from "../components/navbar";
import Footer from "../components/footer";
import g_1 from '../assets/G_1.jpeg';
import g_2 from '../assets/G_2.jpeg';
import g_3 from '../assets/G_3.jpeg';
import g_4 from '../assets/G_4.jpeg';
import g_5 from '../assets/G_5.jpeg';
import g_6 from '../assets/G_6.jpeg';
import g_7 from '../assets/G_7.jpeg';
import g_8 from '../assets/G_8.jpeg';
import g_9 from '../assets/G_9.jpeg';

const Galeri = () => {
    return ( 
        <>
        <Navbar/>
        <div className="flex flex-col mt-2">
        <span className="ml-10 flex text-2xl">Galeri</span>
        <span className="border-b-4 ml-10 border-black w-24"></span>
        </div>
        <div class="w-4/5 mx-auto px-4 pt-5">
            <div class="flex flex-col md:flex-row gap-2">
                <div class="flex flex-1 flex-col gap-2">
                    <div class="flex flex-1 flex-col">
                        <img class="object-cover h-full" src={g_1}/>
                    </div>
                    <div class="hidden md:flex flex-1 flex-row gap-2">
                        <div class="flex flex-1 flex-col">
                
                        <img class="object-cover h-full" src={g_2}/>
                        </div>
                        <div class="hidden md:flex flex-1 flex-col">
                
                        <img class="object-cover h-full" src={g_3}/>
                        </div>
                    </div>
                </div>
                <div class="flex flex-1 flex-col gap-2">
                    <div class="hidden md:flex flex-1 flex-row gap-2">
                        <div class="flex flex-1 flex-col">
                        <img class="object-cover h-full" src={g_4}/>  
                        </div>
                        <div class="hidden md:flex flex-1 flex-col">
                        <img class="object-cover h-full" src={g_5}/>
                        </div>
                    </div>                        
                    <div class="flex flex-1 flex-col">
                    <img class="object-cover h-full" src={g_6}/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Galeri;