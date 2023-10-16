import { View, TextInput } from "react-native";

import { styles } from "./Pagination.styles";
import AppButton from "../AppButton/AppButton";

interface CustomTextInputProps extends React.ComponentProps<typeof TextInput> {
  pageSize: number;
  page: number;
  totalCount: number;
  onPagePress(page: number): void;
}

const pagesToShow = 5;
const pagesBeforeActive = 2;

const Pagination = (props: CustomTextInputProps) => {
  const { pageSize, page, totalCount, onPagePress } = props;

  const totalPages = Math.ceil(totalCount / pageSize);

  const pages = [];
  const firstPage = Math.max(0, page - pagesBeforeActive);

  for (let i = 0; i < Math.min(pagesToShow, totalPages - page + 1); i++) {
    pages.push(firstPage + i);
  }

  return (
    <View style={styles.container}>
      {page > 0 && (
        <View style={styles.pageButtonContainer}>
          <AppButton
            text="<"
            style={styles.pageButton}
            onPress={() => onPagePress(page - 1)}
          />
        </View>
      )}
      {pages.map((i) => (
        <View style={styles.pageButtonContainer} key={`page-${i}`}>
          <AppButton
            style={i == page ? styles.activeButton : styles.pageButton}
            text={`${i + 1}`}
            onPress={() => onPagePress(i)}
          />
        </View>
      ))}

      {page < totalPages - 1 && (
        <View style={styles.pageButtonContainer}>
          <AppButton
            text=">"
            style={styles.pageButton}
            onPress={() => onPagePress(page + 1)}
          />
        </View>
      )}
    </View>
  );
};

export default Pagination;
