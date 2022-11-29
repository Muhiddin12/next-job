let urlForMovieGallery = `https://api.themoviedb.org/3/movie/now_playing?api_key=ffd716e442cea750f989f65854a0cb89&language=en-US&page=1`
fetch(urlForMovieGallery)
  .then((value) => value.json())
  .then((response) => {
    console.log(response)
    let galleryCont = document.querySelector('.gallery-cont')
    let arrMovies = response.results.slice(0, 20);
    arrMovies.map((item) => {
      let galleryItem = document.createElement('div')
      galleryItem.className = 'gallery-item'
      let galleryItemCont = document.createElement('div')
      galleryItemCont.className = 'galley-item-cont'
      let galleryImage = document.createElement('div')
      galleryImage.className = 'gallery-image'
      let imageG = document.createElement('img')
      imageG.src = `https://image.tmdb.org/t/p/original/${item.poster_path}`
      let galleryText = document.createElement('div')
      galleryText.className = 'gallery-text'
      let galleryRating = document.createElement('div')
      galleryRating.className = 'gallery-rating'
      // let icon = document.createElement('i')
      // icon.className = 'fa-solid fa-star'
      let ratingGalleryP = document.createElement('p')
      ratingGalleryP.textContent = `Rating : ${item.vote_average}`;
      let galleryName = document.createElement('div')
      galleryName.className = 'gallery-name'
      let galleryNameh2 = document.createElement('h2')
      galleryNameh2.textContent = item.release_date;

      galleryName.appendChild(galleryNameh2)
      // galleryRating.appendChild(icon)
      galleryRating.appendChild(ratingGalleryP)
      galleryText.appendChild(galleryRating)
      galleryText.appendChild(galleryName)
      galleryImage.appendChild(imageG)
      galleryItemCont.appendChild(galleryImage)
      galleryItemCont.appendChild(galleryText)
      galleryItem.appendChild(galleryItemCont)
      galleryCont.appendChild(galleryItem)
    })
  })
  
        
        // scroll   Arrow Button

const scrollBtn = document.querySelector('.arrow');

if(scrollBtn) {
    window.addEventListener('scroll', () => {
        if(pageYOffset > (window.innerHeight * 1.2)) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    scrollBtn.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
};

        //   Buttton Moon

        let moonIcon = document.querySelector('.iconMoonInTwoF img');

        moonIcon.onclick = function(){
            document.body.classList.toggle('dark-theme');
            if(document.body.classList.contains('dark-theme')){
                moonIcon.src = './image/sun.png';
            } else {
                moonIcon.src = './image/moon.png';
            }
        }
        

        // Mobile version Hamburger

        let menu = document.querySelector('#side-menu')
        let sideBar = document.querySelector('.first-section')
        let sidebarCount = 0;
        
        menu.onclick = () => {
          menu.classList.toggle('fa-times');
          sideBar.classList.toggle('active');
          if(sidebarCount === 0) {
            sidebarCount++
            document.querySelector('.navbarF').style.backgroundColor = 'var(--first-color)';
          } else {
            sidebarCount--
            document.querySelector('.navbarF').style.backgroundColor = `var(--navColor-color)`;
          }
          
        };

                  //   Mobile  Moon
let moonIconT = document.querySelector('.iconMoonInTwoT img');

moonIconT.onclick = function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        moonIconT.src = './image/sun.png';
    } else {
        moonIconT.src = './image/moon.png';
    }
}
