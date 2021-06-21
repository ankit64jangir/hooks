import React, { useState, useReducer } from "react";

const intialValue = [
  { id: Date.now(), name: "Ankit", email: "ankit@gmail.com" }
];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((contact) => {
        return contact.id !== action.payload.id;
      });
    default:
      break;
  }
}

export default function UseReducer1() {
  const [state, dispatch] = useReducer(reducer, intialValue);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log(state);

  const addContact = (e) => {
    e.preventDefault();

    const contact = {
      id: Date.now(),
      name: name,
      email: email
    };
    dispatch({ type: "add", payload: contact });

    setName("");
    setEmail("");
  };

  return (
    <div className="App">
      <h1>useReducer 2</h1>
      <form onSubmit={addContact}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Add contact</button>
      </form>
      <br />
      <div>
        {state.map((contact) => {
          return (
            <div>
              {contact.name} : {contact.email}
              <button
                onClick={() =>
                  dispatch({ type: "delete", payload: { id: contact.id } })
                }
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
