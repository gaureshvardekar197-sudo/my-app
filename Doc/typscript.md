### 1. **Setting up React + TypeScript**

React + TypeScript setup means configuring a React app with TypeScript. Using `create-react-app`, we can create a project with a TypeScript template.

Example command:

```bash
npx create-react-app my-app --template typescript
```

This initializes your project with TypeScript support.

### 2. **Typing Props and State**

Typing props and state in React components is a major TypeScript feature. It ensures that data passed to components has the correct type.

#### Example:

```tsx
type MyComponentProps = {
    name: string;
    age: number;
    phoneNo: string;
};

const MyComponent: React.FC<MyComponentProps> = ({ name, age }) => {
    return <div>{name} is {age} years old.</div>;
};
```

Here, `name` is typed as `string` and `age` as `number`.

Typing state is equally important:

```tsx
const [count, setCount] = useState<number>(0);
```

Here, `count` is typed as `number`.

### 3. **Interfaces and Type Aliases**

TypeScript provides `interfaces` and `type aliases` to define complex types.

* **Interface**: Defines the structure of an object.

    ```tsx
    interface Person {
        name: string;
        age: number;
    }
    ```

* **Type Alias**: Also defines types but offers more flexibility (union types, intersection types, etc.).

    ```tsx
    type Person = {
        name: string;
        age: number;
    };
    ```

### 4. **Generics and Custom Hooks with TypeScript**

Generics provide flexible, reusable, and type-safe functions, classes, and components.

#### Example of Generics:

```tsx
function identity<T>(arg: T): T {
    return arg;
}
```

`T` is a placeholder representing any type.

#### Custom Hooks with TypeScript:

```tsx
function useCounter(): [number, () => void] {
    const [count, setCount] = useState(0);
    
    const increment = () => setCount(count + 1);

    return [count, increment];
}
```

This hook returns a tuple: the first element is `number`, the second is a function.

---

