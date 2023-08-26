import SideBar from '../components/Sidebar'

const Customer = () => {
    return (
        <div>
        <span><SideBar /></span>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 border border-double border-8 border-gray-700">
          <h2 class="text-xl font-bold sm:text-2xl">Contact Us</h2>
          <div class=" grid lg:grid-cols-2">   
            <div class="component content u-1/1 o-grid__col">
              <div class="component-content" tabindex="0">
                <div class="field-content">
                  <ol class=" pt-8 pl-4 list-disc">
                    <li>416-393-4636 (INFO), Automated information available 24 hours daily.
                    </li>
                    <li>Operator-assisted service is available from 8 a.m. to 6 p.m. daily, except statutory holidays.
                    </li>
                    <li>Telecommunications Relay Service number 1-800-855-0511, Daily, 8 a.m. to 6 p.m.; except statutory holidays.
                    </li>
                    <li>Elevator Service Status Line, 416 539-5438 (LIFT). 24 hours a day, seven days a week.</li>
                  </ol>
                </div>  
              </div>           
            </div>
          </div>
        </div>
          
        </div>
    )
}

export default Customer;