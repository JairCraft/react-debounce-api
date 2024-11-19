export default function SearchBar({ onChange }) {
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          onChange={(e) => onChange(e.target.value)}
          placeholder="Cancion increible Artista genial"
        />
      </div>
    </>
  );
}
