import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import CheckBox from "react-native-check-box";
import { Button, Card } from "react-native-paper";

const getCurrentDate = () => {
    const date = new Date();
    return date.toISOString().split("T")[0];
};

const DailyTracker = () => {
    const [data, setData] = useState({
        ai_ml: false,
        healthy_food: false,
        no_drinks: false,
        no_sugar: false,
        workout: false,
        hydration: false,
        sleep_quality: false,
        networking: false,
    });

    const toggleCheckbox = (field) => {
        setData((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>🚀 Daily Tracker</Text>
            <Text style={styles.subtitle}>{getCurrentDate()}</Text>
            <Card style={styles.card}>
                {[
                    { label: "🚀 AI/ML", field: "ai_ml", description: "What you learned/did today" },
                    { label: "🥗 Healthy Food", field: "healthy_food", description: "Meals consumed" },
                    { label: "❌ No Drinks", field: "no_drinks", description: "Avoided alcohol/sugary drinks" },
                    { label: "🍬 No Sugar", field: "no_sugar", description: "Stayed sugar-free" },
                    { label: "🏋️ Workout", field: "workout", description: "Exercise and duration" },
                    { label: "💧 Hydration", field: "hydration", description: "Liters of water consumed" },
                    { label: "😴 Sleep Quality", field: "sleep_quality", description: "Hours slept & rest quality" },
                    { label: "🤝 Networking", field: "networking", description: "Connections & interactions" },
                ].map((item, index) => (
                    <View key={index} style={styles.checkboxContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.checkboxLabel}>{item.label}</Text>
                            <Text style={styles.checkboxDescription}>{item.description}</Text>
                        </View>
                        <CheckBox
                            isChecked={data[item.field]}
                            onClick={() => toggleCheckbox(item.field)}
                            checkBoxColor={data[item.field] ? "#4CAF50" : "#F44336"}
                            style={styles.checkbox}
                        />
                    </View>
                ))}
            </Card>

            <Button mode="contained" style={styles.button} onPress={() => console.log(data)}>
                ✅ Save Progress
            </Button>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#FAFAFA",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 5,
        color: "#FF5733",
        textTransform: "uppercase",
    },
    subtitle: {
        fontSize: 18,
        textAlign: "center",
        color: "#333",
        marginBottom: 20,
        fontStyle: "italic",
    },
    card: {
        padding: 20,
        borderRadius: 15,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: "#F5F5F5",
    },
    textContainer: {
        flex: 1,
        paddingRight: 10,
    },
    checkboxLabel: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#212121",
    },
    checkboxDescription: {
        fontSize: 14,
        color: "#616161",
        marginLeft: 25
    },
    checkbox: {
        transform: [{ scale: 1.2 }],
    },
    button: {
        marginVertical: 20,
        borderRadius: 15,
        backgroundColor: "#3F51B5",
        paddingVertical: 12,
    },
});

export default DailyTracker;