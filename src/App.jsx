import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import {PageScrollTop} from './components/PageScrollTop';

import "./css/2.79e41cda.chunk.css";
import "./css/bootstrap.min.css";
import "./css/main.e92e68f5.chunk.css";
import "./css/fancy-example.css";
import "./css/style.css";
import "./css/slick-theme.css";

// pages
import Home from "./pages/home";
import About from "./elements/About";
import Service from "./elements/Service";
import ServiceDetails from "./elements/ServiceDetails";
import Contact from "./elements/Contact";

import error404 from "./elements/error404";

function App() {
    return (
        <>
            <BrowserRouter basename={"/"}>
                {/* <PageScrollTop> */}
                <Routes>
                    <Route exact path={``} element={<Home />} />
                    <Route exact path={`about`} Component={About} />
                    <Route exact path={`service`} Component={Service} />
                    <Route exact path={`service-details`} Component={ServiceDetails} />
                    <Route exact path={`contact`} Component={Contact} />

                    <Route path={`404`} element={<div></div>} />
                    <Route path={"*"} Component={error404} />
                </Routes>
                {/* </PageScrollTop> */}
            </BrowserRouter>
        </>
    );
}

export default App;
