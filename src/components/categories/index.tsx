import { FlatList } from "react-native";
import { Category } from "@/components/category";
import { categories } from "@/utils/categories";
import { style } from "@/styles/categories";

type Props = {
    selected: string;
    onChange: (category: string) => void;
};

export function Categories({ selected, onChange }: Props) {
    return (
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Category
                    name={item.name}
                    icon={item.icon}
                    isSelected={item.name === selected}
                    onPress={() => onChange(item.name)}
                />
            )}
            horizontal
            style={style.container}
            contentContainerStyle={style.content}
        />
    );
}
