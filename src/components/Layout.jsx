// import React, { useState } from "react";

// import { Portal, Box, useDisclosure } from "@chakra-ui/react";
// // import Navbar from "./navbar/NavbarAdmin";
// // import Sidebar from "./sidebar/Sidebar";
// // import { SidebarContext } from "../contexts/SidebarContext";
// import { Navigate, Outlet } from "react-router-dom";
// import routes from "../router";

// export default function Dashboard(props) {
//   const { ...rest } = props;
//   const [fixed] = useState(false);
//   const [toggleSidebar, setToggleSidebar] = useState(false);
//   const { onOpen } = useDisclosure();

//   return (
//     <Box>
//       <SidebarContext.Provider
//         value={{
//           toggleSidebar,
//           setToggleSidebar,
//         }}
//       >
//         <Sidebar routes={routes} display="none" {...rest} />
//         <Box
//           float="right"
//           minHeight="100vh"
//           height="100%"
//           overflow="auto"
//           position="relative"
//           maxHeight="100%"
//           w={{ md: "100%", xl: "calc( 100% - 245px )" }}
//           maxWidth={{ base: "100%", xl: "calc( 100% - 245px )" }}
//           transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
//           transitionDuration=".2s, .2s, .35s"
//           transitionProperty="top, bottom, width"
//           transitionTimingFunction="linear, linear, ease"
//         >
//           <Portal>
//             <Box>
//               <Navbar onOpen={onOpen} fixed={fixed} {...rest} />
//             </Box>
//           </Portal>
//           <Box
//             mx="25px"
//             mt={{
//               base: "10%",
//               md: "3%",
//             }}
//             transition="all 1s ease"
//           >
//             <Outlet />
//           </Box>
//         </Box>
//       </SidebarContext.Provider>
//     </Box>
//   );
// }
