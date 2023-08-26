import SideBar from '../components/Sidebar';

const TheViews = () => {
    return (
        <div >
        <span><SideBar /></span>
            <div>
            <h1 class="text-center whitespace-nowrap px-4 py-2 font-bold text-xl text-gray-800 border-b-2">All the 10 Views Are Available here</h1><br></br>
                <div class="overflow-x-auto bg-slate-700 shadow-md rounded pt-6 pb-6 pl-10 pr-10 mb-10 w-1/3 mx-auto my-auto">
                    <a href ="TheViews1"><button class="bg-gray-300 border hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                        View 1
                    </button></a>
                    <a href ="TheViews2"><button class="bg-gray-300 border hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                        View 2
                    </button></a>
                    <a href ="TheViews3"><button class="bg-gray-300 border hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                        View 3
                    </button></a>
                
                    <a href ="TheViews4"><button class="bg-gray-300 border hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                        View 4
                    </button></a>
                    <a href ="TheViews5"><button class="bg-gray-300 border hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                        View 5
                    </button></a>
                </div>
                <div class="overflow-x-auto bg-slate-700 shadow-md rounded pt-6 pb-6 pl-10 pr-8 mb-10 w-1/3 mx-auto">
                    <a href ="TheViews6"><button class="bg-gray-300 border  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                        View 6
                    </button></a>
                
                    <a href ="TheViews7"><button class="bg-gray-300 border hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                        View 7
                    </button></a>
                    <a href ="TheViews8"><button class="bg-gray-300 border hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                        View 8
                    </button></a>
                    <a href ="TheViews9"><button class="bg-gray-300 border hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                        View 9
                    </button></a>
                
                <a href ="TheViews10"><button class="bg-gray-300 border hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                        View 10
                    </button></a>
                    </div>
            </div>
        </div>
    )
}

export default TheViews;