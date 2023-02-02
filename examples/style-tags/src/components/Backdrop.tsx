function Backdrop() {
  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 1,
        inset: 0,
        backgroundColor: 'black',
        opacity: 0.5,
      }}
    />
  );
}

export { Backdrop };
