import React, { useEffect } from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = () => {
  // let listener = null
  // const [scrollState, setScrollState] = useState("top")

  // useEffect(() => {
  //   listener = document.addEventListener("scroll", e => {
  //     var scrolled = document.scrollingElement.scrollTop
  //     if (scrolled >= 120) {
  //       if (scrollState !== "amir") {
  //         setScrollState("amir")
  //       }
  //     } else {
  //       if (scrollState !== "top") {
  //         setScrollState("top")
  //       }
  //     }
  //   })
  //   return () => {
  //     document.removeEventListener("scroll", listener)
  //   }
  // }, [scrollState])
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button type="button" className="toggle-btn">
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
