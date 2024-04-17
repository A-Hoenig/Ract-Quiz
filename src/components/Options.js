function Options({ question }) {
  return (
    <div>
      <div className="options">
        {question.options.map((option) => (
          <button className="btn nbtn-option" key={option}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options;
