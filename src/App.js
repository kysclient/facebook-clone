import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed"
import RightSidebar from "./RightSidebar";

function App() {
  return (
    <div className="App">
      { /* Header */ }
      <Header />


      { /* App Body */}
      <div className="app_body">
      { /* Sidebar */}
      <Sidebar />

      <Feed />
      {/* Post */}

      {/* RightSidebar */}
      <RightSidebar />
  

      </div>

     




    </div>

  );
}

export default App;
