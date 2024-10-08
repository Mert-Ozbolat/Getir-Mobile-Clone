import React from "react";
import { ScrollView } from "react-native";
import HeaderMain from "../../components/HeaderMain";
import BannerCarousel from "../../components/BannerCarousel"
import MainCategories from "../../components/MainCategories"

function index() {
    return (

        <ScrollView stickyHeaderIndices={[0]} style={{ backgroundColor: "#f6f6f6" }}>
            <HeaderMain />
            <BannerCarousel />
            <MainCategories />
        </ScrollView>

    );
}

export default index;