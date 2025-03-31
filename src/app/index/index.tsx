import {
    FlatList,
    Image,
    Text,
    Touchable,
    TouchableOpacity,
    View,
} from "react-native";
import { styles } from "@/styles/index/index";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { Link } from "@/components/link";

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require("@/assets/logo.png")}
                    style={styles.logo}
                />
                <TouchableOpacity>
                    <MaterialIcons
                        name="add"
                        size={32}
                        color={colors.green[300]}
                    />
                </TouchableOpacity>
            </View>
            <Categories />
            <FlatList
                data={["1", "2", "3"]}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Link
                        name="Rocketseat"
                        url="https://www.rocketseat.com.br/"
                        onDetails={() => console.log("Clicou!")}
                    />
                )}
                style={styles.links}
                contentContainerStyle={styles.linksContent}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
