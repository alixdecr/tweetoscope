import propTypes from "prop-types";

function Tweet({ data, nameColor, textColor, backgroundColor, borderColor }) {
  return(
    <div style={{ backgroundColor: backgroundColor, border: "2px solid " + borderColor, left: data.position.x, top: data.position.y }} className="tweet">
      <p style={{ color: nameColor }}>{data.name} @{data.username} - {data.date}</p>
      <br/>
      <p style={{ color: textColor }}>{data.text}</p>
    </div>
  );
}

Tweet.defaultProps = {
  text: "Text goes here",
  nameColor: "#6175ff",
  textColor: "#e6e6e6",
  backgroundColor: "#2b2b2b",
  borderColor: "#6e6e6e"
};

Tweet.propTypes = {
  text: propTypes.string,
  color: propTypes.string,
  backgroundColor: propTypes.string,
  borderColor: propTypes.string
};

export default Tweet;
