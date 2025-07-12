import React, { useState } from "react";
import DashboardLayout from "../components/Layout/DashboardLayout";

const classSections = [6, 7, 8];
const subjects = ["Physics", "Chemistry", "Biology"];

const learningContent: Record<number, { name: string; videoUrl: string }[]> = {
    6: [
        { name: "Fractions Basics", videoUrl: "https://www.youtube.com/embed/0JYgnhnZFcE" },
        { name: "Decimals Introduction", videoUrl: "https://www.youtube.com/embed/9r3pQmLwG6g" },
    ],
    7: [
        { name: "Algebra Foundations", videoUrl: "https://www.youtube.com/embed/4JXyJ5yqQpE" },
        { name: "Geometry Basics", videoUrl: "https://www.youtube.com/embed/3J9Zl4A2Q1g" },
    ],
    8: [
        { name: "Linear Equations", videoUrl: "https://www.youtube.com/embed/2v3R3bYdQdA" },
        { name: "Mensuration", videoUrl: "https://www.youtube.com/embed/1F5vQwz5y6g" },
    ],
};

const simulationContent: Record<number, { name: string; url: string; subject: string }[]> = {
    6: [
        { name: "PhET Physics Simulations", url: "https://phet.colorado.edu/en/simulations/category/physics", subject: "Physics" },
        { name: "PhET Chemistry Simulations", url: "https://phet.colorado.edu/en/simulations/category/chemistry", subject: "Chemistry" },
        { name: "BioMan Biology Games", url: "https://www.biomanbio.com/", subject: "Biology" },
    ],
    7: [
        { name: "Physics Games", url: "https://www.physicsgames.net/", subject: "Physics" },
        { name: "Periodic Table Game", url: "https://www.funbrain.com/games/periodic-table", subject: "Chemistry" },
        { name: "Science Kids Biology Games", url: "https://www.sciencekids.co.nz/gamesactivities/life.html", subject: "Biology" },
    ],
    8: [
        { name: "PhET Physics Simulations", url: "https://phet.colorado.edu/en/simulations/category/physics", subject: "Physics" },
        { name: "PhET Chemistry Simulations", url: "https://phet.colorado.edu/en/simulations/category/chemistry", subject: "Chemistry" },
        { name: "BioMan Biology Games", url: "https://www.biomanbio.com/", subject: "Biology" },
    ],
};

const gameContent: Record<number, { name: string; url: string; subject: string }[]> = {
    6: [
        // Physics
        { name: "Light Reflection", url: "https://scichamp.com/Physics%20games/Light%20reflection%203x/", subject: "Physics" },
        { name: "Sound", url: "https://scichamp.com/Physics%20games/sound2xc/", subject: "Physics" },
        { name: "Motion", url: "https://scichamp.com/Physics%20games/Motion%202xb/", subject: "Physics" },
        // Chemistry
        { name: "Acids, Bases and Salts", url: "https://scichamp.com/Chemistry%20games/acids%20bases%20and%20salts%202x/", subject: "Chemistry" },
        { name: "Ions and Ionic Compounds", url: "https://scichamp.com/Chemistry%20games/ions%20and%20ionic%20compounds/", subject: "Chemistry" },
        { name: "Metals and Non-metals", url: "https://scichamp.com/metals-and-non-metals-game/", subject: "Chemistry" },
        // Biology
        { name: "Digestive System", url: "https://scichamp.com/digestive-system-game/", subject: "Biology" },
        { name: "Photosynthesis and Plant Respiration", url: "https://scichamp.com/photosynthesis-and-plant-respiration-game/", subject: "Biology" },
        { name: "Excretory System", url: "https://scichamp.com/excretory-system-game", subject: "Biology" },
    ],
    7: [
        // Physics
        { name: "Light Reflection", url: "https://scichamp.com/Physics%20games/Light%20reflection%203x/", subject: "Physics" },
        { name: "Sound", url: "https://scichamp.com/Physics%20games/sound2xc/", subject: "Physics" },
        { name: "Motion", url: "https://scichamp.com/Physics%20games/Motion%202xb/", subject: "Physics" },
        // Chemistry
        { name: "Acids, Bases and Salts", url: "https://scichamp.com/Chemistry%20games/acids%20bases%20and%20salts%202x/", subject: "Chemistry" },
        { name: "Ions and Ionic Compounds", url: "https://scichamp.com/Chemistry%20games/ions%20and%20ionic%20compounds/", subject: "Chemistry" },
        { name: "Metals and Non-metals", url: "https://scichamp.com/metals-and-non-metals-game/", subject: "Chemistry" },
        // Biology
        { name: "Digestive System", url: "https://scichamp.com/digestive-system-game/", subject: "Biology" },
        { name: "Photosynthesis and Plant Respiration", url: "https://scichamp.com/photosynthesis-and-plant-respiration-game/", subject: "Biology" },
        { name: "Excretory System", url: "https://scichamp.com/excretory-system-game", subject: "Biology" },
    ],
    8: [
        // Physics
        { name: "Light Reflection", url: "https://scichamp.com/Physics%20games/Light%20reflection%203x/", subject: "Physics" },
        { name: "Sound", url: "https://scichamp.com/Physics%20games/sound2xc/", subject: "Physics" },
        { name: "Motion", url: "https://scichamp.com/Physics%20games/Motion%202xb/", subject: "Physics" },
        // Chemistry
        { name: "Acids, Bases and Salts", url: "https://scichamp.com/Chemistry%20games/acids%20bases%20and%20salts%202x/", subject: "Chemistry" },
        { name: "Ions and Ionic Compounds", url: "https://scichamp.com/Chemistry%20games/ions%20and%20ionic%20compounds/", subject: "Chemistry" },
        { name: "Metals and Non-metals", url: "https://scichamp.com/metals-and-non-metals-game/", subject: "Chemistry" },
        // Biology
        { name: "Digestive System", url: "https://scichamp.com/digestive-system-game/", subject: "Biology" },
        { name: "Photosynthesis and Plant Respiration", url: "https://scichamp.com/photosynthesis-and-plant-respiration-game/", subject: "Biology" },
        { name: "Excretory System", url: "https://scichamp.com/excretory-system-game", subject: "Biology" },
    ],
};

