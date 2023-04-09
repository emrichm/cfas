export interface DescriptionPart {
  title: string;
  text: string;
  button?: string;
  image: {
    url: string;
    alt: string;
    position: string;
  };
}
