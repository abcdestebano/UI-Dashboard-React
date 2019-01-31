import React from 'react';

// STYLES
import './styles.css'

const Revision = ({ data }) => (
   <div className="card">
      <div className="card-header"> Invoice - revision </div>
      <div className="card-body row">
         <div className="col-md-3 p-2 pb-4 px-3 border-right ">
            <div className="d-flex justify-content-between">
               <span className="titles">Invoice #</span>
               <span className="titles"><strong>{data.numberInvoice}</strong></span>
            </div>
            <div className="d-flex justify-content-between mt-2">
               <span className="titles">Date</span>
               <span className="titles"><strong>{data.date}</strong></span>
            </div>
            <div className="d-flex justify-content-between mt-2">
               <span className="titles">Due Date</span>
               <span className="titles"><strong>{data.dueDate}</strong></span>
            </div>
            <div className="d-flex justify-content-between mt-2">
               <span className="titles">Terms</span>
               <span className="titles"><strong>{data.terms}</strong></span>
            </div>
         </div>
         <div className="col-md-6 p-2 pl-3 d-flex flex-column border-right">
            <span className="mainTitles">Bill To</span>
            <p>{data.billTo}</p>
         </div>
         <div className="col-md-3 p-2 pl-3 d-flex flex-column">
            <span className="mainTitles">New Balance upon Re-booking</span>
            <span className="text-warning mt-3">${data.balance}</span>
         </div>
      </div>
   </div>
)

export default Revision