import { useState } from "preact/hooks";

export type ExperienceProject = {
    name: string;
    points: string[];
};

type Props = {
    projects: ExperienceProject[];
};

const ExperienceProjects = ({ projects }: Props) => {
    if (!projects || projects.length === 0) return null;

    const [activeIndex, setActiveIndex] = useState(0);
    const current = projects[activeIndex];

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="Fade_Up w-full bg-backgroundLite border border-primaryLiteAlt rounded-md p-4 flex flex-col gap-3 shadow-sm">
            <div className="flex justify-between items-center gap-3">
                <h4 className="font-ubuntu text-[1em] font-semibold truncate">{current.name}</h4>
                {projects.length > 1 && (
                    <div className="flex items-center gap-2 text-[0.75em] whitespace-nowrap">
                        <button
                            type="button"
                            onClick={handlePrev}
                            className="px-2 py-1 rounded-md bg-background hover:bg-backgroundLite border border-primaryLiteAlt"
                        >
                            Prev
                        </button>
                        <span>
                            {activeIndex + 1}/{projects.length}
                        </span>
                        <button
                            type="button"
                            onClick={handleNext}
                            className="px-2 py-1 rounded-md bg-background hover:bg-backgroundLite border border-primaryLiteAlt"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>

            {current.points && current.points.length > 0 && (
                <ul className="list-disc list-inside space-y-1 text-[0.9em] text-justify">
                    {current.points.map((pt) => (
                        <li>{pt}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ExperienceProjects;
