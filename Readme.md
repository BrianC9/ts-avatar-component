# Avatar Typescript component

The aim with this workshop is to develop a Typescript React component following good practices like **Documentation** and **TDD**

## The problem we are solving

Building an `<Avatar/>` component similar to the Github one.

```tsx
<Avatar url='' />
```

## Requirements

- Should receive an optional URL for the avatar
  - Should use the default avatar photo if none is provided
- Should ckech if the avatar URL is valid
  - Should use the default avatar photo if the URL is invalid
