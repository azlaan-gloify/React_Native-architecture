import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './Styles';

const Button = ({ title, onPress, style }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};