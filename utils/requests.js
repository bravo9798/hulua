const API_KEY=process.env.API_KEY;

export default {
    fetchTrending:{
        title:'Trending',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title:"Top Rated",
        url:`/movie/top_rated?api_key=${API_KEY}&`
    },
    fetchActionMovies:{
        title:"Action",
        url:`/movie/tok`
    },

    fetchComedyMovies:{
        title:"Comedy",

    },
    fetchHorrorMovies:{
        title:"Horror",
    },
    fetchRomanceMovies:{
        title:"Romance"
    },
    fetchMystery:{
        title:"Mystery"
    },
    fetchSciFi:{
        title:"Scifi"
    },
    fetchWestern:{
        title:"Western"
    },
    fetchAnimation:{
        title:"Animation"
    },
    fetchTV:{
        title:"TV Movie",
    }


}