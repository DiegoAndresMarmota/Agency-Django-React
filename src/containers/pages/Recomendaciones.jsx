import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import SubRecomendations from "components/recomendaciones/SubRecomendations";
import OverSubtitle from "components/OverSubtitle";
import Layout from "hocs/layouts/Layout";
import ListRecomendations from "components/recomendaciones/ListRecomendations";

function Recomendaciones(props) {
    return (
        <Layout>
            <Navbar />
            <div className="pt-10">
                <OverSubtitle
                    title="Nuestros comensales dicen:"
                    subtitle="Sitio pequeño, decoración coqueta y un trato por parte de sus camareras que lo hacen muy acogedor. Gastronomía de siempre, elaborada y presentada de una forma distinta. Riquísimo todo y a muy buen precio. Por lo pequeño del local, conviene ir pronto, se llena enseguida. Aún así, la espera merece la pena."
                    author="Ignacio Urrutia - Chef Dinastia"
                />
                <SubRecomendations />
                <ListRecomendations />
            </div>
            <Footer />
        </Layout>
    );
}

export default Recomendaciones;
