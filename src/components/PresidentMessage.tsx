import presidentData from "../data/president-data";
import "../assets/sass/president-message.scss";
import president from "../assets/images/president.jpg";

function PresidentMessage() {
  const isEven = presidentData.boxs.length % 2 === 0;

  return (
    <section className="president-area py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="president-content">
              <h2>{presidentData.heading}</h2>
              <p>{presidentData.content}</p>

              <div className="campaign-area mt-5">
                <div className="row">
                  {presidentData.boxs.map((box, index) => {
                    const columnClass: string =
                      isEven || index !== presidentData.boxs.length - 1
                        ? "col-md-6"
                        : "col-md-12";

                    return (
                      <div className={`${columnClass} mb-4`} key={index}>
                        <div className="single-box h-100">
                          <h3>{box.box_heading}</h3>
                          <p>{box.box_content}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {presidentData.btn_label && (
                <a
                  target="_blank"
                  href={presidentData.btn_link}
                  className="share-thoughts"
                >
                  {presidentData.btn_label}
                </a>
              )}
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
