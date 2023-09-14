import "./watch.scss"
import { ArrowBackOutlined } from '@material-ui/icons'
import nada from '../../assets/video/BalladofBusterScruggs-SaloonScene.mp4'

export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined/>
            Regresar
        </div>  

        <iframe title="nada" className="video" src="https://filemoon.sx/e/fjri4z2tn51d/212867--32507cf2-686a-4e1e-bb29-901fc3083b22--vrfy--1744770-filemoon.mp4" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="640" height="360" allowfullscreen></iframe>
    </div>
  )
}
