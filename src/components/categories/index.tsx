import { FlatList } from "react-native";
import { Category } from "@/components/category";
import { categories } from "@/utils/categories";
import { style } from "@/styles/categories/style";

export function Categories() {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category name={item.name} isSelected={false} icon={item.icon} />
      )}
      horizontal
      style = {style.container}
      contentContainerStyle = { style.content}
    />
  );
}
