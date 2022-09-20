const Form = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);

    for (let data of formData) {
      console.log(data[0] + ": " + data[1]);
    }

    e.target.reset();
  };

  return (
    <main className="main-form">
      <form onSubmit={submitHandler}>
        <h1 className="form-title">Formulario</h1>
        <p className="required">
          Los campos obligatorios se marcan con un
          <abbr title="required" aria-label="required">
            *
          </abbr>
          .
        </p>
        <ul>
          <li>
            <label htmlFor="name">
              Nombre
              <abbr title="required" aria-label="required">
                *
              </abbr>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              maxLength="50"
              autoCapitalize="words"
            />
          </li>
          <li>
            <label htmlFor="email">
              Email
              <abbr title="required" aria-label="required">
                *
              </abbr>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="e.g. john.doe@gmail.com"
              required
              maxLength="50"
            />
          </li>
          <li>
            <label htmlFor="comment">Comentario</label>
            <textarea
              name="comment"
              id="comment"
              rows="6"
              placeholder="Ingrese aquí su comentario..."
              maxLength="500"
            ></textarea>
          </li>
          <li className="button">
            <button className="submit-button">Enviar</button>
          </li>
        </ul>
      </form>
    </main>
  );
};

export default Form;
