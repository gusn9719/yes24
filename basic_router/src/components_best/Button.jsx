import "../css_best/Button.css";

export default function Button({ text, className }) {
  // console.log(text);
  // console.log(className);

  return (
    <button type="button" className={className}>
      {text}
    </button>
  );
}
