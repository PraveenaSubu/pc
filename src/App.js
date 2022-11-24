//import logo from './logo.svg';
import './App.css';
import { User } from './User.1';
import { Welcome, double } from './Welcome 5'; //name importer
console.log(double(80));
//import userEvent from '@testing-library/user-event';

function App() {
  const names = ["Radha", "Priya", "Pravi"];
  const user = [
    {
      name: "Pravi",
      pic: "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw"
    },
    {
      name: "Priya",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqiQ5d8noN1UvQXbCb9MAfJAJ5ZBPru5eHKL5Xx15NHpmsvZrntmht-zfprli4v2b0R9c&usqp=CAU"
    },
    {
      name: "Radha",
      pic: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/05/Whatsapp-Profile-Images-pictutres-hd.gif"
    },
  ];
  return (
    < div className="App" >

      {/* <User name="Pravi"
        pic="https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw"
      />
      <User name="Priya"
        pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqiQ5d8noN1UvQXbCb9MAfJAJ5ZBPru5eHKL5Xx15NHpmsvZrntmht-zfprli4v2b0R9c&usqp=CAU"
      />
      <User name="Radha"
        pic="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/05/Whatsapp-Profile-Images-pictutres-hd.gif"
      /> */}
      {/* <Welcome name="Radha" />
      <Welcome name="Priya" />
      <Welcome name="Pravi" /> */}

      {names.map(nm => (
        <Welcome name={nm} />
      ))}
      {user.map(usr => (
        <User name={usr.name} pic={usr.pic}
        />
      ))}

    </div >
  );
}

export default App;

//ctrl + ` -> terminal open

// < div className="App" >

    //   <h1>Hello B40WD</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    // </div >



