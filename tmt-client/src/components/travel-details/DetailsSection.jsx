

const DetailsSection = ({item}) => {
  
    return (
        <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-2xl font-semibold">{item.title}</h1>
          
          <p className="text-gray-600 mt-2">
           {item.description}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Key Information</h2>
          <ul className="mt-2 space-y-2">
            <li><strong>Duration:</strong> {item.duration}</li>
           
            <li><strong>Included:</strong> {item.inclusions}</li>
            <li><strong>Excluded:</strong> {item.exclusions}</li>
          </ul>
        </div>
      </div>

    );
};

export default DetailsSection;