function Submain() {
    const incentives = [
      {
        name: "Compra directamente a nuestro proveedores",
        imageSrc:
          "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
        description:
          "En realidad, no es gratis, solo lo cotizamos en los productos. Alguien está pagando por ello, y no somos nosotros.",
      },
      {
        name: "Garantía de X años en el mercado Chileno",
        imageSrc:
          "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
        description:
          "Si se rompe en los primeros 10 años, lo reemplazaremos. Después de eso, estás solo.",
      },
      {
        name: "Estrictas políticas de confianza en el usuario",
        imageSrc:
          "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
        description:
          "Si no te gusta, cámbiaselo a uno de tus amigos por algo de ellos. Sin embargo, no lo envíes aquí.",
      },
    ];
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl pb-6">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Misión:
              </h2>
              <p className="mt-4 text-gray-500">
                Nuestra principal misión es ser el Medio Oficial de Gastronomía
                en Chile. Queremos hacer crecer este mercado apoyando fielmente
                el trabajo de pequeños y medianos Emprendedores Gastronómicos,
                generando nuevos clientes para ellos, imagen corporativa,
                material escrito y audiovisual y posicionamiento digital a un
                costo muy bajo y accesible. Nuestra Red Colaborativa al ser
                orgánica, tiene la misión de apoyar todas las ciudades más
                importantes de Chile a través de profesionales comunicadores de
                calidad y comprometidos con la gastronomía. 
              </p>
            </div>
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Visión:
              </h2>
              <p className="mt-4 text-gray-500">
                Nuestra visión es ser parte de algún programa de gobierno,
                destinado al levantamiento del mercado gastronómico nacional,
                apoyando a emprendedores, profesionales, concursos, torneos, de
                manera activa y proactiva.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img
                      className="h-16 w-16"
                      src={incentive.imageSrc}
                      alt=""
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">
                      {incentive.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {incentive.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Submain;