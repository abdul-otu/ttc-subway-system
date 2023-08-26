import SideBar from '../components/Sidebar'
import Image2 from './Images/TrainMap.jpg'

const Lines = () => {
    return (
        <div>
        <span><SideBar /></span>
        <section>
         <div class="overflow-x-auto bg-slate-700 shadow-md rounded pt-2 pb-2 pl-2 pr-2 mb-4 w-2/3 mx-auto">
           <div>
             <div>
               <img className="inset-0 h-200px w-200px" src={Image2} />
               
             </div>
             </div>
             </div>
             </section>
             </div>
    )
}

export default Lines;