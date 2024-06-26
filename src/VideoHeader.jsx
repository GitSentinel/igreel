import './VideoHeader.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const VideoHeader = () => {
  return (
    <div className='videoHeader'>
        <ArrowBackIosIcon/>
        <h3>Reels</h3>
        <CameraAltIcon/>
    </div>
  )
}

export default VideoHeader