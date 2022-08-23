import { styled } from "stitches";

const HeaderContent = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const HeaderControls = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingLeft: "$5",
  paddingRight: "$4",

  "@xs": {
    width: "100%",
    justifyContent: "center",
    padding: "$4 $1 0 0",
  },
});

const HeaderStyled = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingBottom: "$4",
  margin: "0",
  color: "$primary",
  lineHeight: "1.4em",
  alignItems: "flex-end",

  "@xs": {
    flexDirection: "column",
  },

  ".bloom-header-homepage": {
    color: "$accent",
    textDecoration: "none",
  },

  ".bloom-header-label": {
    fontSize: "$6",
    fontWeight: "400",
    fontFamily: "$display",
  },

  ".bloom-header-summary": {
    fontSize: "$4",
    marginTop: "$2",
  },
});

export { HeaderContent, HeaderControls, HeaderStyled };
