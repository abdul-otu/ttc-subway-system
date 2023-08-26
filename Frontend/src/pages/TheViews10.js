import { useEffect, useState } from "react";
import SideBar from '../components/Sidebar'

const TheViews10 = () => {
    const [views, setViews] = useState(null)
    const [views2, setViews2] = useState(null)
    useEffect(()=>{
        const fetchViews = async () =>{
            const response =  await fetch('/api/views/viewten')
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
                <h1 class="text-left whitespace-nowrap px-4 py-2 font-bold text-xl text-gray-100 border-b-2">View 10</h1>
                <table class="divide-y divide-gray-200">
                    <tr>
                        <th width="350x" class="text-justify whitespace-nowrap px-4 py-2 font-bold text-gray-100 border-r-2">Starting Station</th>
                        <th width="350px" class="whitespace-nowrap px-4 py-2 font-bold text-gray-100 border-r-2">Final Destination</th>
                        <th width="350px" class="whitespace-nowrap px-4 py-2 font-bold text-gray-100 border-r-2">Capacity</th>
                        <th width="350px" class="whitespace-nowrap px-4 py-2 font-bold text-gray-100">Start Time</th>
                    </tr>
                    {views && views.map((views) => (
                    <tr>
                    <td width="350px" class="text-left whitespace-nowrap px-4 py-2 font-light text-gray-100 border-r-2" key={views._id}>{views.starting_dest}</td>
                    <td width="350px" class="text-left whitespace-nowrap px-4 py-2 font-light text-gray-100 border-r-2" key={views._id}>{views.final_dest}</td>
                    <td width="350px" class="text-left whitespace-nowrap px-4 py-2 font-light text-gray-100 border-r-2" key={views._id}>{views.capacity}</td>
                    <td width="350px" class="text-left whitespace-nowrap px-4 py-2 font-light text-gray-100" key={views._id}>{views.trainsJoinTrainS[1]}11:00</td>
                    </tr>
                    //["_id":"6374496c28bb97fe6792ad1f","id":"7","final_dest":"Mccown","starting_dest":"Kennedy",
                    //"capacity":100,"line_num":"3","trainsJoinTrainS":["_id":"637916a450d415995b8ce371","start_time":"13:00"]]
                    ))}
                </table>
                </div>
            </div>
       </div>
    )
}

export default TheViews10;