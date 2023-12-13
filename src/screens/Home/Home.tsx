import React, {FC, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text, Keyboard} from 'react-native';
import {FormInput} from '../../components';
import {DEFAULT_STRINGS} from '../../constants/strings/strings';
import {store} from '../../store';
import {
  fetchUserRepositories,
  resetGithub,
  selectGithubRepository,
} from '../../store/slice/users/users';
import {useSelector} from 'react-redux';
import {data} from '../../../types/response';
import {ActivityIndicator} from 'react-native-paper';
import {FlatlistContent} from '../../components/cardcomponent/CardComponent';

interface IProps {}

/**
 * @author Ashok karki
 * @function @Home
 **/

const Home: FC<IProps> = () => {
  const {container, flatListContainer, content, emptyCard, emptyMessage} =
    styles;
  const {NOPACKAGEERROR} = DEFAULT_STRINGS;
  const [searchText, setSearchText] = React.useState<string>('');

  const searchRepo = (userName: string) => {
    userName.length > 1
      ? store.dispatch(fetchUserRepositories(userName))
      : Keyboard.dismiss();
  };

  const resetSearchPrameter = () => {
    setSearchText('');
    store.dispatch(resetGithub());
  };

  useEffect(() => {
    searchRepo('facebook');
  }, []);

  const userInfo = useSelector(selectGithubRepository) as any;

  const renderItem = ({item}: {item: data}) => {
    return <FlatlistContent item={item} />;
  };
  return (
    <View style={container}>
      <FormInput
        value={searchText}
        placeholder={DEFAULT_STRINGS.PLACEHOLDER}
        onChange={value => {
          setSearchText(value);
        }}
        submitEditing={() => {
          searchRepo(searchText);
        }}
        reset={() => {
          resetSearchPrameter();
        }}
      />
      <FlatList
        bounces={false}
        bouncesZoom={false}
        showsVerticalScrollIndicator={false}
        data={userInfo.githubRepository}
        renderItem={renderItem}
        style={content}
        scrollEventThrottle={16}
        contentContainerStyle={flatListContainer}
        // eslint-disable-next-line react/no-unstable-nested-components
        ListEmptyComponent={() => {
          return (
            <View style={emptyCard}>
              {userInfo.loading ? (
                <View>
                  <ActivityIndicator size={50} />
                </View>
              ) : (
                <View>
                  <Text style={emptyMessage}> {`${NOPACKAGEERROR}`} </Text>
                </View>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  cardView: {
    marginBottom: '1.5%',
    backgroundColor: '#fafafa',
  },
  flatListContainer: {
    width: '100%',
    paddingBottom: '1.5%',
  },
  content: {width: '95%', flex: 1},
  emptyCard: {
    justifyContent: 'center',
    marginTop: '15%',
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#aaaaaa',
  },
});

export default Home;
