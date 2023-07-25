import { ReactNode, createContext, useMemo, useState } from 'react';

interface SignModalContextReturn {
    isSignInOpen: boolean;
    isSignUpOpen: boolean;
    setIsSignInOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsSignUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SignModalContext = createContext({} as SignModalContextReturn);

interface SignModalProviderProps {
    children: ReactNode;
}

export const SignModalProvider = ({ children }: SignModalProviderProps) => {
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    const value = useMemo(
        () => ({
            isSignInOpen,
            isSignUpOpen,
            setIsSignInOpen,
            setIsSignUpOpen,
        }),
        [isSignInOpen, isSignUpOpen]
    );

    return (
        <SignModalContext.Provider value={value}>
            {children}
        </SignModalContext.Provider>
    );
};
