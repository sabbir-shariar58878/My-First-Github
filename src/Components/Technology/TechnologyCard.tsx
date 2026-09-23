import type { Technology } from "./Types";

interface TechnologyCardProps {
    technology: Technology;
    isAdded: boolean;
    onAdd: (technology: Technology) => void;
}

const TechnologyCard = ({
    technology,
    isAdded,
    onAdd,
}: TechnologyCardProps) => {
    return (
        <div className="flex w-full flex-col rounded-xl border border-[#e8ebf0] bg-white p-4 shadow-sm">

            {/* Top */}
            <div className="flex items-start justify-between">

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center">
                    <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-10 w-10 object-contain"
                    />
                </div>

                {/* Badge */}
                <span className="rounded-full border border-[#dceeff] bg-[#f0f8ff] px-3 py-1 text-[10px] font-medium text-[#0794e8]">
                    {technology.badge}
                </span>
            </div>

            {/* Name */}
            <h2 className="mt-2 text-[18px] font-bold text-[#111827]">
                {technology.name}
            </h2>

            {/* Description */}
            <p className="mt-2 min-h-[62px] text-[12px] leading-[1.5] text-[#718096]">
                {technology.description}
            </p>

            {/* Info */}
            <div className="mt-4 flex items-center justify-between gap-2">

                {/* Category */}
                <span className="rounded-md bg-[#f4f6f8] px-2 py-1 text-[10px] font-medium text-[#64748b]">
                    {technology.category}
                </span>

                {/* Difficulty */}
                <span className="text-[10px] font-medium text-[#718096]">
                    {technology.difficulty}
                </span>

                {/* Rating */}
                <span className="flex items-center gap-1 text-[11px] font-semibold text-[#4b5563]">
                    <span className="text-[#fbbf24]">★</span>
                    {technology.rating}
                </span>
            </div>

            {/* Button */}
            <button
                onClick={() => onAdd(technology)}
                className={`mt-4 w-full rounded-lg py-2.5 text-[12px] font-medium text-white transition ${isAdded
                        ? "bg-[#22c55e]"
                        : "bg-[#080d1b] hover:bg-[#151b2b]"
                    }`}
            >
                {isAdded ? "✓ Added to Stack" : "Add to Stack"}
            </button>
        </div>
    );
};

export default TechnologyCard;