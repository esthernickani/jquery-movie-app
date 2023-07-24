let currentId = 0;
let moviesArr = [];

$("#form").on("submit", function(e) {
    e.preventDefault();
    let title = $("#title").val();
    let rating = $("#rating").val();

    $("#title").val("");
    $("#rating").val("");

    
    
        if (rating < 0 || rating > 10 || title.length < 2) {
            alert('Enter a valid movie title and rating should be between 0 and 10')
            return;
        } else {
            $("ul").append(`<li id=movie${currentId}><span class=title>${title}</span>. Rating: <span class=number>${rating}</span> ${'<button>Remove</button>'}</li>`);
            moviesArr.push({title: title, rating: rating, movie: `movie${currentId}`});
            currentId++;
        }
        console.log(moviesArr)
})

    $("ul").on('click', 'li', function(e) {
        //console.log(jQuery(this).attr("id").toString());
        let deletedMovieIndex = moviesArr.findIndex(mov => mov.movie === jQuery(this).attr("id"));
        moviesArr.splice(deletedMovieIndex, 1);
        
        $(this).remove('li');
        
        
    })

    $(".uparrowalphabet").on('click', function(e) {
        console.log('clicked');
        clearCurrentMovies();
        sortCurrentMoviesAscendAlphabet(moviesArr);
        appendToHtml(moviesArr);
    })

    $(".downarrowrating").on('click', function(e) {
        console.log('clicked');
        clearCurrentMovies();
        sortCurrentMoviesAscendRating(moviesArr);
        appendToHtml(moviesArr);
    })

    $(".uparrowrating").on('click', function(e) {
        console.log('clicked');
        clearCurrentMovies();
        sortCurrentMoviesDescendRating(moviesArr);
        appendToHtml(moviesArr);
    })

    $(".downarrowalphabet").on('click', function(e) {
        console.log('clicked');
        clearCurrentMovies();
        sortCurrentMoviesDescendAlphabet(moviesArr);
        appendToHtml(moviesArr);
    })

    function clearCurrentMovies() {
        $("ul").html("");
    }

    function sortCurrentMoviesAscendAlphabet(arr) {
        return arr.sort((a, b) => (a.title > b.title)? 1 : -1)
    }

    function sortCurrentMoviesAscendRating(arr) {
        function numericSortAscend(a, b) {
            return a.rating - b.rating
        }

        arr.sort(numericSortAscend);
    }

    function sortCurrentMoviesDescendAlphabet(arr) {
        return arr.sort((a, b) => (a.title > b.title)? -1 : 1)
    }

    function sortCurrentMoviesDescendRating(arr) {
        function numericSortDescend(a, b) {
            return b.rating - a.rating
        }

        arr.sort(numericSortDescend);
    }

    function appendToHtml(arr) {
        arr.forEach(movie => {
            $("ul").append(`<li><span class=title>${movie.title}</span>. Rating: <span class=number>${movie.rating}</span> ${'<button>Remove</button>'}</li>`);
        });
    }



        console.log(moviesArr)

    
     
    