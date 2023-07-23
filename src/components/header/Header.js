import img from "../assests/2.png"
import img1 from "../assests/Avatar Placeholder-9.png"

function Header() {
    return(

<div className="container-fluid" style={{backgroundColor: 'rgb(46, 45, 45)'}}>
        <div className="row">
          <div className="col-lg-2" />
          <div className="col">
            <h1 style={{fontSize: '400%',color:'white', fontWeight: 'bolder'}}>Discover <br /> digital art &amp; <br /> Collect NFTs</h1>
            <p style={{color:'white'}}>NFT marketplace UI created with Anima for <br /> Figma. Collect, buy and sell art from more <br /> than 20k NFT artists.</p>
            <button type="button" className="btn btn-primary" style={{backgroundColor: 'rgb(129, 62, 168)', borderColor: 'rgb(129, 62, 168)', width: '40%'}}>Get Started</button>
            <div className="container" style={{marginTop: '15px'}}>
              <div className="row">
                <div className="col"style={{color:'white'}}><h3>240k+ </h3><p>Total Sale</p></div>
                <div className="col"style={{color:'white'}}><h3>100k+ </h3><p> Auctions</p></div>
                <div className="col"style={{color:'white'}}><h3>240k+ </h3><p> Artists</p></div>
              </div>
            </div>
          </div>
          <div className="col">
            <img src={img} alt="" style={{borderRadius: '8%', width: '110%'}} />
            <h4>Space Walking</h4>
            <img src={img1} width="20" alt="images ...."/>       AnimaKid
          </div>
          <div className="col-lg-2" />
        </div>
      </div>

    )
}
export default Header; 