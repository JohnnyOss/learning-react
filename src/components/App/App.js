import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.scss';
import List from '../List/List.js';
import Creator from '../Creator/Creator.js';
import {pageContents, listData, settings} from '../../data/dataStore';

class App extends React.Component {
  state = {
    lists: this.props.lists || [],
  }

  static propTypes = {
    lists: PropTypes.array,
  }

  static defaultProps = {
    lists: listData.lists,
  }

  addList(title){
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length - 1].key + 1 : 0,
            description: settings.defaultListDescription,
            title,
            image: this.props.lists[0].image,
            columns: [],
          },
        ],
      }
    ));
  }

  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        {this.state.lists.map(({key, ...listsProps}) => (
          <List key={key} {...listsProps} />
        ))}
        <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)}/>
        </div>
      </main>  
    );
  }
}

export default App;
