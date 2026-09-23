import type { Technology } from "./Types";

interface YourStackProps {
    selectedTechnologies: Technology[];
    onRemove: (id: Technology["id"]) => void;
    onRemoveAll: () => void;
}

const YourStack = ({
    selectedTechnologies,
    onRemove,
    onRemoveAll,
}: YourStackProps) => {
    const selectedCount = selectedTechnologies.length;

    return (
        <div className="w-full">
            <div className="w-full rounded-2xl border border-[#e8edf3] bg-white p-5 shadow-sm">

                {/* Header */}
                <div className="flex items-center justify-between gap-3">
                    <h2 className="text-[20px] font-bold leading-none text-[#111827]">
                        Your Stack
                    </h2>

                    {selectedCount > 0 && (
                        <span className="text-right text-[11px] font-medium text-[#64748b]">
                            {selectedCount}{" "}
                            {selectedCount === 1
                                ? "Technology"
                                : "Technologies"}{" "}
                            Selected
                        </span>
                    )}
                </div>

                {/* Empty State */}
                {selectedCount === 0 ? (
                    <>
                        <p className="mt-3 text-[13px] text-[#94a3b8]">
                            No technologies selected yet.
                        </p>

                        <div className="mt-5 flex h-[84px] items-center justify-center rounded-2xl border border-dashed border-[#dbe4ee]">
                            <p className="text-[13px] text-[#94a3b8]">
                                Your stack is empty.
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Selected Items */}
                        <div className="mt-5 flex flex-col gap-3">
                            {selectedTechnologies.map((technology) => (
                                <div
                                    key={technology.id}
                                    className="flex items-center gap-3 rounded-xl border border-[#e8edf3] bg-[#fafbfc] p-3"
                                >
                                    {/* Icon */}
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white">
                                        <img
                                            src={technology.icon}
                                            alt={technology.name}
                                            className="h-7 w-7 object-contain"
                                        />
                                    </div>

                                    {/* Name + Category */}
                                    <div className="min-w-0 flex-1">
                                        <h3 className="truncate text-[13px] font-bold text-[#111827]">
                                            {technology.name}
                                        </h3>

                                        <p className="mt-1 text-[10px] text-[#94a3b8]">
                                            {technology.category}
                                        </p>
                                    </div>

                                    {/* Remove */}
                                    <button
                                        onClick={() =>
                                            onRemove(technology.id)
                                        }
                                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[16px] font-medium text-[#94a3b8] transition hover:bg-[#fee2e2] hover:text-[#ef4444]"
                                        aria-label={`Remove ${technology.name}`}
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Remove All */}
                        <button
                            onClick={onRemoveAll}
                            className="mt-4 w-full rounded-lg border border-[#fee2e2] py-2.5 text-[12px] font-medium text-[#ef4444] transition hover:bg-[#fef2f2]"
                        >
                            Remove All
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default YourStack;