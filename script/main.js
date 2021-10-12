let search = document.querySelector('input');
let content = '';
let contCountry = document.querySelector('.some-country');
let special = document.querySelector('.sp');
let infoCountry = document.querySelector('.info-country');
let specialInfo = document.querySelector('.sp-info');
let searchBar = document.querySelector('.search-bar');
let loadInfo = document.querySelector('.search-bar span');
let backButton = document.querySelector('#back-country');
let mySelect = document.querySelector('select');
let backInfoButton = document.querySelector('#back-info');
let darkMode = document.querySelector('header nav .light');
let lightMode = document.querySelector('header nav .dark');
let myTheme = document.querySelector('html');
let sel = document.querySelector('.select-selected');
window.onload = function() {
  darkMode.click();
}
darkMode.onclick = function() {
  darkMode.classList.toggle('hide');
  lightMode.classList.toggle('show');
  myTheme.setAttribute('data-theme', 'dark');
  search.style.backgroundImage = `url('../images/search-w.svg')`;
  backButton.firstElementChild.src = './images/back-w.svg';
  backInfoButton.firstElementChild.src = './images/back-w.svg';
};
lightMode.onclick = function() {
  darkMode.classList.toggle('hide');
  lightMode.classList.toggle('show');
  myTheme.setAttribute('data-theme', 'light');
  search.style.backgroundImage = `url('../images/search.svg')`;
  backButton.firstElementChild.src = './images/back.svg';
  backInfoButton.firstElementChild.src = './images/back.svg';
};
let countries = document.getElementById('countries');
let myUL = document.getElementById('myUl');
const myCountryArray = [
'Ecuador', 'Cayman Islands', 'San Marino', 'Yemen', 'Togo', 'Tokelau', 'Greenland', 'Romania', 'Jersey', 'Armenia', 'Guinea-Bissau', 'Gabon', 'French Guiana', 'Iceland', 'Tajikistan', 'Dominica', 'Denmark', 'Christmas Island', 'Rwanda', 'Tanzania', 'Caribbean Netherlands', 'Laos', 'Kyrgyzstan', 'Benin', 'Samoa', 'Cook Islands', 'Saint Lucia', 'Malawi', 'South Georgia', 'Thailand', 'British Indian Ocean Territory', 'Finland', 'Serbia', 'Argentina', 'Isle of Man', 'Liberia', 'Svalbard and Jan Mayen', 'French Southern and Antarctic Lands', 'Falkland Islands', 'Lebanon', 'Bhutan', 'New Zealand', 'Turks and Caicos Islands', 'Bulgaria', 'New Caledonia', 'Mongolia', 'Malta', 'Taiwan', 'Cuba', 'Angola', 'Palau', 'Saint Pierre and Miquelon', 'Niger', 'Northern Mariana Islands', 'Puerto Rico', 'Moldova', 'Nigeria', 'Cocos (Keeling) Islands', 'Pakistan', 'Turkey', 'Vanuatu', 'Australia', 'Latvia', 'United Arab Emirates', 'Equatorial Guinea', 'Portugal', 'Lesotho', 'Uganda', 'Switzerland', 'DR Congo', 'Martinique', 'Gibraltar', 'Israel', 'Antarctica', 'Botswana', 'North Korea', 'Uruguay', 'Georgia', 'Heard Island and McDonald Islands', 'Colombia', 'Belarus', 'Faroe Islands', 'Libya', 'Guyana', 'Uzbekistan', 'Ivory Coast', 'Guadeloupe', 'Mali', 'Saint Kitts and Nevis', 'Norfolk Island', 'Vatican City', 'Syria', 'Brunei', 'Croatia', 'Sint Maarten', 'Mayotte', 'Réunion', 'Russia', 'Sudan', 'South Africa', 'Zimbabwe', 'Azerbaijan', 'China', 'Republic of the Congo', 'Lithuania', 'Montenegro', 'Palestine', 'Austria', 'Venezuela', 'Bermuda', 'Central African Republic', 'United States Minor Outlying Islands', 'Papua New Guinea', 'Bangladesh', 'Saint Helena, Ascension and Tristan da Cunha', 'Turkmenistan', 'Timor-Leste', 'Mexico', 'South Sudan', 'Tuvalu', 'Cape Verde', 'Nepal', 'Albania', 'Senegal', 'Bolivia', 'Tonga', 'Mauritania', 'Nauru', 'Ethiopia', 'Dominican Republic', 'Costa Rica', 'Anguilla', 'Poland', 'Grenada', 'Somalia', 'Kuwait', 'Kazakhstan', 'Niue', 'Guatemala', 'Trinidad and Tobago', 'Saudi Arabia', 'Guam', 'Greece', 'Sri Lanka', 'Madagascar', 'Myanmar', 'Sierra Leone', 'Slovakia', 'Liechtenstein', 'Aruba', 'Zambia', 'Ireland', 'Vietnam', 'Belize', 'Mauritius', 'Afghanistan', 'Kiribati', 'Oman', 'Mozambique', 'Marshall Islands', 'Chile', 'Cyprus', 'Solomon Islands', 'Montserrat', 'British Virgin Islands', 'Western Sahara', 'Monaco', 'Brazil', 'Estonia', 'Japan', 'Comoros', 'Algeria', 'Eswatini', 'Sweden', 'Bouvet Island', 'Kosovo', 'American Samoa', 'Jamaica', 'Djibouti', 'Ukraine', 'Germany', 'Belgium', 'Cambodia', 'Nicaragua', 'Tunisia', 'Chad', 'Guernsey', 'Bahamas', 'Iraq', 'Bahrain', 'Honduras', 'Hong Kong', 'Paraguay', 'El Salvador', 'Morocco', 'United States', 'Maldives', 'United States Virgin Islands', 'Fiji', 'Andorra', 'Barbados', 'Peru', 'Saint Vincent and the Grenadines', 'Saint Martin', 'Qatar', 'Bosnia and Herzegovina', 'Ghana', 'Namibia', 'French Polynesia', 'North Macedonia', 'Egypt', 'Guinea', 'Canada', 'France', 'Panama', 'Iran', 'Philippines', 'Pitcairn Islands', 'Haiti', 'Suriname', 'Wallis and Futuna', 'Antigua and Barbuda', 'Norway', 'Burundi', 'Spain', 'Hungary', 'Netherlands', 'Eritrea', 'São Tomé and Príncipe', 'Indonesia', 'Curaçao', 'Cameroon', 'South Korea', 'Singapore', 'Saint Barthélemy', 'Slovenia', 'India', 'Seychelles', 'Åland Islands', 'Jordan', 'Malaysia', 'Gambia', 'Kenya', 'Macau', 'Luxembourg', 'Burkina Faso', 'Czechia', 'Micronesia', 'Italy', 'United Kingdom'];
myCountryArray.sort();
for (var i = 0; i < myCountryArray.length; i++) {
  let country = `
    <li>${myCountryArray[i]}</li>
  `;
  myUL.innerHTML += country;
}

