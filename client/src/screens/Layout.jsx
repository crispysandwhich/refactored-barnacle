import { Outlet } from "react-router-dom";
import classes from '../styles/layout.module.css'

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";


export default function Layout () {
    return (
        <div className={classes.layoutContainer}>
            <Header />
            <Outlet/>
            <Footer />
        </div>
    )
}