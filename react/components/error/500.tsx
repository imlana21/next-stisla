export default function Error500Component() {
  return (
    <div v-if="error.statusCode === 500" className="page-error">
      <div className="page-inner">
        <h1>500</h1>
        <div className="page-description">Whoopps, something went wrong.</div>
      </div>
    </div>
  );
}