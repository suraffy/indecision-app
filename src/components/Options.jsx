import Option from "./Option";

const Options = (props) => {
  return (
    <ul>
      {props.options.map((option) => (
        <Option key={option.id} option={option} />
      ))}
    </ul>
  );
};

export default Options;
