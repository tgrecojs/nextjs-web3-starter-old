import { Fragment } from "react"
import { hasHashValue } from "../../shared/utils/UI"
import cuid from "cuid";

const Item = ({ data = [], selectedCurrency = '' }) => {
  return (
    <>
      <h3>Current Currency: {selectedCurrency}</h3>
      {data.map(x => (
        <Fragment key={cuid()}>{hasHashValue(x.key, x.val)}</Fragment>
      ))}
    </>
  );
};

export default Item;

