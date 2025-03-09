import "./About.css";

const About = () => {
  return (
    <div className="container mt-5 about">
      <div className="card">
        <div className="card-body text-center">
          <h3 className="card-title text-bg-secondary ">About me</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item ">
              <strong>Name:</strong> Mohamed Ahmed
            </li>
            <li className="list-group-item">
              <strong>Number:</strong> 01100084447
            </li>
            <li className="list-group-item">
              <strong>Email:</strong> mohamedkhalifa4422@gmail.com
            </li>
            <li className="list-group-item">
              <a
                href="https://web.whatsapp.com/"
                target="_blank"
                className="btn btn-success"
              >
                WhatsApp
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="mailto:mohamedkhalifa4422@gmail.com"
                target="_blank"
                className="btn btn-primary"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
