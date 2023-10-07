const AddOption = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const optionEl = e.target.elements.option;

    const error = props.onAddOption(optionEl.value.trim());

    if (!error) optionEl.value = "";
    console.log(error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="option" />
      <button>Add Option</button>
    </form>
  );
};

export default AddOption;
