import { useState } from "react";

const initialForm = {
  name: "",
  surname: "",
  email: "",
  position: "",
};

function Form(props) {
  //const { addMember } = props;
  const [formData, setFormData] = useState(initialForm);

  function changeHandler(e) {
    console.log(e.target.value);
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
  }
  function submitHandler(e) {
    e.preventDefault();
    props.addMember(formData);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-line">
          <label htmlFor="name">First name: </label>
          <input
            onChange={(e) => changeHandler(e)}
            type="text"
            id="name"
            name="name"
            value={formData.name}
          />
        </div>
        <div className="form-line">
          <label htmlFor="surname">Last name: </label>
          <input
            onChange={(e) => changeHandler(e)}
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
          />
        </div>
        <div className="form-line">
          <label htmlFor="email">E-mail: </label>
          <input
            onChange={(e) => changeHandler(e)}
            type="email"
            id="email"
            name="email"
            value={formData.email}
          />
        </div>
        <div className="form-line">
          <label htmlFor="position">Position: </label>
          <input
            onChange={(e) => changeHandler(e)}
            type="text"
            id="position"
            name="position"
            value={formData.position}
          />
        </div>
        <button type="submit">Üye Ekle</button>
      </form>{" "}
    </div>
  );
}

export default Form;
