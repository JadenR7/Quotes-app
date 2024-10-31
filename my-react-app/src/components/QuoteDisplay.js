import React from "react";

function QuoteDisplay({currentQuote, currentColor}) {
    return (
        <div className={`${currentColor} p-6 rounded-lg shadow-lg`}>
            <p className="text-2xl font-semibold text-gray-700">"{currentQuote}"</p>
        </div>
    )
}

export default QuoteDisplay;