const SectionCard: React.FC<{
    color: string;
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}> = ({ color, icon, title, children }) => (
    <section className={`rounded-2xl shadow-lg border border-${color}-100 bg-${color}-50/30 px-6 py-6 mb-10`}>
        <div className="flex items-center gap-3 mb-4">
            <div className={`rounded-full p-3 bg-${color}-100 text-${color}-600 shadow`}>
                {icon}
            </div>
            <h3 className={`text-2xl font-bold text-${color}-800 tracking-tight`}>{title}</h3>
        </div>
        <hr className={`border-t-2 border-${color}-200 mb-6`} />
        {children}
    </section>
);

const Accordion: React.FC<{
    openClass: number | null;
    setOpenClass: (cls: number | null) => void;
    color: string;
    items: { [cls: number]: any[] };
    renderItem: (item: any, idx: number, cls: number) => React.ReactNode;
    iconColor: string;
}> = ({ openClass, setOpenClass, color, items, renderItem, iconColor }) => (
    <div className="space-y-4">
        {classSections.map((cls) => (
            <div key={cls} className="bg-white rounded-xl shadow border border-gray-100 transition">
                <button
                    className={`w-full flex justify-between items-center px-6 py-4 text-lg font-semibold transition-colors rounded-t-xl focus:outline-none ${
                        openClass === cls
                            ? `bg-${color}-100/60 text-${color}-800`
                            : "bg-white text-gray-800 hover:bg-gray-50"
                    }`}
                    onClick={() => setOpenClass(openClass === cls ? null : cls)}
                    aria-expanded={openClass === cls}
                    aria-controls={`content-${color}-${cls}`}
                >
                    <span>Class {cls}</span>
                    <span
                        className={`transform transition-transform duration-300 ${openClass === cls ? "rotate-90" : ""} text-${iconColor}-500`}
                    >
                        ▶
                    </span>
                </button>
                {openClass === cls && (
                    <div
                        id={`content-${color}-${cls}`}
                        className="px-6 pb-6 pt-2 animate-fade-in"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {items[cls].map((item, idx) => renderItem(item, idx, cls))}
                        </div>
                    </div>
                )}
            </div>
        ))}
    </div>
);

