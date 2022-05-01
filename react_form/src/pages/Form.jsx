import React, { useState } from 'react'

export const Form = () => {

    const[formdata,setformdata] = useState({});

    

const handlechange = (e)=>{
    const inputname = (e.target.name);

if(e.target.type === `checkbox`){
    console.log(e.target.value,e.target.checked);
    setformdata({
        ...formdata,[inputname]:e.target.checked,
    });
    
}else{




    
    setformdata({
        ...formdata,[inputname]:e.target.value,
    })
}
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
}

  return (
    <>
<form onSubmit={handleSubmit}>
    <div>
        <label>Enter Name:</label>
        <input type={`text`} placeholder={`Enter Name`} name={`usename`} onChange={handlechange } value={formdata.usename}></input>
    </div>
    <br></br>
    <div>
        <label>Enter Age:</label>
        <input type={`number`} placeholder={`Enter Age`} name={`age`} onChange={handlechange } value={formdata.age}></input>
    </div>
    <br></br>
    <div>
        <label>Enter Address:</label>
        <input type={`text`} placeholder={`Enter Address`} name={`address`} onChange={handlechange } value={formdata.address}></input>
    </div>
    <br></br>
    <div>
        <label>Enter Department:</label>
        <select onChange={handlechange } name={`select`} value={formdata.select}> 
            <option>Mech</option>
            <option>Cse</option>
            <option>ECE</option>
        </select>
    </div>
    <br></br>
    <div>
        <label>Enter Salary:</label>
        <input type={`text`} placeholder={`Enter Salary`} onChange={handlechange } name={`salary`} value={formdata.salary}></input>
    </div>
<br></br>
    <div>
<label>Married</label>
<input type={`checkbox`} placeholder={`Married`} value={`Married`} name={`Married`} onChange={handlechange }></input>
<label>Unmarried</label>
<input type={`checkbox`} placeholder={`Unmarried`} value={`Unmarried`} name={`Unmarried`} onChange={handlechange }></input>
    </div>
    <br></br>
    <div>
        <input type={`Submit`}></input>
    </div>
</form>


    </>
  )
}
