import React from "react";
import { createUseStyles } from "react-jss";

// Define the styles using JSS
const useStyles = createUseStyles({
  button: {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    '&:hover': {
      backgroundColor: "darkblue"
    }
  },
  text: {
    fontSize: "20px",
    color: "black",
    marginBottom: "10px",
  },
});

const MyButton = () => {
  // Use the styles in your component
  const classes = useStyles();

  return (
    <div>
      <p className={classes.text}>Click the button below:</p>
      <button className={classes.button}>Click Me</button>
    </div>
  );
};

export default MyButton;
