


import { useState } from 'react';

export default function About() {
  const boxStyle = {
    backgroundColor: "#043927",
    color: "white",
    border: "5px solid #006241",
    borderRadius: "45px",

    padding: "10px",
  };

  const [activeAccordion, setActiveAccordion] = useState("");

  const handleAccordionClick = (accordionId) => {
    setActiveAccordion((prevActiveAccordion) => (prevActiveAccordion === accordionId ? "" : accordionId));
  };

  return (
    <div className="container" >
      <div style={boxStyle}>
        <h1 className="my-4">About Us :-)</h1>

        <div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className={`accordion-button ${activeAccordion === 'collapseOne' ? 'active' : ''}`}
                  style={boxStyle}
                  type="button"
                  onClick={() => handleAccordionClick('collapseOne')}
                >
                  <strong>Welcome to CloudNote!</strong>
                </button>
              </h2>
              <div
                id="collapseOne"
                className={`accordion-collapse collapse ${activeAccordion === 'collapseOne' ? 'show' : ''}`}
                style={boxStyle}
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  At CloudNote, we believe in making your digital life organized and streamlined. Our platform offers a comprehensive solution for managing your email accounts and organizing your personal notes. Whether you're a busy professional, a student, or simply someone who values efficiency, our intuitive tools and user-friendly interface are designed to simplify your daily tasks.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className={`accordion-button ${activeAccordion === 'collapseTwo' ? 'active' : ''}`}
                  style={boxStyle}
                  type="button"
                  onClick={() => handleAccordionClick('collapseTwo')}
                >
                  <strong>Privacy and Security:</strong>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className={`accordion-collapse collapse ${activeAccordion === 'collapseTwo' ? 'show' : ''}`}
                style={boxStyle}
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  We take your privacy and data security seriously. Your personal information, including email credentials and notes, are encrypted and stored securely on our servers. We adhere to stringent security protocols to ensure the confidentiality and integrity of your data. Rest assured that your information is in safe hands.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className={`accordion-button ${activeAccordion === 'collapseThree' ? 'active' : ''}`}
                  style={boxStyle}
                  type="button"
                  onClick={() => handleAccordionClick('collapseThree')}
                >
                  <strong>Secure Database:</strong>
                </button>
              </h2>
              <div
                id="collapseThree"
                className={`accordion-collapse collapse ${activeAccordion === 'collapseThree' ? 'show' : ''}`}
                style={boxStyle}
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Rest assured that your data is safe with us. We maintain a robust and secure database infrastructure to store your personal information, email credentials, and notes. Our dedicated team of experts regularly monitors and updates our systems to ensure the highest level of security. Your data is encrypted and protected against unauthorized access, so you can focus on what matters most to you.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className={`accordion-button ${activeAccordion === 'collapseFour' ? 'active' : ''}`}
                  style={boxStyle}
                  type="button"
                  onClick={() => handleAccordionClick('collapseFour')}
                >
                  <strong>Efficient Note-Taking:</strong>
                </button>
              </h2>
              <div
                id="collapseFour"
                className={`accordion-collapse collapse ${activeAccordion === 'collapseFour' ? 'show' : ''}`}
                style={boxStyle}
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  We understand the importance of capturing and organizing your thoughts. Our note-taking feature enables you to create, edit, and categorize your personal notes all in one place. Whether you're jotting down meeting minutes, brainstorming ideas, or keeping track of your to-do lists, our flexible note-taking tool adapts to your workflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
