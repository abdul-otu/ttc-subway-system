import { useEffect, useState } from "react";
import SideBar from '../components/Sidebar'

const TheViews7 = () => {
    const [views, setViews] = useState(null)
  
    useEffect(()=>{
        const fetchViews = async () =>{
            const response =  await fetch('api/views/viewSeven')
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
                <div class="overflow-x-auto bg-slate-700 shadow-md rounded pt-6 pb-6 pl-14 pr-8 mb-4 w-1/2 mx-auto">
                <h1 class="text-left whitespace-nowrap px-4 py-2 font-bold text-xl text-gray-100 border-b-2">View 7</h1>
                <table>
                    <tr>
                        <th width="200x" class="text-left whitespace-nowrap px-4 py-2 font-bold text-gray-100 border-r-2">Starting Destination</th>
                        <th width="200px" class="text-center whitespace-nowrap px-4 py-2 font-bold text-gray-100 border-r-2">Available Parking</th>
                        <th width="200px" class="text-center whitespace-nowrap px-4 py-2 font-bold text-gray-100 border-r-2">Start Time</th>
                        <th width="200px" class="text-center whitespace-nowrap px-4 py-2 font-bold text-gray-100">Remaining Capacity</th>
                    </tr>
                    {views && views.map((views) => (
                        <tr>
                        <td  width="300x"class="text-left   whitespace-nowrap px-4 py-2 font-light text-gray-100 border-r-2" key={views._id}>{views.starting_dest}</td>
                        <td  width="300x"class="text-center whitespace-nowrap px-4 py-2 font-light text-gray-100 border-r-2" key={views._id}>{views.trainJoinStation[0].avail_parking}</td>
                        <td  width="300x"class="text-center   whitespace-nowrap px-4 py-2 font-light text-gray-100 border-r-2" key={views._id}>{views.trainJoinTrainS[0].start_time}</td>
                        <td  width="300x"class="text-center whitespace-nowrap px-4 py-2 font-light text-gray-100" key={views._id}>{views.trainJoinTrainS[0].remaining_capacity}</td>
                        </tr>
                        
                        //[{"_id":"6374496c28bb97fe6792ad2b","starting_dest":"Kipling","trainJoinStation":[{"avail_parking":"175"}],"trainJoinTrainS":[{"start_time":"19:00","remaining_capacity":70}]},
                    ))}
                </table>
                </div>
            </div>
       </div>
    )
}

export default TheViews7;