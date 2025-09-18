import { FC, Fragment, useState, PropsWithChildren } from "react";
import { CSSProperties } from "@mui/styled-engine";
import DashboardHeader from "layouts/layout-parts/DashboardHeader";
import LayoutBodyWrapper from "layouts/layout-parts/LayoutBodyWrapper";
import { secondarySideBarGap, secondarySideBarWidth } from "../../constants";
import Layout2SideBar from "./Layout2SideBar";

const LayoutV2: FC<PropsWithChildren> = ({ children }) => {
  const [sideBarLocked, setSideBarLocked] = useState(true);
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);
  const [openSecondarySideBar, setOpenSecondarySideBar] = useState(true);

  const handleToggleSidebar = () => {
    setSideBarLocked((state) => !state);
    setOpenSecondarySideBar((state) => !state);
  };

  // dashboard body wrapper custom style
  const space = secondarySideBarWidth + secondarySideBarGap;
  const customStyle: CSSProperties = {
    marginLeft: openSecondarySideBar ? `${space}px` : "80px",
    width: `calc(100% - ${openSecondarySideBar ? `${space}px` : "80px"})`,
  };

  return (
    <Fragment>
      <Layout2SideBar
        sideBarLocked={sideBarLocked}
        showMobileSideBar={showMobileSideBar}
        openSecondarySideBar={openSecondarySideBar}
        setOpenSecondarySideBar={setOpenSecondarySideBar}
        closeMobileSideBar={() => setShowMobileSideBar(false)}
      />

      <LayoutBodyWrapper sx={customStyle}>
        <DashboardHeader
          setShowSideBar={handleToggleSidebar}
          setShowMobileSideBar={() => setShowMobileSideBar((state) => !state)}
        />

        {children}
      </LayoutBodyWrapper>
    </Fragment>
  );
};

export default LayoutV2;
