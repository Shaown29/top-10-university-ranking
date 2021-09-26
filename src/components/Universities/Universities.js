import React, { useEffect, useState } from 'react';
import SideCard from '../SideCard/SideCard';
import UniversityCard from '../UniversityCard/UniversityCard';
import './Universities.css';

const Universities = () => {
    const [universities,setUniversities]=useState([]);

    const [sideCard,setSideCard]=useState([])
     useEffect(()=>{
         fetch('./Unidata.JSON')
         .then(res=>res.json())
         .then(data=>setUniversities(data))
     },[])
//event handler
     const handleCart=university=>{
         const newSideCard=[...sideCard,university];
         setSideCard(newSideCard);
     }
    return (
        <div className="universities-container">
            <div className="university-container">
             {
                universities.map(university=><UniversityCard university={university} key={university.id}
                handleCart={handleCart}
                ></UniversityCard>)
                
                
            }
            </div>
            <div className="side-card">
               <SideCard sideCard={sideCard}></SideCard>
            </div>
           
            

           
        </div>
    );
};

export default Universities;