import './Header.css'
import { Search } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { useStateValue } from './StateProvider'
function Header() {
    const [{ user }, dispatch] = useStateValue()
    return (
        <>
            <div className="header">
                <div className='header_left'>
                    <Search />
                    <input placeholder='Search For Artist ,Songs Podcasts' type="text" />
                </div>
                <div className='header_right'>
                    <Avatar src="" alt="RQ"/>
                    <h4>{user?.display_name}</h4>
                </div>
            </div>
        </>
    )
}
export default Header