const Wrapper = props => {
  const styles = props.styles ? props.styles : "";

  return <div className={"mt-12 flex-wrap " + styles}>{props.children}</div>;
};

export default Wrapper;
