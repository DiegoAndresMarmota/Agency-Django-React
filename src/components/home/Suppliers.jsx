function Suppliers() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-5">
                        Nuestros Clientes:
                    </h2>
                </div>
                <div className="inline-flex gap-20">
                    <div className="col-span-1 inline-flex justify-center md:col-span-2 lg:col-span-1">
                        <img
                            className="h-12"
                            src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                            alt="Tuple"
                        />
                    </div>
                    <div className="col-span-1 inline-flex justify-center md:col-span-2 lg:col-span-1">
                        <img
                            className="h-12"
                            src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                            alt="Mirage"
                        />
                    </div>
                    <div className="col-span-1 inline-flex justify-center md:col-span-2 lg:col-span-1">
                        <img
                            className="h-12"
                            src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                            alt="StaticKit"
                        />
                    </div>
                    <div className="col-span-1 inline-flex justify-center md:col-span-3 lg:col-span-1">
                        <img
                            className="h-12"
                            src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                            alt="Transistor"
                        />
                    </div>
                    <div className="col-span-2 inline-flex justify-center md:col-span-3 lg:col-span-1">
                        <img
                            className="h-12"
                            src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                            alt="Workcation"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Suppliers;
