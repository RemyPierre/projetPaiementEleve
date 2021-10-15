import React,{useState,useEffect} from 'react'
import {FcTodoList} from 'react-icons/fc'

function ListePaiementEleve({eleve}) {   
     
const [paiement,setPaiement]=useState([]);

const [nom,setNom]=useState(eleve.nom)
const [prenom,setPrenom]=useState(eleve.prenom)
const[eleve_id,setEleve_id]=useState(eleve.eleve_id)
    
 let a=Number(eleve.eleve_id)
// console.warn(eleve);
  //lister eleve ki peye yo
  const getPaiement = async() => {
    try {
      
        const response =await fetch(`http://localhost:5000/paiementuni/${eleve_id}`)
        
        const jsonData = await response.json();
      
        setPaiement(jsonData);
      
    } catch (err) {
        console.error(err.message);
    }
}

useEffect(() =>{
   getPaiement(); 
},[]);
    
    return (
        <div>
            {/* <!-- Trigger the modal with a button --> */}
            <FcTodoList size={24} style={{color: '#FFB200'}}  data-toggle="modal" data-target={`#id${eleve.nom}`} />

{/* <!-- Modal --> */}
<div  id={`id${eleve.nom}`}  class="modal fade" role="dialog">
  <div class="modal-dialog">

    {/* <!-- Modal content--> */}
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"   onClick={()=> setPrenom(eleve.prenom)}>&times;</button>
        <h4 class="modal-title">Liste Paiement</h4>
      </div>
      <div class="modal-body">
      <div  class="col-md-6" class="pull-left">
<table class="table">
    <thead>
      <tr>
          <th>ID</th>
        <th>Montant verser</th>
        <th>Date versement</th>
        <th># Transaction Bancaire</th>
      </tr>
    </thead>
    <tbody>
           {paiement.map(paiement=>(
        <tr >
        <td>{paiement.id}</td>
        <td>{paiement.montant_verser}</td>
        <td>{paiement.date_versement}</td>
        <td>{paiement.id_transaction_bancaire}</td>

        </tr>
      ))}
    </tbody>
  </table>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
        </div>
    )
}

export default ListePaiementEleve
