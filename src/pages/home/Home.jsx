import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/herosection/HeroSection";
import Filter from "../../components/filter/Filter";
import Productcard from "../../components/productcard/Productcard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";

function Home() {
    return (
        <>
            <Layout>
                <HeroSection />
                <Filter />
                <Productcard />
                <Track />
                <Testimonial />
            </Layout>
        </>
    );
}

export default Home;
