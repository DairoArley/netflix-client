import ListItem from "../listItem/ListItem"
import "./list.scss"
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@material-ui/icons"

export default function List() {
  return (
    <div className="list">
        <span className="listTitle">Continuar viendo contenido de Dairo</span>
        <div className="wrapper">
            <ArrowBackIosOutlined/>
            <div className="container">
              <ListItem/>  
              <ListItem/>   
              <ListItem/>                 
              <ListItem/>   
              <ListItem/>   
            </div>
            <ArrowForwardIosOutlined/>

        </div>
    </div>
  )
}
