import React, { useState } from 'react';

export default function About() {
    const [mystyle, setmystyle] = useState({
        color: 'black',
        backgroundColor: 'white',
    });

    const [btntext, setbtntext] = useState('Enable Dark Mode');

    const toggleDarkMode = () => {
        if (mystyle.color === 'black') {
            setmystyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white',
            });
            setbtntext('Enable Light Mode');
        } else {
            setmystyle({
                color: 'black',
                backgroundColor: 'white',
            });
            setbtntext('Enable Dark Mode');
        }
    };
    return (
        <>    
        <div className="container" style={mystyle}>
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample" style={mystyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            style={mystyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={mystyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by
                            default, until the collapse plugin adds the appropriate classNames that we
                            use to style each element.
                        </div>
                    </div>
                </div>
                {/* Add other accordion items */}
            </div>
            <div className="container my-3">
                <button type="button" onClick={toggleDarkMode} className="btn btn-primary">
                    {btntext}
                </button>
            </div>
        </div></>
    );
}
