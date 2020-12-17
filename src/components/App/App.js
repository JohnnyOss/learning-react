import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.scss';
import List from '../List/ListContainer.js';
//import Creator from '../Creator/Creator.js';
import {listData /*settings*/} from '../../data/dataStore';

class App extends React.Component {
  state = {
    lists: this.props.lists || [],
  }

  static propTypes = {
    lists: PropTypes.array,
    title: PropTypes.node,
    subtitle: PropTypes.node,
  }

  static defaultProps = {
    lists: listData.lists,
  }

  // addList(title){
  //   this.setState(state => (
  //     {
  //       lists: [
  //         ...state.lists,
  //         {
  //           key: state.lists.length ? state.lists[state.lists.length - 1].key + 1 : 0,
  //           description: settings.defaultListDescription,
  //           title,
  //           image: this.props.lists[0].image,
  //           columns: [],
  //         },
  //       ],
  //     }
  //   ));
  // }

  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
        {/*<div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)}/>
        </div>*/}
      </main>  
    );
  }
}

export default App;
