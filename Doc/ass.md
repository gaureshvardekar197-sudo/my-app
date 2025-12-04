jata hai. Aayiye, in advanced concepts ko samjhte hain:

### 1. **Code Splitting and Lazy Loading**

**Code Splitting** ka matlab hai apne application ke code ko chhote-chhote hisson mein divide karna, taaki initially pure code ko load na karna pade. Yeh app ki performance ko improve karta hai.

**Lazy Loading** ek technique hai, jisme hum apne code ko tab load karte hain jab uski zarurat ho, na ki app ke initial load par. React mein, `React.lazy()` aur `Suspense` ka use karke hum lazy loading achieve kar sakte hain.

Example:

```javascript
const MyComponent = React.lazy(() => import('./MyComponent'));

<Suspense fallback={<div>Loading...</div>}>
    <MyComponent />
</Suspense>
```

### 2. **Error Boundaries and Suspense**

**Error Boundaries** ek tarah ka higher-order component hota hai jo React application mein errors ko handle karta hai. Agar koi error hoti hai, toh yeh error ko gracefully handle karta hai aur UI ko crash hone se bachata hai.

**Suspense** ek feature hai jo React ko batata hai ki kisi component ko load karne mein time lag sakta hai. Jab tak woh component load nahi hota, `Suspense` ek fallback UI dikhata hai.


Example of Error Boundary:

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

### 3. **Portals and Fragments**

**Portals** React ka ek feature hai jisme hum kisi component ko ek different part of the DOM mein render kar sakte hain. Yeh feature especially modals, tooltips, etc. ke liye useful hota hai.

Example:

```javascript
ReactDOM.createPortal(
  <div>Modal Content</div>,
  document.getElementById('modal-root')
);
```

**Fragments** ka use hum React components ko group karne ke liye karte hain bina extra DOM elements create kiye. Yeh ek wrapper component jaisa hota hai, lekin yeh unnecessary extra nodes add nahi karta.

Example:

```javascript
<>
  <div>Content 1</div>
  <div>Content 2</div>
</>
```

### 4. **Higher Order Components (HOC)**

**Higher Order Components** ek function hota hai jo ek component ko input ke roop mein leta hai aur us component ko wrap karke ek naya component return karta hai. HOCs ka use code reusability ke liye kiya jata hai.

Example:

```javascript
const withUser = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return <WrappedComponent user="John Doe" {...this.props} />;
    }
  };
};
```

### 5. **Render Props Pattern**

**Render Props** ek design pattern hai jisme ek component apne children ko ek function ke roop mein pass karta hai, jisme component ka internal state ya behavior exposed hota hai. Isse hum kisi bhi component ko dynamically customize kar sakte hain.

Example:

```javascript
class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({ x: event.clientX, y: event.clientY });
  };

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

// Usage
<MouseTracker render={({ x, y }) => <h1>Mouse position: ({x}, {y})</h1>} />
```

