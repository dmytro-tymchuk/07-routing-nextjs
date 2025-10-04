

interface LayoutProps{
    children: React.ReactNode,
    sidebar: React.ReactNode
}

const Layout = ({children, sidebar}: LayoutProps) => {
    return (
        <div>
            {sidebar}
            {children}
    </div>
)
}

export default Layout