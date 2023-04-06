import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"


export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video src="movie.ogg" className="video" autoPlay progress controls />
    </div>
  )
}


