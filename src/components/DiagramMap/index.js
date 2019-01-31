import React, { useState } from 'react';
import diagram from '../../assets/diagram.png';

// STYLES
import './styles.css'

const DiagramMap = () => {

   const [section, selectSection] = useState('diagram')

   return (
      <div className="d-flex flex-column mt-3 ">
         <div className="text-right">
            <div className="btn-group" role="group">
               <button
                  onClick={() => selectSection('diagram')}
                  type="button"
                  className={`btn border ${section === 'diagram' ? 'button-active' : 'button-inactive'}`}>Diagram</button>
               <button
                  onClick={() => selectSection('map')}
                  type="button"
                  className={`btn border ${section === 'map' ? 'button-active' : 'button-inactive'}`}>Map</button>
            </div>
         </div>
         <span className="text-center"><strong>Text</strong></span>
         <div className="DiagramMapContainer card mt-0">
            {
               section === 'diagram'
                  ? <div style={{ backgroundImage: `url('${diagram}')` }} className="DiagramImage"></div>
                  : <div style={{ width: '100%', height: '100%' }}>
                     <iframe title="Map" width="100%" height="100%" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=40.73034831215804, -73.98536682128908&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(Map)&amp;ie=UTF8&amp;t=&amp;z=9&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                  </div>
            }
         </div>
      </div>
   )
}

export default DiagramMap