/**
 * Created by student on 2/13/17.
 */
import {StyleSheet, PixelRatio} from 'react-native';

const styles = StyleSheet.create({
    centering: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    errorContainer: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40
    },
    largeIcon: {
        fontSize: 50
    },
    loadingText: {
        fontSize: 18
    },
    message: {
        textAlign: 'center',
        fontSize: 14
    },
    messageTitle: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold'
    }
});
export default styles;