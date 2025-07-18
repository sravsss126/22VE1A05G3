import Log from "./logger";  

function Formshorter() {
  const handleSubmit = () => {
    try {
     
      Log("frontend", "info", "Formshorter", "Form submitted successfully");
    } catch (err) {
      Log("frontend", "error", "Formshorter", `Form submission failed: ${err.message}`);
    }
  };

  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Formshorter;
