import { use, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { Technology } from "./Types";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface TechnologyListProps {
    technologyListPromise: Promise<Technology[]>;
}

const TechnologyList = ({
    technologyListPromise,
}: TechnologyListProps) => {
    const technologies = use(technologyListPromise);

    // Selected technologies
    const [selectedTechnologies, setSelectedTechnologies] = useState<
        Technology[]
    >([]);

    // Add technology
    const handleAdd = (technology: Technology) => {
        const alreadyAdded = selectedTechnologies.some(
            (item) => item.id === technology.id
        );

        // Duplicate technology
        if (alreadyAdded) {
            toast.warning(
                `${technology.name} is already in your stack!`
            );
            return;
        }

        // Add technology
        setSelectedTechnologies((previous) => [
            ...previous,
            technology,
        ]);

        toast.success(
            `${technology.name} added to your stack!`
        );
    };

    // Remove one technology
    const handleRemove = (id: Technology["id"]) => {
        const technology = selectedTechnologies.find(
            (item) => item.id === id
        );

        setSelectedTechnologies((previous) =>
            previous.filter(
                (technology) => technology.id !== id
            )
        );

        if (technology) {
            toast.error(
                `${technology.name} removed from your stack!`
            );
        }
    };

    // Remove all technologies
    const handleRemoveAll = () => {
        setSelectedTechnologies([]);

        toast.error(
            "All technologies removed from your stack!"
        );
    };

    return (
        <section className="px-4 py-10 sm:px-6">
            <div className="mx-auto max-w-6xl">

                {/* ================= Section Header ================= */}
                <div className="mb-8">
                    <h2 className="text-4xl font-extrabold text-[#0f172a]">
                        Explore the{" "}
                        <span className="brand-gradient">
                            Technologies
                        </span>
                    </h2>

                    <p className="mt-2 text-sm text-[#718096]">
                        Explore our comprehensive category to build
                        your ideal stack.
                    </p>
                </div>

                {/* ================= Technology Content ================= */}
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start">

                    {/* Technology Cards */}
                    <div className="grid w-full flex-1 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {technologies.map((technology) => (
                            <TechnologyCard
                                key={technology.id}
                                technology={technology}
                                isAdded={selectedTechnologies.some(
                                    (item) =>
                                        item.id === technology.id
                                )}
                                onAdd={handleAdd}
                            />
                        ))}
                    </div>

                    {/* Your Stack */}
                    <div className="w-full lg:w-[280px] xl:w-[300px]">
                        <YourStack
                            selectedTechnologies={
                                selectedTechnologies
                            }
                            onRemove={handleRemove}
                            onRemoveAll={handleRemoveAll}
                        />
                    </div>
                </div>
            </div>

            {/* ================= Toast Container ================= */}
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnHover
                theme="light"
            />
        </section>
    );
};

export default TechnologyList;