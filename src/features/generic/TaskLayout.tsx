import { css } from "@emotion/react";
import { Outlet } from "react-router-dom"
import { commonLayoutMainContent, commonLayoutRoot } from "./CommonLayout";
import TaskHeader from "./TaskHeader";

const CommonLayout = () => {

  return (
    <div css={commonLayoutRoot}>
      <div 
        css={commonLayoutMainContent}
        style={{ flexDirection: 'column' }}
      >
        <TaskHeader />
        <Outlet />
      </div>
    </div>
  )
};

export default CommonLayout;
