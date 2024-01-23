import { Outlet } from "react-router-dom";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/Fetchitems";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";




function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <Loader /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
