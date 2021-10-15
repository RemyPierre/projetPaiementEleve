import React,{useState,useEffect} from 'react'
import Modifierniveau from './Modifierniveau'

const Listeniveau=()=> {
    const [niveau,setNiveau]=useState([])
  
      //lister Niveau
const getNiveau= async() => {
    try {
        const response =await fetch("http://localhost:5000/niveau")
        const jsonData = await response.json();
  
        setNiveau(jsonData);
  
    } catch (err) {
        console.error(err.message);
    }
  }

  useEffect(()=>{
      getNiveau();
  })
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
            <a class="nav-link  " aria-current="page" href="niveau">AJOUT NIVEAU </a> 
          </li>
           
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="listeniveau">LISTE NIVEAU</a>
            
          </li>
           
    
        </ul>
      </div>
    </div>
  </nav>    
        {/* Fin Header de toutes les pages */}

<div  class="table-responsive">
        <table className="table table-striped mt-5 text-center   table-bordered border-primary"  >
             
             <thead >
             <tr><th>ID</th>
                 <th>Niveau</th>
               <th>Frais Inscription</th>
               <th>Frais Annuel</th>
                <th>Action</th>
             </tr></thead><tbody>
                {niveau.map(niveau=>(
                     <tr key={niveau.id}>
                        <td>{niveau.id}</td>
                         <td>{niveau.niveau}</td>
                     <td>{niveau.frais_inscription}</td>
                     <td>{niveau.frais_annuel}</td>
                    <td><Modifierniveau niveau={niveau}/></td> 

                     </tr>
                 ))}
             
             </tbody>
           </table></div>
        
</div>
    )
}

export default Listeniveau
