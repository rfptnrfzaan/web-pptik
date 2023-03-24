import Footer from "../components/footer";
import Navbar from "../components/navbar";
import React, { useState } from 'react';
import axios, { Axios } from "axios";

const Kontak = () => {
        const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:80/pptik/user/save', inputs);
        console.log(inputs);

    }
    return ( 
        <>
        <Navbar/>
        <form onSubmit={handleSubmit} className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
                <p className="max-w-2xl konten gap-2">
                <p className="text-lg text-blue-500 font-semibold head mb-4">Pusat Penelitian Teknologi Informasi dan Komunikasi</p>
                Phone :
                <p>+62-22-4254034   / 0811 2298 086</p>
                Fax :
                <p>+62-22-2508763</p>
                Email :
                <p> yuliawati.pptik@gmail.com</p>
                <p>tessa.pptik@gmail.com</p>
                </p>

                <div className="mt-8">

                <address className="mt-2 head">
                4th Floor, Gd. Litbang Integrasi dan Aplikasi (PAU)
                Jl. Tamansari No. 126, Bandung 40132, Indonesia
                </address>
                </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <div>
                    <label className="sr-only" htmlFor="name">Name</label>
                    <input
                    required onChange={handleChange}
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="username"
                    />
                </div>

                <div className="grid grid-cols-1 mb-5 mt-5 gap-4 sm:grid-cols-2">
                    <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                        required onChange={handleChange}
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        id="email"
                        name="email"
                    />
                    </div>

                    <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                        required onChange={handleChange}
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                        name="phone"
                    />
                    </div>
                </div>

                <div>
                    <label className="sr-only" htmlFor="message">Message</label>

                    <textarea
                    required onChange={handleChange}
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    name="massage"
                    ></textarea>
                </div>

                <div className="mt-4">
                    <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                    >
                    Send Enquiry
                    </button>
                </div>

            </div>
            </div>
        </div>
        </form>
        <Footer/>
        </>
     );
}
 
export default Kontak;