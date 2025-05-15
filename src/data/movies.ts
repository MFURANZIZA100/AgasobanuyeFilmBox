import  { Movie } from '../types';

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Black Panther',
    description: 'Umwami mushya wa Wakanda arwanya umugambi wo gufungura igihugu cye ku isi.',
    category: 'Action',
    year: '2018',
    duration: '134',
    poster: 'https://images.unsplash.com/photo-1485095329183-d0797cdc5676?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2luZW1hJTIwbW92aWUlMjBwb3N0ZXJzfGVufDB8fHx8MTc0NzIwMDcxM3ww&ixlib=rb-4.1.0',
    videoUrl: 'https://example.com/movie1'
  },
  {
    id: '2',
    title: 'Queen of Katwe',
    description: 'Umukobwa wo mu gace ka Katwe muri Uganda abona ubuzima bushya binyuze mu mikino ya shogi.',
    category: 'Drama',
    year: '2016',
    duration: '124',
    poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxhZnJpY2FuJTIwY2luZW1hJTIwbW92aWUlMjBwb3N0ZXJzfGVufDB8fHx8MTc0NzIwMDcxM3ww&ixlib=rb-4.1.0',
    videoUrl: 'https://example.com/movie2'
  },
  {
    id: '3',
    title: 'Tsotsi',
    description: 'Umuhungu w\'umuyoboozi w\'umutwe w\'abajura atangira guhinduka ubwo yiba umwana w\'uruhinja.',
    category: 'Drama',
    year: '2005',
    duration: '94',
    poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxhZnJpY2FuJTIwY2luZW1hJTIwbW92aWUlMjBwb3N0ZXJzfGVufDB8fHx8MTc0NzIwMDcxM3ww&ixlib=rb-4.1.0',
    videoUrl: 'https://example.com/movie3'
  },
  {
    id: '4',
    title: 'A Shop for Killers',
    description: 'Umukobwa asanga nyirarume wari umucuruzi w\'ibikoresho byo kwica yapfuye mu buryo butunguranye.',
    category: 'Action',
    year: '2022',
    duration: '120',
    poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxhZnJpY2FuJTIwY2luZW1hJTIwbW92aWUlMjBwb3N0ZXJzfGVufDB8fHx8MTc0NzIwMDcxM3ww&ixlib=rb-4.1.0',
    videoUrl: 'https://example.com/movie4'
  },
  {
    id: '5',
    title: 'Squid Game',
    description: 'Abantu bafite imyenda myinshi batoranijwe mu mukino ukomeye ushobora gutanga igihembo kinini ariko ukabasha no kubakosta ubuzima.',
    category: 'Horror',
    year: '2021',
    duration: '142',
    poster: 'https://images.unsplash.com/photo-1485095329183-d0797cdc5676?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2luZW1hJTIwbW92aWUlMjBwb3N0ZXJzfGVufDB8fHx8MTc0NzIwMDcxM3ww&ixlib=rb-4.1.0',
    videoUrl: 'https://example.com/movie5'
  },
  {
    id: '6',
    title: 'Master of the House',
    description: 'Umugabo ujijutse atangira gusoma inyandiko za nyakwigendera umugore we yahishuye ubuzima bwe bw\'ibanga.',
    category: 'Drama',
    year: '2020',
    duration: '110',
    poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxhZnJpY2FuJTIwY2luZW1hJTIwbW92aWUlMjBwb3N0ZXJzfGVufDB8fHx8MTc0NzIwMDcxM3ww&ixlib=rb-4.1.0',
    videoUrl: 'https://example.com/movie6'
  }
];

export const categories: { id: string; name: string; count: number }[] = [
  { id: '1', name: 'Action', count: 922 },
  { id: '2', name: 'Drama', count: 339 },
  { id: '3', name: 'Horror', count: 30 },
  { id: '4', name: 'Romantic', count: 90 },
  { id: '5', name: 'Indian', count: 31 },
  { id: '6', name: 'Documentaries', count: 5 },
  { id: '7', name: 'Cartoon', count: 2 },
  { id: '8', name: 'By Yanga', count: 18 }
];
 