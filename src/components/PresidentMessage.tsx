import "../assets/sass/president-message.scss";
import president from "../assets/images/president.jpg";

function PresidentMessage() {
  return (
    <section className="president-area py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="president-content">
              <h2>Message from the President</h2>
              <p>
                We are thrilled to announce our unwavering support for the
                University's latest social media campaign. This initiative
                signifies a crucial opportunity for our community to unite,
                interact, and effect significant change. Have thoughts or
                feedback on our campaign goals? We'd love to hear from you!{" "}
              </p>

              <div className="campaign-area mt-5">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="single-box h-100">
                      <h3>Empowering Engagement</h3>
                      <p>
                        Our primary aim is to foster a vibrant online community
                        where every voice is heard and valued. Through active
                        participation and collaboration, we can amplify our
                        collective impact and bring about positive change.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="single-box h-100">
                      <h3>Promoting Diversity and Inclusion</h3>
                      <p>
                        Diversity is our strength, and inclusivity is our
                        foundation. We strive to create an inclusive online
                        space that celebrates diverse perspectives, cultures,
                        and experiences. Together, we can build a community
                        where everyone feels welcome and respected.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <div className="single-box h-100">
                      <h3>Driving Innovation</h3>
                      <p>
                        Innovation drives progress, and social media is a
                        powerful tool for sparking creativity and innovation. We
                        encourage innovative thinking and bold ideas that push
                        the boundaries of what's possible. Let's harness the
                        power of social media to drive positive change and
                        innovation in our community and beyond.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                target="_blank"
                href="https://und.edu/social-media"
                className="share-thoughts"
              >
                Share your thoughts and feedback.
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="president-image">
              <img className="w-100" src={president} alt="und-president" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PresidentMessage;
