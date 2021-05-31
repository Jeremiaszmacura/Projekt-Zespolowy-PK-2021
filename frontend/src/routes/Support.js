import React from 'react';
import exampleSupport from '../components/exampleSupportData';
import exampleContact from '../components/exampleContactData';
import './Support.css'

const Support = () =>{
    return(
            <div className="labels-container">
                    {exampleSupport.labels.map((label1) => {
                        
                        return(
                            <div className="support-box" key={label1.id}>
                                <input type="checkbox" id={label1.id_checkbox}/>
                                <label for={label1.id_checkbox}>{label1.headline}</label>
                                <div className="content1" id={label1.content_id}>
                                <div> {label1.info}</div>
                                </div>
                            </div>
                                 );
                    })}
                   
               

        
                {exampleContact.labels.map((c) => {
                    return(
                            <div className="support-box" key={c.id}>
                                <input type="checkbox" id={c.id_checkbox}/>
                                <label for={c.id_checkbox}>{c.headline}</label>
                                <div className="content1" id={c.content_id}>
                                    <div> {c.info}</div>
                                </div>
                            </div>
                            );
            })}
     
            </div>  

        );

}



export default Support;