import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Content from "./components/store/discover";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-[1fr_5fr]">
        <Sidebar />
        <div className="mr-5 ml-1">
          <Content />
        </div>
      </div>
    </>
  );
}

export default App;
