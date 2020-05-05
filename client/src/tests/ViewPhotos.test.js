import React from 'react';
import ReactDOM from 'react-dom';
import ViewPhotos from '../components/ViewPhotos.jsx';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

//testing existence
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