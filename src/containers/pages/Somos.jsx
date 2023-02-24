import OverSubtitle from "components/OverSubtitle";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import SubSomos from "components/somos/SubSomos";
import Team from "components/somos/Team";
import Layout from "hocs/layouts/Layout";

function Somos(props) {
    return (
        <Layout>
            <Navbar />
            <div className="pt-10">
                <OverSubtitle
                    title="Nuestra Ruta"
                    subtitle="Nuestra principal misión es ser el Medio Oficial de Gastronomía en Chile. Queremos hacer crecer este mercado apoyando fielmente el trabajo de pequeños y medianos Emprendedores Gastronómicos, generando nuevos clientes para ellos, imagen corporativa, material escrito y audiovisual y posicionamiento digital a un costo muy bajo y accesible."
                    author="Diego Echalar Peñailillo - Gerente General"
                />
                <SubSomos />
                <Team />
            </div>
            <Footer />
        </Layout>
    );
}

export default Somos;
