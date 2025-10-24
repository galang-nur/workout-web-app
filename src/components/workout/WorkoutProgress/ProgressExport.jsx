// components/workout/WorkoutProgress/ProgressExport.jsx
import { useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import Papa from "papaparse";
import { useWorkoutStore } from "../../../store/workoutStore";

export default function ProgressExport() {
    const [open, setOpen] = useState(false);
    const { workoutHistory } = useWorkoutStore(); // ambil dari Zustand

    const exportCSV = () => {
        if (!workoutHistory || workoutHistory.length === 0)
        return alert("No progress data to export.");

        const csv = Papa.unparse(workoutHistory);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "workout_progress.csv";
        link.click();
    };

    const exportPDF = () => {
    if (!workoutHistory || workoutHistory.length === 0)
        return alert("No progress data to export.");

    const doc = new jsPDF();
    doc.text("Workout Progress Report", 14, 16);

    const tableData = workoutHistory.map((item) => [
        item.id,
        item.workoutName,
        `${item.duration}s`,
        item.completedExercises,
        new Date(item.date).toLocaleString("id-ID"),
    ]);

    autoTable(doc, {
        head: [["ID", "Workout Name", "Duration", "Total Exercises", "Date"]],
        body: tableData,
        startY: 25,
        styles: {
        fontSize: 10,
        cellPadding: 3,
        },
        headStyles: {
        fillColor: [16, 185, 129], // emerald-500
        textColor: 255,
        },
    });

    doc.save("workout_progress.pdf");
    };


    return (
        <div className="relative inline-block text-left">
        <button
            onClick={() => setOpen(!open)}
            className="px-3 py-2 text-sm font-medium bg-emerald-500 hover:bg-emerald-600 text-white rounded-md shadow transition-all"
        >
            Export ▼
        </button>

        {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-md z-20">
            <button
                onClick={() => {
                exportCSV();
                setOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            >
                Export as CSV
            </button>
            <button
                onClick={() => {
                exportPDF();
                setOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            >
                Export as PDF
            </button>
            </div>
        )}
        </div>
    );
}
