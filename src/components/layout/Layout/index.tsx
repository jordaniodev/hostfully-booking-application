import { Footer } from "../Footer"
import { Header } from "../Header"
import { Newsletter } from "../Newsletter"
import { LayoutProps } from "./Layout.types"

export const Layout = ({children}: LayoutProps) =>{
    return <>
        <Header />
            {children}
        <Newsletter />
        <Footer />
    </>
}