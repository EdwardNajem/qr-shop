import { createContext, useState } from 'react';
import accounts from '../accounts/accounts';

export const LoginContext = createContext(null);

const getDefaultAccount = () => {
  let account = {
    accountid: null,
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
    const accountinfo = accounts.find((account) => account.accemail === name);
    if (account.accountemail === name && account.accountpassword === password) {
      setLoggedin(true);
    }
    else if (accountinfo){
      setAccount((prev) => ({ ...prev, accountid: accountinfo.accid }));
      setAccount((prev) => ({ ...prev, accountemail: accountinfo.accemail }));
      setAccount((prev) => ({ ...prev, accountname: accountinfo.accfirstname + " " + accountinfo.acclastname }));
      setAccount((prev) => ({ ...prev, accountpassword: accountinfo.accpassword }));
      setAccount((prev) => ({ ...prev, modeOfContact: accountinfo.accpassword }));
      setLoggedin(true);
    }
  };

  const SubmitSignup = (email, name, password, mode) => {
    setAccount((prev)=> (10));
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
