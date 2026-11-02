import { useEffect,useState } from "react";

function Home() {
  const[categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
  async function loadCategories() {
  try {
    const response = await fetch(
    "Testing-data-json/categories.json"
    );
    if (!response.ok) {
      throw new Error("Failed to load products");
    }
    const data = await response.json();
    setCategories(data.categories);
  } catch (err) {
  setError(err instanceof Error
  ? err.message
  : "Something went wrong.");
  } 
  }
  loadCategories();
  }, []);
  return (
    <div>
        
        {categories.map((categories) => (
  <article key={categories.id}>
        <p>{categories.id}</p>
        <p>{categories.name}</p>
        <p>{categories.slug}</p>
        <p>{categories.description}</p>
  </article>
 ))}
      </div>
  );
}

export default Home;
