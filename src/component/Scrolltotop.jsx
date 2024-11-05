import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'; // Assuming you're using Bootstrap for styling

const Scrolltotop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle scrolling to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Optional: smooth scrolling behavior
        });
    };

    // Function to show or hide the button based on scroll position
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Attach scroll event listener to window
    window.addEventListener('scroll', toggleVisibility);

    return (
        <>
            {isVisible && 
                <button className="top-btn" onClick={scrollToTop}>
                    <img className='arrow-img' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAUVBMVEX///9RUVFGRkZOTk5BQUHU1NRJSUl7e3uXl5fo6Ojk5OSTk5M7Ozv6+vrv7+9aWlpgYGA2NjZra2uhoaGrq6vIyMiIiIhxcXHBwcHa2tq1tbXEzkQZAAABeUlEQVRoge2X7W6DMAxFQxLStCuUtd0ovP+DDtpqgsTOBzHSJvn+JRwdnAsoQnA4HA6H83/StG27E7q1F6lld2t2YA/aqKqqlFRHcnatq3eUOe3GnuVp3Zdsavc1m9a9PldO6Nxr6bJnOo17/emz58lQuEPeVO7+vOnc3Z6s6KqMHmKXNjLMLmtkjF3iju9luTvWQZe+xR1+d6DJ5LvD3orEHZ637AyBO9wT/SEO0APluSNsO12C6RmNRL0FSk9uZJBd6A7v5S+7yB3u4IKN0uPu8Lvz3MsYPdrIyLyL3JF5W2/hBvchzXuTe6OgbwfgjdM7FH6H1oPeKF1/YfAOEEe8Mbr5xlbneCN01aNwzzzIhug4vHfhgZkgdIPe8XCaGPGG6OcBXdqvfjRRb58u0f2cDmyXxWASvF26uYaOegt6kveaHmbPdJPl/aS/t0pG2NMn4KClMVKPyWwhbq9bUnROd2sfecfkdrR2pD/7cjgcDofD4XA4fy4/Gn4NyKQlgO4AAAAASUVORK5CYII=" alt="img" />
                    
                </button>
            }
        </>
    );
};

export default Scrolltotop ;
