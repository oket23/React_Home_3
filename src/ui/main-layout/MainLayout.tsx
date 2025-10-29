import type {ReactNode} from "react";

type LayoutProps = {
    children: ReactNode
}

const MainLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex flex-col p-15 md:p-20"}>
            {children}
        </div>
    );
};

export default MainLayout;