"use client";
import React from "react";
import { cn } from "../../utils/cn";

export const ButtonsCard = ({
    children,
    className,
    onClick,
}: {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}) => {
    return (
        <div onClick={onClick}>

            <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2 bg-white rounded-[6px]  relative group transition duration-200 text-black font-semibold hover:bg-transparent">
                    Generar CP random
                </div>
            </button>

        </div>
    );
};
