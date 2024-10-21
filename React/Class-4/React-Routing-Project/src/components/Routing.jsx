import { Routes, Route, Link, useParams } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";
import { useState, useEffect } from "react";

function Users(props) {
  const params = useParams();
  const [userData, setUserData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        //`https://fakestoreapi.com/users/${params.id}`
        `http://localhost:8080/products/${params.id}`
      );
      const userData = await response.json();
      console.log("User Data:", userData);
      setUserData(userData);
    };
    fetchData();
  }, []);
  console.log(props.isAdmin);

  console.log("Params:", params);
  return (
    <>
      {userData == null ? (
        <h3>Loading........</h3>
      ) : (
        <>
          <label htmlFor="id">ID</label>
          <input type="text" id="id" value={userData.id} />
          <br></br>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={userData.title} />
          <br></br>
          <label htmlFor="description">Description</label>
          <input
            style={{ width: "20%", position: "absolute" }}
            type="text"
            id="description"
            value={userData.description}
          />
          <br></br>
          <label htmlFor="price">Price</label>
          <input type="text" id="price" value={userData.price} />

          {/* <h3>User Data:{userData.username}</h3>
          <h3>First Name:{userData.name.firstname}</h3>
          <h3>Last Name:{userData.name.lastname}</h3>
          <h3>Email:{userData.email}</h3> */}
        </>
      )}
    </>
  );
}

function Routing() {
  return (
    <>
      <div>
        <h1>React Routing</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="products/:id" element={<Users isAdmin={true}></Users>} />
      </Routes>
    </>
  );
}

export default Routing;
