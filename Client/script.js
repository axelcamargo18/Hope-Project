const btnHam = document.querySelector(".ham-btn");
const btnTimes = document.querySelector(".times-btn");
const navBar = document.getElementById("nav-bar");
const knowMoreActions = document.getElementById("know-more-action");

btnHam.addEventListener("click", function () {
  if (btnHam.className !== "") {
    btnHam.style.display = "none";
    btnTimes.style.display = "block";
    navBar.classList.add("show-nav");
  }
});

btnTimes.addEventListener("click", function () {
  if (btnHam.className !== "") {
    this.style.display = "none";
    btnHam.style.display = "block";
    navBar.classList.remove("show-nav");
  }
});

knowMoreActions.addEventListener("click", getNews);

async function getNews() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4786b827bamshd8de34f994ca8d7p153660jsn21923d4b66fd",
      "X-RapidAPI-Host": "energy-price-news.p.rapidapi.com",
    },
  };

  await fetch("https://energy-price-news.p.rapidapi.com/news", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response); //Prints all articles in console
      const output = document.getElementById("output");
      for (const property in response) {
        // console.log(`${property}: ${response[property]}`);
        console.log(`${response[property].title}`);
        console.log(`${response[property].image}`);
        console.log(`${response[property].source}`);

        try {
          output.innerHTML += `
                    <div class="card">
                    <div class="card-body">
                    <img src="${response[property].image}" class="card-img-top" alt="" title=""><br>
                    <h2 class="card-title"> <a href="${response[property].url}">  ${response[property].title}</a></h2>  
                    <div class="card-text">
                         <p>${response[property].region}</p>
                         <p>${response[property].source}</p>
                    </div>
                    </div>
                    </div>
                    <br>
                    `;
          //   console.log(response.results[i]["media"][0].caption);
        } catch (err) {
          console.log(err);
        }
      }
    })
    .catch((err) => console.error(err));
}
