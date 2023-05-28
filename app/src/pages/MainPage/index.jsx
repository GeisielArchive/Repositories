import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/auth";
import "./styles.css";
import Nav from "./Nav";
import Search from "./Search";
import Repositories from "./Repositories";
import { getRepositories, createRepository, destroyRepository } from "../../services/api";

const MainPage = () => {
  const { user, logout } = useContext(AuthContext);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const loadData = async (query = "") => {
    try {
      const response = await getRepositories(user?.id, query);
      setRepositories(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoadingError(true);
      setErrorMessage("Error loading repositories.");
      setTimeout(() => {
        setLoadingError(false);
        setErrorMessage("");
      }, 2000);
    }
  };

  useEffect(() => {
    (async () => await loadData())();
  }, []);

  const handleLogout = () => {
    logout();
  };

  const handleSearch = (query) => {
    loadData(query);
  };

  const handleDelete = async (repository) => {
    console.log("delete repo", repository);
    await destroyRepository(user?.id, repository._id);
    await loadData();
  };

  const handleAdd = async (url) => {
    console.log("add repo", url);
    try {
      await createRepository(user?.id, url);
      await loadData();
    } catch (error) {
      console.log(error);
      setLoadingError(true);
      setErrorMessage("Invalid URL or Repository already exists.");
      setTimeout(() => {
        setLoadingError(false);
        setErrorMessage("");
      }, 2000);
    }
  };

  if (loadingError) {
    return (
      <div className="loading">
        {errorMessage}
      </div>
    );
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div id="main">
      <Nav onLogout={handleLogout} />
      <Search onSearch={handleSearch} />
      <Repositories
        repositories={repositories}
        onDelete={handleDelete}
        onAdd={handleAdd}
      />
    </div>
  );
};

export default MainPage;
