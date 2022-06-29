import classNames from "classnames";
import { Header } from "components";
import { CardSelected, Home } from "pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useThemeMode } from "state/hooks/useThemeMode";
import { themeModeEnum } from "utils/enum/theme-mode-enum";
import "../theme.scss";

export default function AppRouter() {
    const theme = useThemeMode(); 
    return (
        <main className={classNames({
            "dark": theme === themeModeEnum.darkMode,
            "light": theme === themeModeEnum.lightMode
         })}>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/*" element={<h1>Page Not Found</h1>} />
                    <Route path="/cardSelected" element={<CardSelected />} />
                </Routes>
            </Router>
        </main>
    )
}