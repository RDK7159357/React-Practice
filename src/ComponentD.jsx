import React, {useState, useContext} from 'react';
import {UserContext} from './ComponentA';


function ComponentD() {

    const user = useContext(UserContext);
  return (
    <div>
      <h1>Component D</h1>
      <p>{`Bye ${user}`}</p>
    </div>
  )
}
export default ComponentD;