const AddOption = (props) => {
  const handleSubmit = (e) => {
    console.log("handleSum");
    e.preventDefault();
    props.onAddOption(e.target.elements.option.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="option" />
      <button>Add Option</button>
    </form>
  );
};

export default AddOption;
