import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});
import NewFlashcard from './NewFlashcard';

function setup() {
  const props = {
    onSave: () => {
    },
    onChange: () => {
    }
  };

  return shallow(<NewFlashcard {...props} />);
}

describe('NewFlashcard', () => {
  it('save button is labeled "Add flashcard"', () => {
    const wrapper = setup();
    expect(wrapper.find('button').last().text()).toBe('Add flashcard');
  });
});
