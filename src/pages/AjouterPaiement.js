import React,{useState,useEffect} from 'react'
import {ImCoinDollar} from 'react-icons/im' 
import ListePaiementEleve from './ListePaiementEleve'

const AjouterPaiement=({eleve}) =>{

    const[nom,setNom]=useState(eleve.nom);
    const [prenom,setPrenom]=useState(eleve.prenom); 
    const [telephone,setTelephone]=useState(eleve.telephone)
    const[adresse,setAdresse]=useState(eleve.adresse) 
    
    const [eleve_has_class,setEteleve_has_class]=useState([])
    

    const [montant_verser,setMontant_verser]=useState("");
    const [date_versement,setDate_versement]=useState("");
    const [id_transaction_bancaire,setId_transaction_bancaire]=useState(""); 
    const [eleve_has_class_class_id,setEleve_has_class_class_id]=useState(eleve.class_id)
    const [eleve_has_class_eleve_id,setEleve_has_class_eleve_id]=useState(eleve.id)



    const [paiement,setPaiement]=useState([]);

    const [sommeEachAnnee,setSommeEachAnnee]=useState([]);
    const [somme,setSomme]=useState(sommeEachAnnee.somme); 


    
    const [sommetotalversee,setSommetotalversee]=useState([]);
    const [montantverser,setMontantverser]=useState(sommetotalversee.montantverser)

//fonction onSubmit Paiement
const onSubmitForm  = async e =>{
  e.preventDefault();
  try {
    const body={montant_verser,date_versement,id_transaction_bancaire,eleve_has_class_eleve_id,eleve_has_class_class_id};
    const response= await fetch("http://localhost:5000/paiement",{
      method:"POST",
      headers:{"Content-type": "application/json"},
      body: JSON.stringify(body)
      
    });
    window.location="./Addpaiement"
  } catch (err) {
    console.error(err.messge)
    
  }
}

  //Get all eleve_class. Intermediaire table
const getEleve_has_class = async() => {
  try {
    
      const response =await fetch(`http://localhost:5000/eleve_has_class_data/${eleve.id}`)
      
      const jsonData = await response.json();
       
      setEteleve_has_class(jsonData);
  } catch (err) {
      console.error(err.message);
      
  }
}

//somme total  pou chak aniveau
const getSommeEachAnnee = async() => {
  try {
      const response =await fetch(`http://localhost:5000/sommeEachAnnee/${eleve.class_id}`)
      
      const jsonData = await response.json();
      setSommeEachAnnee(jsonData);

  } catch (err) {
      console.error(err.message);
  }
}


//somme total versee par eleve
const getSommetotalversee = async() => {
  try {
    
      const response =await fetch(`http://localhost:5000/sommetotalversee/${eleve.id}`)
      
      const jsonData = await response.json();

      setSommetotalversee(jsonData);

  } catch (err) {
      console.error(err.message);
  }
}


useEffect(() =>{
  getEleve_has_class(); getSommeEachAnnee(); getSommetotalversee();
},[]); 
    return (
        <>
          {/* <!-- Trigger the modal with a button --> */}
          <ImCoinDollar size={24} style={{color: '#FFB200'}}  data-toggle="modal" data-target={`#id${eleve.id}`} />

{/* <!-- Modal --> */}
<div id={`id${eleve.id}`} class="modal fade" role="dialog">
  <div class="modal-dialog modal-lg">

    {/* <!-- Modal content--> */}
    <div class="modal-content">
    <nav class="navbar navbar-expand-lg navbar-dark mt-1"  >
    <h4 className="text-white mx-4">Ajout Paiement</h4>
  </nav> 
      <div class="modal-body">
      {/* ----------MAPPING POU PRAN nom eleve YO---------------*/}
            <p class="text-center mb-1"> 
              {eleve_has_class.map(eleve=>(
                 
            <p > <h2>{nom} {prenom}</h2></p>
                 
                 ))}  </p>
           {/*---------- FIN MAPPING POU PRANnom eleve YO---------------*/}

       {eleve_has_class.map(eleve_has_class=>(
        
           <div><h5>Niveau :{eleve_has_class.niveau}</h5>  <h6> Annee Acad. :{eleve_has_class.anneeacademique}</h6></div>
             
                 ))} 
       <table className="striped  table-bordered hover container table-warning">
  <thead>
    <tr>
      
      <th>Montant a Versee</th>
      <th>Montant Versee</th>
      <th>Balance</th>
    </tr>
  </thead>
  <tbody>
    
      {/* MAPPING POU VALEUR KOB AANNE A YE A */}
    {sommeEachAnnee.map(sommeEachAnnee=>( <tr>
  <td key={sommeEachAnnee.id} >
<h6>{sommeEachAnnee.somme} HTG</h6>

  </td>



{/* MAPPING POU VALEUR KOB ELEVE LAN GENTAN BAY LAN */}

{sommetotalversee.map(sommetotalversee=>(
  <>
   <td><h6  className=" fw-bolder"  style={{color: 'blue'}}>  {sommetotalversee.montantverser} HTG</h6></td>

   <td><h6  className=" fw-bolder" style={{color: 'red'}}>    {sommeEachAnnee.somme - sommetotalversee.montantverser } HTG</h6></td>

  </>
  

))} 
      </tr>
   ))}
  </tbody>
</table>
       
  <div>
    <form onSubmit={onSubmitForm}  className="mt-4">
  <div className="form-row">
    <div className="form-group " style={{textAlign: 'left'}}>
      <label >Montant Verser</label>
      <input type="text"  className="form-control"  value={montant_verser} onChange={e=>setMontant_verser(e.target.value)} required />
    </div>
    <div className="form-group " style={{textAlign: 'left'}}>
      <label >ID transaction Bancaire</label>
      <input type="text" className="form-control"  value={id_transaction_bancaire}  onChange={e=>setId_transaction_bancaire(e.target.value)}  required/>
    </div>
  </div>
  
  <div className="form-row">
   
    <div className="form-group " style={{textAlign: 'left'}}>
      <label  >Date Versement</label>
      <input type="date" className="form-control" value={date_versement}  onChange={e=>setDate_versement(e.target.value)} required />
    </div>
  </div>


  <div className="form-row">
    <div className="form-group col-md-6">
      <input type="hidden" className="form-control" value={eleve_has_class_eleve_id} onChange={e=>setEleve_has_class_eleve_id(e.target.value)} placeholder="eleve_has_class_eleve_id" />
    </div>

      {/* ----------MAPPING POU PRAN ID CLASS YO---------------*/}
               {eleve_has_class.map(eleve_has_class=>(
                  <tr>
           
             
              <input type="hidden" className="form-control" value={eleve_has_class.class_id} onChange={e=>eleve_has_class.class_id(e.target.value)} placeholder="eleve_has_class_class_id" />
   
                  </tr>
                 ))} 
           {/*---------- FIN MAPPING POU PRAN ID CLASS YO---------------*/}

        <div className="form-group col-md-6">
       </div>
  </div>  
  <button type="submit" className="btn btn-primary" >Valider</button>  
</form>       
</div>
         </div>
          
        </div>
  </div>
</div>  
        </>
    )
}

export default AjouterPaiement