let names = [];
search.onkeyup = () => {
  let ul = document.getElementById("myUl");
  if (search.value !== '') {
    let filter, li, txtValue;
    ul.classList.add('bgsearch');
    filter = search.value.toUpperCase();
    li = document.querySelectorAll('li');
    li.forEach((el) => {
      txtValue = el.textContent.toUpperCase();
      if (txtValue.includes(filter)) {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
      el.addEventListener('click', (e) => {
        search.value = e.target.textContent;
        ul.classList.remove('bgsearch');
        search.blur();
        loadInfo.classList.add('load');
        if (names.includes(search.value)) {
          loadInfo.classList.remove('load');
          loadInfo.textContent = 'Exist in List!';
          search.value = '';
        } else {
          loadInfo.textContent = '';
          let responseFetch = fetch(`https://restcountries.com/v3.1/all`);
          responseFetch.then(response => response.json())
            .then(data => {
              data.forEach((element) => {
                if (element.name.common === search.value) {
                  content += `
                  <div class='bg-skin'>
                    <img src="${element.flags.png}" alt="${element.name.common} image" />
                    <div>
                      <h3>${element.name.common}</h3>
                      <p>Population : <span>${numberWithCommas(element.population)}</span></p>
                      <p>Region : <span>${element.region}</span></p>
                      <p>Capital : <span>${element.capital[0]}</span></p>
                    </div>
                  </div>
                `;
                  contCountry.innerHTML = content;
                  names.push(`${element.name.common}`);
                  search.value = '';
                  loadInfo.classList.remove('load');
                }
              });
              let myCountry = document.querySelectorAll('.some-country > div');
              let nameCountry = document.querySelectorAll('.some-country > div div h3');
              myCountry.forEach((el, ind) => {
                el.addEventListener('click', () => {
                  data.forEach((elem) => {
                    if (elem.name.common === nameCountry[ind].textContent) {
                      special.classList.add('show');
                      searchBar.classList.add('hide');
                      contCountry.classList.add('hide');
                      let myFirstNative = Object.keys(elem.name.nativeName)[0];
                      let myFirstCurren = Object.keys(elem.currencies)[0];
                      let content = `
                            <div>
                              <img src="${elem.flags.png}" alt="${elem.name.common} flag" />
                              <div class="info">
                                <h3>${elem.name.common}</h3>
                                <hr />
                                <div>
                                  <p>Native Name : <span>${elem.name.nativeName[myFirstNative].common}</span></p>
                                  <p>Population : <span>${numberWithCommas(elem.population)}</span></p>
                                  <p>Region : <span>${elem.region}</span></p>
                                  <p>Sub Region : <span>${elem.subregion}</span></p>
                                  <p>Capital : <span>${elem.capital[0]}</span></p>
                                </div>
                                <hr/>
                                <div>
                                  <p>Top Level Domain : <span>${elem.tld[0]}</span></p>
                                  <p>Currencies : <span>${elem.currencies[myFirstCurren].name} (${elem.currencies[myFirstCurren].symbol})</span></p>
                                  <p>Languages : <span>${showLang(elem.languages)}</span></p>
                                </div>
                                <hr />
                              </div>
                              <div class='border-cont'>
                                <h5>Border Countries :</h5>
                                <div class="borders">${showBorder(elem.borders,data)}</div>
                              </div>
                            </div>
                          `;
                      infoCountry.innerHTML = content;
                    }
                    let myBorders = document.querySelectorAll('.borders button');
                    myBorders.forEach((ele) => {
                      ele.addEventListener('click', () => {
                        data.forEach((element) => {
                          if (element.name.common === ele.textContent) {
                            infoCountry.style.display = 'none';
                            specialInfo.style.display = 'block';
                            backInfoButton.style.display = 'flex';
                            backButton.style.display = 'none';
                            specialInfo.innerHTML = searchBorder(element);
                          }
                        });
                      });
                    });
                  });
                });
              });

            });
        }
      });
    });
  } else {
    ul.classList.remove('bgsearch');
  }
};
backButton.onclick = function() {
  special.classList.remove('show');
  searchBar.classList.remove('hide');
  contCountry.classList.remove('hide');
};
backInfoButton.onclick = function() {
  infoCountry.style.display = 'block';
  specialInfo.style.display = 'none';
  backInfoButton.style.display = 'none';
  backButton.style.display = 'flex';
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function showLang(obj) {
  let ll = '';
  for (let key in obj) {
    ll += obj[key] + ', ';
  }
  return ll.slice(0, -2);
}

function showBorder(arr, data) {
  if (arr != undefined) {
    let bb = '';
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < data.length; j++) {
        if (arr[i] === data[j].cca3) {
          bb += `<button class='bg-skin color'>${data[j].name.common}</button>`;
        }
      }
    }
    return bb;
  } else {
    return 'There is no land border';
  }
}

