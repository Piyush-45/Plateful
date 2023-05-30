// import React from "react";
// import Search from "./Search";
// import { Link ,useNavigate} from "react-router-dom";
// import { UserAuth } from "../../context/AuthContext";

// const MobileMenu = () => {
//   const handleLogout = async () => {
//     try {
//       await logOut();
//       navigate("/");
//     } catch (err) {
//       alert(err);
//     }
//   };

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   let navigate = useNavigate();
//   const { user, logOut } = UserAuth();
//   const [isOpen, setIsOpen] = useState(true);
//   return (
//     <div id="mobile">
//       <button className="hamburger">
//         {/* icon from heroicons.com */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           viewBox="0 0 20 20"
//           fill="white"
//         >
//           <path
//             fillRule="evenodd"
//             d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>

//       <div className="mobile_menus">
//         <div className="search">
//           <Search/>
//         </div>
//         <div className="menu_items">
//         <ul className="mobile_itmes_list">
//             <li>
//               <Link to={"/"}  className="home-link">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <RecipesDropdown />
//             </li>
//             <Link to={"/blogs"} className="home-link">
//               <li>Blog</li>
//             </Link>
//             {/* <li>Submit A recipe</li> */}
//             {user?.email ? (
//               <>
//                 <li onClick={handleLogout}>Log Out</li>
//                 <Link to={"/account"} className="home-link">
//                   <li>My Account</li>
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <Link to={"/login"} className="home-link">
//                   <li>Login</li>
//                 </Link>
//                 <Link to={"/register"} className="home-link">
//                   <li>Register</li>
//                 </Link>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileMenu;
