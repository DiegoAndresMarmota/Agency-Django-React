import OverSubtitle from "components/OverSubtitle";
import FoodItems from "components/menu/FoodItems";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";

function Menu(props) {
    return (
        <Layout>
            <Navbar />
            <div className="pt-10">
                <OverSubtitle
                    title="Mira nuestra carta"
                    subtitle="El postre es solo una estación momentanéa en este viaje llamado comer y disfrutar. "
                    author="Paula Cardiz F. - Mención Junio/22" />
                <FoodItems />
            </div>
            <Footer />
        </Layout>
    );
}

export default Menu;