function check(arr, inp) {
  let newArr = arr.map(el => el.toUpperCase());
  if (newArr.includes(inp.toUpperCase())) {
    return false;
  } else {
    return true;
  }
}

function searchBorder(data) {
  let myFirstNative = Object.keys(data.name.nativeName)[0];
  let myFirstCurren = Object.keys(data.currencies)[0];
  let content = `
      <div>
        <img src="${data.flags.png}" alt="${data.name.common} flag" />
        <div class="info">
          <h3>${data.name.common}</h3>
          <hr />
          <div>
            <p>Native Name : <span>${data.name.nativeName[myFirstNative].common}</span></p>
            <p>Population : <span>${numberWithCommas(data.population)}</span></p>
            <p>Region : <span>${data.region}</span></p>
            <p>Sub Region : <span>${data.subregion}</span></p>
            <p>Capital : <span>${data.capital[0]}</span></p>
          </div>
          <hr/>
          <div>
            <p>Top Level Domain : <span>${data.tld[0]}</span></p>
            <p>Currencies : <span>${data.currencies[myFirstCurren].name} (${data.currencies[myFirstCurren].symbol})</span></p>
            <p>Languages : <span>${showLang(data.languages)}</span></p>
          </div>
          <hr />
        </div>
      </div>
    `;
  return content;
}

var x, i, j, ll, a, b, c;
x = document.querySelector(".custom-select");
ll = mySelect.length;
a = document.createElement("div");
a.setAttribute("class", "select-selected bg-skin");
a.innerHTML = mySelect.options[mySelect.selectedIndex].innerHTML;
x.appendChild(a);
b = document.createElement("div");
b.setAttribute("class", "select-items select-hide bg-skin");
for (j = 1; j < ll; j++) {
  c = document.createElement("div");
  c.innerHTML = mySelect.options[j].innerHTML;
  c.addEventListener("click", function(e) {
    var y, i, k, s, h, sl, yl;
    s = mySelect;
    sl = s.length;
    h = this.parentNode.previousSibling;
    for (i = 0; i < sl; i++) {
      if (s.options[i].innerHTML == this.innerHTML) {
        s.selectedIndex = i;
        h.innerHTML = this.innerHTML;
        y = this.parentNode.getElementsByClassName("same-as-selected");
        yl = y.length;
        for (k = 0; k < yl; k++) {
          y[k].removeAttribute("class");
        }
        this.setAttribute("class", "same-as-selected");
        let myCountries = document.querySelectorAll('.some-country > div');
        removeAll(myCountries, this.textContent);
        let myRegion = document.querySelectorAll('.some-country > div div p:nth-of-type(2) span');
        myCountries.forEach((el, ind) => {
          if (myRegion[ind].textContent === this.textContent) {
            el.style.display = 'block';
          }
        });
        break;
      }
    }
    h.click();
  });
  b.appendChild(c);
}
x.appendChild(b);
a.addEventListener("click", function(e) {
  e.stopPropagation();
  closeAllSelect(this);
  this.nextSibling.classList.toggle("select-hide");
  this.classList.toggle("select-arrow-active");
});

function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener('click', closeAllSelect);

function removeAll(arr, val) {
  arr.forEach((el) => {
    el.style.display = 'none';
  });
}