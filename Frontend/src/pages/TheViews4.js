import { useEffect, useState } from "react";
import SideBar from '../components/Sidebar'

const TheViews4 = () => {
    const [views, setViews] = useState(null)
    const [views2, setViews2] = useState(null)
    useEffect(()=>{
        const fetchViews = async () =>{
            const response =  await fetch('/api/views/viewFour')
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
                <h1 class="text-left whitespace-nowrap px-4 py-2 font-bold text-xl text-gray-100 border-b-2">View 4</h1>
                <table class="divide-y divide-gray-200">
                <div>
                    <tr>
                        <th width="50px" class="whitespace-nowrap px-4 py-2 font-bold text-gray-100 border-r-2">Capacity</th>
                        <th width="100px" class="whitespace-nowrap px-4 py-2 font-bold text-gray-100 border-r-2">Station Name</th>
                        <th width="100px" class="whitespace-nowrap px-4 py-2 font-bold text-gray-100 border-r-2">Available Parking</th>
                        <th width="100px" class="whitespace-nowrap px-4 py-2 font-bold text-gray-100">Start Time</th>
                    </tr>
                    
                    {views && views.map((views) => (
                       
                        <><tr>
                            <td width="300x" class="whitespace-nowrap px-4 py-2 font-light text-gray-100 border-r-2" key={views._id}>{views.capacity}</td>
                            <td width="300x" class="whitespace-nowrap px-4 py-2 font-light text-gray-100 border-r-2" key={views._id.trainsJoinStation}>{views.trainsJoinStation[0].station_name}</td>
                            <td width="300x" class="whitespace-nowrap px-4 py-2 font-light text-gray-100 border-r-2" key={views._id.trainsJoinStation}>{views.trainsJoinStation[0].avail_parking}</td>
                            <td width="300x" class=" whitespace-nowrap px-4 py-2 font-light text-gray-100" key={views._id.trainsJoinTrainS}>{views.trainsJoinTrainS[0].start_time}</td>
                            </tr>
                            <tr>
                                <td width="300x" class="whitespace-nowrap px-4 py-2 font-light text-gray-100 border-r-2" key={views._id}>{views.capacity}</td>
                                <td width="300x" class="whitespace-nowrap px-4 py-2 font-light text-gray-100 border-r-2" key={views._id.trainsJoinStation}>{views.trainsJoinStation[1].station_name}</td>
                                <td width="300x" class="whitespace-nowrap px-4 py-2 font-light text-gray-100 border-r-2" key={views._id.trainsJoinStation}>{views.trainsJoinStation[1].avail_parking}</td>
                                <td width="300x" class=" whitespace-nowrap px-4 py-2 font-light text-gray-100" key={views._id.trainsJoinTrainS}>{views.trainsJoinTrainS[0].start_time}</td>
                            </tr>
                            <tr>
                                <td width="300x" class="whitespace-nowrap px-4 py-2 font-light text-gray-100 border-r-2" key={views._id}>{views.capacity}</td>
                                <td width="300x" class="whitespace-nowrap px-4 py-2 font-light text-gray-100 border-r-2" key={views._id.trainsJoinStation}>{views.trainsJoinStation[2].station_name}</td>
                                <td width="300x" class="whitespace-nowrap px-4 py-2 font-light text-gray-100 border-r-2" key={views._id.trainsJoinStation}>{views.trainsJoinStation[2].avail_parking}</td>
                                <td width="300x" class=" whitespace-nowrap px-4 py-2 font-light text-gray-100" key={views._id.trainsJoinTrainS}>{views.trainsJoinTrainS[0].start_time}</td>
                            </tr>
                            </>
                    ))}
                    </div>
                </table>
                </div>
            </div>
       </div>
    )
}

export default TheViews4;