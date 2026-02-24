import { Outlet } from "react-router";
import Navigation from "./Navigaton";
import ThemeSwitcher from "./ThemeSwitcher";
import "./layout.css"; // Ensure your styles are imported

export default function Layout() {

    return (
        <div className="layout">
            <header className="header">
                <span className="header__brand">SOC Time-sag</span>
                <Navigation />
                <div className="header__bottom">
                    <ThemeSwitcher />
                </div>
            </header>
            <main className="main">
                <Outlet />
            </main>
            
        </div>
    )
}