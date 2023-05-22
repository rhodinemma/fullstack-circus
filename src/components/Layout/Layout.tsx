import { FC, ReactNode } from "react"

interface LayoutProps {
    children: ReactNode
}

const Layout: FC<LayoutProps> = (props) => {
    const { children } = props;
    return <>
        <main className="min-h-screen">
            {children}
        </main>
    </>
}

export default Layout