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
        `https://fakestoreapi.com/users/${params.id}`
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
          <label htmlFor="username">User Data</label>
          <input type="text" id="username" value={userData.username} />
          <br></br>
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" value={userData.name.firstname} />
          <br></br>
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" value={userData.name.lastname} />
          <br></br>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" value={userData.email} />

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
        <Route path="users/:id" element={<Users isAdmin={true}></Users>} />
      </Routes>
    </>
  );
}

export default Routing;
