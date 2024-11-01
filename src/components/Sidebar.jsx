// src/components/Sidebar.jsx
import React from "react";

export default function Sidebar() {
    return (
        <aside className="fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 p-8">
            {/* Logo */}
            <div className="flex items-center mb-12">
                <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8 me-2" />
                <span className="text-2xl font-semibold dark:text-white">AVATECH</span>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-6 pt-6">
                <div>
                    <a href="#" className="flex items-center px-4 py-3 text-gray-900 rounded-lg dark:text-white dark:bg-gray-700 bg-gray-200 font-semibold">
                        <svg className="w-6 h-6 me-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 20l-7-6h4V6h6v8h4l-7 6zM3 4h14V2H3v2z"/>
                        </svg>
                        <span>Home</span>
                    </a>
                </div>
                
                {/* Other links */}
                <div className="space-y-6">
                    <a href="#" className="flex items-center px-4 py-3 text-gray-700 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg className="w-6 h-6 me-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3h14a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2z"/>
                        </svg>
                        <span>Analytics</span>
                    </a>
                    <a href="#" className="flex items-center px-4 py-3 text-gray-700 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg className="w-6 h-6 me-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2a8 8 0 108 8 8 8 0 00-8-8zm1 10H9v-2h2zm0-4H9V5h2z"/>
                        </svg>
                        <span>Explore</span>
                    </a>
                    <a href="#" className="flex items-center px-4 py-3 text-gray-700 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg className="w-6 h-6 me-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 3h10a1 1 0 011 1v1H4V4a1 1 0 011-1zM4 7v6a2 2 0 002 2h8a2 2 0 002-2V7H4z"/>
                        </svg>
                        <span>Chat</span>
                    </a>
                </div>
                
                {/* Section Divider */}
                <div className="mt-12 mb-6 pt-16">
                    <span className="text-gray-500 uppercase text-sm font-semibold dark:text-gray-400">Tools</span>
                </div>
                
                {/* Tools Links */}
                <div className="space-y-6">
                    <a href="#" className="flex items-center px-4 py-3 text-gray-700 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg className="w-6 h-6 me-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.707 5.293a1 1 0 00-1.414 1.414L10.586 9H4a1 1 0 000 2h6.586l-2.293 2.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4z"/>
                        </svg>
                        <span>Settings</span>
                    </a>
                    <a href="#" className="flex items-center px-4 py-3 text-gray-700 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg className="w-6 h-6 me-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v1H4V4zm0 3h12v5H4V7zm0 6v1a2 2 0 002 2h8a2 2 0 002-2v-1H4z"/>
                        </svg>
                        <span>Help</span>
                    </a>
                    <a href="#" className="flex items-center px-4 py-3 text-gray-700 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg className="w-6 h-6 me-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 7a2 2 0 10-4 0 2 2 0 004 0zm10 0a2 2 0 10-4 0 2 2 0 004 0zm-5 8c-2.667 0-8 1.333-8 4v1h16v-1c0-2.667-5.333-4-8-4z"/>
                        </svg>
                        <span>Manage user</span>
                    </a>
                </div>
            </nav>
        </aside>
    );
}
