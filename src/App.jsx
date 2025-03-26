import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Students from "./Students.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import ColorPicker from "./ColorPicker.jsx";

function App() {

  const fruits = [{id:1,name:'Apple',calories:95},
    {id:2,name:'Banana',calories:105},
    {id:3,name:'Orange',calories:62},
    {id:4,name:'Mango',calories:202},
    {id:5,name:'Pineapple',calories:452}]; 

    // const vegetables = [
    //   {id:6, name:'Carrot', calories:25},
    //   {id:7, name:'Broccoli', calories:55},
    //   {id:8, name:'Spinach', calories:23},
    //   {id:9, name:'Potato', calories:77},
    //   {id:10, name:'Tomato', calories:18}
    // ]; 
    const vegetables = [];
  return (
    <>
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Button />
      <Students name="Spongebob" age={30} isStudent={true} />
      <Students name="Patrick" age={42} isStudent={false} />
      <Students name="Squid" age={50} isStudent={false} />
      <Students name="Sandy" age={27} isStudent={true} />
      <Students /> */}
    {/* <UserGreeting isLoggedin={true} username="RDK7"/>
    <UserGreeting  isLoggedin={true}/> */}
    {/* {fruits.length>0 && <List items={fruits} category="Fruits"/>}
    {vegetables.length>0 ? <List items={vegetables} category="1"/>:null} */}
    {/* <List items={vegetables} category="Vegetables"/> */}
    {/* <Button/> */}
    {/* <ProfilePicture/> */}
    {/* <MyComponent/> */}
    {/* <Counter/> */}
    {
      <ColorPicker/>
    }
    </>

   
  );
}

export default App;
