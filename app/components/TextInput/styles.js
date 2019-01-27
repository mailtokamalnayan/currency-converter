import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  //   $outline: 1,
  container: {
    marginBottom: "1rem",
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonText: {
    color: "rgba(255,255,255,0.2)",
    height: "2rem",
    paddingHorizontal: "0.5rem",
    marginTop: "0.5rem"
  },
  input: {
    fontSize: "2rem",
    fontWeight: "300",
    color: "white",
    borderBottomWidth: 2,
    borderColor: "rgba(255,255,255,0.4)"
  },
  inputDisabled: {
    fontSize: "4rem",
    borderBottomWidth: 0
  }
});
