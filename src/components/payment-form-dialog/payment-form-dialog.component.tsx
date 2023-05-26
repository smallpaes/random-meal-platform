import { FC, ReactElement } from 'react';
import Dialog from '../dialog/dialog.component';

import {
  DialogContentContainer,
  DialogMessage,
  DialogTitle,
} from './payment-form-dialog.styles';

interface IPaymentFormDialog {
  title: string;
  message: string;
  icon: ReactElement;
  isOpen: boolean;
  onClose: () => void;
}

const PaymentFormDialog: FC<IPaymentFormDialog> = ({
  title,
  message,
  icon,
  isOpen,
  onClose,
}): ReactElement => {
  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <DialogContentContainer>
        {icon}
        <DialogTitle>{title}</DialogTitle>
        <DialogMessage>{message}</DialogMessage>
      </DialogContentContainer>
    </Dialog>
  );
};

export default PaymentFormDialog;
