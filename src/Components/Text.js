import { useEffect, useState } from "react";
import "./Text.css";

function Text() {
    // TOP UP
    const [showButton, setShowButton] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const ScrollTop = window.pageYOffset;
            setLastScrollTop(ScrollTop);
            // console.log("chỉ số trước: " + lastScrollTop);
            // console.log("chỉ số sau: " + ScrollTop);
            (ScrollTop < lastScrollTop && ScrollTop > 500) ? setShowButton(true) : setShowButton(false);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [lastScrollTop]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // TEXT COUNT
    const [countText, setCountText] = useState(0);

    const handleInput = (e) => {
        const inputText = e.target.value;
        const chekedLastSpace = inputText.replace(/\s+/g, ' ').trim();
        // console.log(inputText);
        // console.log(chekedLastSpace);
        const countLength = chekedLastSpace.split(' ').length;
        setCountText(countLength);
        console.log(countLength);
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => handleInput(), 3000);
        return () => clearTimeout(timeoutId);
    }, [countText]);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center" >
                        <textarea className="form-control font-weight-bold" placeHolder="Enter something..." rows="10" onChange={(e) => handleInput(e)}></textarea>
                        <label className="display-3">Word(s): {countText}</label>
                    </div>
                    {showButton && (
                        <button onClick={scrollToTop} className="back-to-top">
                            Topup
                        </button>
                    )}
                    <div className="col-sm-12 text-center">
                        <h1 className="display-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus porro totam, iure excepturi alias, cum rem, facilis quod temporibus placeat sapiente ipsam sequi obcaecati earum dolorum amet laboriosam? Velit!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus porro totam, iure excepturi alias, cum rem, facilis quod temporibus placeat sapiente ipsam sequi obcaecati earum dolorum amet laboriosam? Velit!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus porro totam, iure excepturi alias, cum rem, facilis quod temporibus placeat sapiente ipsam sequi obcaecati earum dolorum amet laboriosam? Velit!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus porro totam, iure excepturi alias, cum rem, facilis quod temporibus placeat sapiente ipsam sequi obcaecati earum dolorum amet laboriosam? Velit!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus porro totam, iure excepturi alias, cum rem, facilis quod temporibus placeat sapiente ipsam sequi obcaecati earum dolorum amet laboriosam? Velit!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus porro totam, iure excepturi alias, cum rem, facilis quod temporibus placeat sapiente ipsam sequi obcaecati earum dolorum amet laboriosam? Velit!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus porro totam, iure excepturi alias, cum rem, facilis quod temporibus placeat sapiente ipsam sequi obcaecati earum dolorum amet laboriosam? Velit!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus porro totam, iure excepturi alias, cum rem, facilis quod temporibus placeat sapiente ipsam sequi obcaecati earum dolorum amet laboriosam? Velit!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus porro totam, iure excepturi alias, cum rem, facilis quod temporibus placeat sapiente ipsam sequi obcaecati earum dolorum amet laboriosam? Velit!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus porro totam, iure excepturi alias, cum rem, facilis quod temporibus placeat sapiente ipsam sequi obcaecati earum dolorum amet laboriosam? Velit!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus porro totam, iure excepturi alias, cum rem, facilis quod temporibus placeat sapiente ipsam sequi obcaecati earum dolorum amet laboriosam? Velit!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus porro totam, iure excepturi alias, cum rem, facilis quod temporibus placeat sapiente ipsam sequi obcaecati earum dolorum amet laboriosam? Velit!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus porro totam, iure excepturi alias, cum rem, facilis quod temporibus placeat sapiente ipsam sequi obcaecati earum dolorum amet laboriosam? Velit!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus porro totam, iure excepturi alias, cum rem, facilis quod temporibus placeat sapiente ipsam sequi obcaecati earum dolorum amet laboriosam? Velit!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus porro totam, iure excepturi alias, cum rem, facilis quod temporibus placeat sapiente ipsam sequi obcaecati earum dolorum amet laboriosam? Velit!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus porro totam, iure excepturi alias, cum rem, facilis quod temporibus placeat sapiente ipsam sequi obcaecati earum dolorum amet laboriosam? Velit!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus porro totam, iure excepturi alias, cum rem, facilis quod temporibus placeat sapiente ipsam sequi obcaecati earum dolorum amet laboriosam? Velit!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus porro totam, iure excepturi alias, cum rem, facilis quod temporibus placeat sapiente ipsam sequi obcaecati earum dolorum amet laboriosam? Velit!
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Text;