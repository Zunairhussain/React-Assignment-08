import Navbar from "./components/navbar/Navbar";
import Trending from "./components/trendingCollection/Trending";
import "./App.css"
import Top from "./components/topCreator/Top";
import Discover from "./components/discoverNfts/Discover";
import Browse from "./components/browse/Browse";
import Work from "./components/work/Work";
import Join from "./components/join/Join";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Trending />
      <Top />
      <Discover />
      <Browse />
      <Work />
      <Join />
    <Footer />
    </div>
  );
}

export default App;
