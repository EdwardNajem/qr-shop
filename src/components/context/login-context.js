import { createContext, useState } from 'react';

export const LoginContext = createContext(null);

const getDefaultAccount = () => {
  let account = {
    accountemail: null,
    accountname: null,
    accountpassword: null,
    modeOfContact: null,
  };
  return account;
};

export const LoginContextProvider = (props) => {
  const [loggedin, setLoggedin] = useState(false);
  const [account, setAccount] = useState(getDefaultAccount());

  const SubmitLogin = (name, password) => {
    if (account.accountemail === name && account.accountpassword === password) {
      setLoggedin(true);
    }
  };

  const SubmitSignup = (email, name, password, mode) => {
    setAccount((prev) => ({ ...prev, accountemail: email }));
    setAccount((prev) => ({ ...prev, accountname: name }));
    setAccount((prev) => ({ ...prev, accountpassword: password }));
    setAccount((prev) => ({ ...prev, modeOfContact: mode }));
  };

  const Signout = () => {
      setAccount(getDefaultAccount());
      setLoggedin(false);
  };

  const contextValue = {
    loggedin,
    account,
    SubmitLogin,
    SubmitSignup,
    Signout,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {props.children}
    </LoginContext.Provider>
  );
};
