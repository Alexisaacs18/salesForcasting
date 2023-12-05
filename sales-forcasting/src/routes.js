// routes.js
import App from "./App";
import PipelineContainer from "./Components/PipelineContainer";
import RepPage from "./Components/RepPage";
import StagePage from "./Components/StagePage";
import Deal from "./Components/Deal";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <PipelineContainer />
            },
            {
                path: "/deal/:id",
                element: <Deal />,
            },
            {
                path: "/reps",
                element: <RepPage />,
            },
            {
                path: "/stages",
                element: <StagePage />,
            },
        ],
    },
];

export default routes;
