import img1 from "../assests/Category Icon.png"
import img2 from "../assests/Category Icon-1.png"
import img3 from "../assests/Category Icon-2.png"
import img4 from "../assests/Category Icon-3.png"
import img5 from "../assests/Category Icon-4.png"
import img6 from "../assests/Category Icon-5.png"
import img7 from "../assests/Category Icon-6.png"
import img8 from "../assests/Category Icon-7.png"
import "./Browse.css"


function Browse() {
    return(
        <div className="container">
            <div className="row">
                <div style={{marginTop : 50 , marginBottom : 30}}><h3>Browies Categories</h3></div>
                <div className="col-md-3 "><div class="card" style={{width : "18rem"}}>
  <img src={img1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h4 >Art </h4>
  </div>
</div>
</div>
                <div className="col-md-3"><div class="card" style={{width : "18rem"}}>
  <img src={img2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h4 >Collectibles </h4>
  </div>
</div>
</div>
                <div className="col-md-3"><div class="card" style={{width : "18rem"}}>
  <img src={img3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h4>Music</h4>
  </div>
</div></div>
                <div className="col-md-3"><div class="card" style={{width : "18rem"}}>
  <img src={img4} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h4>Photography</h4>
  </div>
</div></div>
<div className="col-md-3">
<div class="card" style={{width : "18rem" ,marginTop : 30 }}>
  <img src={img5} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h4>Video</h4>
  </div>
</div>

</div>

                <div className="col-md-3">
                    <div class="card" style={{width : "18rem" ,marginTop : 30}}>
  <img src={img6} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h4>Utility</h4>
  </div>
</div>
</div>
                <div className="col-md-3"><div class="card" style={{width : "18rem" ,marginTop : 30}}>
  <img src={img7} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h4>Sport</h4>
  </div>
</div>
</div>
                <div className="col-md-3"><div class="card" style={{width : "18rem" ,marginTop : 30}}>
  <img src={img8} class="card-img-top" alt="..."/>
  <div class="card-body">
   <h4>Virtual Worlds</h4>
  </div>
</div>
</div>  

<div className="Background">

</div>






    </div>
      </div>
        
        
        
    )
}
export default Browse;