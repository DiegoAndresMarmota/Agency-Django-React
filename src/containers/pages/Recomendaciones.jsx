import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import SubRecomendations from "components/recomendaciones/SubRecomendations";
import Layout from "hocs/layouts/Layout";

function Recomendaciones() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-10">
                <SubRecomendations/>
            </div>
            <Footer />
        </Layout>
    );
}

export default Recomendaciones;
