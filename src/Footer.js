import './Footer.css'
import { PlayCircleFilledOutlined } from '@mui/icons-material'
import { SkipPrevious } from '@mui/icons-material'
import { SkipNext } from '@mui/icons-material'
import { ShuffleOutlined } from '@mui/icons-material'
import { Repeat } from '@mui/icons-material'
import { PlaylistPlay } from '@mui/icons-material'
import { VolumeDown } from '@mui/icons-material'
import { Grid } from '@mui/material'
import { Slider } from '@mui/material'
function Footer() {
    return (
        <>
            <div className="footer">
                <div className='footer_left'>
                    <img className='footer_albumLogo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSydQ0D6x63uyMi7pU3iKznFmRoO4nvf5epwX40bZ1XaA&s" alt="yeah usher" />
                    <div className='footer_songInfo'>
                        <h4>Yeah!</h4>
                        <p>Usher</p>
                    </div>
                </div>
                <div className='footer_center'>
                    <ShuffleOutlined  className='footer_green'/>
                    <SkipPrevious className='footer_icon' />
                    <PlayCircleFilledOutlined  fontSize='large'className='footer_icon'/>
                    <SkipNext  className='footer_icon' />
                    <Repeat  className='footer_green'/>
                </div>
                <div className='footer_right'>
                    <Grid container spacing={2}>

                        <Grid item>
                            <PlaylistPlay />
                        </Grid>
                        <Grid item >
                            <VolumeDown />
                        </Grid>
                        <Grid item xs >
                            <Slider />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}
export default Footer