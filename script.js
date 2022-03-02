const searchMobile = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value ;
    
    // load data
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}` ;
    fetch(url)
  .then(response => response.json())
  .then(json => displaySearchResult(json));
  // clear data
  searchField.value = '';

}

const displaySearchResult = phones => {
  console.log(phones);
  const searchResult = document.getElementById('search-result');
  const mobileSearchResult = document.getElementById('mobile-search-result');
  const h2 = document.createElement('h2');
  if(phones.status===false){
    
    h2.classList.add('text-center');
    h2.innerText = "Your search result is not available at the moment.";
    mobileSearchResult.appendChild(h2);
    }
    
  phones.data.slice(0,20).map(datas => {
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
h2.textContent = '';

const loadMobileDetail = mobileId => {
  console.log(mobileId);
  const url = `https://openapi.programming-hero.com/api/phone/${mobileId}`;
  // console.log(url);
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
            <p>${data.releaseDate ? data.releaseDate: 'not available'}</p>
            <p class="card-text">Storage: ${data.mainFeatures.storage}</p>
            <p class="card-text">Display: ${data.mainFeatures.displaySize}</p>
            <p class="card-text">Chipset: ${data.mainFeatures.chipSet}</p>
            <p class="card-text">Memory: ${data.mainFeatures.memory}</p>
            <p class="card-text">Sensors: ${data.mainFeatures.sensors[0]}</p>
            <p class="card-text">${data.mainFeatures.sensors[0]}</p>
            <p class="card-text">${data.mainFeatures.sensors[1]}</p>
            <p class="card-text">${data.mainFeatures.sensors[2]}</p>
            <p class="card-text">${data.mainFeatures.sensors[3]}</p>
            <p class="card-text">${data.mainFeatures.sensors[4]}</p>
            <p class="card-text">${data.mainFeatures.sensors[5]}</p>
            <h5>Others:</h5>
            <p>Wlan: ${data.others.WLAN ? data.others.WLAN: 'not available'}</p>
            <p>Blurtooth: ${data.others.Bluetooth ? data.others.Bluetooth: 'not available'}</p>
            <p>GPS: ${data.others.GPS ? data.others.GPS: 'not available'}</p>
            <p>NFC: ${data.others.NFC ? data.others.NFC: 'not available'}</p>
            <p>Radio: ${data.others.Radio ? data.others.Radio: 'not available'}</p>
            <p>USB: ${data.others.USB ? data.others.USB: 'not available'}</p>
          </div>
  `;
  mobileDetail.appendChild(div);
}