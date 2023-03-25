import { css } from '@emotion/react';
import SelectTasks from "./SelectTasks";
import SelectTimes from "./SelectTimes";
import SelectVolume from "./SelectVolume";
import Timer from "./Timer"

const TopContainer = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: '1' }}>
      <div css={upSide}>
        <Timer />
        <SelectVolume />
      </div>
      <div style={{ display: 'flex', flexGrow: 1, }}>
        <div css={leftSide}>
          <div style={{ flexGrow: 1, borderRight: '1px solid #fff' }}>
            <SelectTasks />
          </div>
        </div>
        <div css={rightSide}>
          <SelectTimes />
        </div>
      </div>
    </div>
  );
};

const upSide = css`
  height: 200px;
  border-bottom: 1px solid #fff;
  flex-grow: 0;
`

const leftSide = css`
  width: 200px;
  display: flex;
  flex-direction: column;
`

const rightSide = css`
  
`

export default TopContainer;