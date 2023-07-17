import Sidebar from "@/components/molecules/sidebar";
import "./globals.css";
import { Providers } from "@/redux/provider";
import React from "react";

type RootLayoutProps = {
    children: React.ReactNode;
};

export const metadata = {
    title: "Product Page",
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body className="flex flex-row">
                <Providers>
                    <Sidebar></Sidebar>
                    <main className="p-2 lg:p-12 w-full overflow-auto">
                        {children}
                    </main>
                </Providers>
            </body>
        </html>
    );
};

export default RootLayout;
