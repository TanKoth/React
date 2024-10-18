const DisplayInfo = ({ fruits, personInfo }) => {
  return (
    <>
      <h1>Fruits :</h1>
      <ul>
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}
      </ul>
      <h1>Person Info :</h1>
      <p>Name : {personInfo.name}</p>
      <p>Age : {personInfo.age}</p>
    </>
  );
};

export default DisplayInfo;
