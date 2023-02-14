import Header from "components/home/Header";
import Submain from "components/home/Submain";
import Suppliers from "components/home/Suppliers";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";

function Home() {
    return (
        <Layout>
            <Navbar />
                <div className="pt-10">
                <Header />
                <Submain />
                <Suppliers />
                </div>
            <Footer />
        </Layout>
    );
}

export default Home;