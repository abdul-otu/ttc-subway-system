import { useEffect, useState } from "react";
import SideBar from '../components/Sidebar'

const TheViews9 = () => {
    const [views, setViews] = useState(null)
  
    useEffect(()=>{
        const fetchViews = async () =>{
            const response =  await fetch('api/views/viewNine')
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
                    <h1 class="text-left whitespace-nowrap px-4 py-2 font-bold text-xl text-gray-100 border-b-2">View 9</h1>
                <table>
                    <tr>
                        <th width="200x" class="text-left whitespace-nowrap px-4 py-2 font-bold text-gray-100 border-r-2">Common Line Number</th>
                        <th width="200px" class="text-left whitespace-nowrap px-4 py-2 font-bold text-gray-100 ">Station Name</th>
                    </tr>
                    {views && views.map((views) => (                          
                        <tr>
                        <td  width="300x"class="text-left   whitespace-nowrap px-4 py-2 font-light text-gray-100 border-r-2" key={views._id.id.line}>{views._id.line[0]},{views._id.line[1]}</td>
                        <td  width="300x"class="text-left   whitespace-nowrap px-4 py-2 font-light text-gray-100" key={views._id.id}>{views._id.station}</td>
                        </tr>
                        
                        //[{"_id":{"id":["637449e028bb97fe6792ad4e","637449e028bb97fe6792ad77"],"line":["1","2"],"station":"Bloor-Yonge"}}
                    ))}
                </table>
                </div>
            </div>
       </div>
    )
}

export default TheViews9;