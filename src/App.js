import './App.css';
import User from "./User";
import Navbar from "./Navbar";

function App() {
  
  return (
    <div className="container">
    <Navbar title="Muhabebe - Yönetim"/>
    <hr/>
    
      <User
      name= "Mehmet SARBAK"
      department= "React"
      salary = "10000"
    />

<User
      name= "Yunus Çelik"
      department= "C#"
      salary = "9500"
      />

    </div>
  );
}

export default App;
