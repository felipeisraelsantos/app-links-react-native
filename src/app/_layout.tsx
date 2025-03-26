import { colors } from "@/styles/colors";
import { Stack } from "expo-router";

export default function Layout() {

    const backgroundColor = colors.gray[950]

    return <Stack
        screenOptions={{
            headerShown: false, // configura��o para que a rota n�o aparec�a no cabe�alho
            contentStyle: {
                backgroundColor
            }
        }}
    />
}