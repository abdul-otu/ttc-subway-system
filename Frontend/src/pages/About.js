import SideBar from '../components/Sidebar'
import Image  from './Images/train.jpg'; 

const About = () => {
    return (
        <div>
        <span><SideBar /></span>
        
         <section>
         <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
           <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
             <div
               class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
               <img alt="Train" className="absolute inset-0 h-full w-full object-cover" src={Image} />
               
             </div>
             <div class="lg:py-10">
               <h2 class="text-3xl font-bold sm:text-4xl">About us</h2>
       
               <p class="mt-4 text-gray-600">
               Many people around the world rely on public transportation to travel from point A to point B.
                When traveling with public transport, knowing the schedule for a train or bus will help the user plan out their trip. 
                </p>
                <p class="mt-4 text-gray-600">
                This is important because trip planning has the potential to dramatically improve travel time for the user. 
                The issue of trip planning for public transport led our group to decide on a program to help alleviate this problem.
                </p>
                <p class="mt-4 text-gray-600"> 
                The program we decided to create is a Railway Management System. 
                This program will be able to help the user retrieve information about a train’s schedule as well as important information about the stations and trains. 
               </p>
               
               <a
                 href="/"
                 class="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
               >
                 <span class="text-sm font-medium"> Get Started </span>
       
                 <svg
                   class="ml-3 h-5 w-5"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                 >
                   <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-width="2"
                     d="M17 8l4 4m0 0l-4 4m4-4H3"
                   />
                 </svg>
               </a>
             </div>
           </div>
         </div>
       </section>
       </div>
    )
}

export default About;