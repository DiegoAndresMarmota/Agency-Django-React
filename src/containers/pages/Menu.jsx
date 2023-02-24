import OverSubtitle from "components/OverSubtitle";
import FoodItems from "components/menu/FoodItems";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";

function Menu() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-10">
                <OverSubtitle />
                <FoodItems />
            </div>
            <Footer />
        </Layout>
    );
}

export default Menu;
