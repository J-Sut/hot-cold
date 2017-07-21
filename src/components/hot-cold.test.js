import React from 'react';
import {shallow} from 'enzyme';

import HotColdGame from './hot-cold';

describe('<HotColdGame />', () => {
    let pastGuesses = [];
    beforeAll(() => {
      for (let i = 0; i < 10; i++) {
        pastGuesses.push(`List ${i}`)
      }
    })

    it('Should render without crashing', () => {
      shallow(<HotColdGame pastGuesses={pastGuesses} />);
    })



})
