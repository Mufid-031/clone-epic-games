import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Content from "./components/content";

function App() {

  return (
    <>
      <div className="grid grid-cols-[1fr_5fr]">
        <Sidebar />
        <div className="mr-5">
          <Navbar />
          <Content />
        </div>
      </div>
    </>
  );
}

export default App;
