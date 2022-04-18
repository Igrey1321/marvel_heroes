type Hero = {
  id: number;
  name: string;
  gender: string;
  occupation: string;
  image: string;
};

export type CardHeroProps = {
  data: Hero;
};
