import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import AppText from 'components/AppText/AppText';
import {icArrow} from 'src/assets/img';

type Props = {
  page: number;
  onPageChange: (page: number) => void;
  totalPages: number;
};

const Pagination: React.FC<Props> = ({onPageChange, page, totalPages}) => {
  const [pageInput, setPageInput] = React.useState(page || 1);

  const handlePrevious = () => {
    if (page) {
      if (page > 1) {
        onPageChange(pageInput - 1);

        setPageInput(prev => prev - 1);
      }
    }
  };
  const handleNext = () => {
    if (page) {
      if (page < totalPages) {
        onPageChange(pageInput + 1);

        setPageInput(prev => prev + 1);
      }
    }
  };

  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={[styles.icArrow, styles.left]}
        onPress={handlePrevious}>
        <Image source={icArrow} />
      </TouchableOpacity>
      <View style={styles.content}>
        <TextInput
          keyboardType="numeric"
          value={pageInput.toString()}
          style={styles.input}
          onChangeText={text => {
            const number = Number(text);
            if (number < 1) {
              setPageInput(1);
            } else if (number > totalPages) {
              setPageInput(totalPages);
            } else {
              setPageInput(number);
            }
          }}
          onSubmitEditing={() => onPageChange(pageInput)}
        />
        <AppText style={styles.totalPage}>of {totalPages}</AppText>
      </View>
      <TouchableOpacity style={styles.icArrow} onPress={handleNext}>
        <Image source={icArrow} />
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;
