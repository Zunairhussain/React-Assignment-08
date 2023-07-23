import img1 from "../assests/Storefront.png"
import img2 from "../assests/DiscordLogo.png"
import img3 from "../assests/YoutubeLogo.png"
import img4 from "../assests/TwitterLogo.png"
import img5 from "../assests/InstagramLogo.png"


function Footer() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                <a className="navbar-brand" href="#"><img src = {img1} /></a>
                <a className="navbar-brand" href="#">NFT Marketplace</a>
                </div>
                <div className="col-md-4">Explore</div>
                <div className="col-md-4">Join our weekly digest</div>
                <div className="col-md-4" style={{marginTop : 20}}>NFT marketplace UI created <br/> with Anima for Figma</div>
                <div className="col-md-4" style={{marginTop : 20}}>Marketplace</div>
                <div className="col-md-4" style={{marginTop : 20}}>Get Exclusive Promotion & Updates Straight to your Inbox</div>
                <div className="col-md-4" style={{marginTop : 20}}>Join our community</div>
                <div className="col-md-4" style={{marginTop : 20}}>Ranking</div>
                <div className="col-md-4" style={{marginTop : 20}}><input text="" placeholder="" /><button style={{width : 170 , height : 34, borderRadius : 10 ,backgroundColor : "rgb(162, 89, 255)"}} >Subscribe </button></div>
                <div className="col-md-4" style={{marginTop : 5}}><img src={img2} alt="images not found"/><img src={img3} alt="images not found" /><img src={img4} alt="images not found"/> <img src={img5} alt="images....." /> </div>
                <div className="col-md-4" style={{marginTop : 5}}> Connect A Wallet </div>
            < hr/>
            <div style={{marginTop : 10}}>Ⓒ NFT Market. Use this template freely.Made by Zunair Hussain</div>
            </div>
        </div>
    )
}
export default Footer;