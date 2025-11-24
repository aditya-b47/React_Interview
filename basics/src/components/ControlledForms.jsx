import React, { useState } from "react";

const ControlledForms = () => {
  const [state, setState] = useState({
    name: " ",
    password: " ",
    gender: " ",
  });

  const [skills, setSkills] = useState([]);

  let { name, password, gender } = state;

  let handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSkills = (e) => {
    const { value, checked } = e.target;
    setSkills(
      checked ? [...skills, value] : skills.filter((skills) => skills !== value)
    );
  };

  return (
  <>
  <form onSubmit={handleSubmit}>
    <div>
      Name : 
      <input type="text" placeholder="Enter your name" name="name" value={name} onChange={handleChange} />
    </div>
    <div>
      Password :
      <input type="text" placeholder="Enter your password" name="password" value={password} onChange={handleChange} />
    </div>
    <div>
      <label>Gender : </label>
      <input type="radio" name="gender" value='male' checked={gender === 'male'} onChange={handleChange}/>male
      <input type="radio" name="gender" value='female' checked={gender==='female'} onChange={handleChange}/>Female
    </div>

    <div>
      <label>Skills : </label>
      <input type="checkbox" value='html' checked={skills.includes('html')} onChange={handleSkills} />html
      <input type="checkbox" value='css' checked={skills.includes ('css')} onChange={handleSkills} />css
      <input type="checkbox" value='js' checked={skills.includes('js')} onChange={handleSkills} />js
    </div>
    <button type="submit">Submit</button>
  </form>
  </>
  );
};

export default ControlledForms;
