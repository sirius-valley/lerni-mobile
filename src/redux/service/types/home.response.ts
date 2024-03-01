export interface SearchQueryParams {
  page?: string;
  filter?: string;
  search?: string;
}

interface SearchResult {
  searchType: string;
  id: string;
  name: string;
  icon: string;
  description: string | null;
}

export interface SearchResponse {
  results: SearchResult[];
  maxPage: number;
  currentPage: number;
}
