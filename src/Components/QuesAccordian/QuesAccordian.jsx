import "./QuesAccordian.css";

const QuesAccordian = ({ sq }) => {
  console.log(sq);
  return (
    <div className="body container md:mx-auto">

      <div className="accordion">
        <li>
          <input type="radio" name="accordion" id="first" ></input>
          <label htmlFor="first">{sq?.question}</label>
          <div className="content">
            <p>{sq?.ans}</p>
          </div>
        </li>
      </div>
    </div>
  );
};

export default QuesAccordian;
