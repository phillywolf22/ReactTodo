import "./Phildawg.css";

const phildawg = () => {
  const getValue = e => {
    e.currentTarget.style.backgroundColor = "salmon";
    e.currentTarget.classList.add("my-class-1");
  };
  return (
    <div className="phil">
      <p onClick={getValue}>this is phildawg</p>
    </div>
  );
};

export default phildawg;
