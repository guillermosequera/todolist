import React from 'react';
import { shallow, configure, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react.16';
import App, { Todo } from './App';

configure({ adapter: new Adapter() })

describe("App", () => {
  describe('Todo', () => {
    const removeTodo = jest.fn();
    const index = 5;
    const todo = {
      text: 'lala'
    };

    const wrapper = shallow(
    <Todo 
      removeTodo={removeTodo}
      index={index}
      todo={todo}
    />
    );
    wrapper
      .find('button')
      .at(0)
      .simulate('click');

      expect(removeTodo.mock.calls).toEqual([[5]]);
  });
});