import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faUniversity } from '@fortawesome/free-solid-svg-icons';
import './UniversityCard.css';

const UniversityCard = (props) => {
    // console.log(props);
const {img,name,location,semesterFee,intStudent,ranking}=props.university;

const element = <FontAwesomeIcon icon={faUniversity} />
    return (
        <div className="uni-card">
            <img className='image-size' src={img} alt=""/>
            <h3>University Name: {name}</h3>
            <h4>Situated: {location}</h4>
            <h5>Foreign Student: {intStudent}</h5>
            <p>Online Semester Fee: ${semesterFee}</p>
            <p>World ranking: {ranking}</p>
            <br/>
            <button onClick={()=>props.handleCart(props.university)}  className="style-btn">{element} Click here to add fee</button>
        </div>
    );
};

export default UniversityCard;