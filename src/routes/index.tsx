import classNames from "classnames";
import { Header, PageNotFound } from "components";
import { CardSelected, Home } from "pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useThemeMode } from "state/hooks/useThemeMode";
import { themeModeEnum } from "utils/enum/theme-mode-enum";
import "../theme.scss";

export default function AppRouter() {
    const theme = useThemeMode(); 
    return (
        <Router>
            <main className={classNames({
                "dark": theme === themeModeEnum.darkMode,
                "light": theme === themeModeEnum.lightMode
            })}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/*" element={<PageNotFound/>} />
                    <Route path="/cardSelected" element={<CardSelected />} />
                </Routes>

            </main>
        </Router>
    )
}