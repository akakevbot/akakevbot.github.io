const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
        let prophet = prophets[i]
        let card = document.createElement('section');

        let h2 = document.createElement('h2');
        h2.textContent = prophet.name + ' ' + prophet.lastname;

        let p = document.createElement('p');
        p.innerHTML = `Date of Birth: ${prophet.birthdate} <br>Place of Birth: ${prophet.birthplace}`

        let img = document.createElement('img');
        img.setAttribute('src',prophet.imageurl);

        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(img);

        document.querySelector('div.cards').appendChild(card);
    }
  });