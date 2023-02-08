import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function TabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.navbar}>
            <Text style={{color: isFocused ? 'orange' : 'white'}}>
              <Text style={styles.title}>{label}</Text>
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
export default TabBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flexDirection: 'row',
  },
  navbar: {
    flex: 1,
    borderColor: 'red',
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
