import MainContainer from "./components/MainContainer/MainContainer";
import SideNavbar from "./components/sideNavBar/SideNavbar";

function App() {
  return (
    <div className="flex flex-col">
      <SideNavbar />
      <MainContainer />
    </div>
  );
}

export default App;
