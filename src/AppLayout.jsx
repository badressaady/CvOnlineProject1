import { Header } from "./components/navbar/header";
import { Footer } from "./components/navbar/footer";
import React from "react";
import { Outlet } from "react-router-dom";

export function AppLayout() {  
    return (
        <div> 
            <Header className="h-min-screen flex-col flex "/>
            
            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />

        </div>
    );
}