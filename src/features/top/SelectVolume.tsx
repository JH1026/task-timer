import { css } from "@emotion/react";
import { useCallback, useState } from "react";

type VolumeType = 'small' | 'medium' | 'large';

const volumeSizeMap: Record<VolumeType, number> = {
  small: 0.1,
  medium: 0.5,
  large: 1.0,
}

type Props = {
  onChangeVolumeSize: (size: number) => void;
}

const SelectVolume = ({
  onChangeVolumeSize,
}: Props) => {
  const [volume, setVolume] = useState<VolumeType>('small');

  const changeVolume = useCallback((volume: VolumeType) => {
    setVolume(volume);
    onChangeVolumeSize(volumeSizeMap[volume]);
  }, [setVolume, onChangeVolumeSize]);

  return (
    <div css={volumes}>
      <div style={{ marginRight: '20px' }}>音量</div>
      <button
        css={volumeButton(volume === 'small')}
        onClick={() => changeVolume('small')}>小</button>
      <button
        css={volumeButton(volume === 'medium')}
        onClick={() => changeVolume('medium')}
      >中</button>
      <button
        css={volumeButton(volume === 'large')}
        onClick={() => changeVolume('large')}
      >大</button>
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