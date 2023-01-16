 const getPinkFloyd = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=pinkfloyd", {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': '9b1ce9570bmsh59b1791ce745692p1e54f1jsnd41a710e42f9',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        } 

      }) .then((rawAlbum)=> {
         return rawAlbum.json()
      }).then((jsonAlbum)=> {
      console.log(jsonAlbum.data) 


      let ul = document.querySelector("ul")
      for(let i = 0; i < jsonAlbum.data.length; i++) {
          let singleSong = jsonAlbum.data[i]
          let li = document.createElement("li")
          li.innerText = singleSong.album.title
          ul.appendChild(li)
          container.innerHTML += `
          <div class='col col-3'>
              <div class="card">
                  <img src="${singleSong.album.cover_big}" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">${singleSong.title}</h5>
                  </div>
              </div>
          </div>`
       
      }
      }).catch(err => console.log(err))
     }


  getPinkFloyd()

   


