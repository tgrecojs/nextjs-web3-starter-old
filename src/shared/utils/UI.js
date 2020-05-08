import { ChainDetails } from "../../Features/Styled"
const hasHashValue = (key, val) =>
  val.hash ? null : Array.isArray(val) ? null : Object.keys(val)
    .length ? null : (
      <ChainDetails>
        <h3>{key}:</h3>
        <p>{val}</p>
      </ChainDetails>
    );

export { hasHashValue }
