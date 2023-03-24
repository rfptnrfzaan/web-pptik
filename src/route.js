import { Routes, Route } from 'react-router-dom';
import Home from './pages/home_page';
import Team from './pages/team';
import Mitra from './pages/mitra';
import Galeri from './pages/galeri';
import Tentang from './pages/tentang';
import PP from './pages/pp';
import Karya from './pages/karya';
import Workshop from './pages/ws';
import Riset from './pages/riset';
import Karya_2 from './pages/karya_2';
import WS_2 from './pages/ws_2';
import Riset_2 from './pages/riset_2';
import Kontak from './pages/kontak';
import Admin from './pages/admin';
import KP_1 from './page/kp_1';
import Kp_2 from './page/kp_2';
import Kp_3 from './page/kp_3';
import Kp_4 from './page/kp_4';
import Kp_5 from './page/kp_5';
import Kp_6 from './page/kp_6';
import Kp_7 from './page/kp_7';
import Kp_8 from './page/kp_8';
import Kp_9 from './page/kp_9';
import WSP_1 from './page/wsp_1';
import WSP_2 from './page/wsp_2';
import WSP_3 from './page/wsp_3';
import WSP_4 from './page/wsp_4';
import WSP_5 from './page/wsp_5';
import WSP_6 from './page/wsp_6';
import WSP_7 from './page/wsp_7';
import WSP_8 from './page/wsp_8';
import WSP_9 from './page/wsp_9';
import RP_1 from './page/rp_1';
import RP_2 from './page/rp_2';
import RP_3 from './page/rp_3';
import RP_4 from './page/rp_4';
import RP_5 from './page/rp_5';
import RP_6 from './page/rp_6';
import RP_7 from './page/rp_7';
import RP_8 from './page/rp_8';
import RP_9 from './page/rp_9';
import MP_1 from './page/mp_1';
import MP_2 from './page/mp_2';
import MP_3 from './page/mp_3';
import MP_4 from './page/mp_4';
import MP_5 from './page/mp_5';
import MP_6 from './page/mp_6';
import MP_7 from './page/mp_7';
import MP_8 from './page/mp_8';
import MP_9 from './page/mp_9';


import('preline');

function App() {
  return (
    <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Peneliti & Staf' element={<Team/>}/>
            <Route path='/Mitra' element={<Mitra/>}/>
            <Route path='/Galeri' element={<Galeri/>}/>
            <Route path='/Tentang' element={<Tentang/>}/>
            <Route path='/Privacy Policy' element={<PP/>}/>
            <Route path='/Karya' element={<Karya/>}/>
            <Route path='/Karya_2' element={<Karya_2/>}/>
            <Route path='/Workshop & Seminar' element={<Workshop/>}/>
            <Route path='/Workshop & Seminar_2' element={<WS_2/>}/>
            <Route path='/Riset' element={<Riset/>}/>
            <Route path='/Riset_2' element={<Riset_2/>}/>
            <Route path='/Kontak' element={<Kontak/>}/>
            <Route path='/Admin' element={<Admin/>}/>
            <Route path='/Smart Health System' element={<KP_1/>}/>
            <Route path='/Pembuatan Mobil Listrik' element={<Kp_2/>}/>
            <Route path='/Koordinasi SIM dengan SMKN 7 Kota Tangerang' element={<Kp_3/>}/>
            <Route path='/Pemasangan Alat Survey' element={<Kp_4/>}/>
            <Route path='/Diskusi Project Legit Bandung' element={<Kp_5/>}/>
            <Route path='/Diskusi Lanjutan dengan Tim Teknik Sipil Universitas Bandar Lampung' element={<Kp_6/>}/>
            <Route path='/Pemasangan monitor untuk Bus Public Announcement' element={<Kp_7/>}/>
            <Route path='/Diskusi lanjutan SEMUT JABAR' element={<Kp_8/>}/>
            <Route path='/Penyerahan Alat Peraga Smart Hidroponik' element={<Kp_9/>}/>
            <Route path='/Workshop Penyelarasan Kurikulum Bahan Ajar SMK Wikrama' element={<WSP_1/>}/>
            <Route path='/Program Kelas Online bersama PT LSKK' element={<WSP_2/>}/>
            <Route path='/Webinar Smart System For Industry' element={<WSP_3/>}/>
            <Route path='/Workshop di SMK Ulil Albab Cirebon' element={<WSP_4/>}/>
            <Route path='/Kunjungan SMK Dewantara Bekasi' element={<WSP_5/>}/>
            <Route path='/Workshop Jejaring Kemitraan bersama SMKN 13 Bandung' element={<WSP_6/>}/>
            <Route path='/KKSI 2021' element={<WSP_7/>}/>
            <Route path='/Sosialisasi Kawal Desa' element={<WSP_8/>}/>
            <Route path='/Webinar PPTIK SMK United' element={<WSP_9/>}/>
            <Route path='/Serah Terima IoT Tracker Universitas Trilogi' element={<RP_1/>}/>
            <Route path='/Pertemuan Rutin PPTIK Bersama Forum Angkot' element={<RP_2/>}/>
            <Route path='/Diskusi PPTI 2018 bersama Ristekdikti' element={<RP_3/>}/>
            <Route path='/Kerjasama Riset STT YBS Internasional' element={<RP_4/>}/>
            <Route path='/Manajemen Transportasi Publik dan Solusi Mengatasi Kemacetan di Perkotaan' element={<RP_5/>}/>
            <Route path='/Kunjungan ke Dinas Perhubungan Kota Bandung' element={<RP_6/>}/>
            <Route path='/Serah Terima Absensi RFID ke Sekolah' element={<RP_7/>}/>
            <Route path='/Ujicoba Alat Detektor Gempa' element={<RP_8/>}/>
            <Route path='/Pengembangan Media Pembelajaran Berbasis Komputer untuk Digital Learning Lesson Study (DL-LS)' element={<RP_9/>}/>
            <Route path='/Diskusi Kolaborasi Daerah dan PPTIK' element={<MP_1/>}/>
            <Route path='/Pertemuan dengan SMKN 1 Banjit Riset Mengenai Produktivitas Kopi' element={<MP_2/>}/>
            <Route path='/Diskusi dengan Universitas Bandar Lampung Administrasi Bisnis' element={<MP_3/>}/>
            <Route path='/Diskusi terkait Matching Fund untuk Pemodelan Tsunami' element={<MP_4/>}/>
            <Route path='/Pertemuan PPTIK ITB dan UBL' element={<MP_5/>}/>
            <Route path='/Diskusi Lampung Digital Heritage antara UBL, PPTIK ITB dan Pemda Lampung Timur' element={<MP_6/>}/>
            <Route path='/Diskusi dengan Puskesmas Cilawu Garut' element={<MP_7/>}/>
            <Route path='/Kunjugan dari SMKN 1 Dawuan' element={<MP_8/>}/>
            <Route path='/Diskusi PKR dengan Prof. Estiko Rijanto' element={<MP_9/>}/>
    </Routes>
  );
}

export default App;
