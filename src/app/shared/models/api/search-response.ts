export interface SearchResponse {
  albums: {
    href: string;
    items: [
      {
        name: string;
        id: string;
        type: string;
        artists: [
          {
            name: string;
            type: string;
            id: string;
          }
        ];
        images: [
          {
            url: string;
          }
        ]
      }
    ]
  }
}
