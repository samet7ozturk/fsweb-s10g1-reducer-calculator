import React, { useReducer } from "react";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers/index";
import { addOne, applyNumber } from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddOne = () => {
    dispatch(addOne());
  };

  const handleApplyNumber = (number) => {
    dispatch(applyNumber(number));
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                value={"M+"}
                onClick={() => dispatch({ type: "ADD_TO_MEMORY" })}
              />
              <CalcButton
                value={"MR"}
                onClick={() => dispatch({ type: "RETRIEVE_MEMORY" })}
              />
              <CalcButton
                value={"MC"}
                onClick={() => dispatch({ type: "CLEAR_MEMORY" })}
              />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleApplyNumber(1)} />
              <CalcButton value={2} onClick={() => handleApplyNumber(2)} />
              <CalcButton value={3} onClick={() => handleApplyNumber(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleApplyNumber(4)} />
              <CalcButton value={5} onClick={() => handleApplyNumber(5)} />
              <CalcButton value={6} onClick={() => handleApplyNumber(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleApplyNumber(7)} />
              <CalcButton value={8} onClick={() => handleApplyNumber(8)} />
              <CalcButton value={9} onClick={() => handleApplyNumber(9)} />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={() =>
                  dispatch({ type: "SET_OPERATION", payload: "+" })
                }
              />
              <CalcButton
                value={"*"}
                onClick={() =>
                  dispatch({ type: "SET_OPERATION", payload: "*" })
                }
              />
              <CalcButton
                value={"-"}
                onClick={() =>
                  dispatch({ type: "SET_OPERATION", payload: "-" })
                }
              />
            </div>

            <div className="row ce_button">
              <CalcButton
                value={"CE"}
                onClick={() => dispatch({ type: "CLEAR_ALL" })}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
