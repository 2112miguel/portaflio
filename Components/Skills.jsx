import Image from "next/image";

const skills = [
  {
    frontEnd: ["React", "HTML", "CSS", "Sass"],
  },
  {
    backEnd: ["Node Js", "C# .NET", "MongoDB", "SQL Server"],
  },
];

export const Skills = () => {
  return (
    <section className="py-5" id="skills">
      <div className="my-5 text-center">
        <h1>Skills</h1>
      </div>
      <div className="container ">
        <article className="row row-cols-2 justify-content-center">
          <section className="col-sm-6 col-8 col-lg-4 p-5 rounded mx-5 text-center">
            <div>
              <h3>Front End</h3>
            </div>
            <div className="row row-cols-2 ">
              {skills[0].frontEnd.map((skill) => {
                return (
                  <div className="d-flex p-4">
                    <div>
                      <i className="bi bi-patch-check-fill mx-2"></i>
                    </div>
                    <div>{skill}</div>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="col-sm-6 col-9 col-lg-4 p-5 rounded mx-4 text-center">
            <div>
              <h3>Back End End</h3>
            </div>
            <div className="row row-cols-2 ">
              {skills[1].backEnd.map((skill) => {
                return (
                  <div className="d-flex p-4">
                    <div>
                      <i className="bi bi-patch-check-fill mx-2"></i>
                    </div>
                    <div>{skill}</div>
                  </div>
                );
              })}
            </div>
          </section>
        </article>
      </div>
    </section>
  );
};
