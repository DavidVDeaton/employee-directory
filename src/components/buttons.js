import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./style.css";

function Buttons() {

    const [male, setMale] = useState('');
    const [female, setFemale] = useState('');

        useEffect ( () => {
            axios.get(`https://randomuser.me/api/?results=5&nat=us`)
            .then(res => {
                setMale({male: res.data.results[0].gender});
                setFemale({female: res.data.results[0].gender});
            });
        }, [])

    return (
        <div className="row">
            <div className="col">
                <button className="btn btn-primary" style={{backgroundColor: 'purple', marginRight: "10px"}} onClick={male.male}>Male</button>
                <button className="btn btn-primary" style={{backgroundColor: 'purple'}} onClick={female.female}>Female</button>
            </div>
      </div>
  
    );
}

export default Buttons;