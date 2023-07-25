import { useSignModalContext } from '../../../../hooks/useSIgnModalContext';
import { useNavigate } from 'react-router-dom';
import './signUpAndSignInArea.scss';

const SignUpAndSignInArea = () => {
    const { setIsSignUpOpen } = useSignModalContext();

    const router = useNavigate();

    const redirectToDashboard = () => {
        router('/dashboard');
    };

    return (
        <div className="SignUpAndSignInArea">
            <button
                className="SignUpAndSignInArea__signin"
                onClick={redirectToDashboard}
            >
                Sign in
            </button>
            <button
                className="SignUpAndSignInArea__signup"
                onClick={() => setIsSignUpOpen(true)}
            >
                Sign up
            </button>
        </div>
    );
};

export { SignUpAndSignInArea };
