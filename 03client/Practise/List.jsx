import React from "react";

function List() {
  const people = [
    {
      id: 0,
      name: "  Katherine  ",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario  ",
      profession: "chemist",
    },
    {
      id: 2,
      name: "georgina",
      profession: "physicist",
    },
    {
      id: 3,
      name: "Percy",
      profession: "chemist",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];

  const chemists = people.filter((people) => people.profession === "chemist");
  //   console.log(chemists[0].name);

  return (
    <>
      {chemists.map((person) => (
        <li key={person.id}>{person.name} </li>
      ))}
    </>
  );
}

export default List;
