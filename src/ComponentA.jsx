import React, {useState, useContext} from 'react';
import ComponentB from './ComponentB';
export const UserContext = React.createContext();

function ComponentA() {
const [user,setUser] = useState("RDK");

  return (
    <div>
      <h1>Component A</h1>
      <p>{`Hello ${user}`}</p>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}
export default ComponentA;