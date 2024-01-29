import React, { useContext, useState } from "react";
import DarkOrLight from "./DarkOrLight";
const ThemeContext = React.createContext();
const UserContext = React.createContext();


function App()
{
  return <DarkOrLight />
  // const [color, setColor] = useState("gray");
  // const [user, setUser] = useState({ name: 'Guest' });
  // const handleClick = (value) => setColor(value);
  // return (
  //   <div>
  //     <button onClick={() => handleClick('red')}>Red</button>
  //     <button onClick={() => handleClick('blue')}>Blue</button>
  //     <br />
  //     <ThemeContext.Provider value={color}>
  //       <UserContext.Provider value={user}>
  //         <A />
  //       </UserContext.Provider>
  //     </ThemeContext.Provider>
  //   </div>
  // );
}

function A() { return <B />; }
function B() { return <C />; }
function C()
{
  const color = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div>
      <h3>{user.name}</h3>
      <h1 style={{ backgroundColor: color }}>C 내용</h1>
    </div>
  );
}

export default App;

