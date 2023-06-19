import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import classes from '../styles/layout.module.css'


export default function Layout () {
    return (
        <div className={classes.layoutContainer}>
            <Header />
            <Outlet/>
            {/* Footer */}
        </div>
    )
}