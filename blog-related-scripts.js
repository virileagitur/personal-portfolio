async function loadRandomArticle() {
  const container = document.getElementById("random-article");
  
  try {
    // Fetch the main blog page
    const response = await fetch("/blog/");
    
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Select all blog cards from the fetched page
    const articles = Array.from(doc.querySelectorAll(".blog-card"));

    if (articles.length === 0) {
      container.innerHTML = "<p>No other articles available at the moment.</p>";
      return;
    }

    // Pick a random article
    const randomIndex = Math.floor(Math.random() * articles.length);
    const randomArticle = articles[randomIndex];

    // Inject the HTML
    container.innerHTML = ""; // Clear loading text
    container.appendChild(randomArticle);

  } catch (error) {
    console.error("Error loading related articles:", error);
    container.innerHTML = "<p>Unable to load suggestions right now.</p>";
  }
}

// Run the function when the script loads
loadRandomArticle();



