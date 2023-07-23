import img1 from "../assests/Photo.png"


function Join(params) {
    return(
        <div class="card mb-3" style={{padding : 130}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img1} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body" style={{padding : 70}}>
        <h5 >Join Our Weekly Digest</h5>
        <p >Get Exclusive Promotion And Updates Straight To Your Inbox.</p>
        <input text="" placeholder="" /><button style={{width : 170 , height : 34, borderRadius : 10 ,backgroundColor : "rgb(129, 62, 168)"}} >Subscribe </button>
      </div>
    </div>
  </div>
</div>
    )
}
export default Join;