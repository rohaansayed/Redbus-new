// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setTravelData } from "../features/Travel";
// import "./../styles/Header.css";

// const Header = () => {
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [dateFrom, setDateFrom] = useState("");
//   const [showSignUpForm, setShowSignUpForm] = useState(false); // New state
//   const [email, setEmail] = useState(""); // New state
//   const [password, setPassword] = useState(""); // New state
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (from !== "" && to !== "" && dateFrom !== "") {
//       dispatch(
//         setTravelData({
//           from,
//           to,
//           date: dateFrom,
//           price: 0,
//           seats: 0,
//         })
//       );
//       navigate(`/search/${from}/${to}`);
//     }
//   };

//   const valueSwitch = () => {
//     const fr = from;
//     const t = to;
//     setFrom(t);
//     setTo(fr);
//   };

//   const handleSignInSignUp = () => {
//     setShowSignUpForm(true);
//   };

//   const handleSignUpSubmit = (e) => {
//     e.preventDefault();
//     // Handle sign-up logic here
//     // You can dispatch an action or perform an API call
//     console.log("Sign Up:", email, password);
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-sm bg-danger navbar-dark fixed-top">
//         <div className="container">
//           <a className="navbar-brand" href="#">
//             <img
//               src="https://i.postimg.cc/zXFNsGkg/redbus-white.png"
//               alt="redBus"
//               width="60px"
//             />
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#menu-nav"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/*   Navbar links    */}
//           <div className="collapse navbar-collapse" id="menu-nav">
//             {/*   Left-aligned nav (default)    */}
//             <div>
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <a className="nav-link text-white text-uppercase" href="#">
//                     Bus Tickets
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link text-white text-uppercase" href="#">
//                     Hotels
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link text-white text-uppercase" href="#">
//                     Bus Hire
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link text-white text-uppercase" href="#">
//                     Pilgrimages
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/*   Right-aligned nav    */}
//             <div
//               className="collapse navbar-collapse justify-content-end"
//               id="menu-nav"
//             >
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <a className="nav-link text-white" href="#">
//                     Help
//                   </a>
//                 </li>
//                 <li className="nav-item dropdown">
//                   <a
//                     className="nav-link dropdown-toggle text-white"
//                     href="#"
//                     data-toggle="dropdown"
//                   >
//                     Manage Booking
//                   </a>
//                   <div className="dropdown-menu">
//                     <a className="dropdown-item" href="#">
//                       Link 1
//                     </a>
//                     <a className="dropdown-item" href="#">
//                       Link 2
//                     </a>
//                     <a className="dropdown-item" href="#">
//                       Link 3
//                     </a>
//                   </div>
//                 </li>
//                 <li className="nav-item dropdown">
//                   <a
//                     className="nav-link dropdown-toggle text-white"
//                     href="#"
//                     data-toggle="dropdown"
//                   >
//                     <i className="fas fa-user-circle"></i>
//                   </a>
//                   <div className="dropdown-menu">
//                     {showSignUpForm ? ( // Render sign-up form if showSignUpForm is true
//                       <form onSubmit={handleSignUpSubmit} className="dropdown-form">
//                         <div className="form-group">
//                           <label htmlFor="email">Email</label>
//                           <input
//                             type="email"
//                             className="form-control"
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                           />
//                         </div>
//                         <div className="form-group">
//                           <label htmlFor="password">Password</label>
//                           <input
//                             type="password"
//                             className="form-control"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                           />
//                         </div>
//                         <button type="submit" className="btn btn-primary">
//                           Log In
//                         </button>
//                         <button type="submit" className="btn btn-primary">
//                           Sign up
//                         </button>
//                       </form>
//                     ) : (
//                       <a
//                         className="dropdown-item"
//                         href="#"
//                         onClick={handleSignInSignUp} // Show sign-up form on click
//                       >
//                         Log In
//                       </a>
//                     )}
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/*   Main Home Banner and Input Search Container    */}
//       <div className="position-relative">
//         <div>
//           <div className="home-banner"></div>
//         </div>

//         <div className="input-search-container">
//           <form
//             className="d-flex justify-content-center"
//             onSubmit={handleSubmit}
//           >
//             <div className="d-inline-block position-relative">
//               <span className="inputIcon">
//                 <i className="far fa-building"></i>
//               </span>
//               <label
//                 className="inputLabel-default"
//                 htmlFor="input-label-from"
//               ></label>
//               <input
//                 id="input-label-from"
//                 className="inputForm"
//                 type="text"
//                 value={from}
//                 placeholder="FROM"
//                 onChange={(e) => {
//                   setFrom(e.target.value);
//                 }}
//                 list="input-from-list"
//               />
//               <datalist id="input-from-list">
//                 {/*   <option value="Gurgaon"></option>    */}
//               </datalist>
//             </div>

//             <button
//               className="btn btn-danger rounded-0 pl-3 pr-3 pb-2"
//               onClick={valueSwitch}
//             >
//               &#8596;
//             </button>

