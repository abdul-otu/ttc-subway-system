import React, { useEffect, useState } from 'react';
import {useRef} from 'react';

const Form = () => {
   const start_station = useRef(null)
   const final_destin = useRef(null)
   
        const [stations, setStations] = useState(null)
        const inputRef = useRef(null);
    
        useEffect(() => {
            const fetchStations = async () => {
                const response = await fetch('/api/stations')
                const json = await response.json()
                
                if (response.ok){
                    setStations(json)
                }
                
            }
            
            fetchStations()
            alert("Station does not exist!")
        }, []);


        return (
                <div className="flex flex-col justify-center items-center w-screen">
                <form className="bg-indigo-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
                <div  className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                    Starting Station
                    </label>
                    <input ref={start_station} className="bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-600" id="start_station" type="text" placeholder="Select Starting Station">
                        </input></div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                    Destination
                    </label>
                    <input ref={final_destin} className="bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-600" id="dest_station" type="text" placeholder="Select Destination">
                    </input></div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                    Date
                    </label>
                    <input  className="bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-600" id="dest_station" type="text" placeholder="Select Date">
                        </input></div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Depart At
                </label>
                <div className="relative">
                    <select className="block appearance-none w-full bg-gray-100 border border-green-200 text-gray-600 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-green-500" id="grid-state">
                    <option>Now</option>
                    <option>1:00 AM</option>
                    <option>2:00 AM</option>
                    <option>3:00 AM</option>
                    <option>4:00 AM</option>
                    <option>5:00 AM</option>
                    <option>6:00 AM</option>
                    <option>7:00 AM</option>
                    <option>8:00 AM</option>
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                    <option>10:00 PM</option>
                    <option>11:00 PM</option>
                    <option>12:00 AM</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
      <br></br>
      <div className="flex items-center justify-center">
        <button onlick={useEffect} className="bg-indigo-800 hover:bg-transparent border hover:text-indigo-800 hover:border-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Plan Route
          </button>
        </div>
        </form>
    </div>
  
    );
};

export default Form;