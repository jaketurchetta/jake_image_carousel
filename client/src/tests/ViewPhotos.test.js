import React from 'react';
import ReactDOM from 'react-dom';
import ViewPhotos from '../components/ViewPhotos';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

// testing existence
describe('existence suite', () => {
  it('should exists', () => {
    const ViewPhotosShallow = shallow(<ViewPhotos />);
    const ViewPhotosMount = mount(<ViewPhotos />);
    const ViewPhotosRender = render(<ViewPhotos />)
    expect(ViewPhotosShallow.exists()).toBe(true)
    // expect(ViewPhotosMount.exists()).toBe(true)
    // expect(AppRender.exists()).toBe(true)
  });
})

// testing button
// describe('Test Button component', () => {
//   it('it calls start logout on button click', () => {
//     const mockLogout = jest.fn();
//     const wrapper = shallow(<ViewPhotos />);
//     wrapper.find('button').at(2).simulate('click');
//     expect(mockLogout).toHaveBeenCalled();
//   });
// });