import React from "react";
import { ScrollView } from "react-native";
import HeaderMain from "../../components/HeaderMain";
import BannerCarousel from "../../components/BannerCarousel"
import CategoryItem from "../../components/CategoryItem"

function index() {
    return (

        <ScrollView stickyHeaderIndices={[0]} style={{ backgroundColor: "#f6f6f6" }}>
            <HeaderMain />
            <BannerCarousel />
            <CategoryItem />
        </ScrollView>

    );
}

export default index;