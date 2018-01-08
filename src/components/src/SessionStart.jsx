import React from 'react';
import firebase from 'firebase';
import { hashHistory } from 'react-router';
import ButtonLight from '../core/ButtonLight.jsx';
import Spinner from '../core/Spinner.jsx';
import TextInput from '../core/TextInput.jsx';
import styles from './SessionStart.scss';

class SessionStart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      isCreating: false,
      isJoining: false,
    };
    this.onCreate = this.onCreate.bind(this);
    this.onJoin = this.onJoin.bind(this);
  }
  onCreate() {
    this.setState({ isCreating: true });
    const id = (Math.random().toString(36).replace(/[^a-z1-9]+/g, '') +
    Math.random().toString(36).replace(/[^a-z1-9]+/g, '')).toUpperCase();
    firebase.database().ref(`/sessions/${id}`).set({
      id,
    }).then(() => {
      this.setState({ isCreating: false });
      hashHistory.push(`/sessions/${id}`);
    });
  }
  onJoin() {
    if (this.input.value === '') {
      this.setState({ error: 'Enter a Session Code' });
      return;
    }
    this.setState({ isJoining: true });
    firebase.database().ref('/sessions/').once('value').then((snapshot) => {
      if (snapshot.hasChild(this.input.value)) {
        hashHistory.push(`/sessions/${this.input.value}`);
      } else {
        this.setState({
          error: 'Invalid Session Code',
          isJoining: false,
        });
      }
    });
  }
  render() {
    const { error, isCreating, isJoining } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          Study Share
        </div>
        <div className={styles.body}>
          <div className={styles.startBox}>
            <div className={styles.title}>
              Create a Study Session
            </div>
            {isCreating ?
              <Spinner />
              :
              <ButtonLight text={'Create'} onClick={this.onCreate} />
            }
            <div className={styles.title}>
              Or Enter a Session Code
            </div>
            <div className={styles.inputHolder}>
              <TextInput
                onSubmit={this.onJoin}
                placeholder={'ex: QV7H213G24B9NUIBDCFR'}
                ref={(ref) => { this.input = ref; }}
              />
            </div>
            {isJoining ?
              <Spinner />
              :
              <ButtonLight text={'Join'} onClick={this.onJoin} />
            }
            {error !== '' &&
              <div className={styles.error}>
                {error}
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default SessionStart;
