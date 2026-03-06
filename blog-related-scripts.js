async function loadRandomArticle() {
  const container = document.getElementById("random-article");
  
  if (!container) return;

  try {
    const response = await fetch("/blog-data.json");
    const articles = await response.json();
    
    if (articles.length === 0) {
      container.innerHTML = "<p>No articles available.</p>";
      return;
    }

    const randomIndex = Math.floor(Math.random() * articles.length);
    const article = articles[randomIndex];

    container.innerHTML = `
      <a href="${article.url}" class="blog-card">
        <img src="${article.image}" alt="${article.title}" class="blog-card-image">
        <div class="blog-card-content">
          <span class="blog-card-meta">${article.category}</span>
          <h3 class="blog-card-title">${article.title}</h3>
          <p class="blog-card-excerpt">${article.excerpt}</p>
          <span class="read-more-link">Read More →</span>
        </div>
      </a>
    `;

  } catch (error) {
    console.error("Error:", error);
    container.innerHTML = "<p>Unable to load suggestions.</p>";
  }
}

document.addEventListener('DOMContentLoaded', loadRandomArticle);