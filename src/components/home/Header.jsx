import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

function Header() {
    return (
        <main>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                    <div>
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                <span className="text-gray-600">
                                    Somos una “Plataforma Abierta” para los emprendedores
                                    pertenecientes al mercado gastronómico.{" "}
                                    <a href="/somos" className="font-semibold text-orange-600">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        Ver más <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                Tu guía culinaria para crear y transmitir
                                <span> </span>
                                <div
                                    className="inline-flex"
                                    style={{ color: "#fa7a02", fontWeight: "bold" }}
                                >
                                    <Typewriter
                                        words={["sabores.", "saberes.", "con excelencia."]}
                                        loop={0}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    // onLoopDone={handleDone}
                                    // onType={handleType}
                                    />
                                </div>
                            </h1>
                            <p className="mt-6 text-lg py-3 leading-8 text-gray-600 sm:text-center">
                                Deseamos contribuir como una empresa virtual, conformada por
                                “Redes Colaborativas" en donde encontramos desde comunicadores
                                hasta gastronómicos que estan a disposición del Mercado
                                Gastronómico Nacional. Estas redes nacen con el fin de apoyar
                                al “Mercado Gastronómico Nacional” a través de sus Servicios
                                de Comunicación Digital y generación de recetas para pequeños
                                proveedores incluso a través del canje y promociones.
                            </p>
                            <div className="mt-8 flex gap-x-6 sm:justify-center items-center">
                                <a
                                    href="/blog"
                                    className="inline-block rounded-lg bg-orange-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-orange-600 hover:bg-orange-700 hover:ring-orange-700"
                                >
                                    <li className="inline-flex font-bold hover:text-orange-600 hover:font-bold">
                                        <Link to="/#">Foodies</Link>
                                    </li>
                                    <span className="text-orange-200" aria-hidden="true">
                                        &rarr;
                                    </span>
                                    <a
                                        href="/blog"
                                        className="inline-block rounded-lg bg-orange-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-orange-600 hover:bg-orange-700 hover:ring-orange-700"
                                    >
                                        <li className="inline-flex font-bold hover:text-orange-600 hover:font-bold">
                                            <Link to="/#">FoodBloggers</Link>
                                        </li>
                                        <span className="text-orange-200" aria-hidden="true">
                                            &rarr;
                                        </span>
                                    </a>
                                    <a
                                        href="/blog"
                                        className="inline-block rounded-lg bg-orange-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-orange-600 hover:bg-orange-700 hover:ring-orange-700"
                                    >
                                        <li className="inline-flex font-bold hover:text-orange-600 hover:font-bold">
                                            <Link to="/#">Profesionales Gastronómicos</Link>
                                        </li>
                                        <span className="text-orange-200" aria-hidden="true">
                                            &rarr;
                                        </span>
                                    </a>
                                    <a
                                        href="/blog"
                                        className="inline-block rounded-lg bg-orange-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-orange-600 hover:bg-orange-700 hover:ring-orange-700"
                                    >
                                        <li className="inline-flex font-bold hover:text-orange-600 hover:font-bold">
                                            <Link to="/#">Productores Locales</Link>
                                        </li>
                                        <span className="text-orange-200" aria-hidden="true">
                                            &rarr;
                                        </span>
                                    </a>
                                </a>
                            </div>
                        </div>
                        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                            <svg
                                className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                                viewBox="0 0 1155 678"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                                    fillOpacity=".3"
                                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                                />
                                <defs>
                                    <linearGradient
                                        id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                                        x1="1155.49"
                                        x2="-78.208"
                                        y1=".177"
                                        y2="474.645"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#9089FC" />
                                        <stop offset={1} stopColor="#FF80B5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Header;
