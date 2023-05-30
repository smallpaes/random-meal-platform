import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import Button, { ButtonTypes } from '../../components/button/button.component';

import {
  NotFoundContainer,
  NotFoundContent,
  NotFoundTitle,
  NotFoundSubtitle,
  NotFoundImage,
} from './not-found.styles';

const NotFound: FC = (): ReactElement => {
  const navigate = useNavigate();
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <NotFoundImage />
        <NotFoundTitle>Nothing to order here... </NotFoundTitle>
        <NotFoundSubtitle>Let go explore something delicious.</NotFoundSubtitle>
        <Button
          buttonType={ButtonTypes.SECONDARY}
          onClick={() => navigate('/')}
        >
          Go Now
        </Button>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

export default NotFound;
