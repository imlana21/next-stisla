export default function Test({className, children}:any):JSX.Element {
  return (
    <div className={ className }> { children } </div>
  );
}