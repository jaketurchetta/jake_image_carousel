import React from 'react';
import App from '../components/App.jsx';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount, render} from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

//simple testing make it works in this file
describe('App',() => {
  it('it should be true', () => {
    const foo = true;
    expect(foo).toBe(true);
  });
  // it('should be false', () => {
  //   const foo = true;
  //   expect(foo).toBe(false);
  // })
});

//testing components div
describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<div></div>).exists()).toBe(true);
  });
  it('should render without throwing an error', function() {
    expect(shallow(<h1>Im from App.jsx</h1>).exists()).toBe(true);
  });
});

describe('B suite', () => {
  it('should show text', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('div div')
    expect(text.text()).toBe('Im from App.jsx')
  });
})

//testing API call