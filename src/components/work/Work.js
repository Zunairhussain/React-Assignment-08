import img1 from "../assests/Icon.png"
import img2 from "../assests/Icon-1.png"
import img3 from "../assests/Icon-2.png"
import "./Work.css"

function Work() {
    return(
        <div><h3 style={{marginLeft : 115 , marginTop : 50}}>How It Works</h3> 
        <p style={{marginLeft : 115 , }}>Find Out How To Get Started</p> 
        <div className="container">
            <div className="row">
                <div className="col-md-4">
         <div class="card" style={{width: " 18rem" ,}}>
        <img src={img1} class="card-img-top" alt="..."/>
     <div class="card-body">
    <h5 class="card-title">Setup Your Wallet </h5>
     <p>Setup your Wallet of Choice.Connect it to the Animarket by clicking the wallet icon.</p>
  </div>
</div> 
</div>
                <div className="col-md-4">
                <div class="card" style={{width: " 18rem"}}>
        <img src={img2} class="card-img-top" alt="..."/>
     <div class="card-body">
    <h5 class="card-title">Create Collection</h5>
     <p>Upload your work and setup your collectioin.Add a description,social link and floor price.</p>
  </div>
                </div>
                </div>
                <div className="col-md-4">
                <div class="card" style={{width: " 18rem", backgroungColor : "rgb(59, 59, 59)"}}>
        <img src={img3} class="card-img-top" alt="..."/>
     <div class="card-body">
    <h5 class="card-title">Start Earning</h5>
     <p>Choose Between auctions and fixed-price listings.Start earning by selling your NFTs or trading order.</p>
  </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    
    )
}
export default Work;