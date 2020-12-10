import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
    }

    render() {
        return (
        <div className={styles.component}>
            <p>{this.props.title}</p>
        </div>   
        )
    }
}

export default Card;