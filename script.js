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
        // console.log(datas);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${datas.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${datas.brand}</h5>                                                      
              <p class="card-text">${datas.phone_name}</p>
              <button onclick="loadMobileDetail('${datas.slug}')" type="button" class="btn btn-primary">Explore</button>                                                                                             
          </div>
        `;
        searchResult.appendChild(div);

    })
}

const loadMobileDetail = mobileId => {
    console.log(mobileId);
    const url = `https://openapi.programming-hero.com/api/phone/${mobileId}`;
    console.log(url);
    fetch(url)
  .then(response => response.json())
  .then(json => displayMobileDetail(json.data));
}

const displayMobileDetail = data => {
    console.log(data);
    const mobileDetail = document.getElementById('mobile-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML =`
    <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Main Features:</h5>
              <p class="card-text">Storage: ${data.mainFeatures.storage}</p>
              <p class="card-text">Display: ${data.mainFeatures.displaySize}</p>
              <p class="card-text">Chipset: ${data.mainFeatures.chipSet}</p>
              <p class="card-text">Memory: ${data.mainFeatures.memory}</p>
              <p class="card-text">Sensors: ${data.mainFeatures.sensors[0]}</p>
              <p class="card-text">${data.mainFeatures.sensors[1]}</p>
              <p class="card-text">${data.mainFeatures.sensors[2]}</p>
              <p class="card-text">${data.mainFeatures.sensors[3]}</p>
              <p class="card-text">${data.mainFeatures.sensors[4]}</p>
              <p class="card-text">${data.mainFeatures.sensors[5]}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
    `;
    mobileDetail.appendChild(div);
}