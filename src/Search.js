import React, { useState } from "react";

const sampleData = [
  { id: 1, title: "Inception: A Journey into Dreams", genres: ["Sci-Fi", "Action"], topic: "Mind-Bending" },
  { id: 2, title: "The Godfather: A Mafia Legacy", genres: ["Crime", "Drama"], topic: "Mafia" },
  { id: 3, title: "The Dark Knight: Gotham's Savior", genres: ["Action", "Drama", "Crime"], topic: "Superheroes" },
  { id: 4, title: "Forrest Gump: A Life of Wonders", genres: ["Drama"], topic: "Life Lessons" },
  { id: 5, title: "The Matrix: Enter the Digital World", genres: ["Sci-Fi", "Action"], topic: "Technology" },
  { id: 6, title: "Titanic: A Tale of Love and Loss", genres: ["Romance", "Drama"], topic: "Tragedy" },
  { id: 7, title: "Avengers: Endgame: The Final Showdown", genres: ["Action", "Sci-Fi", "Thriller"], topic: "Superheroes" },
  { id: 8, title: "La La Land: A Musical Romance", genres: ["Musical", "Romance", "Drama"], topic: "Love Story" },
  { id: 9, title: "Interstellar: Beyond the Stars", genres: ["Sci-Fi", "Drama"], topic: "Space Exploration" },
  { id: 10, title: "Pulp Fiction: A Nonlinear Tale", genres: ["Crime", "Dark Comedy", "Thriller"], topic: "Dark Comedy" },
  { id: 11, title: "Shawshank Redemption: A Story of Hope and Resilience", genres: ["Crime", "Action", "Drama", "Thriller"], topic: "Tragedy" },
];

const Search = () => {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All");
  const [topic, setTopic] = useState("All");

  const genres = [
    "All Genres",
    "Sci-Fi",
    "Crime",
    "Action",
    "Drama",
    "Romance",
    "Musical",
    "Dark Comedy",
    "Thriller",
  ];
  const topics = [
    "All Topics",
    "Mind-Bending",
    "Mafia",
    "Superheroes",
    "Life Lessons",
    "Technology",
    "Tragedy",
    "Love Story",
    "Space Exploration",
    "Dark Comedy",
  ];

  const handleSearch = () => {
    return sampleData.filter((item) => {
      const matchesQuery =
        query === "" || item.title.toLowerCase().includes(query.toLowerCase());
      const matchesGenre =
        genre === "All" || item.genres.includes(genre);
      const matchesTopic = topic === "All" || item.topic === topic;
      return matchesQuery && matchesGenre && matchesTopic;
    });
  };

  const filteredResults = handleSearch();

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Movie Search</h1>
      <input
        type="text"
        placeholder="Search by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          style={{
            flex: "1",
            marginRight: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          style={{
            flex: "1",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        {filteredResults.length > 0 ? (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {filteredResults.map((item) => (
              <li
                key={item.id}
                style={{
                  padding: "10px",
                  marginBottom: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  transform: "scale(1)",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (
                  e.currentTarget.style.transform = "scale(1.05)",
                  e.currentTarget.style.backgroundColor = "#dddddddc"
                )}
                onMouseLeave={(e) => (
                  e.currentTarget.style.transform = "scale(1)",
                  e.currentTarget.style.backgroundColor = "#f9f9f9"
                )
                }
              >
                <h3>{item.title}</h3>
                <p>
                  <strong>Genres:</strong> {item.genres.join(", ")} |{" "}
                  <strong>Topic:</strong> {item.topic}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
