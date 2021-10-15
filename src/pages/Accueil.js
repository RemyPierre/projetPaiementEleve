import React from 'react'  

const Accueil=()=> {



    return (
        < >
       <div className="container"  style={{ maxWidth: '45rem' }}> 
       
{/* <!-- Carousel --> */}
<div id="demo" class="carousel slide" data-bs-ride="carousel">

  {/* <!-- Indicators/dots --> */}
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  {/* <!-- The slideshow/carousel --> */}
  <div class="carousel-inner ">
    <div class="carousel-item active">
    <img src='https://mdbcdn.b-cdn.net/img/new/slides/213.jpg' className='img-fluid shadow-4' class="mx-auto d-block" alt='...' style={{ maxWidth: '45rem' }} />
      {/* <img src="la.jpg" alt="Los Angeles" class="d-block" style="width:100%"> */}
      <div class="carousel-caption">
        <h3>Votre etude en Haiti</h3>
        <p>We had such a great time in LA!</p>
      </div>
    </div>
    <div class="carousel-item"> 
      {/* <img src="chicago.jpg" alt="Chicago" class="d-block" style="width:100%"> */}
      <img src='https://mdbcdn.b-cdn.net/img/new/slides/221.jpg' className='img-fluid shadow-4'class="mx-auto d-block" alt='...' style={{ maxWidth: '45rem' }} />
      <div class="carousel-caption">
        <h3>Payer n'a jamais ete aussi fasil</h3>
        <p>Choisissez GesPaiement</p>
      </div> 
    </div>
    <div class="carousel-item">
      {/* <img src="ny.jpg" alt="New York" class="d-block" style="width:100%"> */}
      <img src='https://mdbcdn.b-cdn.net/img/new/slides/041.jpg' className='img-fluid shadow-4' class="mx-auto d-block" alt='...' style={{ maxWidth: '45rem' }} />
      <div class="carousel-caption">
        <h3>Visiter notre campus</h3>
        <p>Lorem input</p>
      </div>  
    </div>
  </div>
  
  {/* <!-- Left and right controls/icons --> */}
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>

<div class="container-fluid mt-3">
  <h3>Qui sommes-nous</h3>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the
  1500s, when an unknown printer took a galley of type and scrambled it to
  make a type specimen book. It has survived not only five centuries, but
  also the leap into electronic typesetting, remaining essentially
  unchanged. It was popularised in the 1960s with the release of Letraset
  sheets containing Lorem Ipsum passages, and more recently with desktop
  publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</div>


       </div>
       </>
       
    )
}

export default Accueil
