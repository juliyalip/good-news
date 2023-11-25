import krakow1 from "../images/krakow/Krakow1.jpg";
import krakow2 from "../images/krakow/Krakow2.jpg";
import krakow3 from "../images/krakow/Krakow3.jpg";
import krakow4 from "../images/krakow/Krakow4.jpg";
import krakow5 from "../images/krakow/Krakow5.jpg";

export interface ICity {
  id: string;
  url: string;
  city: string;
  spoiler: string;
  title: string;
  context: string;
}

export const articles: ICity[] = [
  {
    id: "001",
    url: krakow1,
    title: "title-1",
    city:"Krakow" ,
    spoiler: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    context:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "002",
    url: krakow2,
   
    title: "title-1",
    city:"Krakow" ,
    spoiler: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    context:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "003",
    url: krakow3,
    title: "title-1",
    city:"Krakow" ,
    spoiler: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    context:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "004",
    url: krakow4,
    title: "title-1",
    city:"Krakow" ,
    spoiler: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    context:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "005",
    url: krakow5,
    title: "title-1",
    city:"Krakow" ,
    spoiler: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    context:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];
