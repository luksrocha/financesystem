import { useContext } from 'react';
import { SignModalContext } from '../context/signModalContext';

export const useSignModalContext = () => {
    const context = useContext(SignModalContext);
    if (!context)
        throw new Error(
            'Use Sign Modal Context can only be used wrapped in a provider'
        );

    const { isSignInOpen, isSignUpOpen, setIsSignInOpen, setIsSignUpOpen } =
        context;

    return { isSignInOpen, isSignUpOpen, setIsSignInOpen, setIsSignUpOpen };
};
