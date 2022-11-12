import Oip from './image/OIP.jfif'
import Oip2 from './image/OIP2.jfif'
import Oip3 from './image/OIP3.jfif'
import './Slider.css'
function Slider(){
    return(
        <>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Oip} className="d-block w-100 height-500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Oip2} className="d-block w-100  height-500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Oip3} className="d-block w-100 height-500" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>

    )
}
export default Slider