import OverSubtitle from "components/OverSubtitle";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";

function Especialidad() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-10">
                <OverSubtitle />
            </div>
            <Footer />
        </Layout>
    );
}

export default Especialidad;
