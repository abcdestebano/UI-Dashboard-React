import React from 'react'

// STYLES
import './styles.css';

// COMPONENTS
import Header from '../../components/Header';
import Revision from '../../components/Revision';
import DiagramMap from '../../components/DiagramMap';
import Overview from '../../components/Overview';

import data from '../../data.json'

const Home = () => (
   <div className="container-fluid">
      <Header />
      <div className="HomeContainer">
         <span className="TitleInvoice"> Invoice <span className="NumberInvoice">{data.numberInvoice}</span> </span>
         <Revision data={data} />
         <DiagramMap />
         <Overview data={data} />
      </div>
   </div>
)

export default Home
