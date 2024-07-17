import React from 'react';
import People from "./components/People";
import Students from './components/Students';

function App() {
  return (
    <div className="App">
      <h1>WELCOME STUDENTS</h1>
      <People />
      <Students />
    </div>
  );
}

export default App;