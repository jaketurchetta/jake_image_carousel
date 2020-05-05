import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.jsx';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

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

//testing existence
describe('existence suite', () => {
  it('should exists', () => {
    const AppShallow = shallow(<App />);
    const AppMount = mount(<App />);
    const AppRender = render(<App />)
    expect(AppShallow.exists()).toBe(true)
    expect(AppMount.exists()).toBe(true)
    // expect(AppRender.exists()).toBe(true)
  });
})

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
    expect(wrapper.find('h1').first().text()).toEqual('Large Box')
    // expect(wrapper.find('h1').second().text()).toEqual('Small Box 1')
    expect(wrapper.find('h2').first().text()).toEqual('Im from App.jsx')
  });
})

//testing button
// describe('this.state suite', () => {
//   it('should check button', () => {
//     const Appwrapper = mount(<App />);
//     // const text = wrapper.find('div div')  //.find('#test')
//     expect(Appwrapper.exists()).toBe(true)
//   });
// })

//testing API call

