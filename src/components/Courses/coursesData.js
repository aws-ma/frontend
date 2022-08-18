import { FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
export const coursesData = [
    {
        primaryColor: "#d4573b",
        secondaryColor: "#c87360",
        title: "HTML",
        description:
            "HTML is the standard markup language for Web pages. With HTML you can create your own Website. ",
        date: "22-2-2022",
        icon: <IoLogoHtml5 />,
    },
    {
        primaryColor: "#016cb4",
        secondaryColor: "#87bbfe",
        title: "CSS",
        description:
            "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.",
        date: "22-2-2022",
        icon: <IoLogoCss3 />,
    },
    {
        primaryColor: "#efd81d",
        secondaryColor: "#fff229c2",
        title: "JavaScript",
        description:
            "JavaScript is the programming language of the Web. This tutorial will teach you JavaScript from basic to advanced.",
        date: "22-2-2022",
        icon: <IoLogoJavascript />,
    },
    {
        primaryColor: "#5ed3f3",
        secondaryColor: "#7ee3ff",
        title: "React JS",
        description:
            "React is a JavaScript library for building user interfaces. React is used to build single-page applications.",
        date: "22-2-2022",
        icon: <FaReact />,
    },
];
