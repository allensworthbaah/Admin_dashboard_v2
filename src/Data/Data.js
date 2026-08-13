import {
    UilEstate,
    UilChart,
    UilSignOutAlt,
    UilSetting,
    UilUserPlus,
    UilCalendarAlt,
    UilInvoice,
    UilBars
} from '@iconscout/react-unicons';

import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard"
    },
    {
        icon: UilUserPlus,
        heading: "Enrollments"
    },
    {
        icon: UilCalendarAlt,
        heading: "Encounters"
    },
    {
        icon: UilInvoice,
        heading: 'Billings'
    },
    {
        icon: UilChart,
        heading: 'Analytics'
    },
    {
        icon: UilSetting,
        heading: 'Settings'
    }
];    


export { UilSignOutAlt, UilBars };

export const CardsData = [
    {
        id: 1,
        title: "Enrollments",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 90,
        value: "187",
        png: UilUserPlus,
        series: [
            {
                name: "Enrollments",
                data: [12, 35, 51, 44, 19, 15, 11],
            },
        ],
    },
    {
        id: 2,
        title: "Encounters",
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "380",
        png: UilInvoice,
        series: [
            {
                name: "Encounters",
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],
    },
    {
        id: 3,
        title: "Billing",
        color: {
            backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",   
            boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 98,
        value: "19,760",
        png: UilInvoice,
        series: [
            {
                name: "Billing",
                data: [520, 1300, 780, 153, 624, 780, 1040],
            },
        ],
    }
]

export const UpdatesData = [
    {
        id:1,
        img:img1,
        name: "Denise Okafor",
        noti: "completed client onboarding",
        time: "25 seconds ago",
    },
    {
        id:2,
        img:img2,
        name: "Marlena Smith",
        noti: "provided housing recommendations for client",
        time: "30 minutes ago",
    },
    {
        id:3,
        img:img3,
        name: "Frank Jones",
        noti: "helped client obtain state ID",
        time: "1 hour ago",
    },
];

