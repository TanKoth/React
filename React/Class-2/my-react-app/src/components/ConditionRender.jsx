const ConditionRender = ({ isLoggedIn, username }) => {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome {username} </h1> : <h1>Please logIN first.</h1>}
    </div>
  );
};

export default ConditionRender;
