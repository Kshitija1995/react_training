

import React ,{useState}  from 'react';

export default function InputTextBoxComponent(){

    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false);

    function getData(val) {
        console.warn(val.target.value);
        setData(val.target.value);
        setPrint(false);
    }


    return (
        <div className="InputTextBoxComponent">
            <h1>Enter Name: </h1>
            <input type="text" onChange ={getData}></input>
            <button onClick ={() => setPrint(true)}>Print Name</button>
            {
                print? <h1>{data}</h1> : null

            }
     
        </div>
    )
}