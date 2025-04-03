import React, {useState, useContext} from 'react';
import {UserContext} from './ComponentA';
import ComponentD from './ComponentD';

function ComponentC() {

    const user = useContext(UserContext);
  return (
    <div>
      <h1>Component C</h1>
      <p>{`Hello ${user}`}</p>
      <ComponentD/>
    </div>
  );
}
export default ComponentC;