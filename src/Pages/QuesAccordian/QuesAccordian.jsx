import "./QuesAccordian.css";

const QuesAccordian = () => {
  return (
    <div className="body container md:mx-auto">

      <div className="accordion">
        <li>
          <input type="radio" name="accordion" id="first" ></input>
          <label htmlFor="first">What is the law of conservation of energy?</label>
          <div className="content">
            <p>The law of conservation of energy states that energy cannot be created or destroyed, only converted from one form to another.</p>
          </div>
        </li>

        <li>
          <input type="radio" name="accordion" id="second"></input>
          <label htmlFor="second">What is the difference between elastic and inelastic collisions?</label>
          <div className="content">
            <p> In an elastic collision, both momentum and kinetic energy are conserved. In an inelastic collision, momentum is conserved, but kinetic energy is not necessarily conserved as some energy may be converted into other forms, such as heat or deformation</p>
          </div>
        </li>

        <li>
          <input type="radio" name="accordion" id="third"></input>
          <label htmlFor="third">What is the purpose of a capacitor in an electrical circuit?</label>
          <div className="content">
            <p>A capacitor stores electrical energy in an electric field. It is often used to store and release energy in circuits, as well as to smooth out voltage fluctuations.</p>
          </div>
        </li>

        <li>
          <input type="radio" name="accordion" id="fourth"></input>
          <label htmlFor="fourth">What is Ohm's law?</label>
          <div className="content">
            <p>Ohm's law states that the current passing through a conductor between two points is directly proportional to the voltage across the two points, given a constant temperature. Mathematically, it is expressed as: Voltage (V) = Current (I) × Resistance (R), or V = IR.</p>
          </div>
        </li>

        <li>
          <input type="radio" name="accordion" id="fifth"></input>
          <label htmlFor="fifth">What is the Heisenberg Uncertainty Principle?</label>
          <div className="content">
            <p>The Heisenberg Uncertainty Principle states that there is a fundamental limit to the precision with which certain pairs of physical properties, such as position and momentum, can be simultaneously known. The more accurately one property is known, the less accurately the other can be known.</p>
          </div>
        </li>

        <li>
          <input type="radio" name="accordion" id="sixth"></input>
          <label htmlFor="sixth">What is the relationship between wavelength and frequency in a wave?</label>
          <div className="content">
            <p>The wavelength and frequency of a wave are inversely proportional. As the wavelength increases, the frequency decreases, and vice versa. This relationship is described by the equation: speed of light = wavelength × frequency.</p>
          </div>
        </li>
      </div>


    </div>
  );
};

export default QuesAccordian;
