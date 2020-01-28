import { describe, Try } from "riteway";
import {
  reducer,
  fetchWallet,
  reportError,
  reportSuccess,
  handleSuccess,
  handleError
} from "./reducer";
import { createAsyncState } from "../shared/utils/testing";
// a function to test
describe("reducer()", assert => {
  const testError = new Error("default error message");
  assert({
    given: "no arguments",
    should: "have a status of idle",
    actual: reducer(undefined).status,
    expected: "idle"
  });
  {
    // fetchWallet
    const setup = reducer(undefined);
    assert({
      given: "fetchWallet()",
      should: "transition to a status of fetching",
      actual: reducer(setup, fetchWallet()).status,
      expected: "fetching"
    });
  }
  {
    const setup = reducer(undefined, fetchWallet());

    // reportError & handleError
    const payload = new Error("testing reportError function");
    assert({
      given: "reportError()",
      should: "transition to a status of error",
      actual: reducer(setup, reportError(payload)).status,
      expected: "error"
    });
    assert({
      given: "reportError()",
      should: "update the payload with an error message.",
      actual: reducer(setup, reportError(payload)).payload,
      expected: payload
    });
  }
  {
    const setup = reducer(
      reducer(undefined, fetchWallet()),
      reportError(testError)
    );

    // const actions = [
    //   fetchWallet(),
    //   reportError(new Error("error")),
    //   handleError()
    // ].reduce(reducer, undefined);

    assert({
      given: "handleError()",
      should: "update the status to be idle",
      actual: reducer(setup, handleError()).status,
      expected: "idle"
    });
  }
});
