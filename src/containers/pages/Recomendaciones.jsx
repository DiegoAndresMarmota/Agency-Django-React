import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import SubRecomendations from "components/recomendaciones/SubRecomendations";
import OverSubtitle from "components/OverSubtitle";
import Layout from "hocs/layouts/Layout";
import ListRecomendations from "components/recomendaciones/ListRecomendations";

function Recomendaciones() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-10">
                <OverSubtitle />
                <SubRecomendations />
                <ListRecomendations />
            </div>
            <Footer />
        </Layout>
    );
}

export default Recomendaciones;
