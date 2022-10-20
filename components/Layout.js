import { Children } from "react";
import Header from "../components/Header"

export default function Layout({children}) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}