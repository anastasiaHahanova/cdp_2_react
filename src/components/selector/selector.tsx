import React, { useState } from "react";
import './selector.scss';

const ARROW_LEFT: string = '\u2190';
const ARROW_RIGHT: string = '\u2192';

interface OptionProps {
  name: string,
  id: string,
}

interface OptionsProps {
  options: Array<OptionProps>,
}

interface StateProps {
  allOptions: OptionsProps,
  activeOptions: OptionsProps | Array<[]>,
}

interface IdProp {
  id: string,
}

interface ToggleProps {
  cancelOption: (event: React.MouseEvent<HTMLButtonElement>) => void,
  chooseOption: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

const Selector = ({ options }: OptionsProps) => {
  const [state, setState] = useState({
    allOptions: options,
    activeOptions: [],
  });

  const { allOptions, activeOptions } = state;

  const chooseOption = ({ target }: React.MouseEvent<HTMLButtonElement>) => {
    const {
      textContent: optionText,
      id: optionId,
    }: any = target;

    setState((state: any) => {
      const { activeOptions } = state;
      if (activeOptions.some(({ id }: IdProp) => id === optionId)) {
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
  }: any) => {
    setState(state => {
      const { activeOptions } = state;
      const updatedAllOptions = activeOptions.filter(({ id }) => id !== optionId);

      return {
        ...state,
        activeOptions: updatedAllOptions,
      };
    });
  };

  const getOption = ({ name, id }: OptionProps, handler: any) => {
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
