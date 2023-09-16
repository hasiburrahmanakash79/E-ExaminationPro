export const ApplicationForm = () => {

    return (
      <>
        <h1>Job Application Form</h1>
        <p>All fields are mandatory</p>
        <span title="close">X</span>
        <img src="https://via.placeholder.com/150" alt="a person with a laptop" />
        <div data-testid="custom-element">Custom HTML Element</div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value="Your Name"
              placeholder="Full Name"
            />
          </div>
          <button>Submit</button>
        </form>
      </>
    );
  };