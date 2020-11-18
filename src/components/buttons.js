import React, { useState, useEffect } from "react";
import "./style.css";

function Buttons() {

    const [Male, setMale] = useState('');
    const [Female, setFemale] = useState('');

        useEffect ( () => {
        axios.get(`https://randomuser.me/api/?results=5&nat=us`)
            .then(res => {
                let i;
                for (i=0; i<5; i++) {
                    setMale({male: res.data.results[i].gender});
                    setFemale({female: res.data.results[i].gender});
                }

            });
        })

    return (
        <div className="row">
            <div className="col">
                <button className="btn btn-primary" style={{backgroundColor: 'purple', marginRight: "10px"}} onClick={male.male}>Male</button>
                <button className="btn btn-primary" style={{backgroundColor: 'purple'}} onClick={female.female}>Female</button>
            </div>
      </div>
  
    )
}

export default Buttons;