const Modal: React.FC<{
    open: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}> = ({ open, onClose, title, children }) =>
    !open ? null : (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm transition-all">
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-2xl w-full relative animate-fade-in">
                <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-800 text-3xl font-bold"
                    onClick={onClose}
                    aria-label="Close"
                >
                    ×
                </button>
                <div className="font-bold text-xl mb-4 text-gray-800">{title}</div>
                <div className="aspect-video rounded-lg overflow-hidden">{children}</div>
            </div>
        </div>
    );

const VolunteerResources: React.FC = () => {
    const userName = localStorage.getItem("userName") || "Ms. Sharma";
    const [openClass, setOpenClass] = useState<number | null>(null);
    const [expandedVideo, setExpandedVideo] = useState<{ cls: number; idx: number } | null>(null);

    const [openSimClass, setOpenSimClass] = useState<number | null>(null);
    const [expandedSim, setExpandedSim] = useState<{ cls: number; idx: number } | null>(null);

    const [openGameClass, setOpenGameClass] = useState<number | null>(null);
    const [expandedGame, setExpandedGame] = useState<{ cls: number; idx: number } | null>(null);

    return (
        <DashboardLayout role="volunteer" userName={userName}>
            <div className="p-6 max-w-4xl mx-auto space-y-12">
                <h2 className="text-4xl font-extrabold mb-10 text-center text-blue-900 tracking-tight drop-shadow">
                    Volunteer Resources
                </h2>

                {/* Learning Section */}
                <SectionCard
                    color="blue"
                    icon={
                        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={2}>
                            <rect x="4" y="4" width="16" height="16" rx="3" />
                            <path d="M8 8h8M8 12h8M8 16h4" />
                        </svg>
                    }
                    title="Learning"
                >
                    <Accordion
                        openClass={openClass}
                        setOpenClass={(cls) => {
                            setOpenClass(cls);
                            setExpandedVideo(null);
                        }}
                        color="blue"
                        iconColor="blue"
                        items={learningContent}
                        renderItem={(content, idx, cls) => (
                            <div
                                key={idx}
                                className="border rounded-xl p-4 bg-blue-50 flex flex-col cursor-pointer hover:shadow-xl transition group hover:bg-blue-100/60"
                                onClick={() => setExpandedVideo({ cls, idx })}
                                title="Click to expand video"
                            >
                                <div className="font-semibold mb-2 flex items-center gap-2 text-blue-900">
                                    <span className="group-hover:text-blue-700">{content.name}</span>
                                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2} className="text-blue-400 group-hover:text-blue-700"><circle cx="9" cy="9" r="8" /><path d="M7 6l5 3-5 3V6z" /></svg>
                                </div>
                                <div className="aspect-video mb-2 pointer-events-none rounded-xl overflow-hidden shadow-lg border-2 border-blue-200 group-hover:border-blue-400 transition-all" style={{ minHeight: 220 }}>
                                    <iframe
                                        width="100%"
                                        height="220"
                                        src={content.videoUrl}
                                        title={content.name}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="rounded-xl"
                                        style={{ background: "#e0e7ff" }}
                                    ></iframe>
                                </div>
                            </div>
                        )}
                    />
                </SectionCard>

                <Modal
                    open={!!expandedVideo}
                    onClose={() => setExpandedVideo(null)}
                    title={
                        expandedVideo
                            ? learningContent[expandedVideo.cls][expandedVideo.idx].name
                            : ""
                    }
                >
                    {expandedVideo && (
                        <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-blue-200 bg-blue-50 p-2 flex flex-col items-center w-full">
                            <iframe
                                width="100%"
                                height="900"
                                src={learningContent[expandedVideo.cls][expandedVideo.idx].videoUrl}
                                title={learningContent[expandedVideo.cls][expandedVideo.idx].name}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-xl"
                                style={{ background: "#e0e7ff", minHeight: 600 }}
                            ></iframe>
                        </div>
                    )}
                </Modal>

                {/* Simulation Section */}
                <SectionCard
                    color="green"
                    icon={
                        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={2}>
                            <circle cx="12" cy="12" r="10" />
                            <path d="M8 12h8M12 8v8" />
                        </svg>
                    }
                    title="Simulation"
                >
                    <Accordion
                        openClass={openSimClass}
                        setOpenClass={(cls) => {
                            setOpenSimClass(cls);
                            setExpandedSim(null);
                        }}
                        color="green"
                        iconColor="green"
                        items={simulationContent}
                        renderItem={(sim, idx, cls) => (
                            <div
                                key={idx}
                                className="border rounded-xl p-4 bg-green-50 flex flex-col cursor-pointer hover:shadow-xl transition group hover:bg-green-100/60"
                                onClick={() => setExpandedSim({ cls, idx })}
                                title="Click to expand simulation"
                            >
                                <div className="font-semibold mb-1 flex items-center gap-2 text-green-900">
                                    <span className="group-hover:text-green-700">{sim.name}</span>
                                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2} className="text-green-400 group-hover:text-green-700"><circle cx="9" cy="9" r="8" /><path d="M7 6l5 3-5 3V6z" /></svg>
                                </div>
                                <div className="text-xs text-gray-600 mb-2">{sim.subject}</div>
                                <div className="mb-2 pointer-events-none rounded-lg overflow-hidden shadow">
                                    <iframe
                                        src={sim.url}
                                        title={sim.name}
                                        width="100%"
                                        height="120"
                                        frameBorder="0"
                                        className="rounded"
                                    ></iframe>
                                </div>
                            </div>
                        )}
                    />
                </SectionCard>

                <Modal
                    open={!!expandedSim}
                    onClose={() => setExpandedSim(null)}
                    title={
                        expandedSim
                            ? simulationContent[expandedSim.cls][expandedSim.idx].name
                            : ""
                    }
                >
                    {expandedSim && (
                        <iframe
                            width="100%"
                            height="400"
                            src={simulationContent[expandedSim.cls][expandedSim.idx].url}
                            title={simulationContent[expandedSim.cls][expandedSim.idx].name}
                            frameBorder="0"
                            allowFullScreen
                            className="rounded"
                        ></iframe>
                    )}
                </Modal>

                {/* Game Section */}
                <SectionCard
                    color="yellow"
                    icon={
                        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={2}>
                            <rect x="4" y="4" width="16" height="16" rx="3" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                    }
                    title="Games"
                >
                    <Accordion
                        openClass={openGameClass}
                        setOpenClass={(cls) => {
                            setOpenGameClass(cls);
                            setExpandedGame(null);
                        }}
                        color="yellow"
                        iconColor="yellow"
                        items={gameContent}
                        renderItem={(game, idx, cls) => (
                            <div
                                key={idx}
                                className="border rounded-xl p-4 bg-yellow-50 flex flex-col cursor-pointer hover:shadow-xl transition group hover:bg-yellow-100/60"
                                onClick={() => setExpandedGame({ cls, idx })}
                                title="Click to expand game"
                            >
                                <div className="font-semibold mb-1 flex items-center gap-2 text-yellow-900">
                                    <span className="group-hover:text-yellow-700">{game.name}</span>
                                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2} className="text-yellow-400 group-hover:text-yellow-700"><circle cx="9" cy="9" r="8" /><path d="M7 6l5 3-5 3V6z" /></svg>
                                </div>
                                <div className="text-xs text-gray-600 mb-2">{game.subject}</div>
                                <div className="mb-2 pointer-events-none rounded-xl overflow-hidden shadow-lg border-2 border-yellow-200 group-hover:border-yellow-400 transition-all" style={{ minHeight: 220 }}>
                                    <iframe
                                        src={game.url}
                                        title={game.name}
                                        width="100%"
                                        height="220"
                                        frameBorder="0"
                                        className="rounded-xl"
                                        style={{ background: "#fef9c3" }}
                                    ></iframe>
                                </div>
                            </div>
                        )}
                    />
                </SectionCard>

                <Modal
                    open={!!expandedGame}
                    onClose={() => setExpandedGame(null)}
                    title={
                        expandedGame
                            ? gameContent[expandedGame.cls][expandedGame.idx].name
                            : ""
                    }
                >
                    {expandedGame && (
                        <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-yellow-200 bg-yellow-50 p-2 flex flex-col items-center w-full">
                            <iframe
                                width="100%"
                                height="900"
                                src={gameContent[expandedGame.cls][expandedGame.idx].url}
                                title={gameContent[expandedGame.cls][expandedGame.idx].name}
                                frameBorder="0"
                                allowFullScreen
                                className="rounded-xl"
                                style={{ background: "#fef9c3", minHeight: 600 }}
                            ></iframe>
                        </div>
                    )}
                </Modal>
            </div>
        </DashboardLayout>
    );
};

export default VolunteerResources;
