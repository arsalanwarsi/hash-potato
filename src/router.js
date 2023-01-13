import React from "react";

import { Icon } from "@chakra-ui/react";
import {
    MdHome,
    MdOutlineShoppingCart,
} from "react-icons/md";

import {
    BsHandbagFill
} from "react-icons/bs";

import {
    RxPerson
} from "react-icons/rx";

const routes = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    },
    {
        name: "Promotions",
        path: "/promotion",
        icon: <Icon as={BsHandbagFill} width='20px' height='20px' color='inherit' />
    },
    {
        name: "Vendors",
        path: "/vendor",
        icon: <Icon as={MdOutlineShoppingCart} width='20px' height='20px' color='inherit' />
    },
    {
        name: "Customer",
        path: "/customer",
        icon: <Icon as={RxPerson} width='20px' height='20px' color='inherit' />
    },
];

export default routes;
