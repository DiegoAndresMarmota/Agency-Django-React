import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import SubSomos from "components/somos/SubSomos";
import Layout from "hocs/layouts/Layout";

function Somos() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-10">
                <SubSomos />
            </div>
            <Footer />
        </Layout>
    );
}

export default Somos;
