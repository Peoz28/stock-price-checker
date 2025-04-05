function QuoteMachine() {
    const [quote, setQuote] = React.useState('');
    const [author, setAuthor] = React.useState('');

    const getNewQuote = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            setQuote(data.content);
            setAuthor(data.author);
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    };

    React.useEffect(() => {
        getNewQuote();
    }, []);

    const tweetQuote = () => {
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${quote}" - ${author}`
        )}`;
        window.open(tweetUrl, '_blank');
    };

    return (
        <div id="quote-box">
            <div id="text">{quote}</div>
            <div id="author">- {author}</div>
            <div className="buttons">
                <button id="new-quote" onClick={getNewQuote}>
                    New Quote
                </button>
                <a
                    id="tweet-quote"
                    href="https://twitter.com/intent/tweet"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={tweetQuote}
                >
                    Tweet Quote
                </a>
            </div>
        </div>
    );
}

ReactDOM.render(<QuoteMachine />, document.getElementById('root')); 