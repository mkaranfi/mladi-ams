/**
 * Created by Mile on 2/13/2017.
 */
import React, {Component} from 'react';
import {View, Text, Linking, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
class InformationTab extends Component {
    _onPress(url) {
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    }

    render() {
        return <ScrollView style={styles.informationContainer}>
            <Text style={styles.informationTitle}>Агенција за млади и спорт</Text>
            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                <Image style={{width: 216, height: 90, justifyContent: 'center'}}
                       source={{uri: 'http://mladi.ams.mk/images/logo-ams.jpg'}}/></View>
            <Text style={styles.informationHeading}>{"\n"}КОНТАКТ</Text>
            <Text style={{color: '#333'}}>Ул. Франклин Рузвелт бр. 34, 1000 Скопје</Text>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                alignItems: 'flex-start'
            }}>
                <Icon name='facebook-official' style={{color: '#3b5998', fontSize: 22}}
                      onPress={() => this._onPress('https://www.facebook.com/mladi.ams.mk/')}/>
                <Text> </Text>
                <Icon name='youtube-play'
                      style={{color: '#c4302b', fontSize: 22, flexWrap: 'wrap'}}
                      onPress={() => this._onPress('https://www.youtube.com/channel/UCo5rT9N_h65BSDn4ImeP-Pw')}/>
                <Text style={{color: '#333'}}> тел. 02/3126-2700</Text>
            </View>
            <Text onPress={() => this._onPress('http://ams.gov.mk/')} style={styles.link}>http://ams.gov.mk/</Text>
            <Text style={styles.informationHeading}>{"\n"}ДОКУМЕНТИ</Text>
            <Text style={styles.link}
                  onPress={() => this._onPress('http://mladi.ams.mk/uploads/docs/%D0%9D%D0%B0%D' +
                      '1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D0%BD%D0%B0%20%D1%81%D1%82%D1%80%D0%B0%D1%82%' +
                      'D0%B5%D0%B3%D0%B8%D1%98%D0%B0%20%D0%B7%D0%B0%20%D0%BC%D0%BB%D0%B0%D0%B4%D0%B8%202016-2025.pdf')}>
                Национална стратегија за млади 2016-2025</Text>
            <Text style={styles.link}
                  onPress={() => this._onPress('http://mladi.ams.mk/uploads/docs/Strategjia%' +
                      '20nacionale%20per%20te%20rinj%202016-2025.pdf')}>Strategjia nacionale per te rinj
                2016-2025</Text>
            <Text style={styles.link}
                  onPress={() => this._onPress('http://mladi.ams.mk/uploads/docs/Nat' +
                      'ional%20Youth%20Strategy%202016-2025.pdf')}>National Youth Strategy 2016-2025</Text>
            <Text style={styles.informationHeading}>{"\n"}КОРИСНИ ЛИНКОВИ</Text>
            <Text style={styles.link} onPress={() => this._onPress('http://www.vlada.mk/')}>Влада на Република
                Македонија</Text>
            <Text style={styles.link} onPress={() => this._onPress('http://mon.gov.mk/')}>Министерство за образование и
                наука</Text>
            <Text style={styles.link} onPress={() => this._onPress('http://www.mio.gov.mk/')}>Министерство за
                Информатичко Општество</Text>
            <Text style={styles.link} onPress={() => this._onPress('http://na.org.mk')}>Национална агенција
                за европски образовни програми и мобилност</Text>
            <Text style={styles.link} onPress={() => this._onPress('http://bro.gov.mk/')}>Биро за развој на
                образованието</Text>
            <Text style={styles.link} onPress={() => this._onPress('http://www.dic.edu.mk/')}>Државен испитен
                центар</Text>
            <Text style={styles.link} onPress={() => this._onPress('http://matura.gov.mk/')}>Државна матура</Text>
            <Text style={styles.link} onPress={() => this._onPress('http://plagijati.mon.gov.mk/')}>Плагијати</Text>
            <Text style={styles.link} onPress={() => this._onPress('http://konkursi.mon.gov.mk/')}>Конкурси</Text>
            <Text style={[styles.link, {marginBottom: 30}]}
                  onPress={() => this._onPress('http://www.smestuvanje.mon.gov.mk/apliciraj/')}>Сместување
                во домови</Text>
        </ScrollView>
    }
}
export default InformationTab;