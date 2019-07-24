import React from 'react';
import {
  shallow
} from 'enzyme';
import {
  SearchOutput
} from './SearchOutput';
import {
  findGenres
} from '../../utils/API/ApiFetch';
import {
  getMovies
} from '../../thunks/getMoviesThunk';

jest.mock("../../utils/API/ApiFetch");

// describe('SearchOutput', () => {
//       let wrapper, instance, mockGetMovies;
//       mockGetMovies = jest.fn().mockImplementation(() => Promise.resolve())
//       findGenres.mockImplementation(() => Promise.resolve({
//         genres: ['romance']
//       }))


//       beforeEach(() => {
//           wrapper = shallow( < App getMovies = {
//               mockGetMovies
//             }
//             specificMovie = {
//               {
//                 title: 'title'
//               }
//             }
//             />);
//             instance = wrapper.instance();
//           });

//         it('should match snapshot', () => {
//           expect(wrapper).toMatchSnapshot()
//         });

//         it('should have a default state', () => {
//             wrapper = shallow( < App getMovies = {
//                 mockGetMovies
//               }
//               specificMovie = {
//                 {
//                   title: 'title'
//                 }
//               }
//               />, { disableLifecycleMethods: true });
//               expect(wrapper.state()).toEqual({
//                 genres: []
//               });
//             });

//           describe('CDM', () => {
//             it('should invoke findGenres', () => {
//               instance.componentDidMount();
//               expect(findGenres).toHaveBeenCalled()
//             });
//             it('should set state to genres', async () => {
//               await instance.componentDidMount()
//               expect(wrapper.state('genres')).toEqual(['romance'])
//             });
//           })
//           })