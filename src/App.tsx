import "./App.css";
import { Suspense } from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import TechnologyList from "./Components/Technology/TechnologyList";
import type { Technology } from "./Components/Technology/Types";
import Footer from "./Components/Footer";

const getTechnologyListPromises = async (): Promise<Technology[]> => {
    const res = await fetch("/Data.json");

    if (!res.ok) {
        throw new Error("Failed to fetch technology data");
    }

    const data: Technology[] = await res.json();

    return data;
};

const technologyListPromise = getTechnologyListPromises();

function App() {
    return (
        <>
            <Navbar />

            <Hero />

            <Suspense fallback={<p className="py-10 text-center">Loading...</p>}>
                <TechnologyList
                    technologyListPromise={technologyListPromise}
                />
            </Suspense>
            <Footer></Footer>
        </>
    );
}

export default App;