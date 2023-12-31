function ListGroup() {
  let items = ["gsa", "sag", "ags"];
  if (items.length === 0) {
    return (
      <>
        {" "}
        <h1>List</h1>
        <p>No items found</p>
      </>
    );
  }
  return (
    <>
      <h1>List</h1>
      <ul className="ListGroup">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => console.log(event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
