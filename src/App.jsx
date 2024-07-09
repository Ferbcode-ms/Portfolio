import "./App.css";
import "./index.css";
import Asidebar from "./section/Asidebar";
import MainContent from "./section/MainContent";

function App() {
  return (
    <main className="max-w-1200 mx-auto flex items-start justify-center gap-[25px] p-16 max-xl:flex-col max-md:m-3 max-md:gap-1 max-md:p-0">
      <Asidebar />
      <MainContent />
    </main>
  );
}

export default App;
