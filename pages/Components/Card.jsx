export const Card = ({ title, url, urlImg, urlGithub }) => {
  return (
    <section className="card bg-blue p-3 my-3">
      <article className="card-body">
        <div className="img-area mb-4">
          <img src={urlImg} alt="img-fluid" className="" />
        </div>
        <div className="my-3 mx-2">
          <h3>{title}</h3>
        </div>
        <div className="d-flex m-2">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => (location.href = url)}
          >
            Online
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary ms-3"
            onClick={() => (location.href = urlGithub)}
          >
            Github
          </button>
        </div>
      </article>
    </section>
  );
};
