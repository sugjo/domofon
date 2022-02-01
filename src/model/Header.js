import React from 'react';
import { Layout } from '@ui-kitten/components';
import { Linking, TouchableOpacity } from 'react-native'
import { styles } from 'res/styles/styles'
import { Logo } from "res/icons";

async function onSite() {
    await Linking.openURL('https://xn----7sbcrbrpqgmpbe0a8l.xn--p1ai/')
}

function Header() {
    return (
        <Layout>
            <TouchableOpacity onPress={onSite}>
                <Logo style={styles.logo}/>
            </TouchableOpacity>
        </Layout>
    )
}

export default Header