import { FC, ReactNode } from "react"
import Header from "../Header/Header";

interface LayoutProps {
    children: ReactNode
}

const Layout: FC<LayoutProps> = (props) => {
    const { children } = props;
    return <>
        <Header />
        <main className="bg-primary-gradient min-h-screen">
            {children}
        </main>
    </>
}

export default Layout