const Wrapper = props => {
  const styles = props.styles ? props.styles : "";

  return (
    <div className={"mt-12 flex-wrap xs:gap-24 " + styles}>
      {props.children}
    </div>
  );
};

export default Wrapper;
