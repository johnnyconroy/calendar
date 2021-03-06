// @flow
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MaterialLoader from './MaterialLoader';
import '../../styles/loaders.css';

type Props = {
  suLoading: boolean,
  signUpUser: Function,
  styles: Object,
}

const SignUpButton = (props: Props) => {
  const { suLoading, signUpUser, styles } = props;
  return suLoading === true ?
    <div className="signLoader">
      <MaterialLoader size={10} />
    </div> :
    <RaisedButton
      label="Submit"
      primary={true}
      style={styles.button}
      onClick={signUpUser}
    />;
};

export default SignUpButton;
