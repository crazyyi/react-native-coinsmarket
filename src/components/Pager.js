import React, {Component} from 'react';
import { Text, View } from 'react-native';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import {Provider} from 'react-redux';

class Pager extends Component {
    renderDotIndicator() {
        return (
            <PagerDotIndicator pageCount={3} />
        );
    }

    render() {
        const {key, selectedStock, watchlistResult} = this.state;

        return (
            <View style={styles.detailsStyle}>
                <IndicatorViewPager
                    style={styles.viewPager}
                    indicator={this.renderDotIndicator()}>
                    <View style={styles.pageStyle} key="1">
                        <DetailPage />
                    </View>
                    <View style={styles.pageStyle} key="2">
                        <ChartPage />
                    </View>
                    <View style={styles.pageStyle} key="3">
                        <NewsPage />
                    </View>
                </IndicatorViewPager>
            </View>
        )
    }
}

const styles = {
    detailsStyle: {
        flex: 5,
        backgroundColor: '#ddc020',
        marginTop: 30,
        width: '80%',
        justifyContent: 'space-between',
    },
    viewPager: {
        flex: 1,
    },
    pageStyle: {
        alignItems: 'center',
        padding: 20
    }
}

export default Pager;