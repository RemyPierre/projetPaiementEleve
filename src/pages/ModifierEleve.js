import React from 'react';
import { Fragment,useState } from 'react';
import {BsPencilSquare} from 'react-icons/bs'


const ModifierEleve = ({eleve}) => {
    
const [nom,setNom]= useState(eleve.nom);
const [prenom,setPrenom]= useState(eleve.prenom);
const [sexe,setSexe]=useState(eleve.sexe);
const [adresse,setAdresse]=useState(eleve.adresse);
const [num_tel,setNum_tel]=useState(eleve.num_tel);
const [date_naissance ,setDate_naissance]=useState(eleve.date_naissance);
const [lieu_naissance,setLieu_naissance]=useState(eleve.lieu_naissance);
const [personne_resp,setPersonne_resp]=useState(eleve.personne_resp);
const [tel_resp,setTel_resp]=useState(eleve.tel_resp);
const [etablissement_precedent,setEtablissement_precedent]=useState(eleve.etablissement_precedent);
const [status,setStatus]=useState(eleve.status);

const updateEleve = async(e) => {
    e.preventDefault();
    try {
        const body ={nom,prenom,sexe,adresse,num_tel,date_naissance,lieu_naissance,personne_resp,tel_resp,etablissement_precedent,status};
        const response=await fetch(`http://localhost:5000/eleve/${eleve.id}`,{
            method:"PUT",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(body)
        });
        window.location="./Listeeleve"
    } catch (err) {
        console.error(err.message)
        
    }
}


    return (
       <>
           
        
<BsPencilSquare size={23} style={{color: 'blue'}}  data-toggle="modal" data-target={`#id${eleve.id}`} />

<div class="modal" id={`id${eleve.id}`}>
  <div class="modal-dialog modal-lg">
  <div className=" modal-content">
            {/* Begin Header de toutes les pages */} 
            <hr className="mt-1 mb-1"/>
            <nav class="navbar navbar-expand-lg navbar-dark mt-1"  >
    <h4 className="text-white mx-4">Modifier Eleve</h4>
  </nav>    
        {/* Fin Header de toutes les pages */}


        

        <div className="card-body">
  <form onSubmit={updateEleve} className="mt-2">
    <div className="row"> 
      <div className="col-sm-6"> 
        <div className="form-group">
          <label>Nom</label>
          <input type="text" className="form-control" value={nom} onChange={e=> setNom(e.target.value)} className="form-control"  required />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <label>Prenom</label>
          <input type="text" className="form-control"  value={prenom} onChange={e=> setPrenom(e.target.value)} required/>
        </div>
      </div>
    </div>
  
                 <div class="row">
                    <div class="col-sm-3 mt-4"> 
                      <div class="form-group">
                        <label>Sexe</label>
                        <select class="form-control" value={sexe} onChange={e=> setSexe(e.target.value)} size="1" required>
                          <option>Masculin</option>
                          <option>Feminin</option>
                        
                        </select>
                      </div>
                    </div>
                    
                    <div className="col-sm-3  mt-4">
                    <div className="form-group">
                    <label>Date Naissance</label>
                    <input type="date" className="form-control" value={date_naissance} onChange={e=> setDate_naissance(e.target.value)}  />
                    </div>
                    
                </div>
                <div className="col-sm-6  mt-4">
                    <div className="form-group">
                    <label>Lieu de Naissance</label>
                    <input type="text" className="form-control" value={lieu_naissance} onChange={e=> setLieu_naissance(e.target.value)}  />
                    </div>
                </div>
                  </div>

                  <div class="row">
                   
                    
                    <div className="col-sm-3  mt-4">
                    <div className="form-group">
                    <label>Telehone</label>
                    <input type="text" className="form-control" value={num_tel} onChange={e=> setNum_tel(e.target.value)}    />
                    </div>
                </div>
                <div className="col-sm-9  mt-4">
                    <div className="form-group">
                    <label>Adresse</label>
                    <input type="text" className="form-control" value={adresse} onChange={e=> setAdresse(e.target.value)}  />
                    </div>
                </div>
                  </div>

                  <div class="row">
                   
                
               <div className="col-sm-12  mt-4">
                   <div className="form-group">
                   <label>Etablissement Precedent</label>
                   <input type="text" className="form-control" value={etablissement_precedent} onChange={e=> setEtablissement_precedent(e.target.value)}  />
                   </div>
               </div>
                 </div>

                 <div class="row">
                   
                    
                   <div className="col-sm-6  mt-4">
                   <div className="form-group">
                   <label>Personne Responsable</label>
                   <input type="text" className="form-control" value={personne_resp} onChange={e=> setPersonne_resp(e.target.value)}  />
                   </div>
               </div>
               <div className="col-sm-6  mt-4">
                   <div className="form-group">
                   <label>Telephone Respons.</label>
                   <input type="text" className="form-control"  value={tel_resp} onChange={e=> setTel_resp(e.target.value)}/>
                   </div>
               </div>
               
                 </div>
                 <button type="submit" className="btn btn-primary mt-4">Valider</button>
      </form>
</div>



        </div>
    
  </div>
</div>
       </>
    );
}

export default ModifierEleve;
