import TrainingDetail from "../Components/Client/Trainings/TrainingDetail";
import About from "../Pages/Client/About/About";
import Contact from "../Pages/Client/Contact/Contact";
import Home from "../Pages/Client/Home/Home";
import MainRoot from "../Pages/Client/MainRoot";
import NotFounds from "../Pages/Client/NotFounds/NotFounds";
import Trainers from "../Pages/Client/Trainers/Trainers";
import Trainings from "../Pages/Client/Trainings/Trainings";

export const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "trainings",
                element: <Trainings />
            },
            {
                path: "trainers",
                element: <Trainers />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path:"*",
                element:<NotFounds/>
              },
              {
                path:"trainings/:id",
                element:<TrainingDetail/>
              }
        ]
    }
]