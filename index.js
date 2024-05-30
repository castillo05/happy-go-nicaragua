const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const requestOptions = {
    method: "get",
    headers: myHeaders,
    redirect: "follow",

};

const dataMedium=[]

fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40jcdevnica&api_key=ofxmrnegth3pplrqyawcupayuaxfazopwyq1kczf&order_by=pubDate&order_dir=desc&count=5", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result, 'result')
        const apiResultsContainer = document.getElementById('api-results');
        apiResultsContainer.innerHTML = '';

        result.items.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.innerHTML = `
                            <h3>${article.title}</h3>
                            <p>${article.description.substring(0, 100)}...</p>
                            <p>${article.pubDate}</p>
                            <a href="${article.link}" target="_blank">Leer más</a>
                        `;
            apiResultsContainer.appendChild(articleElement);
        });
    })
    .catch(error => {
        console.log('error', error);
        document.getElementById('api-results').innerHTML = 'Hubo un error al cargar los artículos.';
    });
