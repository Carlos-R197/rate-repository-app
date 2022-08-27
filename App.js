import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/components/Main";
import { NativeRouter } from 'react-native-router'

export default function App() {
	return (
		<NativeRouter>
			<Main />
		</NativeRouter>
	)
}
