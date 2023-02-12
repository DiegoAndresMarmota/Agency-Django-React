import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo_cookmentory from "assets/img/Cookmentory.png";

function Navbar() {
    return (
        <navbar className="w-full py-6 shadow-md fixed">
            <div className="bg-white px-4 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <div className="mt-2 flex flex-wrap items-center ml-1.5">
                        <img src={logo_cookmentory} width={60} height={60} className="" alt="logo"/>
                        <h3 className="font-bold">Cook-Mentory</h3>
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <Link
                            to="/recomendaciones"
                            className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4"
                        >
                            Recomendaciones
                        </Link>
                        <Link
                            to="/menus"
                            className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4"
                        >
                            Menus
                        </Link>
                        <Link
                            to="/somos"
                            className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4"
                        >
                            ¿Quién Soy?
                        </Link>
                        <Link
                            to="/platillo"
                            className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4"
                        >
                            La especialidad del día
                        </Link>
                        <Link
                            to="/blog"
                            className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4"
                        >
                            Nuestro Blog
                        </Link>
                        <Link
                            to="/contacto"
                            className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4"
                        >
                            Contacto
                        </Link>
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
