import './Sidebar.css'
import SidebarOption from './SidebarOption'
import { Home } from '@mui/icons-material'
import { Search } from '@mui/icons-material'
import { LibraryMusic } from '@mui/icons-material'
import { useStateValue } from './StateProvider'
function Sidebar(){
    const [{ playlists }, dispatch] = useStateValue()

    return(
        <>
        <div className="sidebar">
            <img className="sidebar_logo"src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify"/>
            <SidebarOption  Icon ={Home}title="Home" />
            <SidebarOption Icon ={Search} title="Search" />
            <SidebarOption  Icon={LibraryMusic}title="Your Library"/>
            <br/>
            <strong className='sidebar_title'>PLAYLISTS</strong>
             <hr/>

            { playlists?.items?.map(playlist=>
              <SidebarOption title={playlist.name}/>
                )}
           
        </div>
        </>
    )
}

export default Sidebar