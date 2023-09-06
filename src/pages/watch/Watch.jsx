import "./watch.scss"
import { ArrowBackOutlined } from '@material-ui/icons'

export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        <video className="video" autoPlay progress controls src="https://stock.adobe.com/co/search/video?k=animals&asset_id=334515679"/>
        
    </div>
  )
}
