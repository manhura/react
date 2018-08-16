import * as connect from '../connect';
import * as actions from '../../../actions/user';

jest.mock('../../../actions/user.js', () => ({
  getAuth: jest.fn(),
}));

describe('MapDispatchToProps', () => {
  const dispatch = jest.fn();

  it('Should return object with properties getAuth', () => {
    expect(connect.mapDispatchToProps(dispatch)).toEqual({
      getAuth: actions.getAuth(dispatch),
    });
  });
});

describe('MapStateToProps', () => {
  const state = {
    user: {
      authenticated: expect.any(Boolean),
      isWaiting: expect.any(Boolean),
    },
  };

  it('Should return object with user property', () => {
    expect(connect.mapStateToProps(state)).toEqual({
      isAuth: state.user.authenticated,
      isLoad: state.user.isWaiting,
    });
  });
});
