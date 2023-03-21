import { css } from '@emotion/react';
import SelectTasks from "./SelectTasks";
import SelectTimes from "./SelectTimes";
import SelectVolume from "./SelectVolume";
import Timer from "./Timer"

const TopContainer = () => {

  return (
    <>
      <div css={upSide}>
        <Timer />
        <SelectVolume />
      </div>
      <div>
        <SelectTasks />
        <SelectTimes />
      </div>
    </>
  );
};

const upSide = css`
  height: 200px;
  border-bottom: 1px solid #fff;
`

export default TopContainer;