function ResultComponent(props) {

    function getColor(text){
        const green = [
            "Very narrow",
            "Limited/Narrow",
            "Very low",
            "Low",
            "Accessable"
        ]
        const yellow = [
            "Substantial",
            "Moderate",
            "Medium",
            "Some concerns",
            "Significant"
        ]
        const red = [
            "Broad/wide Ranging",
            "High",
            "Extreme",
            "Major concerns"
        ]

        if (green.includes(text)) return "green";
        if (yellow.includes(text)) return "yellow";
        if (red.includes(text)) return "red";

        return "slate"
    }

    return ( 
        <>
          <div className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">{props.name}: <span className={"text-" + getColor(props.result) + "-700"}>{props.result}</span> </h5>
                </div>
        </>
     );
}

export default ResultComponent;