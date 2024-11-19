import { useEffect, useState } from "react";
import "./App.css";
import fetchData from "./fetchData";
import { useDebounce } from "./useDebounce";
import SearchBar from "./SearchBar";

function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState([]);
  const debouncedSearch = useDebounce(query);
  const [voidApi, setVoidApi] = useState(false);

  useEffect(() => {
    if (!debouncedSearch) {
      setApiData([]);
      setVoidApi(false);
      return;
    }

    const loadApiData = async () => {
      setLoading(true);
      const apiData = await fetchData(debouncedSearch);
      if (apiData.results.length !== 0) {
        setApiData(apiData.results);
        setVoidApi(false);
      } else {
        setVoidApi(true);
      }
      console.log(apiData);
      setLoading(false);
    };
    loadApiData();
  }, [debouncedSearch]);

  return (
    <>
      <div>
        <h1>Buscar informacion de musica</h1>
        <SearchBar onChange={setQuery} />
        <div className="music-card-container">
          {query === "" && <h1>Escribe algo para comenzar</h1>}
          {loading ? (
            <h2>Cargando...</h2>
          ) : voidApi ? (
            <h1>No se encontraron resultados</h1>
          ) : (
            apiData.map((result) => {
              if (result.thumb !== "")
                return (
                  <div key={result.id} className="info-music-card">
                    <img src={result.thumb} alt="Portada" />
                    <h2>{result.title}</h2>
                    <a>{result.type.toUpperCase()}</a>
                  </div>
                );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default App;
