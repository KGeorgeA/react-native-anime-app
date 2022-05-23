import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// export type RootStackParamsList = {
//   Login: undefined;
//   Main: MainStackParamsList | undefined;
//   Anime: {
//     animeId: number;
//   };
// };

export type RootStackParamsList = {
  Auth: AuthStackParamsList;
  Main: MainStackParamsList;
}

export type AuthStackParamsList = {
  Login: undefined;
  // SignIn: undefined;
  // SignUp: {
  //   token: string;
  // };
}

export type MainStackParamsList = {
  List: undefined;
  Map: undefined;
  Search: undefined;
  Comments: undefined;
  Notifications: undefined;
  Media: {
    isCameraPermission: boolean;
  };
};

export type ListStackParamsList = {
  CardList: undefined;
  Anime: {
    animeId: number;
  };
}

export type AnimeScreenProp = NativeStackNavigationProp<
  ListStackParamsList,
  'Anime'
>;

export type MainScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'Main'
>;

export type GetParams = {
  page: number;
  limit: number;
  q?: string;
  type?: TypesEnum;
  score?: number;
  min_score?: number;
  max_score?: number;
  status?: StatusesEnum;
  rating?: RatingsEnum;
  sfw?: boolean;
  genres?: string;
  genres_exclude?: string;
  order_by?: OrderEnum;
  sort?: 'desc' | 'asc';
  letter?: string;
  producers?: string;
};

export type TypesEnum = 'tv' | 'movie' | 'ova' | 'spceial' | 'ona' | 'music';

export type StatusesEnum = 'airing' | 'complete' | 'upcoming';

export type RatingsEnum = 'g' | 'pg' | 'pg13' | 'r17' | 'r' | 'rx';

export type OrderEnum = 'mal_id'
  | 'title'
  | 'type'
  | 'rating'
  | 'start_date'
  | 'end_date'
  | 'episodes'
  | 'score'
  | 'scored_by'
  | 'rank'
  | 'popularity'
  | 'members'
  | 'favorites';

export type CardProps = {
  item: Anime;
  navigate: any;
};

export interface RenderedItemProps {
  item: Anime;
}

export interface CustomButtonProps {
  iconName: string;
  iconColor: string;
  iconSize: number;
  buttonText: string;
}

export interface State {
  films: Anime[];
  refresh: boolean;
  currentAnime: Anime | null;
  apiPagination: APIPagination;
}

export type APIPagination = {
  current_page: number;
  last_visible_page?: number;
  has_next_page?: boolean;
  items: {
    count: number;
    total?: number;
    per_page?: number;
  };
}

export type Anime = {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
  };
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: {
    from: string;
    to: string;
    prop: unknown;
  };
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: AnimeNestedRelationType;
  producers: AnimeNestedRelationType;
  licensors: AnimeNestedRelationType;
  studios: AnimeNestedRelationType;
  genres: AnimeNestedRelationType;
  explicit_genres: AnimeNestedRelationType;
  themes: AnimeNestedRelationType;
  demographics: AnimeNestedRelationType;
};

type AnimeNestedRelationType = Array<{
  mal_id: number;
  type: string;
  name: string;
  url: string;
}>;
