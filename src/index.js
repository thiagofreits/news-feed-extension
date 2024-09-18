async function fetchNews() {
  const response = await fetch('https://newsdata.io/api/1/news?apikey=pub_53331d084c1e8586ba5d023a81f3c623b2025&q=esportes');
  const data = await response.json();
  return data.results;
}

async function displayNews() {
  const newsFeed = document.getElementById('news-feed');
  const results = await fetchNews();

  if (newsFeed) {
    results.forEach(result => {
      const articleElement = document.createElement('div');
      articleElement.innerHTML = `<h2>${result.title}</h2><p>${result.description}</p><p>${result.link}</p>`;
      newsFeed.appendChild(articleElement);
    });
  }
}

displayNews();
