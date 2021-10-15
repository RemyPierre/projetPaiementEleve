import React,{useState} from 'react'

const Niveau=()=> {
    const [niveau,setNiveau]=useState("")
    const [frais_inscription,setFrais_inscription]=useState("");
    const [frais_annuel,setFrais_annuel] = useState("");

//fonction submit
const onSubmit= async e =>{
  e.preventDefault();
  try {
    const body={niveau,frais_inscription,frais_annuel};
    const response= await fetch("http://localhost:5000/niveau",{
      method:"POST",
      headers:{"Content-type": "application/json"},
      body: JSON.stringify(body)
      
    });
      console.log(response)
    window.location = "./niveau";
    
  } catch (err) {
    console.error(err.messge)
    
  }
}

    return (
        <div className="container">
            {/* Begin Header de toutes les pages */}
            <hr className="mt-1 mb-1"/>
            <nav class="navbar navbar-expand-lg navbar-dark mt-1" aria-label="Tenth navbar example" >
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
        <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link active " aria-current="page" href="niveau">AJOUT NIVEAU </a> 
          </li>
           
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="listeniveau">LISTE NIVEAU</a>
            
          </li>
           
    
        </ul>
      </div>
    </div>
  </nav>    
        {/* Fin Header de toutes les pages */}

        <div className="card-body">
  <form onSubmit={onSubmit} className="mt-2">
    <div className="row">
      <div className="col-sm-6"> 
        <div className="form-group">
          <label>Niveau</label>
          <input type="text" className="form-control" value={niveau} onChange={e=> setNiveau(e.target.value)} className="form-control"  required />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <label>Frais Insctiption</label>
          <input type="text" className="form-control"  value={frais_inscription} onChange={e=> setFrais_inscription(e.target.value)} required/>
        </div>
      </div>
    </div>
    <div className="col-sm-6">
        <div className="form-group">
          <label>Frais Annuel</label>
          <input type="text" className="form-control"  value={frais_annuel} onChange={e=> setFrais_annuel(e.target.value)} required/>
        </div>
      </div>
                  
                     <button type="submit" className="btn btn-primary mt-4">Valider</button>
      </form>
</div>



      
        
</div>
    )
}

export default Niveau
