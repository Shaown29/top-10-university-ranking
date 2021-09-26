import React from 'react';
import './SideCard.css';

const SideCard = (props) => {
//console.log(props)
const{sideCard}=props;
    let name=[ ];
    for (const pick of sideCard){
        name=name+pick.name+', ';
    }
   let total=0;
  for(const choose of sideCard){
       total=total+choose.semesterFee;
   }
    return (
        <div className='style-process'>
             <h2>clicked:{props.sideCard.length}</h2>
                <h3>Total fee: ${total}</h3>
                <p>University Name:  {name} </p>
        </div>
    );
};

export default SideCard;