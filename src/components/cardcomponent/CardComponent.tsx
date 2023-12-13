import React, {FC} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Card} from 'react-native-paper';
import {DEFAULT_STRINGS} from '../../constants/strings/strings';
import {data} from '../../../types/response';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface IProps {
  item: data;
}

/**
 * @author
 * @function @FlatlistContent
 **/

export const FlatlistContent: FC<IProps> = props => {
  const {item} = props;
  const {LANGUAGE, NAMEHOLDER, FORK, STARS, WATCH} = DEFAULT_STRINGS;
  const {cardView, rowComponent, statContainer, statFont, header} = styles;
  return (
    <Card mode="elevated" style={cardView}>
      <Card.Content>
        <Text style={header}>{`${NAMEHOLDER}: ${item.name}`}</Text>
        <Text style={header}>{`${LANGUAGE}: ${item.language}`}</Text>
        <View style={statContainer}>
          <View style={rowComponent}>
            <AntDesign name="eyeo" />
            <Text style={statFont}>{`${WATCH}: ${item.watchers_count}`}</Text>
          </View>
          <View style={rowComponent}>
            <AntDesign name="fork" />
            <Text style={statFont}> {`${FORK}: ${item.forks}`}</Text>
          </View>
          <View style={rowComponent}>
            <AntDesign name="staro" />
            <Text style={statFont}>{`${STARS}: ${item.stargazers_count}`}</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardView: {
    marginTop: '1.5%',
    width: '95%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  rowComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    alignSelf: 'flex-start',
  },
  statContainer: {
    flexDirection: 'row',
    marginTop: '2.5%',
  },
  statFont: {
    fontSize: 11,
  },
  header: {
    fontSize: 14,
  },
});
