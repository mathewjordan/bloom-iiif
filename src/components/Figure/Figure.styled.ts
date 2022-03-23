import { styled } from "stitches";

const FigureStyled = styled("figure", {
  display: "flex",
  flexDirection: "column",
  padding: "0",
  margin: "0",

  figcaption: {
    display: "flex",
    flexDirection: "column",
  },
});

const Image = styled("img", {
  backgroundColor: "black",
  width: "$8",
  height: "$7",
  objectFit: "contain",
});

const Title = styled("span", {
  marginTop: "$2",
  fontSize: "$3",
  fontWeight: "700",
});

const Description = styled("span", {
  fontSize: "$2",
  marginTop: "$1",
});

export { FigureStyled, Image, Title, Description };
