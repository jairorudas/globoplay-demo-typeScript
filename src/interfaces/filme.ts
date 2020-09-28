export default interface FilmeSchema {
  score: number;
  show: Show;
}

interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  premiered?: string;
  officialSite?: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network?: Network;
  webChannel?: Network;
  externals: Externals;
  image: Image;
  summary?: string;
  updated: number;
  _links: Links;
}

interface Links {
  self: Self;
  previousepisode?: Self;
  nextepisode?: Self;
}

interface Self {
  href: string;
}

interface Image {
  medium: string;
  original: string;
}

interface Externals {
  tvrage?: number;
  thetvdb?: number;
  imdb?: string;
}

interface Network {
  id: number;
  name: string;
  country: Country;
}

interface Country {
  name: string;
  code: string;
  timezone: string;
}

interface Rating {
  average?: number;
}

interface Schedule {
  time: string;
  days: string[];
}
