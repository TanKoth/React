const ButtonComponent = () => {
  const handleclick = () => {
    console.log("Button Clicked");
  };
  return <button onClick={handleclick}>CLick me</button>;
};

export default ButtonComponent;
