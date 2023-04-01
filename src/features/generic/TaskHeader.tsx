import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const TaskHeader = () => {
  const navigate = useNavigate();

  return (
    <header style={{
      display: 'block'
    }}>
      <ul css={headerContainer}>
        <li onClick={() => navigate('/task-timer')}>
          Top
        </li>
        <li onClick={() => navigate('/task-config')}>
          タスク作成
        </li>
        <li onClick={() => navigate('/task-record')}>
          タスク実績
        </li>
        <li onClick={() => navigate('/task-stats')}>
          タスク統計
        </li>
      </ul>
    </header>
  )
};

export default TaskHeader;


const headerContainer = css`
  display: flex;
  background: #069;
  margin: 0px;

  li {
    display: block;
    width: 125px;
    cursor: pointer;
    padding: 4px;

    :hover {
      opacity: 0.7;
    }
  }
`