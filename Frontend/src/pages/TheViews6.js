import { useEffect, useState } from "react";
import SideBar from '../components/Sidebar'

const TheViews6 = () => {
    const [views, setViews] = useState(null)
  
    useEffect(()=>{
        const fetchViews = async () =>{
            const response =  await fetch('api/views/viewSix')
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
                <h1 class="text-left whitespace-nowrap px-4 py-2 font-bold text-xl text-gray-100 border-b-2">View 6</h1>
                <table >
                    <tr>
                        <th width="650x" class="text-center whitespace-nowrap px-4 py-2 font-bold text-gray-100">Station Name</th>
                    </tr>
                    {views && views.map((views) => (
                        
                        <tr>
                        <td  width="650x"class="text-center   whitespace-nowrap px-4 py-2 font-light text-gray-100 " key={views._id}>{views.station_name}</td>
                        </tr>
                        
                        //[{"_id":"637449e028bb97fe6792ad4a","station_name":"Davisville"},{"_id":"637449e028bb97fe6792ad4b","station_name":"St Clair"},
                    ))}
                </table>
                </div>
            </div>
       </div>
    )
}

export default TheViews6;