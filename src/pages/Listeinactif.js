import React,{useState,useEffect} from 'react'
import ConfirmRestaureEleve from './ConfirmRestaureEleve'

import {RiRestartFill} from 'react-icons/ri'

const Listeinactif=()=> {
  
  const [eleve,setEleve] =useState([]);

async function search(id){
  console.warn(id)
  let result =await fetch ("http://localhost:5000/eleves/"+id);
  result =await result.json();
  setEleve(result)

}
//lister eleve
const getEleve = async() => {
  try {
      const response =await fetch("http://localhost:5000/eleves")
      const jsonData = await response.json();

      setEleve(jsonData);

  } catch (err) {
      console.error(err.message);
  }
}

  useEffect(() =>{
      getEleve();
  },[]);

    return (
        <div className="container" >
           <hr className="mt-1 mb-1"/>
            <nav class="navbar navbar-expand-lg navbar-dark mt-1" aria-label="Tenth navbar example" >
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
        <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link  " aria-current="page" href="Eleve">AJOUTER ELEVE </a> 
          </li>
           
          <li class="nav-item">
            <a class="nav-link " aria-current="page"  href="Listeeleve">LISTE ELEVE</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link active" href="Listeinactif" tabindex="-1" >LISTE INACTIF</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"  href="Addpaiement" tabindex="-1" >PAIEMENT</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>    

        <div className="col-5 mt-3">
          <input class="form-control border-primary" type="search" onChange={(e)=>search(e.target.value)} placeholder="Search..... Ex: Nicolas" aria-label="Search"/>
        </div>
        <div class="table-responsive">
        <table className="table table-striped mt-5 text-center table-hover table-bordered border-primary"  >
             
             <thead >
             <tr><th>ID</th>
                 <th>Nom</th>
               <th>Prenom</th>
               <th>sexe</th>
               <th>Adresse</th>
               <th>Telephone</th> 
               <th>Lieu Naiss.</th>
               <th>Pers. Resp</th>
               <th>Etabliss. preced.</th>
               <th>Niveau</th>
               <th>Status</th>
               <th>Action</th>
             </tr></thead><tbody>
                {eleve.map(eleve=>(
                     <tr key={eleve.id}>
                        <td>{eleve.id}</td>
                     <td>{eleve.nom}</td>
                     <td>{eleve.prenom}</td>
                     <td>{eleve.sexe}</td>
                     <td>{eleve.adresse}</td>
                     <td>{eleve.num_tel}</td> 
                     <td>{eleve.lieu_naissance}</td>
                     <td>{eleve.personne_resp}</td>
                     <td>{eleve.etablissement_precedent}</td>
                     <td>{eleve.niveau}</td>
                     <td>{eleve.status}</td>
                    <td>
                    
                  <ConfirmRestaureEleve eleve={eleve}/>

                  
                   
                     
                    </td>
                     </tr>
                 ))}
             
            
               
             </tbody>
           </table></div>
        </div>
    )
}

export default Listeinactif
