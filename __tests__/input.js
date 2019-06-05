import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Component from '../Component.js';
configure({ adapter: new Adapter() });

describe('Component', () => {
  it('Given tabIndex', () => {
    const wrapper = mount(<Component tabIndex={10} disabled={false} />);
    const $el = wrapper.find('input');
    $el.simulate('focus');
    $el.simulate('blur');
    console.log($el.props());
    console.log(
      wrapper
        .update()
        .find('input')
        .props(),
    );
    expect(
      wrapper
        .update()
        .find('input')
        .props()['tabindex'],
    ).toEqual(1);
  });
});
