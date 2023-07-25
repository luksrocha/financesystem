import { Modal } from '../../../../components/modal/Modal';
import { useSignModalContext } from '../../hooks/useSIgnModalContext';
import './signInModal.scss';

const SignInModal = () => {
    const { isSignInOpen, setIsSignInOpen } = useSignModalContext();

    return (
        <Modal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)}>
            <div className="SignInModal" style={{ height: 300, width: 300 }}>
                SIGN IN MODAL
            </div>
        </Modal>
    );
};

export { SignInModal };
