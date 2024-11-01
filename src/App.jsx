// App.js
import React from "react";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";

export default function App() {
    return (
        <div className="min-h-screen max-h-full bg-sky-950 flex">
            <Navbar />
            <Sidebar />
            <div className="p-4 sm:ml-64 w-full">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">Testing</p>
                        </div>
                        {/* Outros elementos do layout principal */}
                    </div>
                </div>
            </div>
        </div>
    );
}
