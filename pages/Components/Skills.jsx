import Image from "next/image";

const skills = [];

export const Skills = () => {
  return (
    <section className="row py-5" id="skills">
      <div className="row my-5 text-center">
        <h1>Skills</h1>
      </div>
      <div className="container ">
        <article className="row row-cols-2 justify-content-center">
          <section className="col-sm-6 col-9 col-lg-4 p-5 rounded mx-5 text-center">
            <div>
              <h3>Front End</h3>
            </div>
            <div className="row row-cols-2 ">
              <div className="col p-4">
                <i className="bi bi-patch-check-fill mx-3"></i>React
              </div>
              <div className="col p-4">HTML</div>
              <div className="col p-4">CSS</div>
              <div className="col p-4">SASS</div>
            </div>
          </section>
          <section className="col-sm-6 col-9 col-lg-4 p-5 rounded mx-5 text-center">
            <h3>Back End End</h3>
            <div className="row row-cols-2 ">
              <div className="col p-4">Node Js</div>
              <div className="col p-4">C#</div>
              <div className="col p-4">MongoDb</div>
              <div className="col p-4">Sql</div>
            </div>
          </section>
        </article>
      </div>
    </section>
  );
};
