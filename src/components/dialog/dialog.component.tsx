import { FC, ReactElement, PropsWithChildren, useRef, useEffect } from 'react';
import { DialogContainer, DialogCloseIcon } from './dialog.styles';

interface IDialog extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  hasCloseButton?: boolean;
}

const Dialog: FC<IDialog> = ({
  isOpen,
  children,
  onClose,
  hasCloseButton = true,
}): ReactElement => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);
  useEffect(() => {
    const dialogEle = dialogRef.current;
    dialogEle?.addEventListener('close', onClose);
    return () => {
      dialogEle && dialogEle.removeEventListener('close', onClose);
    };
  }, [onClose]);
  return (
    <>
      {isOpen && (
        <DialogContainer ref={dialogRef}>
          {hasCloseButton && <DialogCloseIcon onClick={onClose} />}
          {children}
        </DialogContainer>
      )}
    </>
  );
};

export default Dialog;
