import { useEffect, useState } from "react";
import SideBar from "../components/Sidebar";
const Stations = () => {
    const [stations, setStations] = useState(null)

    useEffect(() => {
        const fetchStations = async () => {
            const response = await fetch('/api/stations')
            const json = await response.json()

            if (response.ok){
                setStations(json)
            }
        }

        fetchStations()
    }, [])

    return (
        
        <div className="home">
            <span><SideBar /></span>
            <div className="stations" >
                <div class="overflow-x-auto bg-slate-700 shadow-md rounded pt-6 pb-6 pl-14 pr-8 mb-4 w-1/2 mx-auto">
                <table class="divide-y divide-gray-200">
                    <tr>
                        <th width="300x" class="text-justify whitespace-nowrap px-4 py-2 font-bold text-gray-100">Station Name</th>
                        <th width="150px" class="whitespace-nowrap px-4 py-2 font-bold text-gray-100">Available Parking</th>
                        <th width="100px" class="whitespace-nowrap px-4 py-2 font-bold text-gray-100">Line Number</th>
                    </tr>
                {stations && stations.map((stations) => (
                    <tr>
                    <td width="350px" class="text-left whitespace-nowrap px-4 py-2 font-light text-gray-100" key={stations._id}>{stations.station_name}</td>
                    <td width="150px" class="text-center whitespace-nowrap px-4 py-2 font-light text-gray-100" key={stations._id}> {stations.avail_parking}</td>
                    <td width="100px" class="text-center whitespace-nowrap px-4 py-2 font-light text-gray-100" key={stations._id}> {stations.line}</td>
                    </tr>
                ))}</table>
                </div>
            </div>
        </div>
    )
}

export default Stations;