//             <div className="d-inline-block position-relative">
//               <span className="inputIcon">
//                 <i className="far fa-building"></i>
//               </span>
//               <label
//                 className="inputLabel-default"
//                 htmlFor="input-label-to"
//               ></label>
//               <input
//                 id="input-label-to"
//                 className="inputForm"
//                 type="text"
//                 placeholder="TO"
//                 value={to}
//                 onChange={(e) => {
//                   setTo(e.target.value);
//                 }}
//                 list="input-to-list"
//               />
//               <datalist id="input-to-list">
//                 {/*   <option value="Delhi"></option>    */}
//               </datalist>
//             </div>

//             <div className="d-inline-block position-relative">
//               <span className="inputIcon">
//                 <i className="fas fa-calendar-alt"></i>
//               </span>
//               <label
//                 className="inputLabel-default"
//                 htmlFor="input-label-onward-date"
//               ></label>

//               <input
//                 id="input-label-onward-date"
//                 className="inputForm"
//                 type="date"
//                 onChange={(e) => {
//                   setDateFrom(e.target.value);
//                 }}
//               />
//             </div>

//             <div className="d-inline-block position-relative">
//               <input
//                 className="btn btn-danger rounded-0 pl-3 pr-3 pb-2"
//                 type="submit"
//                 value="Search Buses"
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTravelData } from "../features/Travel";
import "./../styles/Header.css";

const Header = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (from !== "" && to !== "" && dateFrom !== "") {
      dispatch(
        setTravelData({
          from,
          to,
          date: dateFrom,
          price: 0,
          seats: 0,
        })
      );
      navigate(`/search/${from}/${to}`);
    }
  };

  const valueSwitch = () => {
    const fr = from;
    const t = to;
    setFrom(t);
    setTo(fr);
  };

  const handleSignInSignUp = () => {
    setShowSignUpForm(true);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    // You can dispatch an action or perform an API call
    console.log("Sign Up:", email, password);
  };

  const openSignUpPage = () => {
    navigate("/signup");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-danger navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://i.postimg.cc/zXFNsGkg/redbus-white.png"
              alt="redBus"
              width="60px"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#menu-nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="menu-nav">
            {/* Left-aligned nav (default) */}
            <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-white text-uppercase" href="#">
                    Bus Tickets
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white text-uppercase" href="#">
                    Hotels
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white text-uppercase" href="#">
                    Bus Hire
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white text-uppercase" href="#">
                    Pilgrimages
                  </a>
                </li>
              </ul>
            </div>

            {/* Right-aligned nav */}
            <div
              className="collapse navbar-collapse justify-content-end"
              id="menu-nav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Help
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Manage Booking
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Home
                    </a>
                    <a className="dropdown-item" href="#">
                      About
                    </a>
                    <a className="dropdown-item" href="#">
                      FAQ'S
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown" >
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <i className="fas fa-user-circle"></i>
                  </a>
                  <div className="dropdown-menu">
                    {(
                      <form
                        onSubmit={handleSignUpSubmit}
                        className="dropdown-form"
                      >
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Log In
                        </button>
                        <div
                          type="button"
                          className="btn btn-primary"
                          onClick={openSignUpPage}
                        >
                          Sign up
                        </div>
                      </form>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Home Banner and Input Search Container */}
      <div className="position-relative">
        <div>
          <div className="home-banner"></div>
        </div>

        <div className="input-search-container">
          <form
            className="d-flex justify-content-center"
            onSubmit={handleSubmit}
          >
            <div className="d-inline-block position-relative">
              <span className="inputIcon">
                <i className="far fa-building"></i>
              </span>
              <label
                className="inputLabel-default"
                htmlFor="input-label-from"
              ></label>
              <input
                id="input-label-from"
                className="inputForm"
                type="text"
                value={from}
                placeholder="FROM"
                onChange={(e) => {
                  setFrom(e.target.value);
                }}
                list="input-from-list"
              />
              <datalist id="input-from-list">
                {/* <option value="Gurgaon"></option> */}
              </datalist>
            </div>

            <button
              // className="btn btn-danger rounded-0 pl-3 pr-3 pb-2"
              className="btn"
              onClick={valueSwitch}
            >
              &#8596;
            </button>

            <div className="d-inline-block position-relative">
              <span className="inputIcon">
                <i className="far fa-building"></i>
              </span>
              <label
                className="inputLabel-default"
                htmlFor="input-label-to"
              ></label>
              <input
                id="input-label-to"
                className="inputForm"
                type="text"
                placeholder="TO"
                value={to}
                onChange={(e) => {
                  setTo(e.target.value);
                }}
                list="input-to-list"
              />
              <datalist id="input-to-list">
                {/* <option value="Delhi"></option> */}
              </datalist>
            </div>

            <div className="d-inline-block position-relative">
              <span className="inputIcon">
                <i className="far fa-calendar-alt"></i>
              </span>
              <label
                className="inputLabel-default"
                htmlFor="input-label-calendar"
              ></label>
              <input
                id="input-label-calendar"
                className="inputForm"
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
            </div>

            <button
              // className="btn btn-danger rounded-0 pl-3 pr-3 pb-2"
              className="btn"
              type="submit"
            >
              Search 
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
