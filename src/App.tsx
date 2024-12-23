import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import PresidentMessage from "./components/PresidentMessage";
import PostList from "./components/PostList";
import "./assets/sass/app.scss";
import "./assets/sass/_responsive.scss";

function App() {
  return (
    <>
      <Navbar />
      <PresidentMessage />
      <PostList />
      <Footer />
    </>
  );
}

export default App;
