import img1 from "../assests/Storefront.png" 
import "./Navbar.css"

function Navbar() {
    return(
      <div classNameName="Navbar" >      
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" style={{color : "black"} }>
    <a className="navbar-brand" href="#"><img src = {img1} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{bsscrollheight: 100}}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">NFT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Marketplace</a>
        </li> 
   
      </ul>
     
          <a className="nav-link disabled"  href="#" style={{padding : 20}} >Markplace</a>
          <a className="nav-link disabled"  href="#" style={{padding : 20}}>Ranking</a> 
          <a className="nav-link disabled"  href="#" style={{padding : 20}}>Connect a Wallet</a>

        <button className="btn btn-outline-success" type="submit"><i class="fa-solid fa-user">Sign up</i></button>
     
    </div>
  </div>
</nav>
</div>

    )
}
export default Navbar;