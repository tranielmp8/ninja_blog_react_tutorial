import { Link } from 'react-router-dom'

const Navbar = () => {

  const navTitle = "<Blogging & Logging>";

  return (
    <nav className="navbar" >
      <h1> {navTitle} </h1>
      <div className="links">
        <Link to="/" >Home</Link>
        {/* <Link to="/create" >New Blog</Link> */}
      </div>
    </nav>
  )
}

export default Navbar;