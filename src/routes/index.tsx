import { Home } from "pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<h1>Page Not Found</h1>} />
            </Routes>
        </Router>
    )
}