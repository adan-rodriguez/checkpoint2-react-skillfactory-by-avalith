import { useEffect, useState } from "react";

const Table = () => {
  const [users, setUsers] = useState([]);

  const URL_USERS = "https://jsonplaceholder.typicode.com/users";

  const fetchUsers = async () => {
    try {
      const response = await fetch(URL_USERS);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(`Could not get datos: ${error}`);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main className="main-table">
      <table>
        <caption>
          <span>
            Usuarios extraídos de
            <a
              href="https://jsonplaceholder.typicode.com/users"
              target="_blank"
              rel="noreferrer"
            >
              https://jsonplaceholder.typicode.com/users
            </a>
          </span>
        </caption>
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Usuario</th>
            <th scope="col">Email</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Calle</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Sitio web</th>
            <th scope="col">Empresa</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row">{user.name}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.address.street}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default Table;
