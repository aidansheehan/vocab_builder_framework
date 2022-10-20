import { BrowserRouter, Route, Routes }     from "react-router-dom";
import HomePage                             from "./pages/home.page";
import Layout                               from "./pages/layout";
import MyCollectionsPage                    from "./pages/my-collections.page";
import UpdateCollectionPage                 from "./pages/update-collection.page";
import { createRoot }                       from 'react-dom/client';

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="my-collections" element={<MyCollectionsPage />} />
                    <Route path="update-collection" element={<UpdateCollectionPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

const root = createRoot(document.getElementById("root")!)
root.render(<App />);