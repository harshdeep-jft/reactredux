import React, { useEffect, useState } from 'react';
import {
    Image,
    View,
    Dimensions,
    StyleSheet,
    StatusBar,
    Alert,
    SafeAreaView,
    PixelRatio
} from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';
import { scaleModerate } from '../../assets/scale';
import {
    GoogleSigninButton,
    GoogleSignin,
    statusCodes
} from '@react-native-google-signin/google-signin';
import { web } from '../../credentials.json';

const LoginScreen = ({ navigation }) => {

    const [userInfo, setuserInfo] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState(null);


    const screenSize = Dimensions.get('window');
    const imageSize = {
        width: screenSize.width,
        height: screenSize.height
    }


    useEffect(() => {
        configureGoogleSign();
    });

    const configureGoogleSign = () => {
        GoogleSignin.configure({
            webClientId: '758363728915-h7tgqtuoin0fekvnumhfodr0fi3krcfi.apps.googleusercontent.com',
            offlineAccess: false,
        });
    }

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setuserInfo(userInfo);
            setError(null);
            setIsLoggedIn(true)

        }
        catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                Alert.alert('SignIn Cancelled');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                Alert.alert('SignIn in Progress')
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                Alert.alert('Play Services not available');
            } else {
                Alert.alert('Something went wrong...', error.toString());
                console.log(error);
                setError(error)
            }
        }
    }

    const getCurrentUserInfo = async () => {
        try {
            const userInfo = await GoogleSignin.signInSilently();
            setuserInfo(userInfo);
        }
        catch (error) {
            if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                // when user hasn't signed in yet
                Alert.alert('Please Sign in');
                setIsLoggedIn(false);
            } else {
                Alert.alert('Something else went wrong... ', error.toString());
                isLoggedIn(false);
            }
        }
    }

    const signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            setIsLoggedIn(false)
        } catch (error) {
            Alert.alert('Something else went wrong... ', error.toString());
        }
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={{ flex: 1, paddingVertical: 15 }}>
                <Image blurRadius={1.2} style={{
                    height: PixelRatio.getPixelSizeForLayoutSize(135),
                    width: '100%',

                }}
                    source={require('../../assets/images/signIn.jpg')} />
                <View style={styles.container}>
                    {isLoggedIn === false ? (
                        <Text style={styles.message}>You must sign in!</Text>
                    ) : (
                            <Button onPress={() => signOut()}>Sign out</Button>
                        )}
                    <GoogleSigninButton
                        style={styles.signInButton}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={() => signIn()}
                    />
                </View>

                <View style={styles.userInfoContainer}>
                    {isLoggedIn === true ? (
                        <>
                            <Text style={styles.displayTitle}>
                                Welcome {userInfo.user.name}
                            </Text>
                            <View style={styles.profileImageContainer}>
                                <Image
                                    style={styles.profileImage}
                                    source={{
                                        uri:
                                            userInfo &&
                                            userInfo.user &&
                                            userInfo.user.photo
                                    }}
                                />
                            </View>
                        </>
                    ) : null}
                </View>
            </Layout>
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    signInButton: {
        width: 192,
        height: 48
    },
    statusContainer: {
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    message: {
        fontSize: 20,
        color: 'red'
    },
    userInfoContainer: {
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileImageContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    profileImage: {
        width: 100,
        height: 100
    },
    displayTitle: {
        fontSize: 22,
        color: '#010101'
    }
});

export default LoginScreen;