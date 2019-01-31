import React from 'react';

// STYLES
import './styles.css'

const Overview = ({ data }) => (
   <div className="card mt-4">
      <div className="card-header"> Overview </div>
      <div className="card-body row">
         <div className="col-md-6 p-2 pb-4 px-3 border-right ">
            <div className="d-flex justify-content-between">
               <span className="titles">Status</span>
               <span className="titles check">
                  <i className="fas fa-check"></i>
                  <strong>{data.status}</strong></span>
            </div>
            <div className="d-flex justify-content-between mt-2">
               <span className="titles">Method</span>
               <span className="titles"><strong>{data.method}</strong></span>
            </div>
            <div className="d-flex justify-content-between mt-2">
               <span className="titles">Capacity</span>
               <span className="titles"><strong>{data.capacity}</strong></span>
            </div>
            <div className="d-flex justify-content-between mt-2">
               <span className="titles">Drayage</span>
               <span className="titles"><strong>{data.drayage}</strong></span>
            </div>
         </div>
         <div className="col-md-6 p-2 pb-4 px-3">
            <div className="d-flex justify-content-between">
               <span className="titles">Incoterms</span>
               <span className="titles"><strong>{data.incoterms}</strong></span>
            </div>
            <div className="d-flex justify-content-between mt-2">
               <span className="titles">Service Options</span>
               <span className="titles"><strong>{data.serviceOptions}</strong></span>
            </div>
            <div className="d-flex justify-content-between mt-2">
               <span className="titles">Hazardous or forbidden commodities</span>
               <span className="titles"><strong>{data.hazarous}</strong></span>
            </div>
         </div>
      </div>
   </div>
)

export default Overview