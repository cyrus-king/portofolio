import Link from "next/link";       

const Navbar = () => {

    return(
        <div className="nav container mx-auto flex justify-between items-center py-4 px-6 bg-white shadow-md">
            <div className="logo">
            <Link href="/">
            Fila Dimitri Curtis
        </Link>
      </div>
      <a href="" className="cta-btn">CV</a>
    </div>
    )
}
export default Navbar;