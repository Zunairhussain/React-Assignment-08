import "./Trending.css"
import img1 from "../assests/Primary Photo Placeholder.png"
import img2 from "../assests/Primary Photo Placeholder-1.png"
import img3 from "../assests/Primary Photo Placeholder-2.png"
import img4 from "../assests/Secondary Photo Placeholder.png"
import img5 from "../assests/Secondary Photo Placeholder-1.png"
import img6 from "../assests/1025+.png"
import img7 from "../assests/Avatar Placeholder.png"
import img8 from "../assests/Asset 12 2.png"
import img9 from "../assests/Avatar Placeholder-1.png"

function Trending() {
    return(
        <div className="Trending"> 
            <h2 style={{marginLeft : 170}}>Trending Collection</h2>
            <p style={{marginLeft : 180}}>Checkout Our Weekly Updated Trending Collection.</p>
        <div className="container">
            <div className="row">
                <div className="col-md-4"><img src={img1} alt="images....." /> </div>
                <div className="col-md-4"><img src={img2} alt="images....." /> </div>
                <div className="col-md-4"><img src={img3} alt="images....." /> </div>
                <div  className="col-md-1"><img src={img4} alt="img....."/></div>
                <div className="col-md-1"><img src={img5} alt="img....."/></div>
                <div className="col-md-1"  style={{marginTop : 30 }}><img src={img6} alt="img....."/></div>
                <div className="col-md-1" style={{marginLeft : 90}} ><img src={img4} alt="img....."/></div>
                <div className="col-md-1" ><img src={img5} alt="img....."/></div>
                <div className="col-md-1" style={{marginTop : 30}} ><img src={img6} alt="img....."/></div>
                <div className="col-md-1" style={{marginLeft : 90}} ><img src={img4} alt="img....."/></div>
                <div className="col-md-1" ><img src={img5} alt="img....."/></div>
                <div className="col-md-1" style={{marginTop : 30}} ><img src={img6} alt="img....."/></div>
                <div className="col-md-4" style={{marginTop : 30}}>
                    <h3>DSGN Animals</h3>
                     <p><img src={img7} alt="images ...."/> MR fox</p>
                </div>
                <div className="col-md-4" style={{marginTop : 30}}>
                    <h3>Magic Mushroom</h3>
                     <p><img src={img8} alt="images ...."/> Shroomie</p>
                </div>
                <div className="col-md-4" style={{marginTop : 30}}>
                    <h3>Disco machine</h3>
                     <p><img src={img9} alt="images ...."/> Be Kind to Robots</p>
                </div>
           
           
            </div>
        </div>
        
        </div>
    )
}
export default Trending;