import { Product } from "./Page/Product";
import Home from "./Page/Home";
import Review from "./Page/Review";
import Nav from "./component/Nav/Nav";
import Aboutus from "./Page/Aboutus";
import Contactus from "./Page/Contactus";

const App = () => {
  return (
    <div className=" relative">
      <Nav />
      <Home />
      <Product />
      <Aboutus />
      <Review />
      <Contactus />
    </div>
  );
};

export default App;
