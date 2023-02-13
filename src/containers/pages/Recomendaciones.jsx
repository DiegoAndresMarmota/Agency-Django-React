import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";

function Recomendaciones() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-32">Recomendaciones</div>
            <Footer />
        </Layout>
    );
}

export default Recomendaciones;
