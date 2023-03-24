import axios from "axios";
import { useEffect, useState } from "react";

const Admin = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);
    
    function getUsers() {

        axios.get('http://localhost:80/pptik/users').then(function(responses) {
            console.log(responses.data);
            setUsers(responses.data);
        });

    }
    return ( 
        <>
        <div className=" mx-auto w-[95%] pt-16">
            <div className="flex flex-col">
                <div className="overflow-x-auto shadow-md sm:rounded-lg ">
                <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden ">
                    <table className="min-w-full divide-gray-200 table-fixed dark:divide-gray-700">
                        <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                            <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400"
                            >
                             Name
                            </th>
                            <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400"
                            >
                            Email
                            </th>
                            <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400"
                            >
                            Phone
                            </th>

                            <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400"
                            >
                            Message
                            </th>


                        </tr>


                        </thead>


                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                    {users.map((user, key) => 
                                        <tr key={key}>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900  dark:text-white text-center">{user.username}</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900  dark:text-white text-center">{user.email}</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900  dark:text-white text-center">{user.phone}</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900  dark:text-white text-center">{user.massage}</td>
                                        </tr>

                                    )}
                                
                                </tbody>

                    </table>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
     );
}
 
export default Admin;