import OverSubtitle from "components/OverSubtitle";
import SpecialityDay from "components/especialidad/SpecialityDay";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";

function Especialidad(props) {
    return (
        <Layout>
            <Navbar />
            <div className="pt-10">
                <OverSubtitle
                    title="Una delicia a tu boca en cada bocado"
                    author=" Beatriz Salas U. - Chef Interina de CookMentory" />
                <SpecialityDay />
            </div>
            <Footer />
        </Layout>
    );
}

export default Especialidad;
