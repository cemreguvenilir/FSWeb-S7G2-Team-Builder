import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import React from "react";
function App() {
  const [editingMember, setEditingMember] = useState();
  const [editingOrder, setEditingOrder] = useState();
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

    if (editingOrder !== undefined) {
      const upDatedMembers = [...members];
      upDatedMembers.splice(editingOrder, 1, newMember);
      setMembers(upDatedMembers);
    } else {
      setMembers([...members, newMember]);
    }
    setEditingOrder();
  }

  function editForm(member, order) {
    setEditingMember(member);
    setEditingOrder(order);
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
              <button onClick={() => editForm(member, i)} className="edit">
                Edit
              </button>
            </li>
          );
        })}
      </ul>
      <Form addMember={addMember} editMode={editingMember} />
    </div>
  );
}

export default App;
