import { ReactNode } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            backgroundColor: '#fff',
            boxShadow: '0px 12px 24px 0px rgba(0, 0, 0, 0.10)',
            overflow: 'none',
        },
        overlay: {
            backgroundColor: '#5D6670',
            opacity: '0.89',
        },
    };

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
            portalClassName="root"
        >
            {children}
        </ReactModal>
    );
};

export { Modal };
