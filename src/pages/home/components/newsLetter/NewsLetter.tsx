import { useCallback, useState } from 'react';
import './newsLetter.scss';

const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const [isSending, setIsSending] = useState(false);

    const handleSubscribe = useCallback(() => {
        if (!email) return;
        setIsSending(true);
        setTimeout(() => {
            setIsSending(false);
            setEmail('');
        }, 3000);
    }, [email]);

    return (
        <div className="NewsLetter">
            <div className="NewsLetter__text">
                <h4>Lorem ipsum</h4>
                <h3>Lorem ipsum</h3>
                <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eaque atque dicta corrupti, natus repudiandae odit quidem
                    sapiente expedita dolor voluptatibus dolorem enim accusamus
                    quae ullam suscipit. Voluptate ut temporibus sunt?
                </span>
            </div>
            <div className="NewsLetter__form">
                <div className="NewsLetter__form--input">
                    <label htmlFor="email">Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        name="email"
                        disabled={isSending}
                    />
                </div>
                <button
                    disabled={isSending}
                    onClick={handleSubscribe}
                    className="NewsLetter__form--subscribe"
                >
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export { NewsLetter };
