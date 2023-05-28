import React, { useState } from "react";

const Repositories = ({ onDelete, onAdd, repositories }) => {
  const [newRepo, setNewRepo] = useState("");

  return (
    <div className="repositories">
      <h1 className="title">Repositórios</h1>
      <ul className="list">
        {
          repositories.map((repo) => (
            <li className="item" key={repo.id}>
              <div className="info">
                <div className="owner">{repo.name.substring(0, repo.name.indexOf("/"))}</div>
                <div className="name">{repo.name.substring(repo.name.indexOf("/") + 1 )}</div>
              </div>
              <button onClick={() => onDelete(repo)}>Apagar</button>
            </li>
          ))
        }
      </ul>

      <div className="new">
        <input
          type="url"
          name="new-repo"
          id="new-repo"
          placeholder="https://github.com/user/repositorio"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button onClick={() => onAdd(newRepo)}>Adicionar</button>
      </div>
    </div>
  );
};

export default Repositories;
