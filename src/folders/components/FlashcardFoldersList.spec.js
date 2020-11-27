import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});
import FlashcardFoldersList from './FlashcardFoldersList';

function setup() {
  const props = {
    flashcardFolders: [],
    onSave: () => {
    },
    onChange: () => {
    }
  };

  return shallow(<FlashcardFoldersList {...props} />);
}

describe('FlashcardFoldersList', () => {
  it('save button is labeled "Add new folder"', () => {
    const wrapper = setup();
    expect(wrapper.find('button').last().text()).toBe('Add new folder');
  });
});
