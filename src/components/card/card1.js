const Card = ({ price, speed, description, isSelected, onClick }) => {
    const handleClick = () => {
      onClick(price);
    };
  
    return (
      <div
        className={isSelected ? "app__card card_action" : "app__card"}
        onClick={handleClick}
      >
        <div>Безлимитный {price}</div>
        <div>
          <p className="up">руб</p>
          <span>{price}</span>/мес
        </div>
        <div>до {speed} Mбит/сек </div>
        <div>{description}</div>
      </div>
    );
  };
  
  export default Card;