import React from "react";
import { FlatList } from "react-native-gesture-handler";

export const ListDefault: React.FC = ({ children }) => {
  return (
    <FlatList
      data={[{}]}
      keyExtractor={() => "dummy"}
      showsVerticalScrollIndicator={false}
      renderItem={() => <>{children}</>}
    />
  );
};
