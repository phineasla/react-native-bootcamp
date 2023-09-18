# 2. Hooks and API call

## Key takeaway

- React hooks:
  - [useState](https://react.dev/reference/react/useState)
  - [useEffect](https://react.dev/reference/react/useEffect)
  - [useMemo](https://react.dev/reference/react/useMemo)
  - [useCallback](https://react.dev/reference/react/useCallback)
- React Context API
- Call asynchronous functions
- Manage your configs and secrets

## API

[Today's weather](https://openweathermap.org/current): `https://api.openweathermap.org/data/2.5/weather`

- `appid`
- `q` city name

[5 days forecast](https://openweathermap.org/forecast5): `https://api.openweathermap.org/data/2.5/forecast`

- `appid`
- `q` city name

Example URL: https://api.openweathermap.org/data/2.5/weather?appid=YOUR_API_KEY&q=vietnam

## Hooks

React hooks are functions whose name starts with "use" and may call other hooks. Always use hooks at the top level of your React function, before any early returns. Don’t call Hooks inside loops, conditions, or nested functions. If you want to call hooks conditionally, you should refactor your code, such as moving it outside, or breakdown your component:

```tsx
function Bad(props: {customTheme: boolean}) {
  if (props.customTheme) {
    // 🔴 Bad: inside a condition
    const theme = useContext(CustomThemeContext);
  }
  // ...
}

function Good(props: {customTheme: boolean}) {
  if (props.customTheme) {
    return <CustomTheme />;
  }
  // ...
}

function CustomTheme() {
  // ✅ Good: break down component, ensure hooks are at top-level
  const theme = useContext(CustomThemeContext);
  // ...
}
```

Reference: [Rules of Hooks](https://react.dev/warnings/invalid-hook-call-warning)

## useState

### Getting previous value incorrectly

Sometime we use `setState` with current value as the input, such as increment a number. Using incorrectly, this can lead to racing condition:

```tsx
function Bad() {
  const [counter, setCounter] = useState(0);
  const asyncIncrement = () => {
    // 🔴 Bad: setCounter(counter + 1)
    // Simulate slow operation, such as API calling
    setTimeout(() => setCounter(counter + 1), 1000);
  };
  return (
    <Button onPress={asyncIncrement}>Flash Flash Hundred Yard Dash</Button>
  );
}

function Good() {
  const [counter, setCounter] = useState(0);
  const asyncIncrement = () => {
    // ✅ Good: setCounter(prev => prev + 1)
    // Simulate slow operation, such as API calling
    setTimeout(() => setCounter(prev => prev + 1), 1000);
  };
  return (
    <Button onPress={asyncIncrement}>Flash Flash Hundred Yard Dash</Button>
  );
}
```

### Create new state instead of mutating the current one

`useState` use shallow comparison (compare by reference, not values), if you mutate current state, React can't detect the change and won't re-render. If this is what you want, consider using `useRef`

```tsx
function Bad() {
  const [userInfo, setUserInfo] = useState({location: Japan});
  const handleChange = (text: string) => {
    // 🔴 Bad: prev['name'] = text;
    setUserInfo(prev => {
      prev['name'] = text;
      return prev;
    });
  };
  return (
    <>
      <TextInput onChangeText={handleChange} placeholder="Kimi no Na wa." />
      <Text>{JSON.stringify(userInfo)}</Text>
    </>
  );
}

function Good() {
  const [userInfo, setUserInfo] = useState({});
  const handleChange = (text: string) => {
    // ✅ Good: create new object using spread syntax
    setUserInfo(prev => {
      return {...prev, name: text};
    });
  };
  return (
    <>
      <TextInput onChangeText={handleChange} placeholder="Your Name." />
      <Text>{JSON.stringify(userInfo)}</Text>
    </>
  );
}
```

## useEffect

### Add useState dependency to prevent infinite loop

By default `useEffect` will always run after render. Setting the state causes re-render which means we get an infinite loop: (1) useEffect --> (2) setting state --> (3) render --> (1) --> (2) --> ...

```tsx
function Bad() {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    // ...
    setUserInfo({name: 'Allen Du'});
  });
  return <Text>Name {userInfo.name}</Text>;
}

function Good() {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    // ...
    setUserInfo({name: 'Allen Du'});
    // ✅ Good: add useState dependency
  }, [userInfo]);
  return <Text>Name {userInfo.name}</Text>;
}
```

### Be careful with non-primitive dependencies

Array and object are compare by reference, therefore, you should check if non-primitive dependencies get recreated in each render

## Exercise

1. Any weather app should have the capabuility to show forecast around the world. Utilize hooks to store user input text, when the user press "Search", the app should call "/forecast" endpoint and display relevant forecast data
1. Create header component that will show today's weather, using the "/weather" endpoint
1. Show an popup modal when location not found or internet connection error. Hint: You can use [react-native-modal](https://github.com/react-native-modal/react-native-modal)
