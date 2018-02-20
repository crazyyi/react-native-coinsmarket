import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Button, View, ScrollView, Text} from 'react-native';
import FetchCoinData from '../actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {
    componentDidMount() {
        this.props.FetchCoinData();
    }

    renderCoinCards() {
        const {crypto} = this.props;
        return crypto.data.map((coin, index) => 
            <CoinCard
                key={index}
                coin_name={coin.name}
                symbol={coin.symbol}
                price_usd={coin.price_usd}
                percent_change_24h={coin.percent_change_24h}
                percent_change_7d={coin.percent_change_7d}
            />
        )
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {this.renderCoinCards()}
            </ScrollView>
        )
    }
}

const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55,
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        FetchCoinData: FetchCoinData
    }, dispatch)
} 

export default connect(mapStateToProps, mapDispatchToProps)(CryptoContainer);

// export default connect(mapStateToProps, {FetchCoinData})(CryptoContainer);