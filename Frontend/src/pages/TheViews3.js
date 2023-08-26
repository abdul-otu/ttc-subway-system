import { useEffect, useState } from "react";
import SideBar from '../components/Sidebar'

const TheViews3 = () => {
    const [views, setViews] = useState(null)
    const [views2, setViews2] = useState(null)
    useEffect(()=>{
        const fetchViews = async () =>{
            const response =  await fetch('/api/views/viewThree')
            const json = await response.json()

            if (response.ok) {
                setViews(json)
            }
        

        }

        fetchViews()
    }, [])

    return (
        <div>
        <span><SideBar /></span>
        <div className="views" >
                <div class="overflow-x-auto bg-slate-700 shadow-md rounded pt-6 pb-6 pl-14 pr-12 mb-4 w-1/2 mx-auto">
                <h1 class="text-left whitespace-nowrap px-4 py-2 font-bold text-xl text-gray-100 border-b-2">View 3</h1>
                <table class="divide-y divide-gray-200">
                    <tr>
                        <th width="350x" class="text-justify whitespace-nowrap px-4 py-2 font-bold text-gray-100 border-r-2">Station Name</th>
                        <th width="350px" class="whitespace-nowrap px-4 py-2 font-bold text-gray-100">Available Parking</th>
                    </tr>
                    {views && views.map((views) => (
                    <tr>
                    <td width="350px" class="text-left whitespace-nowrap px-4 py-2 font-light text-gray-100 border-r-2" key={views._id}>{views.station_name}</td>
                    <td width="350px" class="text-center whitespace-nowrap px-4 py-2 font-light text-gray-100" key={views._id}> {views.avail_parking}</td>
                    </tr>
                    ))}
                </table>
                </div>
            </div>
       </div>
    )
}

export default TheViews3;