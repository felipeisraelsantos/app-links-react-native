import { styles } from "@/styles/category/styles";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";

export function Category(){
    return (
        <Pressable style={styles.container} >
            <MaterialIcons
                name="code"
                size={16}
                color={colors.gray[400]}
            />
            <Text style={styles.name} >Projetos</Text>
        </Pressable>
    )
}