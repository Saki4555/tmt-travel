const DetailsSection = ({ item }) => {
  return (
    <div className="mt-12 grid md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-2xl font-semibold">{item.title}</h1>
        <p className="text-gray-600 mt-2">{item.description}</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Key Information</h2>
        <ul className="mt-2 space-y-2">
          <li>
            <strong>Duration:</strong> {item.duration}
          </li>
          <li>
            <strong>Included:</strong>
            <ul className="list-disc list-inside mt-1 ml-4">
              {item.inclusions
                ?.filter((inc) => inc && inc.trim() !== "")
                .map((inc, index) => (
                  <li key={index}>{inc}</li>
                ))}
            </ul>
          </li>
          <li>
            <strong>Excluded:</strong>
            <ul className="list-disc list-inside mt-1 ml-4">
              {item.exclusions
                ?.filter((exc) => exc && exc.trim() !== "")
                .map((exc, index) => (
                  <li key={index}>{exc}</li>
                ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailsSection;
