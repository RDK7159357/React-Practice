import React, {useState, useContext} from 'react';
import {UserContext} from './ComponentA';
import ComponentC from './ComponentC';

function ComponentB() {
    const user = useContext(UserContext);
  return (
    <div>
      <h1>Component B</h1>
      <p>{ `B ${user}`}</p>
      <ComponentC/>
    </div>
  );
}
export default ComponentB;