import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo_cookmentory from "assets/img/Cookmentory.png";

function Navbar() {
    return (
        <navbar className="w-full py-6 top-0 fixed">
            <div className="bg-gray-100 px-4 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <Link to='/' className="mt-2 flex flex-wrap items-center ml-1.5">
                        <img
                            src={logo_cookmentory}
                            width={60}
                            height={60}
                            className=""
                            alt="logo"
                        />
                        <h3 className="font-bold ml-1.5">Cook-Mentory</h3>
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <NavLink
                            to="/recomendaciones"
                            className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 hover:text-orange-600 hover:font-bold"
                        >
                            Recomendaciones
                        </NavLink>
                        <NavLink
                            to="/menu"
                            className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 hover:text-orange-600 hover:font-bold"
                        >
                            Menu
                        </NavLink>
                        <NavLink
                            to="/somos"
                            className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 hover:text-orange-600 hover:font-bold"
                        >
                            Quiénes Somos
                        </NavLink>
                        <NavLink
                            to="/especialidad"
                            className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 hover:text-orange-600 hover:font-bold"
                        >
                            La especialidad del día
                        </NavLink>
                        <NavLink
                            to="/blog"
                            className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 hover:text-orange-600 hover:font-bold"
                        >
                            Nuestro Blog
                        </NavLink>
                        <NavLink
                            to="/contacto"
                            className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 hover:text-orange-600 hover:font-bold"
                        >
                            Contacto
                        </NavLink>
                        <button
                            type="button"
                            className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-md font-bold text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ease-out duration-200 transition"
                        >
                            Ingresa
                        </button>
                    </div>
                </div>
            </div>
        </navbar>
    );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);
