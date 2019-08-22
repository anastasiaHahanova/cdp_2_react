import React, { useState } from "react";
import './selector.scss';

const ARROW_LEFT = '\u2190';
const ARROW_RIGHT = '\u2192';

const Selector = ({ options }) => {
  const [state, setState] = useState({
    allOptions: options,
    activeOptions: [],
  });

  const { allOptions, activeOptions } = state;

  const chooseOption = ({ target }) => {
    const {
      textContent: optionText,
      id: optionId,
    } = target;

    setState(state => {
      const { activeOptions } = state;
      if (activeOptions.some(({ id }) => id === optionId)) {
        return state;
      }

      return {
        ...state,
        activeOptions: [
          ...activeOptions, {
            name: optionText,
            id: optionId,
          },
        ],
      };
    });
  };

  const cancelOption = ({
    target: {
      id: optionId,
    },
  }) => {
    setState(state => {
      const { activeOptions } = state;
      const updatedAllOptions = activeOptions.filter(({ id }) => id !== optionId);

      return {
        ...state,
        activeOptions: updatedAllOptions,
      };
    });
  };

  const getOption = ({ name, id }, handler) => {
    return (
      <li className="selector__item"
        onClick={handler}
        key={`active_${id}`}
        id={id}
      >
        {name}
      </li>
    );
  };

  return (
    <div className="selector">
      <ul className="selector__list">
        {allOptions.map(option => getOption(option, chooseOption))}
      </ul>
      <div className="selector__arrows">
        <button className="selector__arrow">{ARROW_RIGHT}</button>
        <button className="selector__arrow">{ARROW_LEFT}</button>
      </div>
      <ul className="selector__list">
        {activeOptions.map(option => getOption(option, cancelOption))}
      </ul>
    </div>
  );
}

export default Selector;
