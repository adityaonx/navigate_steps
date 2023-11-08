import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  //useState is a hook, starts with "use", only call hooks at top of function
  //Also cant place hooks inside conditional statements
  const [step, setStep] = useState(1);
  //saves the state for if open value is true or false, (visible or hidden)
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    // using 's' instead of step while using it as a callback function. It takes current value of variable and then using callback setting it to desired value. No need to place actual variable.
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    // using 's' instead of step while using it as a callback function. It takes current value of variable and then using callback setting it to desired value. No need to place actual variable.
    if (step < 3) setStep((s) => s + 1);
  }
  return (
    // added fragment "<>" instead of <div> so that parent div is not visible in the DOM, and <> behaves like a root element.
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <div className="message">
            Step {step} : {messages[step - 1]}
          </div>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              // onMouseEnter={() => {
              //   alert("TEST");
              // }}
              onClick={handlePrevious}
              //OR
              //onClick={()=>handlePrevious()}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
