import React from "react";

export default function Button({ icon, toggleVisible }) {
  return <button onClick={(event) => toggleVisible(event)}>{icon}</button>;
}
