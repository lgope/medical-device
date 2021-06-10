import { Fragment, useState, ChangeEvent } from 'react';

// redux stuff
import { loginUser } from '../../redux/actions/authActions';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectAuth } from '../../redux/reducers/authReducers';


const LoginForm = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const auth = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser(state => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    dispatch(loginUser(user));
  };

  return (
    <Fragment>
      <div className='login-page'>
        <div className='container'>
          <div className='row no-gutter'>
            <div className='col-md-2 col-lg-3'></div>
            <div className='col-md-8 col-lg-6'>
              <div className='login d-flex align-items-center py-5'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-12 col-lg-12 mx-auto'>
                      <br />
                      <h3 className='login-heading mb-4'>Welcome back!</h3>
                      <form>
                        {auth.isLoading && <h2>Loading...</h2>}
                        <div className='form-label-group'>
                          <input
                            type='email'
                            name='email'
                            id='inputEmail'
                            className='form-control'
                            placeholder='Email address'
                            required
                            autoFocus
                            value={user.email}
                            onChange={handleOnChange}
                          />
                          <label htmlFor='inputEmail'>Email address</label>
                        </div>

                        <div className='form-label-group'>
                          <input
                            type='password'
                            name='password'
                            id='inputPassword'
                            className='form-control'
                            placeholder='Password'
                            required
                            value={user.password}
                            onChange={handleOnChange}
                          />
                          <label htmlFor='inputPassword'>Password</label>
                        </div>

                        <div className='custom-control custom-checkbox mb-3'>
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id='customCheck1'
                          />
                          <label
                            className='custom-control-label'
                            htmlFor='customCheck1'
                          >
                            Remember password
                          </label>
                        </div>
                        <button
                          className='btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2'
                          type='submit'
                          onClick={handleOnSubmit}
                        >
                          Sign in
                        </button>
                        <div className='text-center'>
                          <a className='small' href='/'>
                            Forgot password?
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginForm;
