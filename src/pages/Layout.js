import React from "react";

import Header from "~/component/Header/Header";
import Footer from "~/component/Footer/Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Layout;
