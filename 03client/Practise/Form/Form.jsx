import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  const collectData = (e) => {
    e.preventDefault();

    if (!name.trim() && !email.trim() && !age.trim()) {
      alert("Empty fields , kindly fill the details ");
      return;
    }

    const payload = {
      name: name,
      email: email,
      age: age,
    };

    localStorage.setItem("StudentData", JSON.stringify(payload));
    // localStorage.getItem("StudentData", payload);

    (setName(""), setEmail(""), setAge(""));
  };
  return (
    <>
      <form onSubmit={collectData}>
        <div>
          <label htmlFor="">Name : </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Email : </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Age : </label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
