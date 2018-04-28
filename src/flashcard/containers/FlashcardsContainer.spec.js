
import React from 'react';
import expect from 'expect';
import {FlashcardsContainer} from './FlashcardsContainer';

import {mount} from "enzyme";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toastr from 'toastr';

jest.mock('toastr');

Enzyme.configure({adapter: new Adapter()});

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

function setup() {
  const props = {
    flashcards: [],
    actions: { saveFlashcard: () => { return Promise.resolve(); }},
    loadingFlashcards: false
  };

  return mount(<FlashcardsContainer {...props} />);
}

describe ('Flashcard Container Page', () => {
  it('doesnt change flashcard key', () => {

    const wrapper = setup();
    console.log(wrapper);
    const saveButton = wrapper.find('button').first();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().resetNewFlashcardKey).toBe(0);
  });
});
