import { useState } from "react";
import "./listItem.scss"
import { Add, PlayArrow, ThumbUpAltOutlined, ThumbDownOutlined } from '@material-ui/icons';
import trailerVideo from "../../assets/movie.jpg"

export default function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false)
  const trailer = "https://www.youtube.com/embed/DwuJeGYlYyw?si=E_pcMtwhqMQ7cIId"
  return (
    <div className="listItem" 
         style={{left: isHovered && index * 225 - 50 + index * 2.5}} 
         onMouseEnter={() => setIsHovered(true)} 
         onMouseLeave={() => setIsHovered(false)} >
      <img
        src={trailerVideo}
        alt="first"
      />
      {isHovered && (
        <>
        <iframe className="video"  width="560" height="315" src={trailer} title="YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className="itemInfo">
          <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownOutlined className="icon"/>
          </div>
          <div className="itemInfoTop">
            <span>1 hora 14 mins</span>
            <span className="limit">+12</span>
            <span>2004</span>
          </div>
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In reprehenderit ea, temporibus ab esse quae possimus dolore delectus.
          </div>
          <div className="genre">Action</div>
        </div>
        </>
      )}
    </div>
  )
}
