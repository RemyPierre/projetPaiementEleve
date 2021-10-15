import React,{useState,useEffect} from 'react'

const Eleve=( )=> {
  const[niveau,setNiveau]=useState([])
  const [id,setId]=useState(niveau.id)
    const [nom,setNom]= useState("");
    const [prenom,setPrenom]= useState("");
    const [sexe,setSexe]=useState("");
    const [adresse,setAdresse]=useState("");
    const [num_tel,setNum_tel]=useState("");
    const [date_naissance ,setDate_naissance]=useState("");
    const [lieu_naissance,setLieu_naissance]=useState("");
    const [personne_resp,setPersonne_resp]=useState("");
    const [tel_resp,setTel_resp]=useState("");
    const [etablissement_precedent,setEtablissement_precedent]=useState("");
    const [class_id,setClass_id]=useState(8);
    const [anneeacademique,setAnneeacademique]=useState("")

    


//fonction submit
const onSubmit= async e =>{
    e.preventDefault();
    try {
      
      const body={nom,prenom,sexe,adresse,num_tel,date_naissance,lieu_naissance,personne_resp,tel_resp,etablissement_precedent,class_id,anneeacademique};
      const response= await fetch("http://localhost:5000/eleve",{
        method:"POST",
        headers:{"Content-type": "application/json"},
        body: JSON.stringify(body)
        
      });
        console.log(body)
      // window.location = "./eleve";
      
    } catch (err) {
      console.error(err.messge)
      
    }
  }


  //afficher niveau
  const getNiveau = async() => {
    try {
        const response =await fetch("http://localhost:5000/niveau")
        const jsonData = await response.json();
  
        setNiveau(jsonData);
        // console.warn(eleve);
  
    } catch (err) {
        console.error(err.message);
    }
  }
  
  
useEffect(()=>{
  getNiveau();
},[]);
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
            <a class="nav-link active " aria-current="page" href="eleve">AJOUTER ELEVE </a> 
          </li>
           
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="Listeeleve">LISTE ELEVE</a>
            
          </li>
           
          <li class="nav-item">
            <a class="nav-link" href="Listeinactif" tabindex="-1" >LISTE INACTIF</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Addpaiement" tabindex="-1" >PAIEMENT</a>
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
                        <option value="N/A">N/A</option>
                          <option>Masculin</option>
                          <option>Feminin</option>
                        
                        </select>
                      </div>
                    </div>
                    
                    <div className="col-sm-3  mt-4">
                    <div className="form-group">
                    <label>Date Naissance</label>
                    <input type="date" className="form-control" value={date_naissance} onChange={e=> setDate_naissance(e.target.value)} required />
                    </div>
                </div>
                <div className="col-sm-6  mt-4">
                    <div className="form-group">
                    <label>Lieu de Naissance</label>
                    <input type="text" className="form-control" value={lieu_naissance} onChange={e=> setLieu_naissance(e.target.value)} required />
                    </div>
                </div>
                  </div>

                  <div class="row">
                   
                    
                    <div className="col-sm-3  mt-4">
                    <div className="form-group">
                    <label>Telehone</label>
                    <input type="text" className="form-control" value={num_tel} onChange={e=> setNum_tel(e.target.value)} required   />
                    </div>
                </div>
                <div className="col-sm-9  mt-4">
                    <div className="form-group">
                    <label>Adresse</label>
                    <input type="text" className="form-control" value={adresse} onChange={e=> setAdresse(e.target.value)} required />
                    </div>
                </div>
                  </div>

                  <div class="row">
                   
                   

             
                                <div className="col-sm-3  mt-4">
                                <label>class | Niveau</label>
                                   <select className="form-control" onChange={e=> setClass_id(e.target.value)} size="1" required>
                                    {niveau.map(niveau=>(  
                                     
                                        <option value={niveau.id}>{niveau.niveau}</option>
                                   ))} </select>  
                                </div>
                                      
               
               <div class="col-sm-3 mt-4"> 
                      <div class="form-group">
                        <label>Annee Academique</label>
                        <select class="form-control" value={anneeacademique} onChange={e=> setAnneeacademique(e.target.value)} size="1" required>
                        <option value="N/A">N/A</option>
                          <option >2020-2021</option>
                          <option>2021-2022</option>
                          <option>2022-2023</option>
                          <option>2023-2024</option>
                          <option>2024-2025</option>
                          <option>2026-2026</option>
                          <option>2026-2027</option>
                          <option>2027-2028</option>
                          <option>2028-2029</option>
                          <option>2029-2030</option>
                          <option>2030-2031</option>
                          <option>2031-2032</option>
                          <option>2032-2033</option>
                          <option>2033-2034</option>
                          <option>2034-2035</option>
                          <option>2035-2036</option>
                          <option>2036-2037</option> 
                          <option>2037-2038</option>
                          <option>2038-2039</option>
                          <option>2039-2040</option>
                       
                        
                        </select>
                      </div>
                    </div>
               <div className="col-sm-6  mt-4">
                   <div className="form-group">
                   <label>Etablissement Precedent</label>
                   <input type="text" className="form-control" value={etablissement_precedent} onChange={e=> setEtablissement_precedent(e.target.value)} required />
                   </div>
               </div>
                 </div>

                 <div class="row">
                   
                    
                   <div className="col-sm-6  mt-4">
                   <div className="form-group">
                   <label>Personne Responsable</label>
                   <input type="text" className="form-control" value={personne_resp} onChange={e=> setPersonne_resp(e.target.value)} required />
                   </div>
               </div>
               <div className="col-sm-6  mt-4">
                   <div className="form-group">
                   <label>Telephone Respons.</label>
                   <input type="text" className="form-control"  value={tel_resp} onChange={e=> setTel_resp(e.target.value)}required/>
                   </div>
               </div>
               
                 </div>
                 <button type="submit" className="btn btn-primary mt-4">Valider</button>
      </form>
</div>



        </div>
    )
}

export default Eleve
