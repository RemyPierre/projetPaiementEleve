import React from 'react';
import { Fragment,useState } from 'react';
import {BsPencilSquare} from 'react-icons/bs'


const Modifierniveau = ({niveau}) => {

const [frais_inscription,setFrais_inscription]=useState(niveau.frais_inscription);
const [niveaul,setNiveaul]=useState(niveau.niveau);
const [frais_annuel,setFrais_annuel]=useState(niveau.frais_annuel);


const updateNIveau = async(e) => {
    e.preventDefault();
    try {
        const body ={frais_inscription,frais_annuel};
        const response=await fetch(`http://localhost:5000/niveau/${niveau.id}`,{
            method:"PUT",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(body)
        });
        window.location="./Listeniveau"
    } catch (err) {
        console.error(err.message)
        
    }
}


    return (
       <>
           
        
<BsPencilSquare size={23} style={{color: 'blue'}}  data-toggle="modal" data-target={`#id${niveau.id}`} />

<div class="modal" id={`id${niveau.id}`}>
  <div class="modal-dialog modal-lg">
  <div className=" modal-content">
            {/* Begin Header de toutes les pages */} 
            <hr className="mt-1 mb-1"/>
            <nav class="navbar navbar-expand-lg navbar-dark mt-1"  >
    <h4 className="text-white mx-4">Modifier Niveau</h4>
  </nav>    
        {/* Fin Header de toutes les pages */}


        

        <div className="card-body">
  <form onSubmit={updateNIveau} className="mt-2">
  <h3 >{niveaul}</h3>

    <div className="row"> 
      <div  > 
        <div className="form-group">
          <label>Frais d'inscription</label>
          <input type="text" className="form-control" value={frais_inscription} onChange={e=> setFrais_inscription(e.target.value)} className="form-control"  required />
        </div>
      </div>
      <div  >
        <div className="form-group">
          <label>Frais Annuel</label>
          <input type="text" className="form-control"  value={frais_annuel} onChange={e=> setFrais_annuel(e.target.value)} required/>
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

export default Modifierniveau;
