import { FC, ReactElement } from 'react';
import {
  SpinnerContainer,
  SpinnerIcon,
  SpinnerOverlay,
} from './spinner.styles';

interface ISpinner {
  height?: string;
  size?: string;
}

const Spinner: FC<ISpinner> = ({
  height = '50vh',
  size = '60px',
}): ReactElement => {
  return (
    <SpinnerOverlay $height={height}>
      <SpinnerContainer $size={size}>
        <SpinnerIcon />
      </SpinnerContainer>
    </SpinnerOverlay>
  );
};

export default Spinner;
