import React from 'react'
import { useState } from 'react/cjs/react.development' 
import {RiRestartFill} from 'react-icons/ri'

const ConfirmRestaureEleve=({eleve})=> {
    let sta="Actif"
    const [status,setStatus]=useState(sta);
    const [id,setId]=useState(eleve.id);
    const [nom,setNom]=useState(eleve.nom);
    const [prenom,setPrenom]=useState(eleve.prenom)

    const updateEleve = async(e) => {
        e.preventDefault();
        try {
            const body ={status};
            const response=await fetch(`http://localhost:5000/eleveDelete/${eleve.id}`,{
                method:"PUT",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify(body)
            }); 
            window.location='./Listeinactif'
        } catch (err) {
            console.error(err.message)
            
        }
    }
    
    return (
        <>
          {/* <!-- Trigger the modal with a button --> */} 
<RiRestartFill size={25} style={{color: '49FF00'}} data-toggle="modal" data-target={`#id${eleve.id}`} />

{/* <!-- Modal --> */}
<div id="myModal" id={`id${eleve.id}`} class="modal fade" role="dialog">
  <div class="modal-dialog  align-center">

    {/* <!-- Modal content--> */}
    <div class="modal-content align-center">
      <div class="modal-header bg-primary">
        <h4 class="modal-title text-white">Attention !!!</h4>
      </div>
      <div class="modal-body ">
        <h5 >Voulez-vous restaurer l'eleve:<span className="text-decoration-Underline fw-bold">{eleve.nom} {" "} {eleve.prenom}</span> ?</h5>
        <input type="hidden" test={status} onChange={e=> setStatus(e.target.value)}/>
      </div>
      <div class="modal-footer center"> 
        <button type="button" class="btn btn-primary" data-dismiss="modal"  onClick={e=> updateEleve(e)}>Oui</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Non</button>
      </div>
    </div>

  </div>
</div>  
        </>
    )
}

export default ConfirmRestaureEleve
