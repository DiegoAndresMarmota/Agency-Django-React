import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";

function Somos() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-32">Quienes somos</div>
            <Footer />
        </Layout>
    );
}

export default Somos;
