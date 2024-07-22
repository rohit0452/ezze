import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import SmallCard from "./components/SmallCard/SmallCard";
import BigCard from "./components/BigCard/BigCard";
import UserImage from "./images/Rectangle 7.png";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Employee from "./components/Employee";
import Department from "./components/Department";


function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-2 ">
          {" "}
          <Header></Header>{" "}
        </div>
        <div
          style={{ maxHeight: "calc(100vh - 60px)", overflow: "hidden" }}
          className="col-md-10 "
        >
          <div
            className="pr-3"
            style={{
              height: "60px",
              borderBottom: "1px solid #AAAAAA",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <p className="text-black margin_right">Mr. Jorge</p>
            <img src={UserImage} />
          </div>
          {/* <div style={{ maxHeight: "calc(100vh - 60px)", overflow: "auto" }}>
            <SmallCard></SmallCard>
            <BigCard></BigCard>
          </div> */}

          {/* <Router> */}
          <Routes>
          <Route index path="/" element={<Employee />} />
          <Route path="/department" element={<Department />} />
          </Routes>
          {/* </Router> */}

          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
