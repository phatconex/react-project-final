import Layout from "./pages/Layout";
import { Routes, Route } from "react-router-dom";
import listRoutes from "./router/Routes";
function App() {
    return (
        <>
            <Routes>
                {listRoutes.map((route) => {
                    const Page = route.component;
                    return (
                        <Route
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        ></Route>
                    );
                })}
                <Route path="*" element="404 PAGE"></Route>
            </Routes>
        </>
    );
}

export default App;
