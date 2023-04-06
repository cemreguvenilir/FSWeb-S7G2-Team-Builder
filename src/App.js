import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import React from "react";
function App() {
  const [members, setMembers] = useState([
    {
      name: "Cemre",
      surname: "Güvenilir",
      email: "guvenilircemre@gmail.com",
      position: "Student",
    },
    {
      name: "Melih",
      surname: "Şeker",
      email: "sekeroon@gmail.com",
      position: "Frontend Developer",
    },
  ]);
  function addMember(newMember) {
    console.log("newMember", newMember);
    setMembers([...members, newMember]);
  }
  return (
    <div className="App App-header">
      <ul>
        {members.map((member, i) => {
          return (
            <li key={i}>
              <a className="App-link" href={"mailto:${member.email} "}>
                {" "}
                {member.name} {member.surname} - {member.position}{" "}
              </a>{" "}
            </li>
          );
        })}
      </ul>
      <Form addMember={addMember} />
    </div>
  );
}

export default App;
