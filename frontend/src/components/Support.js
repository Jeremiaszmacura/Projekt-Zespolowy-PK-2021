import React, {useState} from 'react';
import exampleSupportData from './exampleSupportData';
import exampleContactData from './exampleContactData';
import './Support.css'

const Support = () =>{
    
    return(
    <div className="body-container">
   
        {exampleSupportData.labels.map((e) => {
            
                <div className="container">
                <input type="checkbox" id={e.id_checkbox}/>
                <label for={e.id_checkbox}>{e.headline}</label>
                <div className="content1" id={e.content_id}>
                <div> {e.info}</div>
                </div>
                </div>

        }
        )}
    {exampleContactData.labels.map((c) => {

            <div className="container">
                <input type="checkbox" id={c.id_checkbox}/>
                <label for={c.id_checkbox}>{c.headline}</label>
                <div className="content1" id={c.content_id}>
                    <div> {c.info}</div>
                </div>
            </div>
    })}
     
    </div>  

    );

}



export default Support;