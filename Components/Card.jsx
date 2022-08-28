import Image from "next/image";

export const Card = ({ title, url, urlImg, urlGithub }) => {
  return (
    <section className="card bg-blue p-3 my-3">
      <article className="card-body">
        <div className="img-area mb-4">
          <Image
            src={urlImg}
            style={{ cursor: "pointer" }}
            width={2400}
            height={1598}
            layout="responsive"
            className="card-img-top"
            onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
          />
        </div>
        <div className="my-3 mx-2">
          <h3>{title}</h3>
        </div>
        <div className="d-flex m-2">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
          >
            Online
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary ms-3"
            onClick={() =>
              window.open(urlGithub, "_blank", "noopener,noreferrer")
            }
          >
            Github
          </button>
        </div>
      </article>
    </section>
  );
};
