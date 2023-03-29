import { css } from "@emotion/react";
import { Outlet } from "react-router-dom"

const CommonLayout = () => {

  return (
    <div css={commonLayoutRoot}>
      <div css={commonLayoutMainContent}>
        <Outlet />
      </div>
    </div>
  )
};

export default CommonLayout;

export const commonLayoutRoot = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1024px;
  flex-direction: column;
`

export const commonLayoutMainContent = css`
  width: 1024px;
  background: #11a;
  min-height: 100vh;
  flex-grow: 1;
  display: flex;
`
