import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
    state = {
        cards: this.props.cards || [],
        icon: this.props.icon.name,
      }

    static propTypes = {
        title: PropTypes.node.isRequired,
        cards: PropTypes.array,
        icon: PropTypes.node,
        addCard: PropTypes.func,
    }
    static defaultProps = {
        icon: settings.defaultColumnIcon,
    };

    addCard(title){
        this.setState(state => (
            {
                cards: [
                    ...state.cards,
                    {
                    key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
                    title,
                    },
                ]
            }
        ));
    }

    render() {
        return (
        <section className={styles.component}>
            <h3 className={styles.title}>
                <span className={styles.icon}>
                    <Icon name={this.props.icon} />
                </span>
                {this.props.title}
            </h3>
            <div>
            {this.state.cards.map(({key, ...cardsProps}) => (
                <Card key={key} {...cardsProps} />
            ))}
            </div>
            <div className={styles.creator}>
                <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
            </div>
        </section>   

        )
    }
}

export default Column;