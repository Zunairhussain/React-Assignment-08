import img1 from "../assests/Image Placeholder.png"
import img2 from "../assests/Image Placeholder-1.png"
import img3 from "../assests/Image Placeholder-2.png"
import img5 from "../assests/Avatar Placeholder-6.png"
import img4 from "../assests/Avatar.png"
import img6 from "../assests/Avatar Placeholder-10.png"

import "./Discover.css"

function Discover() {
    return(

       <div className="container" style={{marginTop : 30}}>
        <div className="row">
            <div className="col-md-6"><h3 style={{marginLeft : 30}}>Discover More NFT</h3> <p style={{marginLeft : 30}} >Explore New Trending NFT</p></div>
            <div className="col-md-6"><button className="Button" style={{marginLeft : 380 , width : 150 , height : 50}} >See All</button></div>

            <div className="col-md-4">
 <div className="card" style={{ width: "18rem" , marginLeft : 20}}>
<img src={img1} className="card-img-top" alt="..." />
<div className="card-body">
<h3 className="card-body">Destant Galaxy</h3>
<img src={img4} className="card-img-top" alt="..." style={{width : 30}} /> Moon dancer   
<p className="card-text"> Price  Highest Bid</p>
<p> 1.63 ETH  0.33 wETH</p> 
</div>
</div>
</div>

<div className="col-md-4">
 <div className="card" style={{ width: "18rem" ,  marginLeft : 20 }}>
<img src={img2} className="card-img-top" alt="..." />
<div className="card-body">
<h3 className="card-body"> Life Of Edena</h3>
<img src={img5} className="card-img-top" alt="..." style={{width : 30}} />Nebula Kid
<p className="card-text"> Price  Highest Bid</p>
<p> 1.63 ETH  0.33 wETH</p> 
</div>
</div>
</div>

<div className="col-md-4">
 <div className="card" style={{ width: "18rem" ,  marginLeft : 20 }}>
<img src={img3} className="card-img-top" alt="..." />
<div className="card-body">
<h3 className="card-body">Astro Fiction</h3>
<img src={img6} className="card-img-top" alt="..." style={{width : 30}} />Space One
<p className="card-text"> Price  Highest Bid </p> 
<p> 1.63 ETH  0.33 wETH</p> 

</div>
</div>
</div>

        </div>
       </div>   
   
    )
}
export default Discover;