
### 1. **Memoization Techniques**:

Memoization ka matlab hai, kisi function ke result ko store karna taaki agar wo function dobara call ho to usi result ko reuse kiya jaa sake, instead of recalculating it again. React mein hum `React.memo` ya `useMemo` ka use karte hain taaki unnecessary re-renders avoid ho sake.

**Example**:

```jsx
const MyComponent = React.memo((props) => {
  // Component code
});
```

Isse agar same props ke saath component dobara render hota hai, to React usko dobara render nahi karega, performance improve hoti hai.

### 2. **Lazy Loading and Suspense**:

Lazy loading ka matlab hai ki hum apne components ya modules ko tab load karte hain jab wo actually zaroorat ho, na ki initially load karein. Isse app ka initial load time kam ho jata hai.

**Suspense** ek React feature hai jisme hum `React.lazy()` ko use karke dynamically import karte hain components ko aur jab tak wo load na ho, ek loading state ya placeholder dikha sakte hain.

**Example**:

```jsx
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </React.Suspense>
  );
}
```

Yahaan `OtherComponent` ko lazy load kiya gaya hai, aur jab tak wo load ho raha hai, user ko "Loading..." dikhai dega.

### 3. **React Profiler and Debugging**:

React Profiler ek tool hai jo aapko React application ke performance ko analyze karne mein help karta hai. Isse aap dekh sakte ho ki kaunse components zyada render ho rahe hain aur kyun.

React Developer Tools mein Profiler tab ka use karke aap samajh sakte ho ki components kab aur kyun re-render ho rahe hain, aur kis component ne render mein kitna time liya.

**Debugging** ke liye, aap console logs, breakpoints, aur React DevTools ka use kar sakte hain taaki aap easily issues track kar sakein.

### 4. **Avoiding Re-renders with Pure Components**:

Pure Components aise components hote hain jo sirf tab render hote hain jab unke props ya state mein koi change hota hai. Isse unnecessary re-renders se bachaya ja sakta hai.

Agar aapke component ka state ya props constant hai, to `PureComponent` ya `React.memo` ka use karke performance optimize ki ja sakti hai.

**Example**:

```jsx
class MyPureComponent extends React.PureComponent {
  render() {
    return <div>{this.props.text}</div>;
  }
}
```

`PureComponent` internally `shouldComponentUpdate` ka implementation karta hai jo ki props aur state mein changes check karta hai. Agar koi change nahi hota, to component render nahi hota.

---

To sum it up:

* **Memoization** se unnecessary recalculation se bachna.
* **Lazy loading aur Suspense** se components ko tab load karna jab zaroorat ho, initial load ko fast karne ke liye.
* **Profiler aur Debugging** se aap apne app ke performance ko analyze kar sakte ho aur issues fix kar sakte ho.
* **Pure Components** se unnecessary re-renders avoid karne mein madad milti hai.


