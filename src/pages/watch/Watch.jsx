import "./watch.scss"
import { ArrowBackOutlined } from '@material-ui/icons'
import nada from '../../video/BalladofBusterScruggs-SaloonScene.mp4'

export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        <video className="video" autoPlay progress controls src={nada} >
        </video>
        
    </div>
  )
}
