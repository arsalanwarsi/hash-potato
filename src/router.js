import dashboardPng from "./assets/pics/dashboard.png";
import analyticsPng from "./assets/pics/analytics.png";
import stakePng from "./assets/pics/stake.png";
import bondPng from "./assets/pics/bond.png";
import buyPng from "./assets/pics/buy.png";
import chatPng from "./assets/pics/chart.png";
import docPng from "./assets/pics/doc.png";

const routes = [
    {
        name: "Dashboard",
        path: "/",
        icon: dashboardPng
    },
    {
        name: "Analytics",
        path: "/",
        icon: analyticsPng
    },
    {
        name: "Stake",
        path: "/",
        icon: stakePng
    },
    {
        name: "Bond",
        path: "/",
        icon: bondPng
    },
    {
        name: "Buy PASS",
        path: "/",
        icon: buyPng
    },
    {
        name: "Price Chart",
        path: "/",
        icon: chatPng
    },
    {
        name: "Documentation",
        path: "/",
        icon: docPng
    },
];

export default routes;
