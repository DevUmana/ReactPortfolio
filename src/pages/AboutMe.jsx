import "../styles/AboutMe.css";
import babyYoda from "../assets/babyYoda.jpg";

export default function AboutMe() {
  return (
    <div className="wrapper">
      <img src={babyYoda} alt="Baby Yoda Picture" />
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <p>Episode About Me</p>
            <h1>David Umana</h1>
          </div>
          <p>
            In a galaxy not so far away, a devoted fan of the New York Red Bulls
            and the New York Yankees sets out on an extraordinary journey.
          </p>
          <p>
            This modern-day Jedi, a tech enthusiast and intrepid traveler,
            explores the cosmos while learning the ancient art of coding.
          </p>
          <p>
            Armed with a data pad and the latest tech, they navigate from the
            skyscrapers of Coruscant to the stadiums of Naboo, mastering the
            digital Force...
          </p>
        </div>
      </section>
    </div>
  );
}
