const searchMobile = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value ;
    // console.log(searchText);
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}` ;
    fetch(url)
  .then(response => response.json())
  .then(json => displaySearchResult(json.data));
  searchField.value = '';

}

const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    data.forEach(datas => {
        console.log(datas);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${datas.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${datas.brand}</h5>
              <p class="card-text">${datas.phone_name}</p>
              <button type="button" class="btn btn-primary">Explore</button>
            </div>
          </div>
        `;
        searchResult.appendChild(div);

    })
}

