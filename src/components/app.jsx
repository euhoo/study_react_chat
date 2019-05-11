import React from 'react';
import Channels from './channels';
import NewMessagesForm from './newMessagesForm';
import ChatField from './chatField';
import NewChannelsForm from './newChannelsForm';
import appContext from '../utils/appContext';

class App extends React.Component {
  static contextType = appContext;

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <br />
            <NewChannelsForm />
            <Channels />
            <br />
          </div>
          <div className="col-sm-9">
            <br />
            <ChatField />
            <NewMessagesForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
