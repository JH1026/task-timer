import { css } from "@emotion/react";

const SelectVolume = () => {

  return (
    <div css={volumes}>
      <div style={{ marginRight: '20px' }}>音量</div>
      <button css={volumeButton(true)}>小</button>
      <button css={volumeButton()}>中</button>
      <button css={volumeButton()}>大</button>
    </div>
  );
};

export default SelectVolume;

const volumes = css`
  display: flex;
  justify-content: center;
`

const volumeButton = (selected?: boolean) => css`
  width: 80px;
  color: ${selected ? '#090' : ''};
  font-weight: ${selected ? 'bold' : ''};
`