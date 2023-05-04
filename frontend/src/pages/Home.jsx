import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEvents } from "../redux/features/eventsSlice";
import { fetchItineraries } from "../redux/features/itinerariesSlice";

import ItinerarySlider from "../components/dashboardSliders/ItinerarySlider";
import ExperienceSlider from "../components/dashboardSliders/ExperienceSlider";
import DashboardMidSection from "../components/dashboardMid/DashboardMidSection";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEvents());
        dispatch(fetchItineraries());
    }, []);

    return (
        <>
            <div style={{ paddingLeft: "8.5vw" }}>
                <ItinerarySlider />
                <ExperienceSlider />
            </div>
            <DashboardMidSection />
        </>
    );
};

export default Home;
